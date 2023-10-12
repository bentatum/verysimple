module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: 95,
      branches: 95,
      functions: 95,
      lines: 95,
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
};
