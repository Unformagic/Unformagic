const path = require('path')

module.exports = {
  overrides: [
    {
      files: ['**/*.ts*', '**/*.js*', '**/*.mdx'],
      parserOptions: { 
        project: [
          path.resolve(__dirname, './tsconfig.json'),
        ]
      }
    }
  ]   
}
