let books = [];

export const getBooks = (req, res) => {
  res.status(200).json(books);
};

export const addBook = (req, res) => {
  const book = req.body;
  book.id = books.length + 1;
  books.push(book);
  res.status(201).json(book);
};

export const updateBook = (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index !== -1) {
    books[index] = { ...books[index], ...req.body };
    res.status(200).json(books[index]);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
};

export const deleteBook = (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter(b => b.id !== id);
  res.status(200).json({ message: 'Book deleted' });
};
