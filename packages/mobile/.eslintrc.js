const path = require('path')

module.exports = {
  overrides: [
    {
      files: [
        'jest.*.ts',
        'src/**/*.{js,jsx,ts,tsx,mdx}'
      ],
      parserOptions: {
        project: [
          path.resolve(__dirname, './tsconfig.json'),
        ]
      }
    }
  ]
}
