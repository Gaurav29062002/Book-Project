const request = require('supertest');
const app = require('../app');

describe('Book API', () => {
  it('should add a new book', async () => {
    const res = await request(app)
      .post('/books')
      .send({ title: 'The Hobbit', author: 'J.R.R. Tolkien' });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('The Hobbit');
  });

  it('should get all books', async () => {
    const res = await request(app).get('/books');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should delete a book', async () => {
    const createRes = await request(app)
      .post('/books')
      .send({ title: 'Temp Book', author: 'Anon' });

    const bookId = createRes.body.id;

    const res = await request(app).delete(`/books/${bookId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Book deleted');
  });
});
