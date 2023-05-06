import React from 'react';
import {NotesModule} from "../modules/notes";
import {Navigation} from "../component/navigation";
import NoteContextProvider from "../context/note.context";
import { Searchbar } from '../component/search';
import SnackbarProvider from 'react-simple-snackbar'

export function HomePage() {
    return (
        <React.Fragment>
            <SnackbarProvider>
            <Navigation Searchbar={<Searchbar />} onBtnClick={(e)=>{}} />
            <NoteContextProvider>
                <NotesModule/>
            </NoteContextProvider>
            </SnackbarProvider>
        </React.Fragment>
    )
}