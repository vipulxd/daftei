import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./pages/home.page";
import {ErrorPage} from "./pages/error.page";
import {NoteBuilder} from "./modules/note-builder";

function App() {
    return (
        <RouterProvider router={createBrowserRouter([
            {
                path: "/",
                // element: <HomePage/>,
                // errorElement: <ErrorPage/>,
                // loader: async ({ request, params }) => {
                //    console.log(request);
                //    return null
                // },
                children: [{
                    path: '',
                    element: <HomePage/>
                }, {
                    path: 'note',
                    element: <NoteBuilder/>
                }]
            },
            {
                path: '*',
                element: <ErrorPage/>
            }
        ], {basename: '/'})}/>
    );
}

export default App;