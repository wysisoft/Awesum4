'use strict'
const schema16 = {
$id: 'internal',
type: 'object',
properties: {
id: { format: 'uuid', type: 'string' },
lastModified: { default: 0, type: 'integer' }
},
required: ['id', 'lastModified']
}
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerInternalInterface } from '../serverInterfaces/ServerInternalInterface'
export async function validateInternal(
data:ServerInternalInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="internal" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
let missing0
if (
(data.id === undefined && (missing0 = 'id')) ||
(data.lastModified === undefined && (missing0 = 'lastModified'))
) {errors.push(
{
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: missing0 },
 message: "Required"
}
);
} else {
if (data.id !== undefined) {
let data0 = data.id
const _errs1 = errors
if (true) {
if (true) {
if (typeof data0 === 'string') {
if (!formats2.test(data0)) {errors.push(
{
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
);
}
} else {errors.push(
{
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid0 = _errs1 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.lastModified !== undefined) {
let data1 = data.lastModified
const _errs3 = errors
if (
!(
typeof data1 == 'number' &&
!(data1 % 1) &&
!isNaN(data1) &&
isFinite(data1)
)
) {errors.push(
{
instancePath: instancePath + '/lastModified',
schemaPath: '#/properties/lastModified/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_a_number"
}
);
}
var valid0 = _errs3 === errors
} else {
var valid0 = true
}
}
}
} else {errors.push(
{
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
);
}
}
return errors
}
