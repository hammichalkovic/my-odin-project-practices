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


function errorMessageSetting(item, value) {
    item.setCustomValidity(value);
    item.nextElementSibling.textContent = item.validationMessage;
}

function toCheckTitle() {
    if (title.value == '') {
        errorMessageSetting(title, '* Can\'t be empty');
    } else if (title.validity.tooShort) {
        errorMessageSetting(title, '* Too short');
    } else if (title.validity.tooLong) {
        errorMessageSetting(title, '* Too long');
    } else  {
        errorMessageSetting(title, '');
    }
}

function toCheckAuthor() {
    if (author.value == '') {
        errorMessageSetting(author, '* Can\'t be empty');
    } else if (author.validity.tooShort) {
        errorMessageSetting(author, '* Too short');
    } else if (author.validity.tooLong) {
        errorMessageSetting(author, '* Too long');
    } else  {
        errorMessageSetting(author, '');
    }
}

function toCheckPages() {
    if (pages.value == '') {
        errorMessageSetting(pages, '* Can\'t be empty');
    } else if (pages.validity.rangeUnderflow) {
        errorMessageSetting(pages, '* 1 page min');
    } else if (pages.validity.rangeOverflow) {
        errorMessageSetting(pages, '* 99999 pages max');
    } else  {
        errorMessageSetting(pages, '');
    }
}

function toCheckReading() {
    if (read.value == '') {
        errorMessageSetting(read, '* Can\'t be empty');
    } else if (read.validity.patternMismatch) {
        errorMessageSetting(read,'* Yes or No');
    } else  {
        errorMessageSetting(read, '');
    }
}

title.addEventListener('focusin', toCheckTitle);
title.addEventListener('input', toCheckTitle);
author.addEventListener('focusin', toCheckAuthor);
author.addEventListener('input', toCheckAuthor);
pages.addEventListener('focusin', toCheckPages);
pages.addEventListener('input', toCheckPages);
read.addEventListener('focusin', toCheckReading);
read.addEventListener('input', toCheckReading);


btn.addEventListener('click', (event) => {

    toCheckTitle();
    toCheckAuthor();
    toCheckPages();
    toCheckReading();

    if (form.checkValidity() == false) {
        event.preventDefault();
    } else {
        
    libraryBank.appendChild(libraryItem.cloneNode(true));
    myLibrary.push(new Book(title.value, author.value, pages.value, read.value));
    // console.log(myLibrary);

    // for (let i = 0; i < myLibrary.length; i++) {
        
        libraryBankChildren[myLibrary.length - 1].children[0].firstElementChild.textContent += myLibrary[myLibrary.length - 1].title;
        libraryBankChildren[myLibrary.length - 1].children[1].firstElementChild.textContent += myLibrary[myLibrary.length - 1].author;
        libraryBankChildren[myLibrary.length - 1].children[2].firstElementChild.textContent += myLibrary[myLibrary.length - 1].pages;
        libraryBankChildren[myLibrary.length - 1].children[3].firstElementChild.textContent += myLibrary[myLibrary.length - 1].read.toUpperCase();
    // }

    toCleanValues();
    }
    
    // libraryBank.appendChild(libraryItem.cloneNode(true));
    // myLibrary.push(new Book(title.value, author.value, pages.value, read.value));
    // console.log(myLibrary);

    // // for (let i = 0; i < myLibrary.length; i++) {
        
    //     libraryBankChildren[myLibrary.length - 1].children[0].firstElementChild.textContent += myLibrary[myLibrary.length - 1].title;
    //     libraryBankChildren[myLibrary.length - 1].children[1].firstElementChild.textContent += myLibrary[myLibrary.length - 1].author;
    //     libraryBankChildren[myLibrary.length - 1].children[2].firstElementChild.textContent += myLibrary[myLibrary.length - 1].pages;
    //     libraryBankChildren[myLibrary.length - 1].children[3].firstElementChild.textContent += myLibrary[myLibrary.length - 1].read.toUpperCase();
    // // }

    // toCleanValues();
})
