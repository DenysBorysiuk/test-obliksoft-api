import { openDB } from 'idb';

const DB_NAME = 'notes-db';
const STORE_NAME = 'notes-store';

export async function initializeDB() {
  return await openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
}

export async function getAllNotes() {
  const db = await initializeDB();
  const tx = db.transaction(STORE_NAME, 'readonly');
  const store = tx.objectStore(STORE_NAME);
  return store.getAll();
}

export async function saveNote(note) {
  const db = await initializeDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  await store.add(note);
  await tx.complete;
}

export async function deleteNote(id) {
  const db = await initializeDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  await store.delete(id);
  await tx.complete;
}

export async function updateNote(updatedNote) {
  const db = await initializeDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  await store.put(updatedNote);
  await tx.complete;
}
