import React from 'react';

export function SVGIcon(props:{left?:number,right?:number,name:string,height:string,width:string,onClick?:(e:React.MouseEvent)=>void}){
    return (
        <img onClick={props.onClick} style={{cursor:'pointer',position:'absolute',right:props?.right,left:props?.left,top:0}} src={'/assets/icons/'+props.name+'.svg'} height={props.height} width={props.width}  alt={props.name}  />
    )
}