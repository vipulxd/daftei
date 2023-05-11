import React, {useEffect, useState} from 'react';
import {NoteInterface} from "../utlis/interfaces";
import {Props} from "./app.context";
import {fetchAllNotes} from "../api/db.api";
import {TemplateInterface, templates} from "../mock/templates";


export const DataContext = React.createContext<any>({
    notes: []
});

const DataContentProvider = ({children}: Props) => {
    let [notes, setNotes] = useState<NoteInterface[]>([]);
    let [template,setTemplates ] = useState<TemplateInterface[]>(templates);
    useEffect(() => {
        fetchNotes();
    }, [])

    function fetchNotes() {
        fetchAllNotes((data: NoteInterface[]) => {
            let sortedNotes : NoteInterface[] = data.sort((a:NoteInterface,b:NoteInterface)=>{
                if(a.created_at < b.created_at) return 1
                else return 0
                })
            setNotes(sortedNotes);
        }, () => {
            setNotes([]);
        })
    }

    return (
        <DataContext.Provider value={{notes,fetchNotes,template}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContentProvider;