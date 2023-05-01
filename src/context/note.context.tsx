import React, {useState} from 'react';
import {story} from "../mock/notes";
import {InterfaceCollection, UserNotesProps} from "../utlis/interfaces";
import {Props} from "./auth.context";



export const NoteContext = React.createContext<any>(null);

const  NoteContextProvider = ({children}:Props)=>{
    const [notes,setNotes] = useState<UserNotesProps[]>(story);
    return (
        <NoteContext.Provider value={{notes}}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteContextProvider;