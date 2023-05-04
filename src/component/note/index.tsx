import React from 'react';
import parse from 'html-react-parser';
import {style} from "./note.style";
import {NoteInterface} from "../../utlis/interfaces";

interface Props {
    note:NoteInterface,
    index:number
}

export function Note({note,index}:Props){
    let {content,note_id,created_at,user_id,updated_at,published_at}   = note;
    return (
        <React.Fragment key={index}>
          <div className={'note-container'} style={style.container}>
           <div style={style.content}> {content &&  parse(content)}</div>
          </div>
        </React.Fragment>
    )
}