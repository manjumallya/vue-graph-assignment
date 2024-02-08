module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    testPathIgnorePatterns: [
        "/node_modules/",
        "/cypress/"
    ],
    testMatch: ['**/*.spec.(js|jsx|ts|tsx)|*/.spec.(js|jsx|ts|tsx)|*/_tests_/.(js|jsx|ts|tsx)'],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
    },
    collectCoverage: true,
    collectCoverageFrom: [
        "src/components/**/*.{js}",
        "!**/node_modules/**"
    ],
};