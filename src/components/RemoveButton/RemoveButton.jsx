import React from 'react';
import styles from './RemoveButton.module.css'

const RemoveButton = (props) => {
    return (
        <button {...props} className={styles.btn}>+</button>
    );
};

export default RemoveButton;