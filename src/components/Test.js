import React, { useState, useEffect, useContext } from "react";
import User from "../UseContext";

function Test() {
    const value = useContext(User);
    console.log(value);
    return (
        <div>
            <div>examp: {value.name}</div>
            <div>study time: {value.age} day</div>
            <User.Consumer>
                {value => {
                    return (
                        <div>
                            <div>user name: {value.name}</div>
                            <div>age: {value.age}</div>
                        </div>
                    )
                }}
            </User.Consumer>
        </div>
    );
  }

export default Test;