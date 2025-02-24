import Joi from 'joi';

export const createTaskSchema = Joi.object({
  text: Joi.string().required(),
});

export const updateTaskSchema = Joi.object({
  text: Joi.string().required(),
});

export const updateCompletedSchema = Joi.object({
  completed: Joi.boolean().required(),
});
