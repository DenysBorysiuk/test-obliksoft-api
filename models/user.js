import { Schema, model } from 'mongoose';

import { emailRegexp } from '../helpers/validation.js';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Username is required'],
      minlength: 1,
      unique: true,
    },
    email: {
      type: String,
      match: [emailRegexp, 'Invalid email format provided'],
      required: [true, 'Email is required'],
      index: true,
      unique: true,
    },
    password: {
      type: String,
      minlength: 8,
      required: [true, 'Set password for user'],
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

export const User = model('user', userSchema);
