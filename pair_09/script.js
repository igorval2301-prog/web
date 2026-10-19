// let book = {
//     title : "Кобзар",
//     author : "шевченко",
//     price : 500,
//     available: true,
// }
// console.log(book.title);
// console.log(book["author"]);
// book.price = 550;
// console.log(book.price);
//
// for (let key in book) {
//     console.log(book[key]);
// }

let books = [
    {id: 1,title : "Кобзар", author : "шевченко",price : 500, vailable: true},
    {id: 2,title : "лісова пісня", author : "леся українка",price : 600, vailable: false},
    {id: 3,title : "тигролови", author : "Іван Багряний",price : 450, vailable: true},
    {id: 4,title : "енеїда", author : "Іван Котляревський",price : 500, vailable: false},
]
// console.log(books);
books.push({id:5, title: "Захар Беркут", author : "Іван Франко",price : 600, vailable: false})

// console.log(books);
// for (let book of books) {
//     console.log(`${book.title} - ${book.author}`);
// }

// let total = books.filter(function(book){
//     return book.vailable === true;
// })
// let total = books.filter(book => book.vailable === true);
//
// console.log(total);
//
// let foundBooks  = books.find(book => book.id === 3);
// console.log(foundBooks);
//
// let searchUserBook = prompt("введіть назву книги");
// let searchBook = books.find(book => book.title === searchUserBook);
// if (searchBook !== undefined) {
//     alert(searchBook);
// }else {
//     alert("такої книги немає")
// }

// let titles = books.map(book => book.title);
// console.log(titles);
//
// let booksSale = books.map(book => {
//     return{
//         id: book.id,
//         title: book.title,
//         author: book.author,
//         price: Math.round(book.price * 0.9),
//         vailable: book.vailable
//     }
// });
// console.log(booksSale);

let startedByPrice = books.slice().sort((a,b) => a.price - b.price);
console.log(startedByPrice);