import express from 'express';

import isValidId from '../middlewares/isValidId.js';

import tasksCtrl from '../controllers/tasks.js';

import validateBody from '../helpers/validateBody.js';
import {
  createTaskSchema,
  updateTaskSchema,
  updateCompletedSchema,
} from '../schemas/tasksSchemas.js';

const tasksRouter = express.Router();

const { getAllTasks, getOneTask, createTask, deleteTask, updateTask, updateStatusTask } = tasksCtrl;

tasksRouter.get('/', getAllTasks);

tasksRouter.get('/:id', isValidId, getOneTask);

tasksRouter.post('/', validateBody(createTaskSchema), createTask);

tasksRouter.delete('/:id', isValidId, deleteTask);

tasksRouter.put('/:id', isValidId, validateBody(updateTaskSchema), updateTask);

tasksRouter.patch(
  '/:id/completed',
  isValidId,
  validateBody(updateCompletedSchema),
  updateStatusTask
);

export default tasksRouter;
