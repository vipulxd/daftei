import React, {useEffect} from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./pages/home.page";
import {ErrorPage} from "./pages/error.page";
import {NoteBuilder} from "./modules/note-builder";
import {AuthContextProvider} from "./context/auth.context";
import {initDB} from "./api/db.api";
import SnackbarProvider from 'react-simple-snackbar'

function App() {
    useEffect(()=>{
        initDB();
    },[])
    return (
        <AuthContextProvider>
            <SnackbarProvider >
            <RouterProvider router={createBrowserRouter([
                {
                    path: "/",
                    children: [{
                        path: '',
                        loader:async ()=>{
                            return null
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
            </AuthContextProvider>
    );
}

export default App;