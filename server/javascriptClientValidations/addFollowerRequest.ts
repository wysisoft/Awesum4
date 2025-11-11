'use strict'
const schema27 = {
$id: 'addFollowerRequest',
type: 'object',
properties: {
groups: { minLength: 1, maxLength: 8000, type: 'string' },
leaderAppId: { format: 'uuid', type: 'string' },
followerEmail: {
minLength: 1,
maxLength: 100,
format: 'email',
doesEmailExist: true,
emailIsNotUser: true,
type: 'string'},
initiatedByFollower: { type: 'boolean' }
},
required: ['groups', 'leaderAppId', 'followerEmail', 'initiatedByFollower']
}
import * as ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = ucs2length.default;
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
const formats0 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerAddFollowerRequestInterface } from '../serverInterfaces/ServerAddFollowerRequestInterface'
export async function validateAddFollowerRequest(
data:ServerAddFollowerRequestInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="addFollowerRequest" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.groups === undefined) {
const err0 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'groups' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
if (data.leaderAppId === undefined) {
const err1 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'leaderAppId' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
if (data.followerEmail === undefined) {
const err2 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'followerEmail' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err2]
} else {
vErrors.push(err2)
}

}
if (data.initiatedByFollower === undefined) {
const err3 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'initiatedByFollower' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
if (data.groups !== undefined) {
let data0 = data.groups
if (typeof data0 === 'string') {
if (func4(data0) > 8000) {
const err4 = {
instancePath: instancePath + '/groups',
schemaPath: '#/properties/groups/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
if (func4(data0) < 1) {
const err5 = {
instancePath: instancePath + '/groups',
schemaPath: '#/properties/groups/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err5]
} else {
vErrors.push(err5)
}

}
} else {
const err6 = {
instancePath: instancePath + '/groups',
schemaPath: '#/properties/groups/type',
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
if (data.leaderAppId !== undefined) {
let data1 = data.leaderAppId
if (typeof data1 === 'string') {
if (!formats2.test(data1)) {
const err7 = {
instancePath: instancePath + '/leaderAppId',
schemaPath: '#/properties/leaderAppId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err7]
} else {
vErrors.push(err7)
}

}
} else {
const err8 = {
instancePath: instancePath + '/leaderAppId',
schemaPath: '#/properties/leaderAppId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err8]
} else {
vErrors.push(err8)
}

}
}
if (data.followerEmail !== undefined) {
let data2 = data.followerEmail
if (typeof data2 === 'string') {
if (func4(data2) > 100) {
const err9 = {
instancePath: instancePath + '/followerEmail',
schemaPath: '#/properties/followerEmail/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err9]
} else {
vErrors.push(err9)
}

}
if (func4(data2) < 1) {
const err10 = {
instancePath: instancePath + '/followerEmail',
schemaPath: '#/properties/followerEmail/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err10]
} else {
vErrors.push(err10)
}

}
if (!formats0.test(data2)) {
const err11 = {
instancePath: instancePath + '/followerEmail',
schemaPath: '#/properties/followerEmail/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"}
if (vErrors === null) {
vErrors = [err11]
} else {
vErrors.push(err11)
}

}
if (!await serverAndClientFunctions.doesEmailExist(data2)) {
const err12 = {
instancePath: instancePath + '/followerEmail',
schemaPath: '#/properties/followerEmail/doesEmailExist',
keyword: 'doesEmailExist',
params: {},
 message: "Email_does_not_exist"}
if (vErrors === null) {
vErrors = [err12]
} else {
vErrors.push(err12)
}

}
if (
!await serverAndClientFunctions.emailIsNotUser(
data2,
awaesumUserName
)
) {
const err13 = {
instancePath: instancePath + '/followerEmail',
schemaPath: '#/properties/followerEmail/emailIsNotUser',
keyword: 'emailIsNotUser',
params: {},
 message: "Email_cannot_be_your_email"}
if (vErrors === null) {
vErrors = [err13]
} else {
vErrors.push(err13)
}

}
} else {
const err14 = {
instancePath: instancePath + '/followerEmail',
schemaPath: '#/properties/followerEmail/type',
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
if (data.initiatedByFollower !== undefined) {
if (typeof data.initiatedByFollower !== 'boolean') {
const err15 = {
instancePath: instancePath + '/initiatedByFollower',
schemaPath: '#/properties/initiatedByFollower/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
if (vErrors === null) {
vErrors = [err15]
} else {
vErrors.push(err15)
}

}
}
} else {
const err16 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err16]
} else {
vErrors.push(err16)
}

}
return vErrors
}
