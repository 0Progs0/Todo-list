import React from 'react';
import'./Styles/App.css'
import Header from "./components/Header/Header";
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