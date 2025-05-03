const request = require('supertest');
const app = require('../app');


describe('Book API', () => {
  it('should add a new book', async () => {
    const res = await request(app).post('/books').send({ title: '1984', author: 'Orwell' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('1984');
  });

  it('should get all books', async () => {
    const res = await request(app).get('/books');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('should delete a book', async () => {
    await request(app).post('/books').send({ title: 'Temp Book', author: 'Anon' });
    const res = await request(app).delete('/books/1');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Book deleted');
  });
});
