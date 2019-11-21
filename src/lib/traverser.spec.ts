/* eslint-disable functional/no-expression-statement */
import test from 'ava'

import { buildInterface, buildObject } from './traverser'

test('buildObject', t => {
    t.deepEqual(buildObject('obj', ['value1', 'value2']), { obj: ['value1', 'value2'] })
})

test('buildInterface', t => {
    t.is(buildInterface('SomeInterface', `types`), `type SomeInterface = {\n\ttypes\n}\n`)
})
