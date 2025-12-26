'use strict'
const schema45 = {
$id: 'dnsEntry',
type: 'object',
properties: {
timestamp: { type: 'number' },
domain: { type: 'string' },
routerId: {
default: '019b57de-fd77-73a5-a03e-e305c8ef39cc',
format: 'uuid',
type: 'string'},
id: {
default: '019b57de-fd77-73a5-a03e-e794f5fe6ec5',
format: 'uuid',
type: 'string'
}
},
required: ['timestamp', 'domain', 'routerId', 'id']
}
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerDnsEntryInterface } from '../serverInterfaces/ServerDnsEntryInterface'
export async function validateDnsEntry(
data:ServerDnsEntryInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="dnsEntry" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.timestamp === undefined) {
const err0 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'timestamp' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
if (data.domain === undefined) {
const err1 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'domain' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
if (data.routerId === undefined) {
const err2 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'routerId' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err2]
} else {
vErrors.push(err2)
}

}
if (data.id === undefined) {
const err3 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'id' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
if (data.timestamp !== undefined) {
let data0 = data.timestamp
if (!(typeof data0 == 'number' && isFinite(data0))) {
const err4 = {
instancePath: instancePath + '/timestamp',
schemaPath: '#/properties/timestamp/type',
keyword: 'type',
params: { type: 'number' },
message: 'must be number'
}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
}
if (data.domain !== undefined) {
if (typeof data.domain !== 'string') {
const err5 = {
instancePath: instancePath + '/domain',
schemaPath: '#/properties/domain/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err5]
} else {
vErrors.push(err5)
}

}
}
if (data.routerId !== undefined) {
let data2 = data.routerId
if (typeof data2 === 'string') {
if (!formats2.test(data2)) {
const err6 = {
instancePath: instancePath + '/routerId',
schemaPath: '#/properties/routerId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err6]
} else {
vErrors.push(err6)
}

}
} else {
const err7 = {
instancePath: instancePath + '/routerId',
schemaPath: '#/properties/routerId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err7]
} else {
vErrors.push(err7)
}

}
}
if (data.id !== undefined) {
let data3 = data.id
if (typeof data3 === 'string') {
if (!formats2.test(data3)) {
const err8 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err8]
} else {
vErrors.push(err8)
}

}
} else {
const err9 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/type',
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
