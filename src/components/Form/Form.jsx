import React, {useState} from 'react';
import MyInput from "../MyInput/MyInput";
import MyButton from "../MyButton/MyButton";
import styles from "./Form.module.css"
import ItemsList from "../Items/ItemsList";

const Form = () => {
    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState([
        { id:1, title:'Первый' },
        { id:2, title:'Второй'}
    ])

    const addNewItem = (e) => {
        e.preventDefault()
        const newTodo = {
            id: Date.now(),
            title:inputValue
        }
        setTodos([...todos, newTodo])
        setInputValue('')
    }

    const removeItem = (item) => {
        setTodos(todos.filter(t => t.title != item.title))
    }

    return (
        <div>
            <div className={styles.main}>
            <MyInput
                value = {inputValue}
                onChange = {e => setInputValue(e.target.value)}
                type = "text"
                placeholder = "Введите название"
            />
            <MyButton disabled = {!inputValue}
            onClick = {addNewItem}>Добавить в список</MyButton>
            </div>
            <div className={styles.main}>
                <ItemsList remove={removeItem} list={todos}/>
            </div>
        </div>
    );
};

export default Form;