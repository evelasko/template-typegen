/* eslint-disable functional/no-expression-statement */
import fs from 'fs'
import path from 'path'
import recursive from 'recursive-readdir'

// import { traverseFiles } from './traverser'

/**
 * Returns an array of every .hbs and .mjml files in the directory path provided starting from where the command is run
 * @param {string} dirPath path to directory to traverse for hbs and mjml template files
 * @returns {Promise<readonly string[]>}
 */
export const recursePath = async (dirPath: string): Promise<readonly string[]> => {
    return await recursive(path.join(process.cwd(), dirPath), ['*.!(hbs|mjml)'])
}

/**
 * Writes a string to a file at specified path
 * @param {string} path the path to the file including the file name and extension
 * @param {string} data the string to write
 * @returns {boolean}
 */
export const writeFile = (dirPath: string, data: string): boolean => {
    fs.writeFileSync(path.join(process.cwd(), dirPath), data)
    return true
}
