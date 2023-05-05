import React from 'react';
import {style} from "./navigation.style";
import {Searchbar} from "../search";
import {Logo} from "../logo";
import {Link} from "react-router-dom";
import {
    MouseEvent
} from "../../../../../../../../Program Files/JetBrains/IntelliJ IDEA 2022.2.3/plugins/JavaScriptLanguage/jsLanguageServicesImpl/external/react";

export function Navigation(props: {onBtnClick ?:(e?:MouseEvent)=> void, Searchbar ?: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal; }) {
    return (
        <React.Fragment>
            <div style={style.container} className={'nav-position'}>
               <div style={style.blockWrapper}>
                <div style={style.blockStart}>
                   <Logo />
                </div>
                <div style={style.block}>
                    {props.Searchbar}
                </div>
                   <div style={style.blockEnd} className={'text-center'}>
                     <Link to={'/note'} style={style.addBtn} >
                       <div className={'light-border light'} onClick={(e)=>{props?.onBtnClick(e)}} >Add Note</div>
                     </Link>
                   </div>
               </div>
            </div>
        </React.Fragment>
    )
}