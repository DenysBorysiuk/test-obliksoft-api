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
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export const Task = model('task', taskSchema);
