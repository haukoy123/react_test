import React, { useState, useEffect, useContext } from "react";
import User from "../UseContext";

function Test() {
    const value = useContext(User);
    console.log(value);
    return (
        <div>
            <div>examp: {value.name}</div>
            <div>study time: {value.age} day</div>
        </div>
    );
  }

export default Test;