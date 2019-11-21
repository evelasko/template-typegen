import fs from 'fs'
import R from 'ramda'

/**
 * Returns the content of a file as utf-8 encoded string
 * @param {string} path the path to the file
 * @returns {string}
 */
export const readFile = (path: string): string => fs.readFileSync(path, { encoding: 'utf-8' }) || ''

/**
 * Returns a new object with property n holding value a
 * @param {string} n property to create
 * @param {(string | readonly)} a value to assign to property n
 * @returns {({ readonly [n: string]: string | readonly)} { n: a }
 */
export const buildObject = (
    n: string,
    a: string | readonly string[]
): { readonly [n: string]: string | readonly string[] } => Object.assign({}, { [n]: a })

/**
 * Returns a string formatted as an interface of name i that contains all types described in a:
 * ```
 * interface i { a ... }
 * ```
 * @param {string} i the name of the interface
 * @param {string} a the values of the interface as string: ``` 'xtype: string \n\t ytype: number \n\t ...'```
 * @returns {string}
 */
export const buildInterface = (i: string, a: string): string => `type ${i} = {\n\t${a}\n}\n`

/**
 * Takes a function with one parameter that returns a boolean and evaluates an array against that function to filter its values
 * @param {function b(n: string) => boolean}
 * @param {string[]} t the array to filter by the above (b) function
 */
// eslint-disable-next-line functional/prefer-readonly-type
export const typesRejector = (b: (n: string) => boolean) => (t: string[]): readonly string[] => R.filter(b)(t)

/**
 * Returns a function that takes param s and r and returns the matching regex in s with r appended at the end, or if no match then returns an empty string
 * @param regex the regex to find and extract from string
 * @param {string} s the string to evaluate
 * @param {string} r (optional) the string to append to the end of s
 */
export const extractMatchAndAppend = (regex: RegExp): ((s: string, a?: string) => string) => (
    s: string,
    a?: string
): string => {
    const f = s.match(regex)
    return f && f.length ? `${f[0]}${a || ''}` : ''
}

const appends = {
    type: ': string',
    array: ': string[] | {}',
    conditional: ': boolean | string'
}

const processTypes = R.pipe(
    typesRejector((n: string) => n.search(/#|@|\/|\.\/|\.|\{|log |else|this/) < 0),
    R.map(x => `${x}${appends.type}`)
)

const processBlocks = R.converge(R.concat, [
    R.pipe(
        typesRejector((n: string) => n.search(/#list |#each /) >= 0),
        R.map(x => extractMatchAndAppend(/(?<=#list |#each )(.+?)(?= |\.|}|$)/)(x, appends.array))
    ),
    R.pipe(
        typesRejector((n: string) => n.search(/#if |#unless /) >= 0),
        R.map(x => extractMatchAndAppend(/(?<=#if |#unless )(.+?)(?= |\.|}|$)/)(x, appends.conditional))
    )
])

export const uniteTypesAndBlocks = (t: readonly string[], b: readonly string[]): string => R.union(t, b).join(`\n\t`)

/**
 * Receives and array of template context variables and blocks and returns a list of types as string
 */
export const buildTypes = R.converge(
    uniteTypesAndBlocks, // join type properties and blocks
    [processTypes, processBlocks]
)
/**
 * Replace regex matches in a string with the provided value
 * @param reg regex to match and replace
 * @param val value to replace matches
 * @param s string to evaluate
 */
export const replaceRegex = (reg: RegExp, val: string) => (s: string) => s.replace(reg, val)

/**
 * Takes a string array of file paths and returns an array of objects with properties of the same file name
 * whose values are all the found {{string}} transformed in string: string
 */
export const constructData = R.converge(buildInterface, [
    R.pipe(R.split('/'), R.last, R.split('.'), R.head, replaceRegex(/\W+/, '')), // resolve interface name from file name
    R.pipe(
        readFile,
        R.match(/(?<=\{{2}).+?(?=\}{2})/g), // returns an array with the strings inside {{ }}
        buildTypes
    )
])

/**
 * Reads de contents of a list of files and return a single string with the type definitions of the context objects found
 * @param {readonly string[]} files: the list of file paths
 * @returns {string}
 */
export const traverseFiles = (files: readonly string[]): string => R.pipe(R.map(constructData), R.join('\n'))(files)
