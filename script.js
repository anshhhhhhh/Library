const botn = document.getElementById("addbtn");

function Book(title, author, pageno, status) {
    this.title = title;
    this.author = author;
    this.pageno = pageno;
    this.status= status;
    this.info = function() {
        if(status==true){
            console.log(title +" by "+author+", "+pageno+" pages, read.");
        }
        else{
            console.log(title +" by "+author+", "+pageno+" pages, not read yet.");
        }
    }
}

let myLibrary = [];

function addBookToLibrary() {
    let name = prompt("Enter book's title:");
    let author = prompt("Enter author's name:");
    let pageno = prompt("Enter number of pages in the book:");
    let status = prompt("Have you read the book or not?");
    let book = new Book(name, author, pageno, status);
    myLibrary.push(book);
    displayLib();
}

function displayLib() {
    for(let i=0; i<myLibrary.length; i++){
        const crd = document.createElement('div');
        const titl = document.createElement('div');
        const inf = document.createElement('div');
        const stat = document.createElement('div');
        titl.classList.add("title");
        inf.classList.add("info");
        stat.classList.add("status");
        crd.classList.add("card");
        
    }
}

botn.addEventListener("click", addBookToLibrary);

displayLib();