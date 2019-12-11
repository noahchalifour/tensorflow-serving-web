import React, {
    useState
} from 'react';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
    faTimesCircle,
    faExclamationCircle,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import {
    Redirect
} from 'react-router-dom';

import Loading from '../Loading/Loading';
import CustomTable from '../CustomTable/CustomTable';

import styles from './ModelsTable.module.css';

function ModelsTable(props) {

    const [selectedRow, setSelectedRow] = useState(null);

    if (selectedRow != null) {
        return <Redirect 
            to={`/models/${props.models.data[selectedRow].name}`} 
        />
    }

    return (
        <CustomTable>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Platform</th>
                    <th>Upload Status</th>
                    <th>Message</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.models.error ? (
                    <tr>
                        <td colSpan={5}>
                            {props.models.error.messageText || 'An unknown error occurred.'}
                        </td>
                    </tr>
                ) : props.models.loading ? (
                    <tr>
                        <td colSpan={5}>
                            <Loading />
                        </td>
                    </tr>
                ) : props.models.data.length === 0 ? (
                    <tr>
                        <td colSpan={5}>
                            No models found.
                        </td>
                    </tr>
                ) : props.models.data.map((model, index, arr) => (
                    <tr key={index} className={model.upload.status === 'Success' ? styles.row : ''} onClick={model.upload.status === 'Success' ? () => setSelectedRow(index) : () => {}}>
                        <td width='25%'>{model.name}</td>
                        <td width='25%'>{model.platform || ''}</td>
                        <td width='25%' className={model.upload.status === 'Success' ? styles.statusSuccess : 
                                                   model.upload.status === 'Failed' || model.upload.status === 'Delete Failed' ? styles.statusFailed : 
                                                   model.upload.status === 'Deleted' ? styles.statusDeleted : ''}>
                            {model.upload.status === 'Success' ? (
                                <FontAwesomeIcon className={styles.statusIcon} icon={faCheckCircle} />
                            ) : model.upload.status === 'Deleted' ? (
                                <FontAwesomeIcon className={styles.statusIcon} icon={faTimesCircle} />
                            ) : model.upload.status === 'Failed' || model.upload.status === 'Delete Failed' ? (
                                <FontAwesomeIcon className={styles.statusIcon} icon={faExclamationCircle} />
                            ) : null}
                            <span className={styles.status}>{model.upload.status}</span>
                        </td>
                        <td width='25%'>{model.upload.error || ''}</td>
                        <td width='auto'>
                            {model.upload.status === 'Success' && (
                                <FontAwesomeIcon icon={faChevronRight} />
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </CustomTable>
    )

}

export default ModelsTable;