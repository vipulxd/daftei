import React from 'react';
import {style} from "./navigation.style";
import {Searchbar} from "../search";
import {Logo} from "../logo";
import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <React.Fragment>
            <div style={style.container} className={'nav-position'}>
               <div style={style.blockWrapper}>
                <div style={style.blockStart}>
                   <Logo />
                </div>
                <div style={style.block}>
                    <Searchbar/>
                </div>
                   <div style={style.blockEnd} className={'text-center'}>
                     <Link to={'/note'} style={style.addBtn} >
                       <div className={'light-border light'} >Add Note</div>
                     </Link>
                   </div>
               </div>
            </div>
        </React.Fragment>
    )
}