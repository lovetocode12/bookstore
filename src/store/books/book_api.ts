export function GetBooksApi(){
  return  fetch('http://localhost:3001/books')
    .then(res=> res.json())
    .then(books=> books)
}