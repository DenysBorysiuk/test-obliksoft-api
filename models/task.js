import { Schema, model } from 'mongoose';

const taskSchema = new Schema(
  {
    text: {
      type: String,
      required: [true, 'Set your text'],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

export const Task = model('task', taskSchema);
