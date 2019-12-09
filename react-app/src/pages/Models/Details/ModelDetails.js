import React, {
    useState,
    useEffect
} from 'react';
import {
    Row,
    Col,
    Form
} from 'react-bootstrap';
import axios from 'axios';

import Wrapper from '../../../hoc/Wrapper';
import HeaderBar from '../../../components/HeaderBar/HeaderBar';
import Loading from '../../../components/Loading/Loading';
import Card from '../../../components/Card/Card';
import ModelVersionsTable from '../../../components/ModelVersionsTable/ModelVersionsTable';

function ModelDetails(props) {

    const [modelStatus, setModelStatus] = useState({
        data: null,
        loading: true
    });
    const [modelMetadata, setModelMetadata] = useState({
        data: null,
        loading: true
    })

    const name = props.match.params.name;
    const version = props.match.params.version;

    function loadModelStatus() {

        setModelStatus({
            data: null,
            loading: true
        });

        let url = `http://${process.env.TF_SERVING_HOST}:${process.env.TF_SERVING_REST_PORT}/v1/models/${name}`;
        if (version != null) {
            url += `/versions/${version}`
        }

        axios.get(url)
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

        let url = `http://${process.env.TF_SERVING_HOST}:${process.env.TF_SERVING_REST_PORT}/v1/models/${name}`;
        if (version != null) {
            url += `/versions/${version}`
        }
        url += '/metadata'

        axios.get(url)
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

    console.log(modelStatus);
    console.log(modelMetadata);

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
                <HeaderBar
                    header={version == null ? `${name}` : `${name} (Version: ${version})`}
                />
                {version == null && (
                    <p>Showing data for latest model version: {modelMetadata.data.model_spec.version}</p>
                )}
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
                        selectedVersion={version || -1}
                    />
                </Card>
            </Wrapper>
        )
    )

}

export default ModelDetails;