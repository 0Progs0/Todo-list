import React from 'react';
import styles from './Sidenav.module.css'
import Item from "../Items/Item";
const Sidenav = ({themes, filter}) => {
    return (
        <div className={styles.sidenav}>
            <div>
                {themes.map(todo => (
                    <button onClick={() => filter(todo)}>{todo}</button>
                ))}
            </div>
        </div>
    );
};

export default Sidenav;