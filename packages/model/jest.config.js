/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  coverageDirectory: 'coverage',
  moduleDirectories: ['node_modules', 'bower_components'],
  moduleNameMapper: {
    '@/contexts/(.*)': '<rootDir>/src/contexts/$1',
    '@/model/(.*)': '<rootDir>/src/$1',
  },
};
