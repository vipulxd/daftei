import React, {useEffect, useState} from 'react';
import ReactQuill from 'react-quill';
import {useSnackbar} from 'react-simple-snackbar';
import {useParams} from "react-router-dom";
import 'react-quill/dist/quill.snow.css';

import {style} from './note-builder.style';
import {Navigation} from '../../component/navigation';
import {NoteInterface} from '../../utlis/interfaces';
import {getNote, updateNote} from '../../api/db.api';
import uuid from 'react-uuid';
import {QuillFormats, QuillModules, SnackOptions} from '../../utlis/helper-functions';
import {Button} from "../../component/button";
import {Dialog} from "../../component/dialog";
import {TemplateModule} from "../template";
import DataContentProvider from "../../context/note.context";
import {TemplateList} from "../../component/templateList";
import {ScrollDiv} from "../../component/scrollableContainer/style";


export function NoteBuilder(props: { note?: NoteInterface, onSave?: () => void }) {
    let {noteId} = useParams();
    const [value, setValue] = useState<string>('');
    const [openSnackbar, closeSnackbar] = useSnackbar(SnackOptions)
    const [openTemplateLib, setDialog] = useState<boolean>(false);
    const [note, setNote] = useState<NoteInterface | null>({
        note_id: noteId ? noteId : uuid(),
        content: '',
        updated_at: null,
        created_at: null
    });

    useEffect(() => {
        if (noteId || props.note) {
            getNote(noteId, (n:NoteInterface):void => {
                setNote({...n});
            }, () => {
                console.log('error');
            })
        } else {
            setNote({...note, updated_at: new Date().toDateString(), created_at: new Date().toDateString()});
        }

    }, [])

    function handleSave() {
        if(note.content === '') {
            openSnackbar('Please note something')
            return
        }
        updateNote(note, note.note_id, () => {
            openSnackbar('Note is added')
            setValue('')
            window.location.replace('/')
        })
    }

    function handleFetchTemplate(): void {
        setDialog(!openTemplateLib);
    }

    return (
        <React.Fragment>
            <Navigation
                AddNoteBtn={<Button name={"Save Note"} onBtnClick={():void=>{handleSave()}} />}
                SyncButton={<Button name={'Import template'} onBtnClick={(e): void => {handleFetchTemplate()}}/>} />
            <div style={style.EditorContainer}>
                <ReactQuill theme="snow" className={"editor"} modules={QuillModules} formats={QuillFormats} value={note.content} onChange={(e: any) => {setNote({...note, content: e});}}/>
            </div>
            <Dialog heading={"Import Templates"} show={openTemplateLib} onClose={(): void => {setDialog(false)}}>
                <DataContentProvider>
                    <ScrollDiv>
                    <TemplateModule TemplateList={<TemplateList onSelect={(content: string): void => {setNote({...note, content: content});setDialog(false)}}/>}></TemplateModule>
                    </ScrollDiv>
                </DataContentProvider>
            </Dialog>
        </React.Fragment>
    )
}

