let libraryBank = document.getElementById('library'),
    libraryBankChildren = libraryBank.children,
    myLibrary = ['asdfa', 'asdfasdf', 'asdfasdf', 'asdfasd'];

   

function Book() {

}

function createDivs() {
    for (let i = 0; i < myLibrary.length; i++) {
        libraryBank.appendChild(document.createElement('div'));
        libraryBankChildren[i].textContent += myLibrary[i];
    }
    
}

function addDiv() {
     libraryBank.appendChild(div)
}

function addBookToLibrary() {
    let userInput = prompt();
    myLibrary.push(userInput);
}

