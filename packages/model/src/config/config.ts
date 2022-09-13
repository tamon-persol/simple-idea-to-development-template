const path = require('path');

export const getConfig = () => {
  require('dotenv').config({ path: path.resolve(__dirname, './.env') });
};
