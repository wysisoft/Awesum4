'use strict'
const schema41 = {
$id: 'displayNameFromEmailResponse',
type: 'object',
properties: { name: { type: 'string' } },
required: ['name']
}
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerDisplayNameFromEmailResponseInterface } from '../serverInterfaces/ServerDisplayNameFromEmailResponseInterface'
export async function validateDisplayNameFromEmailResponse(
data:ServerDisplayNameFromEmailResponseInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="displayNameFromEmailResponse" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.name === undefined) {
const err0 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'name' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
if (data.name !== undefined) {
if (typeof data.name !== 'string') {
const err1 = {
instancePath: instancePath + '/name',
schemaPath: '#/properties/name/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
}
} else {
const err2 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err2]
} else {
vErrors.push(err2)
}

}
return vErrors
}
