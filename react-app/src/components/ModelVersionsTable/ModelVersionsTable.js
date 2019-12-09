import React, {
    useState
} from 'react';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import {
    Redirect
} from 'react-router-dom';

import Loading from '../Loading/Loading';
import CustomTable from '../CustomTable/CustomTable';

import styles from './ModelVersionsTable.module.css';

function ModelVersionsTable(props) {

    const [selectedRow, setSelectedRow] = useState(null);

    if (selectedRow != null && props.selectedVersion !== props.versions.data[selectedRow].version) {
        return <Redirect
            to={`/models/${props.name}/versions/${props.versions.data[selectedRow].version}`}
        />
    }

    return (
        <CustomTable>
            <thead>
                <tr>
                    <th>Version</th>
                    <th>State</th>
                    <th>Code</th>
                    <th>Error Message</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.versions.error ? (
                    <tr>
                        <td colSpan={5}>
                            {props.versions.error.messageText || 'An unknown error occurred.'}
                        </td>
                    </tr>
                ) : props.versions.loading ? (
                    <tr>
                        <td colSpan={5}>
                            <Loading />
                        </td>
                    </tr>
                ) : props.versions.data.length === 0 ? (
                    <tr>
                        <td colSpan={5}>
                            No versions found.
                        </td>
                    </tr>
                ) : props.versions.data.map((modelVersion, index, arr) => (
                    <tr key={index} className={styles.row} onClick={() => setSelectedRow(index)}>
                        <td width='25%'>{modelVersion.version}</td>
                        <td width='25%'>{modelVersion.state}</td>
                        <td width='25%'>{modelVersion.status.error_code}</td>
                        <td width='25%'>{modelVersion.status.error_message}</td>
                        <td width='auto'>
                            {props.selectedVersion !== modelVersion.version && (
                                <FontAwesomeIcon icon={faChevronRight} />
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </CustomTable>
    )

}

export default ModelVersionsTable;