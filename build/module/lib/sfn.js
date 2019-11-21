/* eslint-disable functional/no-expression-statement */
import fs from 'fs';
import path from 'path';
import recursive from 'recursive-readdir';
// import { traverseFiles } from './traverser'
/**
 * Returns an array of every .hbs and .mjml files in the directory path provided starting from where the command is run
 * @param {string} dirPath path to directory to traverse for hbs and mjml template files
 * @returns {Promise<readonly string[]>}
 */
export const recursePath = async (dirPath) => {
    const directoryPath = path.join(process.cwd(), dirPath);
    console.log(directoryPath);
    return await recursive(directoryPath, ['*.!(hbs|mjml)']);
};
/**
 * Writes a string to a file at specified path
 * @param {string} path the path to the file including the file name and extension
 * @param {string} data the string to write
 * @returns {boolean}
 */
export const writeFile = (path, data) => {
    fs.writeFileSync(path, data);
    return true;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ZuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9zZm4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEO0FBQ3ZELE9BQU8sRUFBRSxNQUFNLElBQUksQ0FBQTtBQUNuQixPQUFPLElBQUksTUFBTSxNQUFNLENBQUE7QUFDdkIsT0FBTyxTQUFTLE1BQU0sbUJBQW1CLENBQUE7QUFFekMsOENBQThDO0FBRTlDOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsS0FBSyxFQUFFLE9BQWUsRUFBOEIsRUFBRTtJQUM3RSxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQzFCLE9BQU8sTUFBTSxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtBQUM1RCxDQUFDLENBQUE7QUFFRDs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRyxDQUFDLElBQVksRUFBRSxJQUFZLEVBQVcsRUFBRTtJQUM3RCxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUM1QixPQUFPLElBQUksQ0FBQTtBQUNmLENBQUMsQ0FBQSJ9