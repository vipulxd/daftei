import React from 'react';
import {style} from "./navigation.style";
import {Searchbar} from "../search";
import {Logo} from "../logo";

export function Navigation() {
    return (
        <React.Fragment>
            <div style={style.container}>
                <div style={style.blockStart}>
                   <Logo />
                </div>
                <div style={style.block}>
                    <Searchbar/>
                </div>
            </div>
        </React.Fragment>
    )
}