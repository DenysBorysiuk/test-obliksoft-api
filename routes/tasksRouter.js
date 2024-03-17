import express from 'express';

import tasksCtrl from '../controllers/tasks.js';

import validateBody from '../helpers/validateBody.js';
import {
  createTaskSchema,
  updateTaskSchema,
  updateCompletedSchema,
} from '../schemas/tasksSchemas.js';

const tasksRouter = express.Router();

tasksRouter.get('/', tasksCtrl.getAllTasks);

tasksRouter.get('/:id', tasksCtrl.getOneTask);

tasksRouter.post('/', validateBody(createTaskSchema), tasksCtrl.createTask);

tasksRouter.delete('/:id', tasksCtrl.deleteTask);

tasksRouter.put('/:id', validateBody(updateTaskSchema), tasksCtrl.updateTask);

tasksRouter.patch(
  '/:id/completed',
  validateBody(updateCompletedSchema),
  tasksCtrl.updateStatusTask
);

export default tasksRouter;
