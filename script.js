const botn = document.getElementById("addbtn");
const stg = document.getElementById("stage");

function camelCase(str) {
    let arr = str.split(" ");


    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return arr.join(" ");
}

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
let i = 0;

function addBookToLibrary() {
    let name = prompt("Enter book's title:");
    let author = prompt("Enter author's name:");
    let pageno = prompt("Enter number of pages in the book:");
    let status = window.confirm("Can this book be considered as read?")
    let book = new Book(name, author, pageno, status);
    myLibrary.push(book);
    displayLib();
}

function displayLib() {
    //for(let i=0; i<myLibrary.length; i++){
        var crd = document.createElement('div');
        var titl = document.createElement('div');
        var inf = document.createElement('div');
        var stat = document.createElement('button');
        var rmv = document.createElement('button');
        titl.classList.add("title");
        inf.classList.add("info");
        stat.classList.add("status");
        rmv.classList.add("rmv");
        crd.classList.add("card");
        titl.textContent = camelCase(myLibrary[i].title);
        inf.textContent = camelCase(myLibrary[i].title) +" by "+camelCase(myLibrary[i].author)+", "+myLibrary[i].pageno+" pages.";
        rmv.textContent = "REMOVE";
        if(myLibrary[i].status == true){
            stat.textContent="READ";
        }
        else{
            stat.textContent="NOT READ";
        }
        crd.appendChild(titl);
        crd.appendChild(inf);
        crd.appendChild(stat);
        crd.appendChild(rmv);
        stg.appendChild(crd);
        stat.addEventListener("click", function(){
            if(stat.textContent == "NOT READ"){
                stat.textContent="READ";
            }
            else{
                stat.textContent="NOT READ";
            }
        });
        rmv.addEventListener("click", function(){
            crd.remove();
        });
        i++;
    //}
}

botn.addEventListener("click", addBookToLibrary);

displayLib();