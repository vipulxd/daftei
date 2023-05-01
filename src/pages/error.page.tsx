import React from 'react';
import {Link} from "react-router-dom";
import {style} from './error.style'
export function ErrorPage(){
    return (
        <React.Fragment>
       <div style={style.container} className={'page-center'}>
          <img src={'/assets/error.svg'} style={style.banner} />
          <p className={'light text-center'}> No such page found , please go to <Link className={'light'} to={'/'}  > Home </Link></p>
       </div>
    </React.Fragment>)
}