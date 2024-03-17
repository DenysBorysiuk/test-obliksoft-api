import Joi from 'joi';

import { emailRegexp } from '../helpers/validation.js';

export const registerSchema = Joi.object({
  name: Joi.string().required().min(1),
  email: Joi.string().pattern(emailRegexp).required().messages({
    'string.pattern.base': 'Email format must be - example@example.com',
  }),
  password: Joi.string().min(8).required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});
