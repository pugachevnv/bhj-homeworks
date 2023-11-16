const fontSize = Array.from(document.querySelectorAll('.font-size'));
const bookContent = document.querySelector('.book__content');

fontSize.forEach((size) => {
    size.addEventListener('click', (event) => {
        event.preventDefault();
        fontSize.forEach((size) => {
            size.classList.remove('font-size_active');
            bookContent.classList.remove('book_fs-' + size.dataset.size);
        });
        size.classList.add('font-size_active');
        bookContent.classList.add('book_fs-' + size.dataset.size);
    });
});