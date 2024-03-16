import express from 'express';
import {
  getAllTasks,
  getOneTask,
  deleteTask,
  createTask,
  updateTaskById,
} from '../controllers/tasks.js';
import validateBody from '../helpers/validateBody.js';
import { createTaskSchema, updateTaskSchema } from '../schemas/tasksSchemas.js';

const tasksRouter = express.Router();

tasksRouter.get('/', getAllTasks);

tasksRouter.get('/:id', getOneTask);

tasksRouter.delete('/:id', deleteTask);

tasksRouter.post('/', validateBody(createTaskSchema), createTask);

tasksRouter.put('/:id', validateBody(updateTaskSchema), updateTaskById);

export default tasksRouter;
