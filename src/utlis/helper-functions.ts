export const  SnackOptions  ={
    position: 'bottom-right',
    style: {
        backgroundColor: '#09111b',
        border: '2px solid rgb(163, 207, 167)',
        color: 'rgb(163, 207, 167)',
        textAlign: 'center',
    }
}

export const  QuillFormats  = [
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
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
        ['link', 'image'],
    ],
};