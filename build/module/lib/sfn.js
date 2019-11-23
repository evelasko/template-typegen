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
    return await recursive(path.join(process.cwd(), dirPath), ['*.!(hbs|mjml)']);
};
/**
 * Writes a string to a file at specified path
 * @param {string} path the path to the file including the file name and extension
 * @param {string} data the string to write
 * @returns {boolean}
 */
export const writeFile = (dirPath, data) => {
    fs.writeFileSync(path.join(process.cwd(), dirPath), data);
    return true;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ZuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9zZm4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEO0FBQ3ZELE9BQU8sRUFBRSxNQUFNLElBQUksQ0FBQTtBQUNuQixPQUFPLElBQUksTUFBTSxNQUFNLENBQUE7QUFDdkIsT0FBTyxTQUFTLE1BQU0sbUJBQW1CLENBQUE7QUFFekMsOENBQThDO0FBRTlDOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsS0FBSyxFQUFFLE9BQWUsRUFBOEIsRUFBRTtJQUM3RSxPQUFPLE1BQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtBQUNoRixDQUFDLENBQUE7QUFFRDs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRyxDQUFDLE9BQWUsRUFBRSxJQUFZLEVBQVcsRUFBRTtJQUNoRSxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3pELE9BQU8sSUFBSSxDQUFBO0FBQ2YsQ0FBQyxDQUFBIn0=