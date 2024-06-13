import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import UserRouter from './routers/UserRouter.js';
import TodoRouter from './routers/TodoRouter.js';

const app = express();

// enable cors
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true, // enable cookies for cors
  }),
);

app.use(cookieParser()); // enable cookies for express
app.use(express.json()); // enable json and urlencoded for express
app.use(express.urlencoded({ extended: true }));

app.use(morgan(':method :url :status :response-time ms')); // enable morgan for logging

app.use(express.static('views')); // Serve static files from "views" folder
// (I Thought static files couldn't contain serverside processing??)
// Static files served like this can still interact with express endpoints...
// ...throguh client-side JS.

app.use('/api/user', UserRouter);
app.use('/api/todo', TodoRouter);

app.all('*', (_req, res) => {
  return res.status(404).json({ message: 'Page Not Found' });
});

export default app;
