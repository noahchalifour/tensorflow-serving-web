import React, {
    useState
} from 'react';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
    faTimesCircle,
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
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.models.error ? (
                    <tr>
                        <td colSpan={4}>
                            {props.models.error.messageText || 'An unknown error occurred.'}
                        </td>
                    </tr>
                ) : props.models.loading ? (
                    <tr>
                        <td colSpan={4}>
                            <Loading />
                        </td>
                    </tr>
                ) : props.models.data.length === 0 ? (
                    <tr>
                        <td colSpan={4}>
                            No models found.
                        </td>
                    </tr>
                ) : props.models.data.map((model, index, arr) => (
                    <tr key={index} className={styles.row} onClick={() => setSelectedRow(index)}>
                        <td width='33%'>{model.name}</td>
                        <td width='33%'>{model.platform || ''}</td>
                        <td width='33%' className={model.upload_status === 'Success' ? styles.statusSuccess : model.upload_status === 'Failed' ? styles.statusFailed : ''}>
                            {model.upload_status === 'Success' ? (
                                <FontAwesomeIcon className={styles.statusIcon} icon={faCheckCircle} />
                            ) : model.upload_status === 'Failed' ?(
                                <FontAwesomeIcon className={styles.statusIcon} icon={faTimesCircle} />
                            ) : null}
                            <span className={styles.status}>{model.upload_status}</span>
                        </td>
                        <td width='auto'>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </CustomTable>
    )

}

export default ModelsTable;