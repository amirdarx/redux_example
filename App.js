import React from 'react';
import InputField from './components/InputField';
import TodosList from './components/TodosList';

function App() {
    return (
        <div className="App">
            <h1 className="nameOfApp"> Todos App </h1>
            <InputField/>
            <TodosList/>
        </div>
    )
}

export default App;