import React, {
    useState
} from 'react';
import {
    Modal,
    Button,
    Alert
} from 'react-bootstrap';
import axios from 'axios';

import Wrapper from '../../hoc/Wrapper';
import Loading from '../Loading/Loading';

function ConfirmDeleteModelModal(props) {

    const [submitting, setSubmitting] = useState(false);
    const [deleteResponse, setDeleteResponse] = useState(null);

    function onDeleteClick() {

        setSubmitting(true);

        let url = `/api/models/${props.modelName}`;
        if (props.modelVersion) {
            url += `/versions/${props.modelVersion}`;
        }

        axios.delete(url)
            .then(
                (response) => {
                    setSubmitting(false);
                    setDeleteResponse(response);
                },
                (error) => {
                    setSubmitting(false);
                    setDeleteResponse(error.response);
                }
            )

    }

    if (deleteResponse && deleteResponse.status === 200) {
        return props.onHide();
    }

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>Confirm Delete Model</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {submitting ? (
                    <Loading
                        text='Deleting model...'
                    />
                ) : (
                    <Wrapper>
                        {deleteResponse && deleteResponse.status !== 200 (
                            <Alert variant='danger'>
                                {deleteResponse.data.messageText || deleteResponse.statusText}
                            </Alert>
                        )}
                        <p>Are you sure you want to delete this model?</p>
                    </Wrapper>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={onDeleteClick}>Delete</Button>
            </Modal.Footer>
        </Modal>
    )

}

export default ConfirmDeleteModelModal;