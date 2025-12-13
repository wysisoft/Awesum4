'use strict'
const schema14 = {
$id: 'modification',
type: 'object',
properties: { id: { type: 'string' } },
required: ['id']
}
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerModificationInterface } from '../serverInterfaces/ServerModificationInterface'
export async function validateModification(
data:ServerModificationInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="modification" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.id === undefined) {
const err0 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'id' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
if (data.id !== undefined) {
if (typeof data.id !== 'string') {
const err1 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/type',
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
