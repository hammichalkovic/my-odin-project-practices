let libraryBank = document.getElementById('library'),
    libraryBankChildren = libraryBank.children,
    myLibrary = [],
    libraryItem = document.querySelector('.library__item'),
    sample = document.querySelector('.sample'),
    titleVal = title.value,
    inputs = document.querySelectorAll('input'),
    btn = document.getElementById('add'),
    form = document.getElementById('create_book'),
    remove = document.querySelector('.remove_button'),
    removeBtns = [],
    removeBtnsToOperate = [],
    removeElements = [],
    elementsToRemove = [],
    readToggleBtn = document.querySelector('.read_toggle');

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

function addClass(item) {
    item.parentElement.classList.add('toremove');
}

function markAsRead(item) {
    item.classList.add('read');
} 


btn.addEventListener('click', (event) => {

    

    toCheckTitle();
    toCheckAuthor();
    toCheckPages();
    toCheckReading();

    if (form.checkValidity() == false) {
        event.preventDefault();
    } else {
        
    libraryBank.appendChild(libraryItem.cloneNode(true));
    // myLibrary.firstElementChild.appendChild(remove);
    myLibrary.push(new Book(title.value, author.value, pages.value, read.value));
    // console.log(myLibrary);

    
        
        libraryBankChildren[myLibrary.length - 1].children[0].firstElementChild.textContent += myLibrary[myLibrary.length - 1].title;
        libraryBankChildren[myLibrary.length - 1].children[1].firstElementChild.textContent += myLibrary[myLibrary.length - 1].author;
        libraryBankChildren[myLibrary.length - 1].children[2].firstElementChild.textContent += myLibrary[myLibrary.length - 1].pages;
        libraryBankChildren[myLibrary.length - 1].children[3].firstElementChild.textContent += myLibrary[myLibrary.length - 1].read.toUpperCase();
   
        if (myLibrary[myLibrary.length - 1].read.toUpperCase() == 'YES') {
            libraryBankChildren[myLibrary.length - 1].children[3].lastElementChild.classList.add('read_toggle_disable');
        }

    toCleanValues();
    }
    
    
    removeBtns = [...document.querySelectorAll('.remove_button')];
    removeBtnsToOperate = removeBtns.slice(0, removeBtns.length - 1);

    removeElements = [...document.querySelectorAll('.library__item')];
    elementsToRemove = removeElements.slice(0, removeElements.length - 1);

    readToggleBtns = [...document.querySelectorAll('.read_toggle')];
    readToggleBtnsToOperate = readToggleBtns.slice(0, readToggleBtns.length - 1);
    
    // removeBtnsToOperate.forEach(item => {
        for (let item of removeBtnsToOperate) {
        

        item.addEventListener('click', (e) => {
            addClass(e.target);

            for (let i = 0; i < myLibrary.length; i++) {
                if (libraryBank.children[i].classList.contains('toremove')) {
                // console.log(myLibrary);
                // console.log(elementsToRemove);
                // console.log(removeBtnsToOperate);
                // console.log(readToggleBtnsToOperate);
                
                // let number = removeBtnsToOperate.indexOf(e.target);
                // console.log(number);
    
                elementsToRemove.splice(i, 1);
                removeBtnsToOperate.splice(i, 1);
                myLibrary.splice(i, 1);
                readToggleBtnsToOperate.splice(i, 1);
                libraryBank.children[i].remove();
    
                // console.log(myLibrary);
                // console.log(elementsToRemove);
                // console.log(removeBtnsToOperate);
                // console.log(readToggleBtnsToOperate);

                }
            };
        });  

        
        
        }

        
        for (let button of readToggleBtnsToOperate) {
            button.addEventListener('click', (e) => {
                markAsRead(e.target);

                for (let j = 0; j < myLibrary.length; j++) {
                    if (readToggleBtnsToOperate[j].classList.contains('read')) {
                        readToggleBtnsToOperate[j].previousElementSibling.textContent = 'YES';
                        myLibrary[j].read = 'YES'
                        readToggleBtnsToOperate[j].classList.add('read_toggle_disable');

                        console.log(myLibrary[j]);
                    }
                }
            })
        }
        
        
        
    

    

})





// removeBtns.map(item => item.parentElement).filter(item => item.classList.contains('toremove'))[0].remove();

// remove

// function removeItem() {
//     this.
// }




