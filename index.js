const addBookBtn = document.querySelector('.add-book-btn');
const modal = document.querySelector('[data-modal]');
const cancelModal = document.getElementById('cancel-modal');
const submitForm = document.getElementById('submit-modal');
const form = document.querySelector('.form');
const bookList = document.querySelector('.book-container');

const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookPages = document.getElementById('book-pages');
const bookRead = document.getElementById('book-read');

const myLibrary = [];
let bookCounter = 0;

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
    // Push a new book object to myLibrary arr
    myLibrary.push(new Book(bookTitle.value, bookAuthor.value,
        bookPages.value, bookRead.getAttribute('data-value')));

    // Reset Form
    resetForm();
}

function displayLibrary(){
    // remove all cards
    bookList.innerHTML = '';
    //loop through library
    myLibrary.forEach((item, index) => {
        addBookToDOM(item.title, item.author, item.pages, item.read, index);
    })
}

function addBookToDOM(title, author, pages, read, index){

    const card = document.createElement('div');
    card.classList.add('card');
    bookList.appendChild(card);
    
    // card header
    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    card.appendChild(cardHeader);

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    cardHeader.appendChild(titleContainer);

    const deleteBook = document.createElement('i');
    deleteBook.classList.add('fa-solid');
    deleteBook.classList.add('fa-trash');
    deleteBook.classList.add('delete-book');

    // delete book functionality
    deleteBook.addEventListener('click', () => {
        myLibrary.splice(index, 1);
        displayLibrary();
    });

    cardHeader.appendChild(deleteBook);

    const bookTitle = document.createElement('h1');
    const titleText = document.createTextNode(title);
    bookTitle.appendChild(titleText);
    titleContainer.appendChild(bookTitle);

    // card body
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);

    const readLabel = document.createElement('span');

    if(read === 'true'){
        readLabel.classList.add('read');
        const readText = document.createTextNode('Read');
        readLabel.appendChild(readText);
    }
    else{
        readLabel.classList.add('not-read');
        const readText = document.createTextNode('Not Read');
        readLabel.appendChild(readText);
    }

    // Change read status
    readLabel.addEventListener('click', () => {
        const status = myLibrary[index].read;
        if(status === 'true') myLibrary[index].read = 'false';
        else myLibrary[index].read = 'true';

        displayLibrary();
    })

    cardBody.appendChild(readLabel);

    const authorLabel = document.createElement('span');
    authorLabel.classList.add('author');
    const authorText = document.createTextNode(`Author: ${author}`);
    authorLabel.appendChild(authorText);
    cardBody.appendChild(authorLabel);

    const pagesLabel = document.createElement('span');
    pagesLabel.classList.add('pages');
    const pagesText = document.createTextNode(`Pages: ${pages}`);
    pagesLabel.appendChild(pagesText);
    cardBody.appendChild(pagesLabel);
}

addBookBtn.addEventListener('click', () => {
    modal.showModal();
})

cancelModal.addEventListener('click', () => {
    resetForm();
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
    if(bookTitle.value !== '' && bookAuthor.value !== '' &&
    bookPages.value !== ''){
        e.preventDefault();
        addBookToLibrary();
        displayLibrary();
    }
})