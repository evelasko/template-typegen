import fs from 'fs';
import R from 'ramda';
/**
 * Returns the content of a file as utf-8 encoded string
 * @param {string} path the path to the file
 * @returns {string}
 */
export const readFile = (path) => fs.readFileSync(path, { encoding: 'utf-8' }) || '';
/**
 * Returns a new object with property n holding value a
 * @param {string} n property to create
 * @param {(string | readonly)} a value to assign to property n
 * @returns {({ readonly [n: string]: string | readonly)} { n: a }
 */
export const buildObject = (n, a) => Object.assign({}, { [n]: a });
/**
 * Returns a string formatted as an interface of name i that contains all types described in a:
 * ```
 * interface i { a ... }
 * ```
 * @param {string} i the name of the interface
 * @param {string} a the values of the interface as string: ``` 'xtype: string \n\t ytype: number \n\t ...'```
 * @returns {string}
 */
export const buildInterface = (i, a) => `export type ${i} = {\n\t${a}\n}\n`;
/**
 * Takes a function with one parameter that returns a boolean and evaluates an array against that function to filter its values
 * @param {function b(n: string) => boolean}
 * @param {string[]} t the array to filter by the above (b) function
 */
// eslint-disable-next-line functional/prefer-readonly-type
export const typesRejector = (b) => (t) => R.filter(b)(t);
/**
 * Returns a function that takes param s and r and returns the matching regex in s with r appended at the end, or if no match then returns an empty string
 * @param regex the regex to find and extract from string
 * @param {string} s the string to evaluate
 * @param {string} r (optional) the string to append to the end of s
 */
export const extractMatchAndAppend = (regex) => (s, a) => {
    const f = s.match(regex);
    return f && f.length ? `${f[0]}${a || ''}` : '';
};
const appends = {
    type: ': string',
    array: ': string[] | {}',
    conditional: ': boolean | string'
};
const processTypes = R.pipe(typesRejector((n) => n.search(/#|@|\/|\.\/|\.|\{|log |else|this/) < 0), R.map(x => `${x}${appends.type}`));
const processBlocks = R.converge(R.concat, [
    R.pipe(typesRejector((n) => n.search(/#list |#each /) >= 0), R.map(x => extractMatchAndAppend(/(?<=#list |#each )(.+?)(?= |\.|}|$)/)(x, appends.array))),
    R.pipe(typesRejector((n) => n.search(/#if |#unless /) >= 0), R.map(x => extractMatchAndAppend(/(?<=#if |#unless )(.+?)(?= |\.|}|$)/)(x, appends.conditional)))
]);
export const uniteTypesAndBlocks = (t, b) => R.union(t, b).join(`\n\t`);
/**
 * Receives and array of template context variables and blocks and returns a list of types as string
 */
export const buildTypes = R.converge(uniteTypesAndBlocks, // join type properties and blocks
[processTypes, processBlocks]);
/**
 * Replace regex matches in a string with the provided value
 * @param reg regex to match and replace
 * @param val value to replace matches
 * @param s string to evaluate
 */
export const replaceRegex = (reg, val) => (s) => s.replace(reg, val);
/**
 * Takes a string array of file paths and returns an array of objects with properties of the same file name
 * whose values are all the found {{string}} transformed in string: string
 */
export const constructData = R.converge(buildInterface, [
    R.pipe(R.split('/'), R.last, R.split('.'), R.head, replaceRegex(/\W+/, '')),
    R.pipe(readFile, R.match(/(?<=\{{2}).+?(?=\}{2})/g), // returns an array with the strings inside {{ }}
    buildTypes)
]);
/**
 * Reads de contents of a list of files and return a single string with the type definitions of the context objects found
 * @param {readonly string[]} files: the list of file paths
 * @returns {string}
 */
export const traverseFiles = (files) => R.pipe(R.map(constructData), R.join('\n'))(files);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhdmVyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90cmF2ZXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFBO0FBQ25CLE9BQU8sQ0FBQyxNQUFNLE9BQU8sQ0FBQTtBQUVyQjs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBWSxFQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtBQUVwRzs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxDQUN2QixDQUFTLEVBQ1QsQ0FBNkIsRUFDdUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBRXhGOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBVSxFQUFFLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUE7QUFFbkc7Ozs7R0FJRztBQUNILDJEQUEyRDtBQUMzRCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsQ0FBQyxDQUF5QixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQVcsRUFBcUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFFOUc7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLEtBQWEsRUFBdUMsRUFBRSxDQUFDLENBQ3pGLENBQVMsRUFDVCxDQUFVLEVBQ0osRUFBRTtJQUNSLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FB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