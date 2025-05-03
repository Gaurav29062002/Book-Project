import request from 'supertest';
import app from '../app';

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
    // First, create a book and capture the returned ID
    const createRes = await request(app)
      .post('/books')
      .send({ title: 'Temp Book', author: 'Anon' });

    const bookId = createRes.body.id; // this must match the response format in your app.js

    // Now delete the book using the ID
    const res = await request(app).delete(`/books/${bookId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Book deleted');
  });
});
