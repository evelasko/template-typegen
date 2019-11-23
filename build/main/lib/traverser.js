"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const ramda_1 = __importDefault(require("ramda"));
/**
 * Returns the content of a file as utf-8 encoded string
 * @param {string} path the path to the file
 * @returns {string}
 */
exports.readFile = (path) => fs_1.default.readFileSync(path, { encoding: 'utf-8' }) || '';
/**
 * Returns a new object with property n holding value a
 * @param {string} n property to create
 * @param {(string | readonly)} a value to assign to property n
 * @returns {({ readonly [n: string]: string | readonly)} { n: a }
 */
exports.buildObject = (n, a) => Object.assign({}, { [n]: a });
/**
 * Returns a string formatted as an interface of name i that contains all types described in a:
 * ```
 * interface i { a ... }
 * ```
 * @param {string} i the name of the interface
 * @param {string} a the values of the interface as string: ``` 'xtype: string \n\t ytype: number \n\t ...'```
 * @returns {string}
 */
exports.buildInterface = (i, a) => `export type ${i} = {\n\t${a}\n}\n`;
/**
 * Takes a function with one parameter that returns a boolean and evaluates an array against that function to filter its values
 * @param {function b(n: string) => boolean}
 * @param {string[]} t the array to filter by the above (b) function
 */
// eslint-disable-next-line functional/prefer-readonly-type
exports.typesRejector = (b) => (t) => ramda_1.default.filter(b)(t);
/**
 * Returns a function that takes param s and r and returns the matching regex in s with r appended at the end, or if no match then returns an empty string
 * @param regex the regex to find and extract from string
 * @param {string} s the string to evaluate
 * @param {string} r (optional) the string to append to the end of s
 */
exports.extractMatchAndAppend = (regex) => (s, a) => {
    const f = s.match(regex);
    return f && f.length ? `${f[0]}${a || ''}` : '';
};
const appends = {
    type: ': string',
    array: ': string[] | {}',
    conditional: ': boolean | string'
};
const processTypes = ramda_1.default.pipe(exports.typesRejector((n) => n.search(/#|@|\/|\.\/|\.|\{|log |else|this/) < 0), ramda_1.default.map(x => `${x}${appends.type}`));
const processBlocks = ramda_1.default.converge(ramda_1.default.concat, [
    ramda_1.default.pipe(exports.typesRejector((n) => n.search(/#list |#each /) >= 0), ramda_1.default.map(x => exports.extractMatchAndAppend(/(?<=#list |#each )(.+?)(?= |\.|}|$)/)(x, appends.array))),
    ramda_1.default.pipe(exports.typesRejector((n) => n.search(/#if |#unless /) >= 0), ramda_1.default.map(x => exports.extractMatchAndAppend(/(?<=#if |#unless )(.+?)(?= |\.|}|$)/)(x, appends.conditional)))
]);
exports.uniteTypesAndBlocks = (t, b) => ramda_1.default.union(t, b).join(`\n\t`);
/**
 * Receives and array of template context variables and blocks and returns a list of types as string
 */
exports.buildTypes = ramda_1.default.converge(exports.uniteTypesAndBlocks, // join type properties and blocks
[processTypes, processBlocks]);
/**
 * Replace regex matches in a string with the provided value
 * @param reg regex to match and replace
 * @param val value to replace matches
 * @param s string to evaluate
 */
exports.replaceRegex = (reg, val) => (s) => s.replace(reg, val);
/**
 * Takes a string array of file paths and returns an array of objects with properties of the same file name
 * whose values are all the found {{string}} transformed in string: string
 */
exports.constructData = ramda_1.default.converge(exports.buildInterface, [
    ramda_1.default.pipe(ramda_1.default.split('/'), ramda_1.default.last, ramda_1.default.split('.'), ramda_1.default.head, exports.replaceRegex(/\W+/, '')),
    ramda_1.default.pipe(exports.readFile, ramda_1.default.match(/(?<=\{{2}).+?(?=\}{2})/g), // returns an array with the strings inside {{ }}
    exports.buildTypes)
]);
/**
 * Reads de contents of a list of files and return a single string with the type definitions of the context objects found
 * @param {readonly string[]} files: the list of file paths
 * @returns {string}
 */
exports.traverseFiles = (files) => ramda_1.default.pipe(ramda_1.default.map(exports.constructData), ramda_1.default.join('\n'))(files);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhdmVyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90cmF2ZXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0Q0FBbUI7QUFDbkIsa0RBQXFCO0FBRXJCOzs7O0dBSUc7QUFDVSxRQUFBLFFBQVEsR0FBRyxDQUFDLElBQVksRUFBVSxFQUFFLENBQUMsWUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUE7QUFFcEc7Ozs7O0dBS0c7QUFDVSxRQUFBLFdBQVcsR0FBRyxDQUN2QixDQUFTLEVBQ1QsQ0FBNkIsRUFDdUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBRXhGOzs7Ozs7OztHQVFHO0FBQ1UsUUFBQSxjQUFjLEdBQUcsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFVLEVBQUUsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQTtBQUVuRzs7OztHQUlHO0FBQ0gsMkRBQTJEO0FBQzlDLFFBQUEsYUFBYSxHQUFHLENBQUMsQ0FBeUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFXLEVBQXFCLEVBQUUsQ0FBQyxlQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBRTlHOzs7OztHQUtHO0FBQ1UsUUFBQSxxQkFBcUIsR0FBRyxDQUFDLEtBQWEsRUFBdUMsRUFBRSxDQUFDLENBQ3pGLENBQVMsRUFDVCxDQUFVLEVBQ0osRUFBRTtJQUNSLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FB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