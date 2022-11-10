import React, { useState, useEffect, useContext } from "react";

const User = React.createContext({name: 'hau', age: 18});
const isLoggedIn = React.createContext(false);

export default User;

export {
    isLoggedIn
} 