import type {Config} from 'jest'

const config: Config = {
  clearMocks: true,
  coverageProvider: 'v8',
  setupFiles: ['<rootDir>/jest.setup.ts'],
  preset: 'ts-jest',
}

export default config
