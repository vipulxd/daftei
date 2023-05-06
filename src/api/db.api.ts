import {NoteInterface} from "../utlis/interfaces";

let db;
export const initDB = () => {
    const request: any = window.indexedDB.open('hulk');
    console.log('ran')
    request.onerror = (e: any) => {
        // throw e;
        console.error(e)
    }
    request.onsuccess = function(){
        db = request.result;
        // let store = db.createObjectStore("note", {keyPath: 'note_id'})
    }
    request.onupgradeneeded = function(){
        console.log('needed')
        db = request.result;
        let store = db.createObjectStore("note", {keyPath: 'note_id'})
        store.createIndex('content','content');
        store.createIndex('note_id','note_id',{unique:true});
        store.createIndex('created_at','created_at',{unique:false});
        store.createIndex('updated_at','updated_at',{unique:false});
    }

}

export const fetchAllNotes = (onSuccess?: (data: NoteInterface[]) => void, onError?: (error: string) => void) => {
    let request: any = window.indexedDB.open('hulk');
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

export function getNote(noteId: string, success: (note: NoteInterface) => void, onError: (e: string) => void) {
    let req: any = window.indexedDB.open('hulk');
    req.onsuccess = function (event) {
        db = event.target.result;
        let tx = db.transaction('note', 'readwrite');
        let store = tx.objectStore('note');
        let request = store.get(noteId);
        request.onsuccess = function () {
            success(request.result);
        }
    }


}

export const updateNote = (updatedNote: NoteInterface, noteId: string, onSuccess: (note: NoteInterface) => void) => {
    let req: any = window.indexedDB.open('hulk');
    req.onsuccess = function (event) {
        db = event.target.result;
        let tx = db.transaction('note', 'readwrite');
        let store = tx.objectStore('note');
        let request = store.put(updatedNote);
        request.onsuccess = function () {
            onSuccess(request.result)
        }
    }


}
export const deleteNote = (noteId: string, onSuccess: (success: boolean) => void) => {
    let req: any = window.indexedDB.open('hulk');
    req.onsuccess = function(e){
        db = e.target.result;
        let tx: any = db.transaction('note', 'readwrite');
        let store = tx.objectStore('note');
        let request = store.delete(noteId);
        request.onsuccess = function () {
            onSuccess(true)
        }
    }
}
export const createNote = (note: NoteInterface, onSuccess: () => void) => {
    try {
        const req: any = window.indexedDB.open('hulk');
        let tx: any = db.transaction("note", "readwrite");
        let request = tx.objectStore('note');
        request.add(note);
        onSuccess()
    } catch (e) {

    }

}