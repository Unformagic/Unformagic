/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

const originalFile = path.resolve(__dirname, '../src/html.tsx')

const doczPath = path.resolve(__dirname, '../.docz')
const srcPath = `${ doczPath }/src`
const newFile = `${ srcPath }/html.tsx`

if (!fs.existsSync(doczPath)) {
  fs.mkdirSync(doczPath)
}

if (!fs.existsSync(srcPath)) {
  fs.mkdirSync(srcPath)
}

fs.copyFileSync(originalFile, newFile)
