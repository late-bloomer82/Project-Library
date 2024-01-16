const myLibrary = [];



let button = document.getElementById('newbook');

//Making these variables globally acessible
let authorInput;
let titleInput;
let pagesInput
let readInput;

function makeForm() {


    //Create form
    let form = document.createElement('form');

    
    //Popup closing button 
    let formCloseButton = document.createElement('button')
    formCloseButton.textContent = "X";
    formCloseButton.id = 'formCloseButton'
    form.appendChild(formCloseButton);
    
    
    formCloseButton.addEventListener('click', (event)=>{
        //Prevent page refresh 
        event.preventDefault();
        popup.close()
        //Avoid creating a duplicate form upon reclicking new book button.
        popup.textContent ="";
        
    })
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
    pagesInput.min = '0';
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
    submitButton.id = 'submitButton';
    form.appendChild(submitButton);

    //Input Error handling
    submitButton.addEventListener('click', function (event) {
        if (titleInput.value === "" || authorInput.value === "" || pagesInput.value === "" || readInput.value === "") {
            alert("Please fill out all fields");

        }
        else {
            event.preventDefault(); // Prevent the default form submission behavior
            addBookToLibrary(); 
            emptyForm();
        }

    });



    //Appending form to  dialog element
    let popup = document.getElementById('popup');
    popup.appendChild(form);
    popup.showModal();

    submitButton.addEventListener('click', () => {
        popup.close()
        popup.textContent = "";
    })

}


function emptyForm() {
    authorInput.value = "";
    titleInput.value = "";
    pagesInput.value = "";
    readInput.value = "";
}

button.addEventListener('click', makeForm);





//Construsctor function
class Book {
    constructor(author, title, pages , read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}
}


let library = document.querySelector('.library');



function addBookToLibrary() {
    let authorValue = authorInput.value;
    let titleValue = titleInput.value;
    let pagesValue = pagesInput.value;
    let readValue = readInput.checked;

    //Constructor creating an instance of book
    let newBook = new Book(authorValue, titleValue, pagesValue, readValue);

    myLibrary.push(newBook);

    let card = document.createElement('div');
    card.className = 'card';

    let closeButtonContainer = document.createElement('div');
    closeButtonContainer.className = 'closeButtonContainer';
    card.appendChild(closeButtonContainer);

    let closeButton = document.createElement('button')
    closeButton.id = 'closeButton';
    closeButtonContainer.appendChild(closeButton);

    closeButton.addEventListener('click', () => {
        card.remove();
    })



    let title = document.createElement('h2');
    title.textContent = 'Title: ' + titleValue;
    card.appendChild(title);

    let author = document.createElement('h4')
    author.textContent = 'Author: ' + authorValue;
    card.appendChild(author);


    let pages = document.createElement('h4');
    pages.textContent = 'Number of pages: ' + pagesValue;
    //Error handling for negative pages input
    if (pagesInput.value <= 0) {
        alert("Please enter a positive number")
        return;
    }
    card.appendChild(pages);

    let read = document.createElement('h4');
    if (readValue === true) {
        read.textContent = 'Have you read the book? : Yes';
    }
    else {
        read.textContent = 'Have you read the book? : No';
    }


    card.appendChild(read);




    let readStatusButton = document.createElement('button');
    readStatusButton.id = 'readStatusButton';

    if (readValue === true) {
        readStatusButton.style.backgroundColor = 'green';
        readStatusButton.textContent = 'Read';
    }
    else {
        readStatusButton.style.backgroundColor = 'red';
        readStatusButton.textContent = 'Not Read';
    }
    card.appendChild(readStatusButton);


    //Read Status button color toggling
    readStatusButton.addEventListener('click', () => {


        let backgroundColor = window.getComputedStyle(readStatusButton).backgroundColor;

        if (backgroundColor === 'rgb(0, 128, 0)') {
            readStatusButton.style.backgroundColor = 'red';
            readStatusButton.textContent = 'Not Read';

        }
        if (backgroundColor === 'rgb(255, 0, 0)') {
            readStatusButton.style.backgroundColor = 'green';
            readStatusButton.textContent = 'Read';

        }

    })




    //Append the whole card to the library section
    library.appendChild(card);


}

/*loop section*/


// for(let i=0;i<=myLibrary.length;i++){
//     let card = document.createElement('div');
//     card.className = 'card';

//     card.textContent = `Title: ${myLibrary[i].title}, Author: ${myLibrary[i].author}, Pages: ${myLibrary[i].pages}, Read: ${myLibrary[i].read}`;

//     document.body.appendChild(card);
// }