import React from 'react';
import RemoveButton from "../RemoveButton/RemoveButton";
import styles from './Item.module.css'

const Item = (props) => {
    return (
        <div className={styles.main}>
            <div className={styles.text}>{props.children}</div>
            <RemoveButton onClick = {() => props.remove(props.item)}/>
        </div>
    );
};

export default Item;