import React from 'react';



export function  TemplateModule(props:{TemplateList:JSX.Element}):JSX.Element {
    return (
        <React.Fragment>
            {props.TemplateList}
        </React.Fragment>
    )
}