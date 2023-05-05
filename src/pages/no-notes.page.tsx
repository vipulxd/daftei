import React from 'react';
import {Link} from "react-router-dom";
import {style} from './error.style'
export function NoNotesPage(){
    return (
        <React.Fragment>
            <div style={style.container} className={'page-center'}>
                <img src={'/assets/Notebook-bro.svg'} style={style.banner} />
                <p className={'light text-center'}> No notes yet!  <Link className={'light'} to={'/note'}  > Add Note </Link></p>
            </div>
        </React.Fragment>)
}