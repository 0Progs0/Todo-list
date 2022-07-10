import React, {useState} from 'react';
import Item from "./Item";
import styles from "./ItemsList.module.css"

const ItemsList = ({list,remove}) => {
    return (
        <div className={styles.main}>
            {list.map(item => {
                return (
                    <div>
                        <h1>{item.topic}</h1>
                        {item.todos.map(todo => (
                            <Item key={todo.id} remove={remove} item={todo}>{todo.title}</Item>)
                        )}
                    </div>
                )
            })}
        </div>
    );
};

export default ItemsList;
