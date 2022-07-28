import bodyParser from 'body-parser';
import multer from 'multer';

export const jsonParser = bodyParser.json();

export const formParser = bodyParser.urlencoded({ extended: false });

export const upload = multer();