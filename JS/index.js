
console.log("welcome to library website");

function book(id , name , author, edition, price){
    this.id = id;
    this.name = name;
    this.author = author;
    this.edition = edition;
    this.price = price;
}

    // display constructor
function Display() {

}
// Add methods to display protottypes.
Display.prototype.add  = function(book) {
   tablebody = document.getElementById('tablebody');
    let  uistring = `
                    <tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.edition}</td>
                    <td>${book.price}</td> 
                    </tr>`
    tablebody.innerHTML += uistring;
}
Display.prototype.clear = function() {
    let libraryform = document.getElementById('libraryform');
    libraryform.reset();
}
// validate function
Display.prototype.validate = function(book) {
    if(book.name <2 || book.author<2){
        return false;
    }
    else{
        return true;
    }
}
Display.prototype.show = function(type , displaymsg){
    let message = document.getElementById("message");
    message.innerHTML = `<div class="alert $ alert-${type} dismissible fade show" role="alert">
    <strong>Message!</strong> ${displaymsg}.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`

  setTimeout(function() {
     message.innerHTML = ``; 
  }, 2000);
}

 
// Add submit event listner.  

let libraryform = document.getElementById('libraryform');
libraryform.addEventListener('submit' , libraryformsubmit);

function libraryformsubmit(e){
   
    console.log("You have submitted library form");
   let Name = document.getElementById('name').value;
   let Author = document.getElementById('author').value;
   let Edition = document.getElementById('edition').value;
   let Price = document.getElementById('price').value;

    let bookobj =  new book(1,Name , Author , Edition , Price);
    console.log(bookobj);
    let display = new Display();
    if(display.validate(bookobj)){
        display.add(bookobj);
        display.clear();
        display.show("Success" , "Your book is successfull added");
        
    }
    else{
        display.show("Error" , "Sory you can not add this book .");
    }
    e.preventDefault();
 
}
