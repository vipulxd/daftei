import {NoteInterface} from "../utlis/interfaces";

export interface TemplateInterface extends NoteInterface {
    title:string
}
export let templates : TemplateInterface[] = [
    {
        content:'<h1>Test A</h1>',
        title:'Template test'
    },
    {
        content:'<h1>Test B</h1>',
        title:'Template test'
    },
    {
        content:'<h1>Test C</h1>',
        title:'Template test'
    },
    {
        content:'<h1>Test D</h1>',
        title:'Template test'
    }
]