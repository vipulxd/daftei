import React from 'react';
import {Note} from "../../component/note";
import {InterfaceCollection} from "../../utlis/interfaces";
import {NoteContext} from "../../context/note.context";
import {style} from "./note.style";

interface NoteProp{
    notes:InterfaceCollection['story'][]
}
export function NotesModule() {
    let data = React.useContext<NoteProp | null>(NoteContext);
    return (
        <React.Fragment>
            <div style={style.container} className={'flex-wrap'}>
            {
                data?.notes.map((itx,ind)=>{
                    return <Note notes={itx} index={ind} />
                })
            }
            </div>
        </React.Fragment>
    )
}