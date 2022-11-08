import React, { useState, useEffect } from "react";

function App() {
    //State
    const [fullName, setFullName] = useState({ name: 'name', familyName: 'family' });
    const [title, setTitle] = useState('useEffect() in Hooks');

    console.log(0);

    useEffect(() => {
        console.log('useEffect has been called!');

    }, [fullName.name]);
    
    function handleClick() {
        setFullName({name:'hautt',familyName: 'nw'});
        setTitle('helllllllllllo11111111111111111')
    }

    return (
        <div>
            <h1>Title: {title}</h1>
            <h3>Name: {fullName.name}</h3>
            <h3 onClick={() => handleClick()}>Family Name: {fullName.familyName}</h3>
        </div>
    );
};

export default App;
