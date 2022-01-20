module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  testMatch: [
    '**/*/*.test.ts',
    '**/*/*.test.tsx'
  ],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  cacheDirectory: '.jest/.cache',
  testPathIgnorePatterns: [
    '<rootDir>/../node_modules',
    '<rootDir>/(?:.+?)/../node_modules/'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svg$': 'jest-svg-transformer'
  },
  moduleNameMapper: {
    '.+\\.(png|jpg|ttf|woff|woff2)$': 'file-loader'
  },
  transformIgnorePatterns: ['node_modules/(?!(@unformagic))/'],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0
    }
  }
}
