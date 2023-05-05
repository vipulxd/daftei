import React, {useEffect, useState} from 'react';
import {NoteInterface} from "../utlis/interfaces";
import {Props} from "./auth.context";
import {fetchAllNotes} from "../api/db.api";


export const NoteContext = React.createContext<any>({
    notes: []
});

const NoteContextProvider = ({children}: Props) => {
    let [notes, setNotes] = useState<NoteInterface[]>([]);

    useEffect(() => {
        fetchNotes();
    }, [])

    function fetchNotes() {
        fetchAllNotes((data: NoteInterface[]) => {
            setNotes(data);
        }, () => {
            setNotes([]);
        })
    }

    return (
        <NoteContext.Provider value={{notes,fetchNotes}}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteContextProvider;