let libraryBank = document.getElementById('library'),
    libraryBankChildren = libraryBank.children,
    myLibrary = ['asdfa', 'asdfasdf', 'asdfasdf', 'asdfasd'],
    libraryItem = document.querySelector('.library__item'),
    sample = document.querySelector('.sample');
   
sample.classList.add('nodisplay');

function Book() {

}

function createDivs() {
    for (let i = 0; i < myLibrary.length; i++) {
        libraryBank.appendChild(libraryItem.cloneNode(true));
        libraryBankChildren[i].textContent += myLibrary[i];
    }
    
}

function addDiv() {
    //  libraryBank.appendChild(libraryItem);
     libraryBank.append(libraryItem);
}

function addBookToLibrary() {
    let userInput = prompt();
    myLibrary.push(userInput);
}

