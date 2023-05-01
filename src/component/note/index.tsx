import React from 'react';
import {InterfaceCollection} from "../../utlis/interfaces";
import parse from 'html-react-parser';
import {style} from "./note.style";
import {Fade, Hinge, Slide} from "react-awesome-reveal";
interface Props {
    notes:InterfaceCollection['story'],
    index:number
}

export function Note({notes,index}:Props){
    let {content}   = notes;
    return (

        <React.Fragment>
          <div className={'note-container'} style={style.container}>
           <div style={style.content}> {content &&  parse(content)}</div>
          </div>
        </React.Fragment>

    )
}