const addBookBtn = document.querySelector('.add-book-btn');
const modal = document.querySelector('[data-modal]');
const cancelModal = document.getElementById('cancel-modal');
const submitForm = document.getElementById('submit-modal');
const form = document.querySelector('.form');

const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookPages = document.getElementById('book-pages');
const bookRead = document.getElementById('book-read');

const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function resetForm(){
    modal.close();
    form.reset();
    bookRead.setAttribute('data-value', 'false');
}

function addBookToLibrary(){
    // All fields are filled
    if(bookTitle.value !== '' && bookAuthor.value !== '' &&
    bookPages.value !== ''){
        // Push a new book object to myLibrary arr
        myLibrary.push(new Book(bookTitle.value, bookAuthor.value,
            bookPages.value, bookRead.getAttribute('data-value')));

        // Reset Form
        resetForm();
        console.log(myLibrary);
    }
    else return;
}

addBookBtn.addEventListener('click', () => {
    modal.showModal();
})

cancelModal.addEventListener('click', () => {
    modal.close();
})

bookRead.addEventListener('click', () => {
    if(bookRead.getAttribute('data-value') === 'false'){
        bookRead.setAttribute('data-value', 'true');
    }
    else if(bookRead.getAttribute('data-value') === 'true'){
        bookRead.setAttribute('data-value', 'false');
    }
})

submitForm.addEventListener('click', (e) => {
    e.preventDefault();

    addBookToLibrary();
})