'use strict'
const schema36 = {
$id: 'unfollowFollowerRequest',
type: 'object',
properties: { followerRequestId: { format: 'uuid', type: 'string' } },
required: ['followerRequestId']
}
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerUnfollowFollowerRequestInterface } from '../serverInterfaces/ServerUnfollowFollowerRequestInterface'
export async function validateUnfollowFollowerRequest(
data:ServerUnfollowFollowerRequestInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="unfollowFollowerRequest" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.followerRequestId === undefined) {
const err0 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'followerRequestId' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
if (data.followerRequestId !== undefined) {
let data0 = data.followerRequestId
if (typeof data0 === 'string') {
if (!formats2.test(data0)) {
const err1 = {
instancePath: instancePath + '/followerRequestId',
schemaPath: '#/properties/followerRequestId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
} else {
const err2 = {
instancePath: instancePath + '/followerRequestId',
schemaPath: '#/properties/followerRequestId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err2]
} else {
vErrors.push(err2)
}

}
}
} else {
const err3 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
return vErrors
}
