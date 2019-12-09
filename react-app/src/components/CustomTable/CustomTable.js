import React from 'react';
import {
    Table
} from 'react-bootstrap';

import styles from './CustomTable.module.css';

function CustomTable(props) {

    return (
        <Table hover className={styles.table}>
            {props.children}
        </Table>
    )

}

export default CustomTable;