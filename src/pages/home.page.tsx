import React from 'react';
import {NotesModule} from "../modules/notes";
import {Navigation} from "../component/navigation";
import DataContentProvider from "../context/note.context";
import { Searchbar } from '../component/search';
import SnackbarProvider from 'react-simple-snackbar'
import { Button } from '../component/button';

export function HomePage():JSX.Element {
    function handleSyncClick() : void{
        
    }
    return (
        <React.Fragment>
            <SnackbarProvider>
            <Navigation AddNoteBtn={<Button name={'Add Note'} onBtnClick={()=>{window.location.replace('/note')}} />} Searchbar={<Searchbar />} SyncButton={<Button name={'Sync Now'} onBtnClick={handleSyncClick} />} onBtnClick={(e)=>{}} />
            <DataContentProvider>
                <NotesModule/>
            </DataContentProvider>
            </SnackbarProvider>
        </React.Fragment>
    )
}