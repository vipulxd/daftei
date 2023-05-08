import React, {useContext} from 'react';
import {DataContext} from "../../context/note.context";
import {TemplateInterface} from "../../mock/templates";
import {Note} from "../note";
import {NoteInterface} from "../../utlis/interfaces";

export function TemplateList(props:{onSelect:(content:string)=>void}):JSX.Element {
    let {template} = useContext(DataContext);
    return (
        <React.Fragment>
          <div>
              {template.map((item:TemplateInterface,index:number):JSX.Element=><Note note={{content:item.content}} index={index} onClick={(note:NoteInterface):void=>{props.onSelect(note.content)}} />)}
          </div>
        </React.Fragment>
    )
}