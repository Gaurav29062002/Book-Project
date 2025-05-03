let books = [];

const getBooks = (req, res) => {
  res.json(books);
};

const addBook = (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
};

const updateBook = (req, res) => {
  const { id } = req.params;
  const updatedBook = req.body;
  const index = books.findIndex(book => book.id === parseInt(id));
  if (index !== -1) {
    books[index] = updatedBook;
    res.json(updatedBook);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

const deleteBook = (req, res) => {
  const { id } = req.params;
  const index = books.findIndex(book => book.id === parseInt(id));
  if (index !== -1) {
    const deleted = books.splice(index, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

module.exports = {
  getBooks,
  addBook,
  updateBook,
  deleteBook
};
