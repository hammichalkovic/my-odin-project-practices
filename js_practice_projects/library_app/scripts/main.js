let libraryBank = document.getElementById('library'),
    libraryBankChildren = libraryBank.children,
    myLibrary = [],
    libraryItem = document.querySelector('.library__item'),
    sample = document.querySelector('.sample'),
    titleVal = title.value,
    inputs = document.querySelectorAll('input'),
    btn = document.getElementById('add');

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
    myLibrary.push(new Book(title.value, author.value, pages.value, read.value));

    for (let i = 0; i < myLibrary.length; i++) {
        libraryBank.appendChild(libraryItem.cloneNode(true));
        libraryBankChildren[i].children[0].firstElementChild = myLibrary[i].title;
        libraryBankChildren[i].children[1].firstElementChild = myLibrary[i].author;
        libraryBankChildren[i].children[2].firstElementChild = myLibrary[i].pages;
        libraryBankChildren[i].children[3].firstElementChild = myLibrary[i].read;
    }

    toCleanValues();
})
