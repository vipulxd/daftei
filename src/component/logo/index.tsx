import React from 'react';
import {style} from "./logo.style";
import {Link} from "react-router-dom";

export function Logo() {
    return (
        <Link to={'/'}>
            <img src={'/assets/logo-no-background.svg'}
                 alt={'logo'}
                 style={style.image}/>
        </Link>
    )
}