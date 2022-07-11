import React, {useState} from 'react';
import Item from "./Item";
import styles from "./ItemsList.module.css"

const ItemsList = ({list,remove}) => {
    return (
        <div className={styles.main}>
                    <div>
                        {list.map(todo => (
                            <Item key={todo.id} remove={remove} item={todo}>{todo.todo}</Item>
                            ))}
                    </div>
        </div>
    );
};

export default ItemsList;
