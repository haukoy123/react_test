import React, { useState, useEffect, useContext, useRef } from "react";
import Test from "./components/Test";
import User from "./UseContext"; 


function App(props) {
    //State
    const [a, setA] = useState(props.a)
    const [fullName, setFullName] = useState({ name: 'name', familyName: 'family' });
    const [title, setTitle] = useState('useEffect() in Hooks');

    const startTime = new Date('11/8/2022');
    const studyTime = Math.floor(Math.abs(new Date() - startTime)/86400000);
    const [user, setUser] = useState({name: 'test context', age: studyTime})

    // userRef
    const inputId = '123'
    const textInput = useRef('');
    function focusTextInput() {
        textInput.current.focus();
    }

    // effect
    useEffect(() => {
        // khi props.a hoac fullName.name thay doi chay vao day
        console.log('use effect');
    }, [fullName.name, props.a]);

    function handleClick() {
        setA('123')
        // vi set lai fullName.name nen se chay lai effect
        setFullName({ name: 'hautt', familyName: 'nw' });
        setTitle('clicked')
        setUser({...user, name: 'update context'})
    }
    return (
        <div>
            <h1>state: {a}</h1>
            <h1>props: {props.a}</h1>
            <h1>Title: {title}</h1>
            <h3>Name: {fullName.name}</h3>
            <h3 onClick={() => handleClick()}>Family Name: {fullName.familyName}</h3>
            <User.Provider value={user}>
                <div>
                    <Test />
                </div>
            </User.Provider>

            <User.Consumer>
                {value => {
                    console.log(value);
                    return (
                        <div>
                            <div>user name: {value.name}</div>
                            <div>age: {value.age}</div>
                        </div>
                    )
                }}
            </User.Consumer>
            <p>
            <label>username:</label>
            <input type="text" id={inputId} ref={textInput} defaultValue='gi do' />
            </p>
            <button onClick={focusTextInput}>Focus the text input</button>
        </div>
    );
};

export default App;
