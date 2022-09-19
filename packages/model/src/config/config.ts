// import { findUpSync } from 'find-up';
import dotenv from 'dotenv';
// const find = require('find-up');
import path from 'path';

export const findEnv = () => {
  dotenv.config({ path: path.join(__dirname, '..', '..', '..', '..', '.env') });
};
