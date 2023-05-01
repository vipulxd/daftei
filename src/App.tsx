import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./pages/home.page";
import {ErrorPage} from "./pages/error.page";
import {NoteBuilder} from "./modules/note-builder";
import {AuthContextProvider} from "./context/auth.context";

function App() {
    return (
        <AuthContextProvider>
            <RouterProvider router={createBrowserRouter([
                {
                    path: "/",
                    children: [{
                        path: '',
                        element: <HomePage/>
                    }, {
                        path: 'note/',
                        element: <NoteBuilder/>
                    }, {
                        path: 'note/:noteId',
                        element: <NoteBuilder/>,
                        loader: async ({params}) => {
                            // noteId
                            // fetch the note and load it in context
                            return null
                        }}]
                },
                {
                    path: '*',
                    element: <ErrorPage/>
                }
            ], {basename: '/'})}/>
        </AuthContextProvider>
    );
}

export default App;