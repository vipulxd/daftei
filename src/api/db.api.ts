import {NoteInterface, TemplateInterface} from "../utlis/interfaces";

let db;
export const initDB = (onSuccess: () => void, onError?: () => void) => {
    let request: any = window.indexedDB.open('hulk', 2);
    request.onerror = (e: any) => {
        console.error(e)
    }
    request.onsuccess = function (event) {
        db = event.target.result;
        onSuccess()
    }
    request.onversionchange = function(){
        db.close();
        window.location.reload();
    }
    request.onupgradeneeded = function (event) {
        db = event.target.result;
        if (!db.objectStoreNames.contains('note')) {
            let noteStore = db.createObjectStore("note", {keyPath: 'note_id'})
            noteStore.createIndex('content', 'content');
            noteStore.createIndex('note_id', 'note_id', {unique: true});
            noteStore.createIndex('created_at', 'created_at', {unique: false});
            noteStore.createIndex('updated_at', 'updated_at', {unique: false});
        }
        if (!db.objectStoreNames.contains('template')) {
            let templateStore = db.createObjectStore('template', {keyPath: 'template_id'});
            templateStore.createIndex('content', 'content');
            templateStore.createIndex('template_id', 'template_id', {unique: true});
        }
        onSuccess()
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
                    console.log(collection)
                    onSuccess(collection);
                }
            }
        }
    } catch (e) {
    }
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


export const updateTemplate = (template: TemplateInterface, template_id: string, onSuccess: (note: TemplateInterface) => void) => {
    try {
        let req: any = window.indexedDB.open('hulk');
        req.onsuccess = function (event) {
            db = event.target.result;
            let tx = db.transaction('template', 'readwrite');
            let store = tx.objectStore('template');
            let request = store.put(template);
            request.onsuccess = function () {
                onSuccess(request.result)
            }
        }
    } catch (e) {
    }
}

export const fetchAllTemplates = (onSuccess?: (data: TemplateInterface[]) => void, onError?: (error: string) => void) => {
    try {
        let request: any = window.indexedDB.open('hulk');
        request.onsuccess = (e: any) => {
            db = e.target.result;
            let tx: any = db.transaction("template", "readonly");
            let notes = tx.objectStore('template');
            let cursor = notes.openCursor();
            let collection: TemplateInterface[] = [];
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
    } catch (e) {
    }
};

export const deleteTemplate = (templateId: string, onSuccess: (success: boolean) => void) => {
    try {
        let req: any = window.indexedDB.open('hulk');
        req.onsuccess = function (e) {
            db = e.target.result;
            let tx: any = db.transaction('template', 'readwrite');
            let store = tx.objectStore('template');
            let request = store.delete(templateId);
            request.onsuccess = function () {
                onSuccess(true)
            }
        }
    } catch (e) {

    }

}