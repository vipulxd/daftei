import React from 'react';
import {NotesModule} from "../modules/notes";
import {Navigation} from "../component/navigation";
import NoteContextProvider from "../context/note.context";


export function HomePage() {
    return (
        <React.Fragment>
            <Navigation/>
            <NoteContextProvider>
                <NotesModule/>
            </NoteContextProvider>

        </React.Fragment>
    )
}