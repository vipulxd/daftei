import React from 'react';
import {NotesModule} from "../modules/notes";
import {Navigation} from "../component/navigation";


export function HomePage(){
    return (
        <React.Fragment>
            <Navigation/>
            <NotesModule />
        </React.Fragment>
    )
}