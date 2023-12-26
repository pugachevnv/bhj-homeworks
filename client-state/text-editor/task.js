const storedContent = localStorage.getItem( 'content' );
const editor = document.getElementById( 'editor' );
const clear = document.getElementById( 'clear' );

if (storedContent) {
    editor.value = storedContent;
} else {
    editor.addEventListener('input', () =>{
        const content = editor.value;
        localStorage.setItem('content', content);
    });
}

clear.addEventListener('click', () => {
    localStorage.removeItem('content');
    editor.value = '';
});


