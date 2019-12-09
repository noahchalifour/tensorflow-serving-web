import React from 'react';

import styles from './HeaderBar.module.css';

function HeaderBar(props) {

    return (
        <div className={styles.container}>
            {props.header && (
                <h4 className={styles.header}>{props.header}</h4>
            )}
            {props.children}
        </div>
    )

}

export default HeaderBar;