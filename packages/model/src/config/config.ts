import dotenv from 'dotenv';
// const find = require('find-up');
import * as path from 'path';
export const findEnv = () => {
  if (process.env.NODE_ENV === 'test') {
    dotenv.config({
      path: path.join(__dirname, '..', '..', '..', '..', '.env'),
    });
  }
};
