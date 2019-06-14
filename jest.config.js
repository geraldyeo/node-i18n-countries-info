module.exports = {
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.(js|ts)x?$': 'babel-jest',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
  ],
}