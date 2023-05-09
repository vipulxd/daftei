import React from 'react';
import parse from 'html-react-parser';
import {style} from "./note.style";
import {NoteInterface} from "../../utlis/interfaces";
import {SVGIcon} from '../icons/SVGIcon';

interface Props {
    note: NoteInterface,
    index: number,
    onDelete?: (note_id: string) => void,
    onClick?: (note: NoteInterface) => void,
    EditIcon?: JSX.Element,
    RemoveIcon?: JSX.Element
}

export function Note({note, index, onDelete, onClick, EditIcon, RemoveIcon}: Props) {
    let {content, note_id, created_at, user_id, updated_at, published_at} = note;

    return (
        <React.Fragment key={index}>
            <div className={'note-container box-test'} style={style.container}>
                {EditIcon}
                {RemoveIcon}
                <div style={style.content}> {content && parse(content)}</div>
            </div>
        </React.Fragment>
    )
}