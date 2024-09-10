let libraryBank = document.getElementById('library'),
    libraryBankChildren = libraryBank.children,
    myLibrary = [],
    libraryItem = document.querySelector('.library__item'),
    sample = document.querySelector('.sample'),
    titleVal = title.value,
    inputs = document.querySelectorAll('input'),
    btn = document.getElementById('add'),
    form = document.getElementById('create_book');

    sample.classList.add('nodisplay');

function toCleanValues() {
    title.value = '';
    author.value = '';
    pages.value = '';
    read.value = '';
}



function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// function createDivs() {
//     for (let i = 0; i < myLibrary.length; i++) {
//         libraryBank.appendChild(libraryItem.cloneNode(true));
//         libraryBankChildren[i].textContent += myLibrary[i];
//     }
    
// }

function addDiv() {
    //  libraryBank.appendChild(libraryItem);
     libraryBank.append(libraryItem);
}


function addBookToLibrary() {
    
}

btn.addEventListener('click', () => {

    // if ()
    
    libraryBank.appendChild(libraryItem.cloneNode(true));
    myLibrary.push(new Book(title.value, author.value, pages.value, read.value));
    console.log(myLibrary);

    for (let i = 0; i < myLibrary.length; i++) {
        
        libraryBankChildren[i].children[0].firstElementChild.textContent += myLibrary[i].title;
        libraryBankChildren[i].children[1].firstElementChild.textContent += myLibrary[i].author;
        libraryBankChildren[i].children[2].firstElementChild.textContent += myLibrary[i].pages;
        libraryBankChildren[i].children[3].firstElementChild.textContent += myLibrary[i].read;
    }

    toCleanValues();
})
