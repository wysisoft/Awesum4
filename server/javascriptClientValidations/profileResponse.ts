'use strict'
const schema26 = {
$id: 'profileResponse',
type: 'object',
properties: {
sub: { type: 'string' },
name: { type: 'string' },
given_name: { type: 'string' },
family_name: { type: 'string' },
picture: { type: 'string' },
email: { type: 'string' },
provider: { type: 'string' },
email_verified: { type: 'boolean' },
sessionId: { type: 'string' }
},
required: [
'sub',
'name',
'given_name',
'family_name',
'picture',
'email',
'provider',
'email_verified',
'sessionId'
]
}
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerProfileResponseInterface } from '../serverInterfaces/ServerProfileResponseInterface'
export async function validateProfileResponse(
data:ServerProfileResponseInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="profileResponse" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.sub === undefined) {
const err0 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'sub' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
if (data.name === undefined) {
const err1 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'name' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
if (data.given_name === undefined) {
const err2 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'given_name' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err2]
} else {
vErrors.push(err2)
}

}
if (data.family_name === undefined) {
const err3 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'family_name' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
if (data.picture === undefined) {
const err4 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'picture' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
if (data.email === undefined) {
const err5 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'email' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err5]
} else {
vErrors.push(err5)
}

}
if (data.provider === undefined) {
const err6 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'provider' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err6]
} else {
vErrors.push(err6)
}

}
if (data.email_verified === undefined) {
const err7 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'email_verified' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err7]
} else {
vErrors.push(err7)
}

}
if (data.sessionId === undefined) {
const err8 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'sessionId' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err8]
} else {
vErrors.push(err8)
}

}
if (data.sub !== undefined) {
if (typeof data.sub !== 'string') {
const err9 = {
instancePath: instancePath + '/sub',
schemaPath: '#/properties/sub/type',
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
if (data.name !== undefined) {
if (typeof data.name !== 'string') {
const err10 = {
instancePath: instancePath + '/name',
schemaPath: '#/properties/name/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err10]
} else {
vErrors.push(err10)
}

}
}
if (data.given_name !== undefined) {
if (typeof data.given_name !== 'string') {
const err11 = {
instancePath: instancePath + '/given_name',
schemaPath: '#/properties/given_name/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err11]
} else {
vErrors.push(err11)
}

}
}
if (data.family_name !== undefined) {
if (typeof data.family_name !== 'string') {
const err12 = {
instancePath: instancePath + '/family_name',
schemaPath: '#/properties/family_name/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err12]
} else {
vErrors.push(err12)
}

}
}
if (data.picture !== undefined) {
if (typeof data.picture !== 'string') {
const err13 = {
instancePath: instancePath + '/picture',
schemaPath: '#/properties/picture/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err13]
} else {
vErrors.push(err13)
}

}
}
if (data.email !== undefined) {
if (typeof data.email !== 'string') {
const err14 = {
instancePath: instancePath + '/email',
schemaPath: '#/properties/email/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err14]
} else {
vErrors.push(err14)
}

}
}
if (data.provider !== undefined) {
if (typeof data.provider !== 'string') {
const err15 = {
instancePath: instancePath + '/provider',
schemaPath: '#/properties/provider/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err15]
} else {
vErrors.push(err15)
}

}
}
if (data.email_verified !== undefined) {
if (typeof data.email_verified !== 'boolean') {
const err16 = {
instancePath: instancePath + '/email_verified',
schemaPath: '#/properties/email_verified/type',
keyword: 'type',
params: { type: 'boolean' },
message: 'must be boolean'
}
if (vErrors === null) {
vErrors = [err16]
} else {
vErrors.push(err16)
}

}
}
if (data.sessionId !== undefined) {
if (typeof data.sessionId !== 'string') {
const err17 = {
instancePath: instancePath + '/sessionId',
schemaPath: '#/properties/sessionId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err17]
} else {
vErrors.push(err17)
}

}
}
} else {
const err18 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err18]
} else {
vErrors.push(err18)
}

}
return vErrors
}
