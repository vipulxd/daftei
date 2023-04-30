import React from 'react';
import {Link} from "react-router-dom";

export function ErrorPage(){
    return (
        <React.Fragment>
        No Such page found , please go to <Link to={'/'}  > Home </Link>
    </React.Fragment>)
}