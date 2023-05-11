import React from 'react';

export function SVGIcon(props:{top?:number,left?:number,right?:number,name:string,height:string,width:string,onClick?:(e:React.MouseEvent)=>void}){
    return (
        <img onClick={props.onClick} style={{cursor:'pointer',position:'absolute',right:props?.right,left:props?.left,top:props.top}} src={'/assets/icons/'+props.name+'.svg'} height={props.height} width={props.width}  alt={props.name}  />
    )
}