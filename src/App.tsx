import React, {useEffect} from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./pages/home.page";
import {ErrorPage} from "./pages/error.page";
import {NoteBuilder} from "./modules/note-builder";
import {ApplicationProvider} from "./context/app.context";
import {initDB} from "./api/db.api";
import SnackbarProvider from 'react-simple-snackbar'

function App() {
    return (
        <ApplicationProvider>
            <SnackbarProvider >
            <RouterProvider router={createBrowserRouter([
                {
                    path: "/",
                    children: [{
                        path: '',
                        loader:async ()=>{
                            return false
                        },
                        element: <HomePage/>
                    }, {
                        path: 'note/',
                        element: <NoteBuilder/>
                    }, {
                        path: 'note/:noteId',
                        element: <NoteBuilder/>,
                    }]
                },
                {
                    path: '*',
                    element: <ErrorPage/>
                }
            ], {basename: '/'})}/>
            </SnackbarProvider>
            </ApplicationProvider>
    );
}

export default App;