// import * as XLSX from 'xlsx';
import { builtinWordBooks } from '@/wordbooks/builtin';
import { openDB } from 'idb';

const DB_NAME = 'wordAppDB';
const DB_VERSION = 1;
const STORE_BOOKS = 'wordBooks';
const STORE_PROGRESS = 'progress';
const STORE_META = 'meta';

const WORD_BOOKS_KEY = 'myWordBooks';
const CURRENT_BOOK_IDX_KEY = 'currentWordBookIdx';
const INIT_FLAG_KEY = 'wordBooksInited';
const PROGRESS_KEY = 'wordBooksProgress';

async function getDB() {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_BOOKS)) {
        db.createObjectStore(STORE_BOOKS, { keyPath: 'id', autoIncrement: true });
      }
      if (!db.objectStoreNames.contains(STORE_PROGRESS)) {
        db.createObjectStore(STORE_PROGRESS);
      }
      if (!db.objectStoreNames.contains(STORE_META)) {
        db.createObjectStore(STORE_META);
      }
    }
  });
}

export async function getWordBooks() {
  const db = await getDB();
  const all = await db.getAll(STORE_BOOKS);
  return all;
}
export async function saveWordBooks(books) {
  const db = await getDB();
  const tx = db.transaction(STORE_BOOKS, 'readwrite');
  await tx.objectStore(STORE_BOOKS).clear();
  for (const book of books) {
    await tx.objectStore(STORE_BOOKS).put(book);
  }
  await tx.done;
}
export async function getCurrentBookIndex() {
  const db = await getDB();
  return (await db.get(STORE_META, 'currentBookIdx')) || 0;
}
export async function setCurrentBookIndex(idx) {
  const db = await getDB();
  await db.put(STORE_META, idx, 'currentBookIdx');
}
export function getCurrentWords() {
  const books = getWordBooks();
  const idx = getCurrentBookIndex();
  return books[idx]?.words || [];
}

export async function initDefaultWordBooks() {
  const db = await getDB();
  const inited = await db.get(STORE_META, 'inited');
  if (inited) return;
  for (const book of builtinWordBooks) {
    await db.add(STORE_BOOKS, book);
  }
  await db.put(STORE_META, 1, 'inited');
}

export async function getBookProgress(bookId) {
  const db = await getDB();
  return (await db.get(STORE_PROGRESS, String(bookId))) || { group: 0, learned: [], percent: 0 };
}
export async function setBookProgress(bookId, progress) {
  const db = await getDB();
  await db.put(STORE_PROGRESS, progress, String(bookId));
}

/**
 * @description 获取单词的音频url
 * @param {string} word 
 * @returns 
 */
export function getWordAudioUrl(word) {
  return `https://api.dictionaryapi.dev/media/pronunciations/en/${word}-us.mp3`;
}
