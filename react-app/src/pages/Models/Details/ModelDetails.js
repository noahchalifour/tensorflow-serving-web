import React, {
    useState,
    useEffect
} from 'react';
import {
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap';
import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';
import {
    faSyncAlt
} from '@fortawesome/free-solid-svg-icons';
import {
    Redirect
} from 'react-router-dom';
import axios from 'axios';

import Wrapper from '../../../hoc/Wrapper';
import HeaderBar from '../../../components/HeaderBar/HeaderBar';
import Loading from '../../../components/Loading/Loading';
import Card from '../../../components/Card/Card';
import ModelVersionsTable from '../../../components/ModelVersionsTable/ModelVersionsTable';
import AddModelVersionModal from '../../../components/AddModelVersionModal/AddModelVersionModal';
import ConfirmDeleteModelModal from '../../../components/ConfirmDeleteModelModal/ConfirmDeleteModelModal';

import styles from './ModelDetails.module.css';

function ModelDetails(props) {

    const [modelStatus, setModelStatus] = useState({
        data: null,
        loading: true
    });
    const [modelMetadata, setModelMetadata] = useState({
        data: null,
        loading: true
    });

    const [addModelVersionModalVisible, setAddModelVersionModalVisible] = useState(false);
    const [confirmDeleteModelModalVisible, setConfirmDeleteModelModalVisible] = useState(false);
    const [modelDeleted, setModelDeleted] = useState(false);

    const name = props.match.params.name;

    function loadModelStatus() {

        setModelStatus({
            data: null,
            loading: true
        });

        axios.get(`/api/models/${name}`)
            .then(
                (response) => {
                    setModelStatus({
                        data: response.data.model_version_status,
                        loading: false
                    })
                },
                (error) => {
                    setModelStatus({
                        error: error.response.data,
                        loading: false
                    })
                }
            )

    }

    function loadModelMetadata() {

        setModelMetadata({
            data: null,
            loading: true
        });

        axios.get(`/api/models/${name}/metadata`)
            .then(
                (response) => {
                    setModelMetadata({
                        data: response.data,
                        loading: false
                    })
                },
                (error) => {
                    setModelMetadata({
                        error: error.response.data,
                        loading: false
                    })
                }
            )

    }

    function loadModel() {

        loadModelStatus();
        loadModelMetadata();

    }

    useEffect(() => {

        loadModel();

    }, []);

    const loading = [modelStatus, modelMetadata].some(item => item.loading);
    const error = modelStatus.error || modelMetadata.error;

    if (modelDeleted) {
        return <Redirect
            to={'/models'}
        />
    }

    return (
        loading ? (
            <Loading
                text='Loading model...'
            />
        ) : error ? (
            <HeaderBar>
                <p className='text-center'>
                    {error.messageText || 'An unexpected error occurred loading model.'}
                </p>
            </HeaderBar>
        ) : (
            <Wrapper>
                <AddModelVersionModal
                    show={addModelVersionModalVisible}
                    onHide={() => setAddModelVersionModalVisible(false)}
                    modelName={name}
                />
                <ConfirmDeleteModelModal
                    show={confirmDeleteModelModalVisible}
                    onHide={() => setConfirmDeleteModelModalVisible(false)}
                    modelName={name}
                    onDelete={() => setModelDeleted(true)}
                />
                <HeaderBar
                    header={`${name}`}
                >
                    <Button size='sm' variant='secondary' onClick={() => setAddModelVersionModalVisible(true)}>+ Add Version</Button>
                    <Button size='sm' variant='secondary' onClick={() => setConfirmDeleteModelModalVisible(true)}>Delete</Button>
                    <FontAwesomeIcon onClick={() => loadModel()} icon={faSyncAlt} className={styles.refresh} />
                </HeaderBar>
                <p>Showing data for latest model available version: {modelMetadata.data.model_spec.version}</p>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type='text'
                                value={name}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Signature</Form.Label>
                            <Form.Control
                                type='text'
                                value={modelMetadata.data.model_spec.signature_name}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type='text'
                                value={modelStatus.data.filter(modelVersion => modelVersion.version === modelMetadata.data.model_spec.version)[0].state}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group>
                    <Form.Label>Metadata</Form.Label>
                    <Form.Control
                        as='textarea'
                        rows='20'
                        value={JSON.stringify(modelMetadata.data.metadata, null, 4)}
                        disabled
                    />
                </Form.Group>
                <HeaderBar
                    header='All Versions'
                />
                <Card>
                    <ModelVersionsTable
                        name={name}
                        versions={modelStatus}
                    />
                </Card>
            </Wrapper>
        )
    )

}

export default ModelDetails;