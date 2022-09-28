/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleDirectories: ['node_modules', 'bower_components'],
  moduleNameMapper: {
    '@/contexts/(.*)': '<rootDir>/src/contexts/$1',
    '@/model/(.*)': '<rootDir>/src/$1',
  },
};
