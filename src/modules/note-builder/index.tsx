import React, {useEffect, useState} from 'react';
import ReactQuill from 'react-quill';
import {useSnackbar} from 'react-simple-snackbar';
import {useParams} from "react-router-dom";
import 'react-quill/dist/quill.snow.css';

import {style} from './note-builder.style';
import {Navigation} from '../../component/navigation';
import {NoteInterface, TemplateInterface} from '../../utlis/interfaces';
import {getNote, updateNote, updateTemplate} from '../../api/db.api';
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
    const [template,setTemplate] = useState<TemplateInterface>({template_id:uuid(),content:''})

    useEffect(() => {
        if (noteId || props.note) {
            getNote(noteId, (n:NoteInterface):void => {
                setNote(n);
            }, function onError()  {})
        } else {
            setNote({...note, updated_at: new Date().toDateString(), created_at: new Date().toDateString()});
        }
    }, []);
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
    function saveAsTemplate():void{
       if(note.content === ''){
           openSnackbar('Please write something first')
           return
       }

        let data:TemplateInterface = {
           template_id : template.template_id,
           content : note.content
       }
       updateTemplate(data,data.template_id,function onSuccess(data:TemplateInterface){
            openSnackbar('Saved new template')
            setNote({...note,content:''})
        })
    }
    function handleFetchFromDialog(content){
        setNote({...note, content: content});
        setDialog(false)
    }

    return (
        <React.Fragment>
            <Navigation
                ImportTemplateOption={<Button name={'Use as Template'} onBtnClick={()=>{saveAsTemplate()}} />}
                AddNoteBtn={<Button name={"Save Note"} onBtnClick={():void=>{handleSave()}} />}
                SyncButton={<Button name={'Import template'} onBtnClick={(e): void => {handleFetchTemplate()}}/>} />
            <div style={style.EditorContainer}>
                <ReactQuill theme="snow" className={"editor"} modules={QuillModules} formats={QuillFormats} value={note.content} onChange={(e: any) => {setNote({...note, content: e});}}/>
            </div>
            <Dialog heading={"Import Templates"} show={openTemplateLib} onClose={(): void => {setDialog(false)}}>
                <DataContentProvider>
                    <ScrollDiv>
                    <TemplateModule TemplateList={<TemplateList onSelect={(content: string): void => {handleFetchFromDialog(content)}}/>}></TemplateModule>
                    </ScrollDiv>
                </DataContentProvider>
            </Dialog>
        </React.Fragment>
    )
}

