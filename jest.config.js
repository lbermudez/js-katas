module.exports = {
    // The root directory that Jest should scan for tests and modules within
    rootDir: "./",

    // A list of paths to directories that Jest should use to search for files in
    roots: ["<rootDir>/src"],

    // The pattern or patterns Jest uses to detect test files
    testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],

    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: ["\\\\node_modules\\\\"],

    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    transformIgnorePatterns: ["\\\\node_modules\\\\"]
};
