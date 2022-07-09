import React from 'react';
import styles from './MyInput.module.css'
const MyInput = (props) => {
    return (
        <input className={styles.inp} {...props}/>
    );
};

export default MyInput;