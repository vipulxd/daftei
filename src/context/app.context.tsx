import React, {useEffect, useState} from 'react';
import {initDB} from "../api/db.api";

let ApplicationContext = React.createContext(null);

export interface Props {
    children: JSX.Element | JSX.Element[] | string
}
export const ApplicationProvider = ({children}:Props )=>{
    let [storeinitiated,update] = useState<boolean>(false);
    useEffect(()=>{
        initDB(function onSuccess(){
            update(true)})
    },[])
    return (
        <ApplicationContext.Provider value={null}>
            {storeinitiated ? children : ''}
            </ApplicationContext.Provider>
    )
}