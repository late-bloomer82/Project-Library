const myLibrary = [];

function Book(author,title,numberOfPages,readOrNot) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.readOrNot = readOrNot;
}

const book = new Book()


let button = document.querySelector('button');




//Create form
let form = document.createElement('form');

//Create all 4 labels(input fields)


// #1
let authorLabel = document.createElement('label');
authorLabel.textContent = 'Author';
let authorInput = document.createElement('input');
authorInput.type = 'text';
authorInput.name = 'author';
authorInput.placeholder = 'Enter author name...';


// #2
let titleLabel = document.createElement('label');
titleLabel.textContent = 'Title';

let titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.name = 'title';
titleInput.placeholder = 'Enter book title...';


// #3
let numberOfPagesLabel = document.createElement('label');
numberOfPagesLabel.textContent = 'Number of pages :';

let numberOfPagesInput = document.createElement('input');
numberOfPagesInput.type = 'number';
numberOfPagesInput.name = 'numberOfPagesInput';
numberOfPagesInput.placeholder = 'Enter number of pages...';

// #4
let readOrNotLabel = document.createElement('label');
readOrNotLabel.textContent = 'Have you read this book?';

let readOrNotInput = document.createElement('input');
readOrNotInput.type = 'checkbox';
readOrNotInput.name = 'readOrNotInput';












button.addEventListener('click', ()=>{
    
})





function addBookToLibrary() {
  
}