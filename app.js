import express from 'express';
import bookRoutes from './routes/bookRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
