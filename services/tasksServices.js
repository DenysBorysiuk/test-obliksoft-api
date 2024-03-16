import fs from 'fs/promises';
import path from 'path';
import { nanoid } from 'nanoid';

const tasksPath = path.resolve('db', 'tasks.json');

export const listTasks = async () => {
  const data = await fs.readFile(tasksPath, 'utf-8');
  return JSON.parse(data);
};

export const getTaskById = async id => {
  const tasks = await listTasks();
  const result = tasks.find(item => item.id === String(id));

  return result || null;
};

export const removeTask = async id => {
  const tasks = await listTasks();
  const idx = tasks.findIndex(contact => contact.id === id);

  if (idx === -1) {
    return null;
  }

  const [removedContact] = contacts.splice(idx, 1);

  await updateContacts(contacts);

  return removedContact;
};

export const addTask = async text => {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
};
