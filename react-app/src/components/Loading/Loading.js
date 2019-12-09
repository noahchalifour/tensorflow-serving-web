import React from 'react';
import {
    Spinner
} from 'react-bootstrap';
import cx from 'classname';

import styles from './Loading.module.css';

function Loading(props) {

    return (
        <div className={cx('text-center', styles.container)}>
            <Spinner className={styles.spinner} animation="border" />
            {props.text && (
                <p>{props.text}</p>
            )}
        </div>
    )

}

export default Loading;