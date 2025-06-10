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
        .map(line => {
            const [en, zh] = line.split('	');
            return { en, zh };
        });
    return {
        id,
        name,
        words,
    };
}
