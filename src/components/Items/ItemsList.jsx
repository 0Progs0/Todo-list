import React from 'react';
import Item from "./Item";

const ItemsList = ({list,remove}) => {
    return (
        <div>
            {list.map(item =>
            <Item key={item.id} remove={remove} item={item}>{item.title}</Item>
            )}
        </div>
    );
};

export default ItemsList;