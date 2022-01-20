module.exports = {
  overrides: [
    {
      files: ['*.d.ts'],
      parserOptions: { 
        project: [
          path.resolve(__dirname, './tsconfig.json'),
        ]
      }
    }
  ]
}