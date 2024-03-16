import fs from 'fs/promises';
import path from 'path';
import { nanoid } from 'nanoid';

const tasksPath = path.resolve('db', 'tasks.json');
const updateTasks = async contacts => {
  return fs.writeFile(tasksPath, JSON.stringify(contacts, null, 2), 'utf8');
};

export const listTasks = async () => {
  const result = await fs.readFile(tasksPath, 'utf-8');
  return JSON.parse(result);
};

export const getTaskById = async id => {
  const tasks = await listTasks();
  const result = tasks.find(item => item.id === String(id));

  return result || null;
};

export const removeTask = async id => {
  const tasks = await listTasks();
  const idx = tasks.findIndex(task => task.id === id);

  if (idx === -1) {
    return null;
  }

  const [removedTask] = tasks.splice(idx, 1);

  await updateTasks(tasks);

  return removedTask;
};

export const addTask = async body => {
  const tasks = await listTasks();
  console.log(body);
  const newTask = {
    id: nanoid(),
    ...body,
    complete: false,
  };

  tasks.push(newTask);

  await updateTasks(tasks);

  return newTask;
};

export const updateTask = async (id, body) => {
  const tasks = await listTasks();
  const idx = tasks.findIndex(task => task.id === String(id));

  if (idx === -1) {
    return null;
  }

  tasks[idx] = { ...tasks[idx], ...body };

  await updateTasks(tasks);

  return tasks[idx];
};
