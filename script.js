import Book from './index.js';

const bookList = document.getElementById('book-list');
const formBook = document.getElementById('book-form');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');

const displayBook = (list) => {
  const data = list.map(
    (book) => `
        <tr class="d-flex w-100 justify-content-between">
            <td>
            <span><span class="bold">${book.title}</span> by <span class="italic">${book.author}</span>
            </span> <button id="${book.id}" onclick="col.removeElement(this)" class="btn">Remove</button></td> 
        </tr>`,
  );
  bookList.innerHTML = data.join('');
};

export default class Pack {
  constructor() {
    this.list = [];
  }

  /* Add Book */
  addBook = () => {
    const id = Math.floor(Math.random() * 10000);
    const newBook = new Book(id, bookTitle.value, bookAuthor.value);
    this.list.push(newBook);
    Pack.addStorage(this.list);
    displayBook(this.list);
  }

  /* Remove Storage */
  removeElement = (element) => {
    this.list = this.list.filter((i) => Number(i.id) !== Number(element.id));
    Pack.addStorage(this.list);
    displayBook(this.list);
  }

  /* Add Storage */
  static addStorage = (list) => {
    localStorage.setItem('newBook', JSON.stringify(list));
  }
}

const col = new Pack();
window.col = col;

formBook.addEventListener('submit', (e) => {
  e.preventDefault();
  col.addBook();
  bookTitle.value = '';
  bookAuthor.value = '';
});

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('newBook')) {
    displayBook(JSON.parse(localStorage.newBook));
  }
});

export { displayBook };

