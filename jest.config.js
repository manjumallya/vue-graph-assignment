module.exports = {
  transform: {
    "\\.[jt]sx?$": 'babel-jest',
    "^.+\\.js$": "babel-jest",
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/*.spec.js|*/.spec.(js|jsx|ts|tsx)|*/_tests_/.(js|jsx|ts|tsx)'],
  moduleFileExtensions: ['vue', 'js', 'jsx', 'json', 'node', 'ts', 'tsx'],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/cypress/"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/components/**/*.{js}",
    "src/vuex/**/*.{js}",
    "!**/node_modules/**",
    "**/*.{js}",
  ],
  coverageReporters: [
    "html",
    "text-summary"
  ],
  testEnvironment: "node"
};