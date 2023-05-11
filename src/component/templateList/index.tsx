import React, {useContext, useEffect, useState} from 'react';
import {Note} from "../note";
import {NoteInterface, TemplateInterface} from "../../utlis/interfaces";
import styled from "styled-components";
import {fetchAllTemplates} from "../../api/db.api";

export function TemplateList(props:{onSelect:(content:string)=>void}):JSX.Element {
    let [templates,addTemplates] = useState<TemplateInterface[]>([]);
   useEffect(()=>{
       fetchAllTemplates((data:TemplateInterface[]) : void=>{
           addTemplates(data);
       })
   },[])
    return (
        <React.Fragment>
          <NoteWrapper>
              {templates.map((item:TemplateInterface,index:number):JSX.Element=><Note key={index} note={{content:item.content}} index={index} onClick={(note:NoteInterface):void=>{props.onSelect(note.content)}} />)}
          </NoteWrapper>
        </React.Fragment>
    )
}

const NoteWrapper  = styled.div`
     font-size: 0.5rem;
  cursor: pointer;
`;