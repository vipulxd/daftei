import React from 'react';
import {NotesModule} from "../modules/notes";
import {Navigation} from "../component/navigation";
import NoteContextProvider from "../context/note.context";
import { Searchbar } from '../component/search';
import SnackbarProvider from 'react-simple-snackbar'
import { Button } from '../component/button';

export function HomePage() {
    function handleSyncClick(){

    }
    return (
        <React.Fragment>
            <SnackbarProvider>
            <Navigation Searchbar={<Searchbar />} Button={<Button name={'Sync Now'} onBtnClick={handleSyncClick} />} onBtnClick={(e)=>{}} />
            <NoteContextProvider>
                <NotesModule/>
            </NoteContextProvider>
            </SnackbarProvider>
        </React.Fragment>
    )
}