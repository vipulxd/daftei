import React, {useEffect, useState} from 'react';
import {NoteInterface, TemplateInterface} from "../utlis/interfaces";
import {Props} from "./app.context";
import {fetchAllNotes, fetchAllTemplates} from "../api/db.api";



export const DataContext = React.createContext<any>({
    notes: []
});

const DataContentProvider = ({children}: Props) => {
    let [notes, setNotes] = useState<NoteInterface[]>([]);
    let [template,setTemplates ] = useState<TemplateInterface[]>([]);
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
        fetchAllTemplates((data:TemplateInterface[])=>{
            setTemplates([...data])
        })
    }

    return (
        <DataContext.Provider value={{notes,fetchNotes,template}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContentProvider;