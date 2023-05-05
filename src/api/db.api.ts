import {NoteInterface} from "../utlis/interfaces";


let request: any = window.indexedDB.open('hulk');
let db: any;

export const initDB = () => {
    request.onerror = (e: any) => {
        throw e;
    }
    request.onsuccess = (e: any) => {
        db = e.target.result;
    }
    request.onupgradeneeded = (e: any) => {
        db = e.target.result;
        db.createObjectStore("note", {keyPath: 'note_id'})
    }

}

export const fetchAllNotes = (onSuccess?: (data: NoteInterface[]) => void, onError?: (error: string) => void) => {
    request.onsuccess = (e: any) => {
        db = e.target.result;
        let tx: any = db.transaction("note", "readonly");
        let notes = tx.objectStore('note');
        let cursor = notes.openCursor();
        let collection: NoteInterface[] = [];
        cursor.onsuccess = (e: any) => {
            let cursor = e.target.result;
            if (cursor) {
                collection.push(cursor.value);
                cursor.continue();
            } else {
                onSuccess(collection);
            }
        }
    }
}

export function getNote(noteId: string, onSuccess: (note: NoteInterface) => void,onError :(e:string)=>void) {
    let tx = db.transaction('note', 'readwrite');
    let request = tx.objectStore('note');
    request.get(noteId);
    request.onsuccess(e => {
        onSuccess(e.target.result);
    })
    request.onerror(()=>{
        onError("Note not found");
    })

}

export const updateNote = (updatedNote: NoteInterface, noteId: string) => {
    let tx = db.transaction('note', 'readwrite');
    let request = tx.objectStore('note');
    request.put(updatedNote, noteId)
}
export const deleteNote = (noteId: string) => {
    let tx: any = db.transaction('note', 'readwrite');
    let request = tx.objectStore('note');
    request.delete(noteId);

}
export const createNote = (note: NoteInterface[],onSuccess:(NoteInterface)=> void) => {
    let tx: any = db.transaction("note", "readwrite");
    let request = tx.objectStore('note');
    request.add(note);
    request.onsuccess(e=>{
        onSuccess(e.target.result);
    })
}