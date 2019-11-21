[template-typegen](README.md) › [Globals](globals.md)

# template-typegen

## Index

### Variables

* [buildTypes](globals.md#const-buildtypes)
* [constructData](globals.md#const-constructdata)
* [input](globals.md#const-input)
* [processBlocks](globals.md#const-processblocks)
* [processTypes](globals.md#const-processtypes)

### Functions

* [buildInterface](globals.md#const-buildinterface)
* [buildObject](globals.md#const-buildobject)
* [extractMatchAndAppend](globals.md#const-extractmatchandappend)
* [readFile](globals.md#const-readfile)
* [recursePath](globals.md#const-recursepath)
* [traverseFiles](globals.md#const-traversefiles)
* [typesRejector](globals.md#const-typesrejector)
* [uniteTypesAndBlocks](globals.md#const-unitetypesandblocks)
* [writeFile](globals.md#const-writefile)

### Object literals

* [appends](globals.md#const-appends)

## Variables

### `Const` buildTypes

• **buildTypes**: *function* =  R.converge(
    uniteTypesAndBlocks, // join type properties and blocks
    [processTypes, processBlocks]
)

*Defined in [src/lib/traverser.ts:86](https://github.com/evelasko/template-typegen/blob/0d0f2d2/src/lib/traverser.ts#L86)*

Receives and array of template context variables and blocks and returns a list of types as string

#### Type declaration:

▸ (...`a`: keyof any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | keyof any[] |

___

### `Const` constructData

• **constructData**: *function* =  R.converge(buildInterface, [
    R.pipe(R.split('/'), R.last, R.split('.'), R.head), // resolve interface name from file name
    R.pipe(
        readFile,
        R.match(/(?<=\{{2}).+?(?=\}{2})/g), // returns an array with the strings inside {{ }}
        buildTypes
    )
])

*Defined in [src/lib/traverser.ts:95](https://github.com/evelasko/template-typegen/blob/0d0f2d2/src/lib/traverser.ts#L95)*

Takes a string array of file paths and returns an array of objects with properties of the same file name
whose values are all the found {{string}} transformed in string: string

#### Type declaration:

▸ (...`a`: keyof any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | keyof any[] |

___

### `Const` input

• **input**: *object* =  yargs.usage('Usage: template-typegen <pathToTemplatesFolder> <pathToOutputFolder>').argv

*Defined in [src/cli.ts:8](https://github.com/evelasko/template-typegen/blob/0d0f2d2/src/cli.ts#L8)*

#### Type declaration:

___

### `Const` processBlocks

• **processBlocks**: *function* =  R.converge(R.concat, [
    // R.pipe(
    //     typesRejector((n: string) => n.search(/\/|\.\/|\{|if/) >= 0),
    //     R.map(x => `${x} <B>`)
    // ),
    R.pipe(
        typesRejector((n: string) => n.search(/#list |#each /) >= 0),
        R.map(x => extractMatchAndAppend(/(?<=#list |#each )(.+?)(?= |\.|}|$)/)(x, appends.array))
    ),
    R.pipe(
        typesRejector((n: string) => n.search(/#if |#unless /) >= 0),
        R.map(x => extractMatchAndAppend(/(?<=#if |#unless )(.+?)(?= |\.|}|$)/)(x, appends.conditional))
    )
])

*Defined in [src/lib/traverser.ts:66](https://github.com/evelasko/template-typegen/blob/0d0f2d2/src/lib/traverser.ts#L66)*

#### Type declaration:

▸ (...`a`: keyof any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | keyof any[] |

___

### `Const` processTypes

• **processTypes**: *function* =  R.pipe(
    typesRejector((n: string) => n.search(/#|@|\/|\.\/|\{|log |else|this/) < 0),
    R.map(x => `${x}${appends.type}`)
)

*Defined in [src/lib/traverser.ts:61](https://github.com/evelasko/template-typegen/blob/0d0f2d2/src/lib/traverser.ts#L61)*

#### Type declaration:

▸ (`x0`: V0): *T2*

**Parameters:**

Name | Type |
------ | ------ |
`x0` | V0 |

## Functions

### `Const` buildInterface

▸ **buildInterface**(`i`: string, `a`: string): *string*

*Defined in [src/lib/traverser.ts:31](https://github.com/evelasko/template-typegen/blob/0d0f2d2/src/lib/traverser.ts#L31)*

Returns a string formatted as an interface of name i that contains all types described in a:
```
interface i { a ... }
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`i` | string | the name of the interface |
`a` | string | the values of the interface as string: ``` 'xtype: string \n\t ytype: number \n\t ...'``` |

**Returns:** *string*

___

### `Const` buildObject

▸ **buildObject**(`n`: string, `a`: string | keyof string[]): *object*

*Defined in [src/lib/traverser.ts:17](https://github.com/evelasko/template-typegen/blob/0d0f2d2/src/lib/traverser.ts#L17)*

Returns a new object with property n holding value a

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | string | property to create |
`a` | string &#124; keyof string[] | value to assign to property n |

**Returns:** *object*

{ n: a }

* \[ **n**: *string*\]: string | keyof string[]

___

### `Const` extractMatchAndAppend

▸ **extractMatchAndAppend**(`regex`: RegExp): *function*

*Defined in [src/lib/traverser.ts:47](https://github.com/evelasko/template-typegen/blob/0d0f2d2/src/lib/traverser.ts#L47)*

Returns a function that takes param s and r and returns the matching regex in s with r appended at the end, or if no match then returns an empty string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`regex` | RegExp | the regex to find and extract from string |

**Returns:** *function*

▸ (`s`: string, `a?`: undefined | string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |
`a?` | undefined &#124; string |

___

### `Const` readFile

▸ **readFile**(`path`: string): *string*

*Defined in [src/lib/traverser.ts:9](https://github.com/evelasko/template-typegen/blob/0d0f2d2/src/lib/traverser.ts#L9)*

Returns the content of a file as utf-8 encoded string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string | the path to the file |

**Returns:** *string*

___

### `Const` recursePath

▸ **recursePath**(`dirPath`: string): *Promise‹keyof string[]›*

*Defined in [src/lib/sfn.ts:13](https://github.com/evelasko/template-typegen/blob/0d0f2d2/src/lib/sfn.ts#L13)*

Returns an array of every .hbs and .mjml files in the directory path provided starting from where the command is run

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dirPath` | string | path to directory to traverse for hbs and mjml template files |

**Returns:** *Promise‹keyof string[]›*

___

### `Const` traverseFiles

▸ **traverseFiles**(`files`: keyof string[]): *string*

*Defined in [src/lib/traverser.ts:109](https://github.com/evelasko/template-typegen/blob/0d0f2d2/src/lib/traverser.ts#L109)*

Reads de contents of a list of files and return a single string with the type definitions of the context objects found

**Parameters:**

Name | Type |
------ | ------ |
`files` | keyof string[] |

**Returns:** *string*

___

### `Const` typesRejector

▸ **typesRejector**(`b`: function): *(Anonymous function)*

*Defined in [src/lib/traverser.ts:39](https://github.com/evelasko/template-typegen/blob/0d0f2d2/src/lib/traverser.ts#L39)*

Takes a function with one parameter that returns a boolean and evaluates an array against that function to filter its values

**Parameters:**

▪ **b**: *function*

▸ (`n`: string): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`n` | string |

**Returns:** *(Anonymous function)*

___

### `Const` uniteTypesAndBlocks

▸ **uniteTypesAndBlocks**(`t`: keyof string[], `b`: keyof string[]): *string*

*Defined in [src/lib/traverser.ts:81](https://github.com/evelasko/template-typegen/blob/0d0f2d2/src/lib/traverser.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | keyof string[] |
`b` | keyof string[] |

**Returns:** *string*

___

### `Const` writeFile

▸ **writeFile**(`path`: string, `data`: string): *boolean*

*Defined in [src/lib/sfn.ts:25](https://github.com/evelasko/template-typegen/blob/0d0f2d2/src/lib/sfn.ts#L25)*

Writes a string to a file at specified path

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string | the path to the file including the file name and extension |
`data` | string | the string to write |

**Returns:** *boolean*

## Object literals

### `Const` appends

### ▪ **appends**: *object*

*Defined in [src/lib/traverser.ts:55](https://github.com/evelasko/template-typegen/blob/0d0f2d2/src/lib/traverser.ts#L55)*

###  array

• **array**: *string* = ": string[] | {}"

*Defined in [src/lib/traverser.ts:57](https://github.com/evelasko/template-typegen/blob/0d0f2d2/src/lib/traverser.ts#L57)*

###  conditional

• **conditional**: *string* = ": boolean | string"

*Defined in [src/lib/traverser.ts:58](https://github.com/evelasko/template-typegen/blob/0d0f2d2/src/lib/traverser.ts#L58)*

###  type

• **type**: *string* = ": string"

*Defined in [src/lib/traverser.ts:56](https://github.com/evelasko/template-typegen/blob/0d0f2d2/src/lib/traverser.ts#L56)*
