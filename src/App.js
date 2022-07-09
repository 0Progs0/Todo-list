import React from 'react';
import styles from './Styles/App.css'
import Header from "./components/Header/Header";
import MyButton from "./components/MyButton/MyButton";
import Form from "./components/Form/Form";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Form/>
        </div>
    );
};

export default App;