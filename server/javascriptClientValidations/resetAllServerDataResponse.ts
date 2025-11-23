'use strict'
const schema23 = {
$id: 'resetAllServerDataResponse',
type: 'object',
properties: {
appFound: { type: 'boolean' },
appDeleted: { type: 'boolean' }
},
required: ['appFound', 'appDeleted']
}
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerResetAllServerDataResponseInterface } from '../serverInterfaces/ServerResetAllServerDataResponseInterface'
export async function validateResetAllServerDataResponse(
data:ServerResetAllServerDataResponseInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="resetAllServerDataResponse" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.appFound === undefined) {
const err0 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'appFound' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
if (data.appDeleted === undefined) {
const err1 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'appDeleted' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
if (data.appFound !== undefined) {
if (typeof data.appFound !== 'boolean') {
const err2 = {
instancePath: instancePath + '/appFound',
schemaPath: '#/properties/appFound/type',
keyword: 'type',
params: { type: 'boolean' },
message: 'must be boolean'
}
if (vErrors === null) {
vErrors = [err2]
} else {
vErrors.push(err2)
}

}
}
if (data.appDeleted !== undefined) {
if (typeof data.appDeleted !== 'boolean') {
const err3 = {
instancePath: instancePath + '/appDeleted',
schemaPath: '#/properties/appDeleted/type',
keyword: 'type',
params: { type: 'boolean' },
message: 'must be boolean'
}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
}
} else {
const err4 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
return vErrors
}
