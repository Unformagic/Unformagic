import type { Config } from '@jest/types'

import jestConfig from '@unformagic/jest-config'

import { name } from '../package.json'

export default async (): Promise<Config.InitialOptions> => ({
  ...jestConfig,
  displayName: name,
  name,
  testEnvironment: 'jsdom',
  setupFiles: ['./jest.setup.ts'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/index.ts'
  ],
  verbose: true
})
