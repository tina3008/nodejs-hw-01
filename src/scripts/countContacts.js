import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
    fs.readFile(PATH_DB, 'utf8')
     .then(data => ([...JSON.parse(data)]))
     .then(data => console.log('length of array is: ', data.length))
    .catch(error => console.log("error:", error));
};




console.log(await countContacts());
