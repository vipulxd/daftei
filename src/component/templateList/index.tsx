import React, {useContext, useEffect, useState} from 'react';
import {Note} from "../note";
import {NoteInterface, TemplateInterface} from "../../utlis/interfaces";
import styled, {IStyledComponent} from "styled-components";
import {fetchAllTemplates} from "../../api/db.api";
import {Icon} from "../dialog/styles";
import {SVGIcon} from "../icons/SVGIcon";
import {DataContext} from "../../context/note.context";

export function TemplateList(props: {
    onSelect: (content: string) => void,
    onDelete?: (id: string) => void
}): JSX.Element {
    let [templates, addTemplates] = useState<TemplateInterface[]>([]);
    let {template, fetchNotes} = useContext(DataContext)
    useEffect(() => {
        addTemplates(template)
        fetchNotes();
    }, [template])
    return (
        <React.Fragment>
            <NoteWrapper>
                {template.length > 0 ? templates.map((item: TemplateInterface, index: number): JSX.Element => <Note
                    RemoveIcon={<SVGIcon name={'delete'} right={0} height={'10'} width={'10'} onClick={() => props.onDelete(item.template_id)}/>} key={index}
                    note={{content: item.content}}
                    index={index}
                    onClick={(note: NoteInterface): void => {props.onSelect(note.content)}}/>)
                    :
                    <CenterBox> <SVGIcon name={'add-note'} height={'100%'} top={30} width={'60%'}/></CenterBox>}
            </NoteWrapper>
        </React.Fragment>
    )
}

const NoteWrapper = styled.div`
  font-size: 0.5rem;
  cursor: pointer;
`;

export const CenterBox: IStyledComponent<'web', any, any> = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;