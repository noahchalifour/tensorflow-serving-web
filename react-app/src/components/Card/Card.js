import React from 'react';
import cx from 'classname';

import styles from './Card.module.css';

function Card(props) {

    return (
        <div className={cx('shadow-sm', styles.card)}>
            {props.children}
        </div>
    )

}

export default Card;