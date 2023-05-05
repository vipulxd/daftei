import React, {useEffect, useState} from 'react';
import ReactQuill from 'react-quill';
import {useLocation, useParams} from "react-router-dom";
import 'react-quill/dist/quill.snow.css';
import {style} from './note-builder.style';
import {Navigation} from '../../component/navigation';
import {Searchbar} from '../../component/search';
import {NoteInterface} from '../../utlis/interfaces';
import {createNote, getNote, updateNote} from '../../api/db.api';
import uuid from 'react-uuid';

export function NoteBuilder(props: { note?: NoteInterface, onSave?: () => void }) {
    const [value, setValue] = useState<any>('');
    const [note, setNote] = useState<NoteInterface | null>({note_id: uuid(), content: '',updated_at:null,created_at:null});
    let {noteId} = useParams();
    useEffect(() => {
        if (noteId || props.note) {
            getNote(noteId, (note) => {
                setNote({...note});
            }, () => {
                console.log('error');
            })
        }else{
            setNote({...note,updated_at:new Date().toDateString(),created_at:new Date().toDateString()});
        }

    }, [])
    function handleSave() {
        updateNote(note, note.note_id, () => {
            setValue('')
            window.location.replace('/')
        })
    }
    return (
        <React.Fragment>
            <Navigation onBtnClick={(e: any) => {
                handleSave()
            }}/>
            <div style={style.EditorContainer}>
                <ReactQuill theme="snow" className={"editor"} value={note.content} onChange={(e: any) => {
                    setNote({...note, content: e});

                }}
                />
            </div>
        </React.Fragment>
    )
}