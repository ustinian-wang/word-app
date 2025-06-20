import { cet4 } from './cet4';
import { cet6 } from './cet6';
import { sta } from './sta';

let books = [];
books.push(createBook(1, 'cet4', cet4));
books.push(createBook(2, 'cet6', cet6));
books.push(createBook(3, 'sta', sta));

export const builtinWordBooks = books;

function createBook(id, name, source) {
    const words = source
        .split('\n')
        .filter(Boolean)
        .map((line, idx) => {
            const [en, zh] = line.split('	');
            return { en, zh, idx };
        });
    return {
        id,
        name,
        words
    };
}

export function getDailyWord() {
    const words = builtinWordBooks.map(book => book.words).flat();
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}
