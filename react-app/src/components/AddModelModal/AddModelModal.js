import React, {
    useState
} from 'react';
import {
    Modal,
    Button,
    Form,
    Row,
    Col,
    Alert
} from 'react-bootstrap';
import axios from 'axios';
import cx from 'classname';

import Wrapper from '../../hoc/Wrapper';
import Loading from '../Loading/Loading';

import styles from './AddModelModal.module.css';

function AddModelModal(props) {

    const [name, setName] = useState('');
    const [platform, setPlatform] = useState('');
    const [modelZip, setModelZip] = useState(null);

    const [submitResponse, setSubmitResponse] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    function onSubmit(e) {

        e.preventDefault()

        setSubmitting(true);

        const formData = new FormData();

        formData.append('name', name);
        formData.append('platform', platform);
        formData.append('model', modelZip);

        axios.post('/api/models/add', formData)
            .then(
                (response) => {
                    setSubmitResponse(response);
                    setSubmitting(false);
                },
                (error) => {
                    setSubmitResponse(error.response);
                    setSubmitting(false);
                }
            )

    }

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Add Model</Modal.Title>
            </Modal.Header>
            <Form onSubmit={onSubmit}>
                <Modal.Body>
                    {submitResponse && submitResponse.status === 200 ? (
                        <div className='text-center'>
                            <p>{submitResponse.data.messageText}</p>
                        </div>
                    ) : submitting ? (
                        <Loading
                            text='Creating model... This may take a while.'
                        />
                    ) : (
                        <Wrapper>
                            {submitResponse && (
                                <Alert variant='danger'>
                                    {submitResponse.data.messageText || submitResponse.statusText}
                                </Alert>
                            )}
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type='text'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            placeholder='ex: Model1'
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Platform</Form.Label>
                                        <Form.Control
                                            type='text'
                                            value={platform}
                                            onChange={(e) => setPlatform(e.target.value)}
                                            required
                                            placeholder='ex: tensorflow'
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group>
                                <Form.Label>Model <small>(must be a .zip file)</small></Form.Label>
                                <Form.Control
                                    type='file'
                                    onChange={(e) => setModelZip(e.target.files[0])}
                                    id='zipUpload'
                                    style={{display: 'none'}}
                                />
                                <Form.Label htmlFor='zipUpload' className={cx('btn', 'btn-secondary', 'btn-sm', styles.chooseFile)}>Choose File</Form.Label>
                                <small>{modelZip ? `File: ${modelZip.name}` : ''}</small>
                            </Form.Group>
                        </Wrapper>
                    )}
                </Modal.Body>
                {(!submitting || (submitResponse && submitResponse.status !== 200)) && (
                    <Modal.Footer>
                        <Button className={styles.submit} type='submit'>Submit</Button>
                    </Modal.Footer>
                )}
            </Form>
        </Modal>
    )

}

export default AddModelModal;