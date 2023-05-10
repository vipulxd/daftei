import {NoteInterface} from "../utlis/interfaces";
let db;
export const initDB = () => {
    const request: any = window.indexedDB.open('hulk');
    request.onerror = (e: any) => {
        console.error(e)
    }
    request.onsuccess = function () {
        db = request.result;
    }
    request.onupgradeneeded = function () {
        db = request.result;
        let store = db.createObjectStore("note", {keyPath: 'note_id'})
        store.createIndex('content', 'content');
        store.createIndex('note_id', 'note_id', {unique: true});
        store.createIndex('created_at', 'created_at', {unique: false});
        store.createIndex('updated_at', 'updated_at', {unique: false});
    }

}

export const fetchAllNotes = (onSuccess?: (data: NoteInterface[]) => void, onError?: (error: string) => void) => {
    try {
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
    } catch (e) {}
}

export function getNote(noteId: string, success: (note: NoteInterface) => void, onError: (e: string) => void) {
    try {
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
    } catch (e) {
    }
}


export const updateNote = (updatedNote: NoteInterface, noteId: string, onSuccess: (note: NoteInterface) => void) => {
    try {
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
    } catch (e) {
    }
}

export const deleteNote = (noteId: string, onSuccess: (success: boolean) => void) => {
    try {
        let req: any = window.indexedDB.open('hulk');
        req.onsuccess = function (e) {
            db = e.target.result;
            let tx: any = db.transaction('note', 'readwrite');
            let store = tx.objectStore('note');
            let request = store.delete(noteId);
            request.onsuccess = function () {
                onSuccess(true)
            }
        }
    } catch (e) {

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