import { Router } from 'express';

import isValidId from '../../middlewares/isValidId.js';

import tasksCtrl from '../../controllers/tasks.js';

import validateBody from '../../middlewares/validateBody.js';
import { createTaskSchema, updateTaskSchema, updateCompletedSchema } from '../../schemas/tasks.js';
import { authenticate } from '../../middlewares/authenticate.js';

const router = Router();

const { getAllTasks, getOneTask, createTask, deleteTask, updateTask, updateStatusTask } = tasksCtrl;

router.get('/', authenticate, getAllTasks);

router.get('/:id', authenticate, isValidId, getOneTask);

router.post('/', authenticate, validateBody(createTaskSchema), createTask);

router.delete('/:id', authenticate, isValidId, deleteTask);

router.put('/:id', authenticate, isValidId, validateBody(updateTaskSchema), updateTask);

router.patch(
  '/:id/completed',
  authenticate,
  isValidId,
  validateBody(updateCompletedSchema),
  updateStatusTask
);

export default router;
