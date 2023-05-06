import React from 'react';

export function SVGIcon(props:{name:string,height:string,width:string}){
    return (
        <img style={{cursor:'pointer'}} src={'/assets/icons/'+props.name+'.svg'} height={props.height} width={props.width}  alt={props.name}  />
    )
}