/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 72,
      functions: 75,
      lines: 75,
    },
  },
  coverageReporters: ["text-summary", "json-summary"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!**/*.d.ts"],
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "@/test/(.*)": "<rootDir>/test/$1",
    "@/(.*)$": "<rootDir>/src/$1",
  },
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  prettierPath: null,
};
