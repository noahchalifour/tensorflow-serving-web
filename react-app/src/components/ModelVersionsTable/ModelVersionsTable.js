import React, {
    useState
} from 'react';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
    faTimesCircle,
    faTimes
} from '@fortawesome/free-solid-svg-icons';

import Wrapper from '../../hoc/Wrapper';
import Loading from '../Loading/Loading';
import CustomTable from '../CustomTable/CustomTable';
import ConfirmDeleteModelModal from '../ConfirmDeleteModelModal/ConfirmDeleteModelModal';

import styles from './ModelVersionsTable.module.css';

function ModelVersionsTable(props) {

    const [confirmDeleteModelModalVisible, setConfirmDeleteModelModalVisible] = useState(false);
    const [selectedVersion, setSelectedVersion] = useState(null);

    function confirmDeleteModel(version) {

        setSelectedVersion(version);
        setConfirmDeleteModelModalVisible(true);

    }

    return (
        <Wrapper>
            <ConfirmDeleteModelModal
                show={confirmDeleteModelModalVisible}
                onHide={() => setConfirmDeleteModelModalVisible(false)}
                modelName={props.name}
                modelVersion={selectedVersion}
            />
            <CustomTable>
                <thead>
                    <tr>
                        <th>Version</th>
                        <th>Upload Status</th>
                        <th>Message</th>
                        <th>State</th>
                        <th>Code</th>
                        <th>Error Message</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.versions.error ? (
                        <tr>
                            <td colSpan={7}>
                                {props.versions.error.messageText || 'An unknown error occurred.'}
                            </td>
                        </tr>
                    ) : props.versions.loading ? (
                        <tr>
                            <td colSpan={7}>
                                <Loading />
                            </td>
                        </tr>
                    ) : props.versions.data.length === 0 ? (
                        <tr>
                            <td colSpan={7}>
                                No versions found.
                            </td>
                        </tr>
                    ) : props.versions.data.map((modelVersion, index, arr) => (
                        <tr key={index}>
                            <td width='16%'>{modelVersion.version}</td>
                            <td width='16%' className={modelVersion.upload.status === 'Success' ? styles.statusSuccess : modelVersion.upload.status === 'Failed' || modelVersion.upload.status === 'Delete Failed' ? styles.statusFailed : ''}>
                                {modelVersion.upload.status === 'Success' ? (
                                    <FontAwesomeIcon className={styles.statusIcon} icon={faCheckCircle} />
                                ) : modelVersion.upload.status === 'Failed' || modelVersion.upload.status === 'Delete Failed' ? (
                                    <FontAwesomeIcon className={styles.statusIcon} icon={faTimesCircle} />
                                ) : null}
                                <span className={styles.status}>{modelVersion.upload.status}</span>
                            </td>
                            <td width='16%'>{modelVersion.upload.message || ''}</td>
                            <td width='16%'>{modelVersion.state}</td>
                            <td width='16%'>{modelVersion.status.error_code}</td>
                            <td width='16%'>{modelVersion.status.error_message}</td>
                            <td width='auto'>
                                <FontAwesomeIcon className={styles.delete} onClick={() => confirmDeleteModel(modelVersion.version)} icon={faTimes} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </CustomTable>
        </Wrapper>
    )

}

export default ModelVersionsTable;