import React from 'react';
import {style} from "./navigation.style";
import {Searchbar} from "../search";
import {Logo} from "../logo";
import {Link} from "react-router-dom";
import {Button} from '../button';

export function Navigation(props: {AddNoteBtn?: React.ReactElement, SyncButton?: React.ReactElement, onBtnClick?: (e: any) => void, Searchbar?: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal; }) {
    return (
        <React.Fragment>
            <div style={style.container} className={'nav-position'}>
                <div style={style.blockWrapper}>
                    <div style={style.blockStart}>
                        <Logo/>
                    </div>
                    <div style={style.block}>
                        {props.Searchbar}
                    </div>
                    {
                        props.SyncButton && <div style={style.blockEnd} className={'text-center'}>
                            {props.SyncButton}
                        </div>
                    }
                    {
                      props.AddNoteBtn &&  <div style={style.blockEnd} className={'text-center'}>
                            <Link to={'/note'} style={style.addBtn}>
                                {props.AddNoteBtn}
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}