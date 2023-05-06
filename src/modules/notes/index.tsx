import React from 'react';
import {Note} from "../../component/note";
import {NoteInterface} from "../../utlis/interfaces";
import {NoteContext} from "../../context/note.context";
import {style} from "./note.style";
import { deleteNote } from '../../api/db.api';
import { NoNotesPage } from '../../pages/no-notes.page';
import { useSnackbar } from 'react-simple-snackbar'
import { SnackOptions } from '../../utlis/helper-functions';

export function NotesModule() {
    const [openSnackbar, closeSnackbar] = useSnackbar(SnackOptions)
    let data = React.useContext<any>(NoteContext);
    function handleDelete(noteId){
        deleteNote(noteId,(success)=>{
            if(success){
               data.fetchNotes();
               openSnackbar('Note removed')
            }
        })
    }
    return (
        <React.Fragment>
            <div style={style.container} className={'flex-wrap grid'}>
                {data.notes.map((itx: NoteInterface, ind: number) => {
                    return <Note note={itx} index={ind} onDelete={(note_id)=>handleDelete(note_id)}/>
                })}
                {data.notes.length == 0 && <NoNotesPage />}
            </div>
        </React.Fragment>
    )
}