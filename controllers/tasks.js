import { listTasks, getTaskById, addTask, removeTask } from '../services/tasksServices.js';

export const getAllTasks = async (req, res) => {
  const result = await listTasks();

  return res.status(200).json(result);
};

export const getOneTask = async (req, res) => {
  const { id } = req.params;
  const result = await getTaskById(id);

  if (!result) {
    return res.status(404).json({ message: 'Not found' });
  }

  res.status(200).json(result);
};

export const deleteTask = async (req, res) => {};

export const createTask = async (req, res) => {};

export const updateTask = async (req, res) => {};
