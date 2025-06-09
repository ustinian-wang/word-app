// import * as XLSX from 'xlsx';
import { builtinWordBooks } from '@/wordbooks/builtin';
import { cloneRequest } from '@ustinian-wang/kit';

const WORD_BOOKS_KEY = 'myWordBooks';
const CURRENT_BOOK_IDX_KEY = 'currentWordBookIdx';
const INIT_FLAG_KEY = 'wordBooksInited';
const PROGRESS_KEY = 'wordBooksProgress';

export function getWordBooks() {
  return JSON.parse(localStorage.getItem(WORD_BOOKS_KEY) || '[]');
}
export function saveWordBooks(books) {
  localStorage.setItem(WORD_BOOKS_KEY, JSON.stringify(books));
}
export function getCurrentBookIndex() {
  return Number(localStorage.getItem(CURRENT_BOOK_IDX_KEY) || 0);
}
export function setCurrentBookIndex(idx) {
  localStorage.setItem(CURRENT_BOOK_IDX_KEY, idx);
}
export function getCurrentWords() {
  const books = getWordBooks();
  const idx = getCurrentBookIndex();
  return books[idx]?.words || [];
}

export function initDefaultWordBooks() {
  if (localStorage.getItem(INIT_FLAG_KEY)) return;
  localStorage.setItem(WORD_BOOKS_KEY, JSON.stringify(builtinWordBooks));
  localStorage.setItem(INIT_FLAG_KEY, '1');
}

export function getBookProgress(bookId) {
  const all = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
  return all[bookId] || { group: 0, learned: [], percent: 0 };
}
export function setBookProgress(bookId, progress) {
  const all = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
  all[bookId] = progress;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(all));
}

/**
 * @description 获取单词的音频url
 * @param {string} word 
 * @returns 
 */
export function getWordAudioUrl(word) {
  return `https://api.dictionaryapi.dev/media/pronunciations/en/${word}-us.mp3`;
}
