import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
  return await fs.readFile(PATH_DB, {
    encoding: 'utf8'
  });
};

getAllContacts()
  .then((data) => JSON.parse(data, undefined, 2))
  .then((data) => console.log(Array.isArray(data)))
  .catch((error) => console.error(error));

console.log(await getAllContacts());
