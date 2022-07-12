import React, {useState} from 'react';
import MyInput from "../MyInput/MyInput";
import MyButton from "../MyButton/MyButton";
import styles from "./Form.module.css"
import ItemsList from "../Items/ItemsList";
import Sidenav from "../Sidenav/Sidenav";
import items from "../../Data/data";

const allThemes = ['All', ...new Set(items.map(todo => todo.topic))]

const Form = () => {
    const [topicValue, setTopicValue] = useState('')
    const [todoValue, setTodoValue] = useState('')
    const [todosItems, setTodosItems] = useState(items)

    const [themes, setThemes] = useState(allThemes)

    const addNewTopic = (e) => {
        e.preventDefault()
        const newTopic = topicValue
        setThemes([...themes, newTopic])
        setTopicValue('')
    }

    const removeTopic = (topic) => {
        setThemes(themes.filter(t => t !== topic))
        setTodosItems(todosItems.filter(t => t.topic !== topic))
    }

    const addNewItem = (e) => {
        e.preventDefault()
        const newTodo = {
            id:Date.now(),
            topic:topicValue,
            todo:todoValue
        }
        setTodosItems([...todosItems, newTodo])
        items.push(newTodo)
        setThemes(['All',...new Set(items.map(todo => todo.topic))])
        setTopicValue('')
        setTodoValue('')
    }

    const removeItem = (todo) => {
        setTodosItems(todosItems.filter(t => t.id !== todo.id))
        items.splice(items.indexOf(todo),1)
        if (items.findIndex(t => t.topic === todo.topic) == -1) {
            setThemes(themes.filter(t => t !== todo.topic))
        }

    }

    const filterThemes = (theme) => {
        if (theme == 'All'){
            setTodosItems(items)
            return
        }
        const filteredTodos = items.filter((todo) => todo.topic === theme)
        setTodosItems(filteredTodos)
    }

    return (
        <div>
            <Sidenav themes={themes} filter={filterThemes}/>
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
                <ItemsList remove={removeItem} list={todosItems}/>
            </div>
        </div>
    );
};

export default Form;