const myLibrary = [];

const addBookBtn = document.querySelector('.add-book-btn');
const modal = document.querySelector('[data-modal]');
const cancelModal = document.getElementById('cancel-modal');

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){

}

addBookBtn.addEventListener('click', () => {
    modal.showModal();
})

cancelModal.addEventListener('click', () => {
    modal.close();
})