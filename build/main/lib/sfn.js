"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable functional/no-expression-statement */
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const recursive_readdir_1 = __importDefault(require("recursive-readdir"));
// import { traverseFiles } from './traverser'
/**
 * Returns an array of every .hbs and .mjml files in the directory path provided starting from where the command is run
 * @param {string} dirPath path to directory to traverse for hbs and mjml template files
 * @returns {Promise<readonly string[]>}
 */
exports.recursePath = async (dirPath) => {
    const directoryPath = path_1.default.join(process.cwd(), dirPath);
    console.log(directoryPath);
    return await recursive_readdir_1.default(directoryPath, ['*.!(hbs|mjml)']);
};
/**
 * Writes a string to a file at specified path
 * @param {string} path the path to the file including the file name and extension
 * @param {string} data the string to write
 * @returns {boolean}
 */
exports.writeFile = (path, data) => {
    fs_1.default.writeFileSync(path, data);
    return true;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ZuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9zZm4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx1REFBdUQ7QUFDdkQsNENBQW1CO0FBQ25CLGdEQUF1QjtBQUN2QiwwRUFBeUM7QUFFekMsOENBQThDO0FBRTlDOzs7O0dBSUc7QUFDVSxRQUFBLFdBQVcsR0FBRyxLQUFLLEVBQUUsT0FBZSxFQUE4QixFQUFFO0lBQzdFLE1BQU0sYUFBYSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDMUIsT0FBTyxNQUFNLDJCQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtBQUM1RCxDQUFDLENBQUE7QUFFRDs7Ozs7R0FLRztBQUNVLFFBQUEsU0FBUyxHQUFHLENBQUMsSUFBWSxFQUFFLElBQVksRUFBVyxFQUFFO0lBQzdELFlBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzVCLE9BQU8sSUFBSSxDQUFBO0FBQ2YsQ0FBQyxDQUFBIn0=