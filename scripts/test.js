const shell = require('shelljs')
const isWindows = process.platform === 'win32'

const env = type => isWindows ? `set NODE_ENV=test PROCESS_TYPE=${type} &&` : `NODE_ENV=test PROCESS_TYPE=${type}`

shell.exec(`${env('api')} mocha test/setup.js "api/**/*.test.js" --color`)
shell.exec(`${env('api')} mocha test/setup.js  "./{,!(node_modules|coverage|docs)/**/}*.test.js" --color`)
