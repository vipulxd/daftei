export const SnackOptions = {
    position: 'bottom-right',
    style: {
        backgroundColor: 'white',
        boxShadow: '#000000 0px 0px 0px 2px inset, white 7px -4px 0px -1px, rgb(0, 0, 0) 8px -4px',
        color: 'rgb(0,0,0)',
        textAlign: 'center',
        borderRadius:0,
    }
}

export const QuillFormats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'color',
    'size',
    'video',
    'align',
    'background',
    'direction',
    'code-block',
    'code',
];

export const QuillModules = {
    toolbar: [
        [{header: [1, 2, false]}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{list: 'ordered'}, {list: 'bullet'}],
        [{align: ''}, {align: 'center'}, {align: 'right'}, {align: 'justify'}],
        ['link', 'image'],
    ],
};