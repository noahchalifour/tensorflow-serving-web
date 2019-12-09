import React from 'react';
import {
    Navbar,
    Nav
} from 'react-bootstrap';
import {
    Link
} from 'react-router-dom';
import cx from 'classname';

import styles from './NavigationBar.module.css';

function NavigationBar(props) {
    return (
        <Navbar variant='dark' expand="sm" className={styles.navbar}>
            <Navbar.Brand className={styles.brand} href="/models">Tensorflow Serving</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={cx("mr-auto", styles.nav)}>
                    <Link to='/models'>Models</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;