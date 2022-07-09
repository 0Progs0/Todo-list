import React from 'react';
import styles from './Header.module.css'
const Header = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.header}>To do</h1>
        </div>
    );
};

export default Header;