import React from 'react';
import parse from 'html-react-parser';
import {style} from "./note.style";
import {NoteInterface} from "../../utlis/interfaces";
import {SVGIcon} from '../icons/SVGIcon';

interface Props {
    note: NoteInterface,
    index: number,
    onDelete?: (note_id: string) => void
}

export function Note({note, index, onDelete}: Props) {
    let {content, note_id, created_at, user_id, updated_at, published_at} = note;
    return (
        <React.Fragment key={index} >
            <div className={'note-container'} style={style.container}>
                <div style={style.content}> {content && parse(content)}</div>
                <div  className={'light btn-update light-border'} onClick={() => {
                    window.location.replace('/note/' + note_id)
                }}><SVGIcon
                    name={'edit'}
                    height={'45px'}
                    width={'22px'}
                /></div>
                <div onClick={() => onDelete(note_id)} className={'light btn-del light-border'}>Delete</div>
            </div>
        </React.Fragment>
    )
}