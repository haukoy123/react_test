import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Demo from './demo';

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];

const root = ReactDOM.createRoot(document.getElementById('test'));
// root.render(
//   <React.StrictMode>
//     <Demo />
//   </React.StrictMode>
// );

// root.render(<Demo tasks={DATA}/>);
root.render(<App a={1}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
