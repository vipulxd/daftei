import React from 'react';
import {Note} from "../../component/note";
import {NoteInterface} from "../../utlis/interfaces";
import {NoteContext} from "../../context/note.context";
import {style} from "./note.style";

export function NotesModule() {
    let data = React.useContext<any>(NoteContext);
    return (
        <React.Fragment>
            <div style={style.container} className={'flex-wrap'}>
                {data.notes.map((itx: NoteInterface, ind: number) => {
                    return <Note note={itx} index={ind}/>
                })}
            </div>
        </React.Fragment>
    )
}