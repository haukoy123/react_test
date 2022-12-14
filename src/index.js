import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


import './index.css';
import App from './App';
import Demo from './demo';
import TestAuth from './TestAuth';
import ErrorPage from "./error-page";


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
// root.render(<App a={1}/>);
// root.render(<TestAuth />);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Demo tasks={DATA} />,
        errorElement: <ErrorPage />, // errorElement chi hoat dong trong createBrowserRouter
        children: [
            {
                path: "/test",
                element: <TestAuth />,
            },
        ],
    },
    {
        path: "/app",
        element: <App a={1} />,
    },
]);

// root.render( <RouterProvider router={router} />)

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/todo" element={<Demo tasks={DATA} />} >
                <Route path="testOutlet" element={<TestAuth />} />
            </Route>
            <Route path="test" element={<App a={1} />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="auth" element={<TestAuth />} />
        </Routes>
    </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
