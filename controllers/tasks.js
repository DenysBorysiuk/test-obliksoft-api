import {
  listTasks,
  getTaskById,
  addTask,
  removeTask,
  updateTask,
} from '../services/tasksServices.js';

import HttpError from '../helpers/HttpError.js';

export const getAllTasks = async (req, res) => {
  try {
    const result = await listTasks();
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
    const result = await getTaskById(id);

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
    const result = await removeTask(id);

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
    const result = await addTask(req.body);

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const updateTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateTask(id, req.body);

    if (!result) {
      throw HttpError(404);
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};
