import express from 'express';
import jwtValidation from '../middlewares/AuthMiddleware.js';
import getTodo from '../controllers/TodoController.js';

const router = express.Router();

router.get('/', jwtValidation, getTodo);

export default router;
