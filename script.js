const myLibrary = [];



let button = document.querySelector('button');

//Making these variables globally acessible
let authorInput;
let titleInput;
let pagesInput
let readInput;

function makeForm(){


//Create form
let form = document.createElement('form');


//Create all 4 labels(input fields)


// #1
let authorLabel = document.createElement('label');
authorLabel.textContent = 'Author';
authorInput = document.createElement('input');
authorInput.type = 'text';
authorInput.name = 'author';
authorInput.placeholder = 'Enter author name...';
form.appendChild(authorLabel);
form.appendChild(authorInput);

console.log(authorInput); // Log the input element to the console

// #2
let titleLabel = document.createElement('label');
titleLabel.textContent = 'Title';

titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.name = 'title';
titleInput.placeholder = 'Enter book title...';
form.appendChild(titleLabel);
form.appendChild(titleInput);


// #3
let pagesLabel = document.createElement('label');
pagesLabel.textContent = 'Number of pages :';

pagesInput = document.createElement('input');
pagesInput.type = 'number';
pagesInput.name = 'pagesInput';
pagesInput.placeholder = 'Enter number of pages...';
form.appendChild(pagesLabel);
form.appendChild(pagesInput);

// #4
let readLabel = document.createElement('label');
readLabel.textContent = 'Have you read this book?';

readInput = document.createElement('input');
readInput.type = 'checkbox';
readInput.name = 'readInput';
form.appendChild(readLabel);
form.appendChild(readInput);

//Submit button
let submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit';
form.appendChild(submitButton);

submitButton.addEventListener('click', function (event) {
    if(titleInput.value ==="" || authorInput.value ==="" || pagesInput.value === "" || readInput.value ==="" ){
        alert("Please fill out all fields");
       
    }
    else{
    event.preventDefault(); // Prevent the default form submission behavior
    addBookToLibrary(); // Call your function to handle the data
    emptyForm();
    }
    
});



//Appending form to  dialog element
let popup = document.getElementById('popup');
popup.appendChild(form);
popup.showModal();

submitButton.addEventListener('click',()=>{
    popup.close()
    popup.textContent = "";
})

}


function emptyForm(){
    authorInput.value = "";
    titleInput.value = "";
    pagesInput.value = "";
    readInput.value = "";
}

button.addEventListener('click', makeForm);







function Book(author,title,pages,read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}


let library = document.querySelector('.library');

function addBookToLibrary() {
    let authorValue = authorInput.value;
    let titleValue = titleInput.value;
    let pagesValue = pagesInput.value;
    let readValue = readInput.checked;

    let newBook = new Book(authorValue, titleValue, pagesValue, readValue);

    myLibrary.push(newBook);

    let card = document.createElement('div');
    card.className = 'card';
    

    let title = document.createElement('h2');
    title.textContent = 'Title:' + titleValue;
    card.appendChild(title);

    let author = document.createElement('h4')
    author.textContent = 'Author:' + authorValue;
    card.appendChild(author);


    let pages = document.createElement('h4');
    pages.textContent = 'Number of pages:' + pagesValue;
    card.appendChild(pages);

    let read = document.createElement('h4');
    read.textContent = 'Have you read the book? :' + readValue;
    card.appendChild(read);

    library.appendChild(card);
    



    
   
    // for(let i=0;i<=myLibrary.length;i++){
    //     let card = document.createElement('div');
    //     card.className = 'card';

    //     card.textContent = `Title: ${myLibrary[i].title}, Author: ${myLibrary[i].author}, Pages: ${myLibrary[i].pages}, Read: ${myLibrary[i].read}`;

    //     document.body.appendChild(card);
    // }
}

