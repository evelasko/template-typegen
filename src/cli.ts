/* eslint-disable functional/no-conditional-statement */
/* eslint-disable functional/no-expression-statement */
import yargs from 'yargs'

import { recursePath, writeFile } from './lib/sfn'
import { traverseFiles } from './lib/traverser'

const input = yargs.usage('Usage: template-typegen <pathToTemplatesFolder> <pathToOutputFile>').argv

if (!input._[0] && !input._[1]) {
    yargs.showHelp()
    yargs.exit(1, new Error('missing arguments'))
}

recursePath(input._[0]).then(r => {
    writeFile(input._[1], traverseFiles(r))
})
