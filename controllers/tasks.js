import { Task } from '../models/task.js';

import HttpError from '../helpers/HttpError.js';

import ctrlWrapper from '../helpers/ctrlWrapper.js';

const getAllTasks = async (req, res) => {
  const result = await Task.find();

  if (!result) {
    throw HttpError(404);
  }

  return res.status(200).json(result);
};

const getOneTask = async (req, res, next) => {
  const { id } = req.params;
  const result = await Task.findById(id);

  if (!result) {
    throw HttpError(404);
  }

  return res.status(200).json(result);
};

const createTask = async (req, res) => {
  const result = await Task.create(req.body);

  return res.status(201).json(result);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const result = await Task.findByIdAndDelete(id);

  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const result = await Task.findByIdAndUpdate(String(id), req.body);

  if (!result) {
    throw HttpError(404);
  }

  return res.json(result);
};

const updateStatusTask = async (req, res) => {
  const { id } = req.params;
  const result = await Task.findByIdAndUpdate(id, req.body);

  if (!result) {
    throw HttpError(404);
  }

  return res.json(result);
};

export default {
  getAllTasks: ctrlWrapper(getAllTasks),
  getOneTask: ctrlWrapper(getOneTask),
  createTask: ctrlWrapper(createTask),
  deleteTask: ctrlWrapper(deleteTask),
  updateTask: ctrlWrapper(updateTask),
  updateStatusTask: ctrlWrapper(updateStatusTask),
};
