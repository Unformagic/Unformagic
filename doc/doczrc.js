// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('@unformagic/doc/package.json')

const corePath = '../packages/core'
const mobilePath = '../packages/mobile'
const webPath = '../packages/web'

export default {
  typescript: true,
  title: `@unformagic v${ version }`,
  port: 9009,
  host: '0.0.0.0',
  dest: 'dist',
  menu: [
    'Getting Started',
    'Core',
    'Mobile',
    {
      name: 'Web',
      menu: ['About']
    }
  ],
  files: [
    'src/**/*.mdx',
    `${ corePath }/**/*.mdx`,
    `${ mobilePath }/**/*.mdx`,
    `${ webPath }/**/*.mdx`,
  ],
  ignore: [
    `${ corePath }/*/node_modules`,
    `${ mobilePath }/node_modules`,
    `${ webPath }/node_modules`,
  ],
  docgenConfig: {
    propFilter: () => true,
    searchPatterns: [
      `${ corePath }/**/src/**/*.(js|jsx|ts|tsx)`,
      `${ mobilePath }/src/**/*.(js|jsx|ts|tsx)`,
      `${ webPath }/src/**/*.(js|jsx|ts|tsx)`
    ]
  },
  filterComponents: (files) => files.filter(
    (filepath) => /^((?!test|spec).)*(.d)?.tsx?$/.test(filepath)
  )
}
