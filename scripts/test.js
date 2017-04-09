const shell = require('shelljs')
const isWindows = process.platform === 'win32'
const envApi = isWindows ? 'set NODE_ENV=test PROCESS_TYPE=api &&' : 'NODE_ENV=test PROCESS_TYPE=api'

shell.exec(`${envApi}  mocha test/setup.js "api/**/*.test.js"`)
shell.exec(`${envApi} mocha test/setup.js  "./{,!(node_modules|coverage|docs)/**/}*.test.js"`)
