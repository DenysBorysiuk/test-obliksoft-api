import { Task } from '../models/task.js';

import HttpError from '../helpers/HttpError.js';

export const getAllTasks = async (req, res, next) => {
  try {
    const result = await Task.find({}, '-createdAt -updatedAt');
    if (!result) {
      throw HttpError(404);
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getOneTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Task.findById(id);

    if (!result) {
      throw HttpError(404);
    }

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Task.findByIdAndDelete(id);

    if (!result) {
      throw HttpError(404);
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const createTask = async (req, res, next) => {
  try {
    const result = await Task.create(req.body);

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const updateTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Task.findByIdAndUpdate(String(id), req.body);

    if (!result) {
      throw HttpError(404);
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const updateStatusTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Task.findByIdAndUpdate(id, req.body);

    if (!result) {
      throw HttpError(404);
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};
