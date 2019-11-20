/* eslint-disable functional/no-expression-statement */
import test from 'ava'

import { extractMatchAndAppend } from './traverser'

test('extractMatchAndAppend', t => {
    const a = '#each employee'
    const b = '#each user.book as |book bookId|'
    const c = '#each otherArray as |value key|'
    t.deepEqual(extractMatchAndAppend(/(?<=#each |#unless )(.+?)(?= |\.|}|$)/g)(a, '%'), 'employee%')
    t.deepEqual(extractMatchAndAppend(/(?<=#each |#unless )(.+?)(?= |\.|}|$)/g)(b, '%'), 'user%')
    t.deepEqual(extractMatchAndAppend(/(?<=#each |#unless )(.+?)(?= |\.|}|$)/g)(c, '%'), 'otherArray%')
})
