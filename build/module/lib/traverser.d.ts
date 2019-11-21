/**
 * Returns the content of a file as utf-8 encoded string
 * @param {string} path the path to the file
 * @returns {string}
 */
export declare const readFile: (path: string) => string;
/**
 * Returns a new object with property n holding value a
 * @param {string} n property to create
 * @param {(string | readonly)} a value to assign to property n
 * @returns {({ readonly [n: string]: string | readonly)} { n: a }
 */
export declare const buildObject: (n: string, a: string | readonly string[]) => {
    readonly [n: string]: string | readonly string[];
};
/**
 * Returns a string formatted as an interface of name i that contains all types described in a:
 * ```
 * interface i { a ... }
 * ```
 * @param {string} i the name of the interface
 * @param {string} a the values of the interface as string: ``` 'xtype: string \n\t ytype: number \n\t ...'```
 * @returns {string}
 */
export declare const buildInterface: (i: string, a: string) => string;
/**
 * Takes a function with one parameter that returns a boolean and evaluates an array against that function to filter its values
 * @param {function b(n: string) => boolean}
 * @param {string[]} t the array to filter by the above (b) function
 */
export declare const typesRejector: (b: (n: string) => boolean) => (t: string[]) => readonly string[];
/**
 * Returns a function that takes param s and r and returns the matching regex in s with r appended at the end, or if no match then returns an empty string
 * @param regex the regex to find and extract from string
 * @param {string} s the string to evaluate
 * @param {string} r (optional) the string to append to the end of s
 */
export declare const extractMatchAndAppend: (regex: RegExp) => (s: string, a?: string | undefined) => string;
export declare const uniteTypesAndBlocks: (t: readonly string[], b: readonly string[]) => string;
/**
 * Receives and array of template context variables and blocks and returns a list of types as string
 */
export declare const buildTypes: (...a: readonly any[]) => any;
/**
 * Takes a string array of file paths and returns an array of objects with properties of the same file name
 * whose values are all the found {{string}} transformed in string: string
 */
export declare const constructData: (...a: readonly any[]) => any;
/**
 * Reads de contents of a list of files and return a single string with the type definitions of the context objects found
 * @param {readonly string[]} files: the list of file paths
 * @returns {string}
 */
export declare const traverseFiles: (files: readonly string[]) => string;
