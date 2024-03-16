import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import tasksRouter from './routes/tasksRouter.js';

const app = express();
const { PORT = 3000 } = process.env;

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use('/api/tasks', tasksRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

app.listen(PORT, () => {
  console.log('Server is running. Use our API on port: 3000');
});
