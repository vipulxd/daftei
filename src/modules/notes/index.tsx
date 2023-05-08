import React from 'react';
import {Note} from "../../component/note";
import {NoteInterface} from "../../utlis/interfaces";
import {DataContext} from "../../context/note.context";
import {style} from "./note.style";
import {deleteNote} from '../../api/db.api';
import {NoNotesPage} from '../../pages/no-notes.page';
import {useSnackbar} from 'react-simple-snackbar'
import {SnackOptions} from '../../utlis/helper-functions';
import {SVGIcon} from "../../component/icons/SVGIcon";

export function NotesModule() {
    const [openSnackbar, closeSnackbar] = useSnackbar(SnackOptions)
    let data = React.useContext<any>(DataContext);

    function handleDelete(noteId) {
        deleteNote(noteId, (success:boolean) :void => {
            if (success) {
                data.fetchNotes();
                openSnackbar('Note removed')
            }
        })
    }

    return (
        <React.Fragment>
            <div style={style.container} className={'flex-wrap grid'}>
                {data.notes.map((itx: NoteInterface, ind: number) => {return <Note
                    EditIcon={<SVGIcon right={40} onClick={():void=>{window.location.replace('/note/' + itx.note_id)}} name={'edit'}  height={'50px'} width={'15px'}/>}
                    RemoveIcon={<SVGIcon right={10} onClick={():void=>{handleDelete(itx.note_id)}} name={'delete'} height={'50px'} width={'20px'}/>}
                    note={itx}
                    index={ind}
                    />}
                )}
                {data.notes.length == 0 && <NoNotesPage/>}
            </div>
        </React.Fragment>
    )
};


