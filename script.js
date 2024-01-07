const myLibrary = [];

function Book(author,title,numberOfPages,readOrNot) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.readOrNot = readOrNot;
}

const book = new Book()


let button = document.querySelector('button');



function form(){


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
form.appendChild(authorLabel);
form.appendChild(authorInput);

// #2
let titleLabel = document.createElement('label');
titleLabel.textContent = 'Title';

let titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.name = 'title';
titleInput.placeholder = 'Enter book title...';
form.appendChild(titleLabel);
form.appendChild(titleInput);


// #3
let numberOfPagesLabel = document.createElement('label');
numberOfPagesLabel.textContent = 'Number of pages :';

let numberOfPagesInput = document.createElement('input');
numberOfPagesInput.type = 'number';
numberOfPagesInput.name = 'numberOfPagesInput';
numberOfPagesInput.placeholder = 'Enter number of pages...';
form.appendChild(numberOfPagesLabel);
form.appendChild(numberOfPagesInput);

// #4
let readOrNotLabel = document.createElement('label');
readOrNotLabel.textContent = 'Have you read this book?';

let readOrNotInput = document.createElement('input');
readOrNotInput.type = 'checkbox';
readOrNotInput.name = 'readOrNotInput';
form.appendChild(readOrNotLabel);
form.appendChild(readOrNotInput);

let submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit';
submitButton.onclick = addBookToLibrary();
form.appendChild(submitButton);

document.body.appendChild(form);
}











button.addEventListener('click', form);





function addBookToLibrary() {
  
}