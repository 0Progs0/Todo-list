import React, {useState} from 'react';
import MyInput from "../MyInput/MyInput";
import MyButton from "../MyButton/MyButton";
import styles from "./Form.module.css"
import ItemsList from "../Items/ItemsList";

const Form = () => {
    const [topicValue, setTopicValue] = useState('')
    const [todoValue, setTodoValue] = useState('')
    const [items, setItems] = useState(
        [
            {
                topic: 'Понедельник',
                todos: [
                    {id: 1, title: 'Программирование'},
                    {id: 2, title: 'Рисование'}]
            },
            {
                topic: 'Вторник',
                todos: [
                    {id: 1, title: 'Программирование'},
                    {id: 2, title: 'Рисование'}]
            }
        ])

    const addNewItem = (e) => {
        e.preventDefault()
        const newTodo = {
            topic:topicValue,
            todos: [
                {id:Date.now(),title:todoValue}
            ]
        }
        setItems([...items, newTodo])
        setTopicValue('')
        setTodoValue('')
    }

    const removeItem = (todo) => {
        console.log(items.map(item => item.todos.filter(t => t.id !== todo.id)))
    }

    return (
        <div>
            <div className={styles.main}>
                <MyInput
                    value={topicValue}
                    onChange={e => setTopicValue(e.target.value)}
                    type="text"
                    placeholder="Введите тему"
                />
                <MyInput
                    value={todoValue}
                    onChange={e => setTodoValue(e.target.value)}
                    type="text"
                    placeholder="Введите название"
                />
                <MyButton disabled={todoValue == '' && topicValue == ''}
                          onClick={addNewItem}>Добавить в список</MyButton>
            </div>
            <div className={styles.main}>
                <ItemsList remove={removeItem} list={items}/>
            </div>
        </div>
    );
};

export default Form;