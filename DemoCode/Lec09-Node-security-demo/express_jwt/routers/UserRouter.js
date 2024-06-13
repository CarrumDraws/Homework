import express from 'express';
import { register, login, logout } from '../controllers/UserController.js';
import {
  createUserValidation,
  loginUserValidation,
} from '../middlewares/UserMiddleware.js';

const router = express.Router();

router
  .get('/logout', logout)
  .post('/register', createUserValidation, register)
  .post('/login', loginUserValidation, login);

export default router;
