import React from 'react';
import parse from 'html-react-parser';
import {style} from "./note.style";
import {NoteInterface} from "../../utlis/interfaces";
import {SVGIcon} from '../icons/SVGIcon';
import styled, {IStyledComponent} from "styled-components";
import {ShadowContainer} from "../shadowContainer";

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
    function formatDate(date):string{
        let newDate : Date = new Date(date);
        let dateToday :Date = new Date();
        let noteDate :string = newDate.getDate() + '-' + newDate.getMonth()  + '-' + newDate.getFullYear();
        let todayDate :string = dateToday.getDate() + '-' + dateToday.getMonth()  + '-' + dateToday.getFullYear();
        if(noteDate === todayDate) return `Today's note`
        else return date
    }
    return (
        <React.Fragment key={index}>
            <ShadowContainer >
            <div className={'note-container'} style={style.container}>
                <DateElement>{formatDate(created_at)}</DateElement>
                {EditIcon}
                {RemoveIcon}
                <div style={style.content}> {content && parse(content)}</div>
            </div>
            </ShadowContainer>
        </React.Fragment>
    )
}

const DateElement : IStyledComponent<'web', any, any> = styled.div`
  margin:4px 0px;
  color: rgb(77, 75, 75);
  font-size: 0.9rem;
`;