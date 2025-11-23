'use strict'
const schema20 = {
$id: 'addAssignmentRequest',
type: 'object',
properties: {
group: { maxLength: 100, default: '', type: 'string' },
followerRequestId: { format: 'uuid', type: 'string' },
databaseId: { minLength: 1, format: 'uuid', type: 'string' }
},
required: ['group', 'followerRequestId', 'databaseId']
}
import * as ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = ucs2length.default;
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerAddAssignmentRequestInterface } from '../serverInterfaces/ServerAddAssignmentRequestInterface'
export async function validateAddAssignmentRequest(
data:ServerAddAssignmentRequestInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="addAssignmentRequest" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.group === undefined) {
const err0 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'group' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
if (data.followerRequestId === undefined) {
const err1 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'followerRequestId' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
if (data.databaseId === undefined) {
const err2 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'databaseId' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err2]
} else {
vErrors.push(err2)
}

}
if (data.group !== undefined) {
let data0 = data.group
if (typeof data0 === 'string') {
if (func4(data0) > 100) {
const err3 = {
instancePath: instancePath + '/group',
schemaPath: '#/properties/group/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
} else {
const err4 = {
instancePath: instancePath + '/group',
schemaPath: '#/properties/group/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
}
if (data.followerRequestId !== undefined) {
let data1 = data.followerRequestId
if (typeof data1 === 'string') {
if (!formats2.test(data1)) {
const err5 = {
instancePath: instancePath + '/followerRequestId',
schemaPath: '#/properties/followerRequestId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err5]
} else {
vErrors.push(err5)
}

}
} else {
const err6 = {
instancePath: instancePath + '/followerRequestId',
schemaPath: '#/properties/followerRequestId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err6]
} else {
vErrors.push(err6)
}

}
}
if (data.databaseId !== undefined) {
let data2 = data.databaseId
if (typeof data2 === 'string') {
if (func4(data2) < 1) {
const err7 = {
instancePath: instancePath + '/databaseId',
schemaPath: '#/properties/databaseId/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err7]
} else {
vErrors.push(err7)
}

}
if (!formats2.test(data2)) {
const err8 = {
instancePath: instancePath + '/databaseId',
schemaPath: '#/properties/databaseId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err8]
} else {
vErrors.push(err8)
}

}
} else {
const err9 = {
instancePath: instancePath + '/databaseId',
schemaPath: '#/properties/databaseId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err9]
} else {
vErrors.push(err9)
}

}
}
} else {
const err10 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err10]
} else {
vErrors.push(err10)
}

}
return vErrors
}
