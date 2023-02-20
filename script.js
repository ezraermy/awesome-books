document.addEventListener('DOMContentLoaded', () => {
  const bookForm = document.getElementById('add-book');
  const list = document.querySelector('.book-list');

  let books = [];

  // REMOVE BOOKS
  function removeBook(id) {
    books = books.filter((book) => {
      if (book.id === id) {
        return false;
      }
      return true;
    });
  }

  function displayBooks(id, title, author) {
    const items = document.createElement('li');
    list.style.listStyleType = 'none';
    items.innerHTML = `
      <p>Title:-  ${title}</p>
       <p> Author:-  ${author}</p>
       `;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.id = id;
    const bookLine = document.createElement('hr');
    items.append(removeBtn, bookLine);

    removeBtn.addEventListener('click', () => {
      removeBook(id);
      localStorage.setItem('books', JSON.stringify(books));
      items.remove();
    });
    list.appendChild(items);
  }

  // ADD BOOKS
  function addBook(title, author) {
    const id = Date.now();
    const bookList = {
      id,
      title,
      author,
    };

    books.push(bookList);
    localStorage.setItem('books', JSON.stringify(books));
    displayBooks(bookList.id, bookList.title, bookList.author);
  }

  const myBook = JSON.parse(localStorage.getItem('books'));
  if (myBook) {
    books = myBook;
  }
  books.forEach((book) => {
    displayBooks(book.id, book.title, book.author);
  });

  bookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    addBook(title.value, author.value);

    // clear input
    title.value = '';
    author.value = '';
  });
});