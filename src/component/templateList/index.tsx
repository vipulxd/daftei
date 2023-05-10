import React, {useContext} from 'react';
import {DataContext} from "../../context/note.context";
import {TemplateInterface} from "../../mock/templates";
import {Note} from "../note";
import {NoteInterface} from "../../utlis/interfaces";
import styled from "styled-components";

export function TemplateList(props:{onSelect:(content:string)=>void}):JSX.Element {
    let {template} = useContext(DataContext);
    return (
        <React.Fragment>
          <NoteWrapper>
              {template.map((item:TemplateInterface,index:number):JSX.Element=><Note key={index} note={{content:item.content}} index={index} onClick={(note:NoteInterface):void=>{props.onSelect(note.content)}} />)}
          </NoteWrapper>
        </React.Fragment>
    )
}

const NoteWrapper  = styled.div`
     font-size: 0.5rem;
  cursor: pointer;
`;