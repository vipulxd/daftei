import React from 'react';
import {NotesModule} from "../modules/notes";
import {Navigation} from "../component/navigation";
import NoteContextProvider from "../context/note.context";
import { Searchbar } from '../component/search';


export function HomePage() {
    return (
        <React.Fragment>
            <Navigation Searchbar={<Searchbar />} onBtnClick={(e)=>{}} />
            <NoteContextProvider>
                <NotesModule/>
            </NoteContextProvider>
        </React.Fragment>
    )
}