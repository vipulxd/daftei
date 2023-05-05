import React from 'react';
import parse from 'html-react-parser';
import {style} from "./note.style";
import {NoteInterface} from "../../utlis/interfaces";

interface Props {
    note: NoteInterface,
    index: number,
    onDelete?: (note_id: string) => void
}

export function Note({note, index, onDelete}: Props) {
    let {content, note_id, created_at, user_id, updated_at, published_at} = note;
    return (
        <React.Fragment key={index}>
            <div className={'note-container'} style={style.container}>
                <div style={style.content} onClick={() => {
                    window.location.replace('/note/' + note_id)
                }}> {content && parse(content)}</div>
                <div onClick={() => onDelete(note_id)} className={'light'}>Delete</div>
            </div>

        </React.Fragment>
    )
}