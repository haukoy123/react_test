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

    // useRef
    const sentMessage = useRef(0);

    const textInput = useRef('');
    function focusTextInput() {
        // useRef thay doi k re-render component
        // bien dung useRef khong bi thay doi khi re-render component
        if(sentMessage.current === 3){
            return alert("Message Limit Reached")
        }
        console.log('use Ref');
        sentMessage.current += 1;
        console.log('mess', sentMessage);
        console.log('input elm', textInput);
        // bien su dung useRef truyen vao ref de xac dinh eml
        console.log(textInput.current.value);
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
        <div className="mw-68rem m-auto">
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
            <input type="text" ref={textInput} defaultValue='gi do' />
            </p>
            <button onClick={focusTextInput} ref={(element) => console.log(element)}>Focus the text input</button>
        </div>
    );
};

export default App;
