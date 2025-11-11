'use strict'
const schema41 = {
$id: 'updateRouterStatusRequest',
type: 'object',
properties: {
type: { const: 'updateRouterStatusRequest', type: 'string' },
status: { type: 'string' },
remainingTime: { type: 'number' },
remainingImmediateTime: { type: 'number' },
startTime: { type: 'number' },
duration: { type: 'number' }
},
required: [
'type',
'status',
'remainingTime',
'remainingImmediateTime',
'startTime',
'duration'
]
}
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerUpdateRouterStatusRequestInterface } from '../serverInterfaces/ServerUpdateRouterStatusRequestInterface'
export async function validateUpdateRouterStatusRequest(
data:ServerUpdateRouterStatusRequestInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="updateRouterStatusRequest" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.type === undefined) {
const err0 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'type' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
if (data.status === undefined) {
const err1 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'status' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
if (data.remainingTime === undefined) {
const err2 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'remainingTime' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err2]
} else {
vErrors.push(err2)
}

}
if (data.remainingImmediateTime === undefined) {
const err3 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'remainingImmediateTime' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
if (data.startTime === undefined) {
const err4 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'startTime' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
if (data.duration === undefined) {
const err5 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'duration' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err5]
} else {
vErrors.push(err5)
}

}
if (data.type !== undefined) {
let data0 = data.type
if (typeof data0 !== 'string') {
const err6 = {
instancePath: instancePath + '/type',
schemaPath: '#/properties/type/type',
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
if ('updateRouterStatusRequest' !== data0) {
const err7 = {
instancePath: instancePath + '/type',
schemaPath: '#/properties/type/const',
keyword: 'const',
params: { allowedValue: 'updateRouterStatusRequest' },
message: 'must be equal to constant'
}
if (vErrors === null) {
vErrors = [err7]
} else {
vErrors.push(err7)
}

}
}
if (data.status !== undefined) {
if (typeof data.status !== 'string') {
const err8 = {
instancePath: instancePath + '/status',
schemaPath: '#/properties/status/type',
keyword: 'type',
params: { type: 'string' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err8]
} else {
vErrors.push(err8)
}

}
}
if (data.remainingTime !== undefined) {
let data2 = data.remainingTime
if (!(typeof data2 == 'number' && isFinite(data2))) {
const err9 = {
instancePath: instancePath + '/remainingTime',
schemaPath: '#/properties/remainingTime/type',
keyword: 'type',
params: { type: 'number' },
message: 'must be number'
}
if (vErrors === null) {
vErrors = [err9]
} else {
vErrors.push(err9)
}

}
}
if (data.remainingImmediateTime !== undefined) {
let data3 = data.remainingImmediateTime
if (!(typeof data3 == 'number' && isFinite(data3))) {
const err10 = {
instancePath: instancePath + '/remainingImmediateTime',
schemaPath: '#/properties/remainingImmediateTime/type',
keyword: 'type',
params: { type: 'number' },
message: 'must be number'
}
if (vErrors === null) {
vErrors = [err10]
} else {
vErrors.push(err10)
}

}
}
if (data.startTime !== undefined) {
let data4 = data.startTime
if (!(typeof data4 == 'number' && isFinite(data4))) {
const err11 = {
instancePath: instancePath + '/startTime',
schemaPath: '#/properties/startTime/type',
keyword: 'type',
params: { type: 'number' },
message: 'must be number'
}
if (vErrors === null) {
vErrors = [err11]
} else {
vErrors.push(err11)
}

}
}
if (data.duration !== undefined) {
let data5 = data.duration
if (!(typeof data5 == 'number' && isFinite(data5))) {
const err12 = {
instancePath: instancePath + '/duration',
schemaPath: '#/properties/duration/type',
keyword: 'type',
params: { type: 'number' },
message: 'must be number'
}
if (vErrors === null) {
vErrors = [err12]
} else {
vErrors.push(err12)
}

}
}
} else {
const err13 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err13]
} else {
vErrors.push(err13)
}

}
return vErrors
}
