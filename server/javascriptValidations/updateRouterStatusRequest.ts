'use strict'
const schema44 = {
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
/*# sourceURL="updateRouterStatusRequest" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
let missing0
if (
(data.type === undefined && (missing0 = 'type')) ||
(data.status === undefined && (missing0 = 'status')) ||
(data.remainingTime === undefined && (missing0 = 'remainingTime')) ||
(data.remainingImmediateTime === undefined &&
(missing0 = 'remainingImmediateTime')) ||
(data.startTime === undefined && (missing0 = 'startTime')) ||
(data.duration === undefined && (missing0 = 'duration'))
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
if (data.type !== undefined) {
let data0 = data.type
const _errs1 = errors
if (typeof data0 !== 'string') {errors.push(
{
instancePath: instancePath + '/type',
schemaPath: '#/properties/type/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
if ('updateRouterStatusRequest' !== data0) {errors.push(
{
instancePath: instancePath + '/type',
schemaPath: '#/properties/type/const',
keyword: 'const',
params: { allowedValue: 'updateRouterStatusRequest' },
message: 'must be equal to constant'
}
);
}
var valid0 = _errs1 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.status !== undefined) {
const _errs3 = errors
if (typeof data.status !== 'string') {errors.push(
{
instancePath: instancePath + '/status',
schemaPath: '#/properties/status/type',
keyword: 'type',
params: { type: 'string' },
 message: "Must_be_an_integer"
}
);
}
var valid0 = _errs3 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.remainingTime !== undefined) {
let data2 = data.remainingTime
const _errs5 = errors
if (!(typeof data2 == 'number' && isFinite(data2))) {errors.push(
{
instancePath: instancePath + '/remainingTime',
schemaPath: '#/properties/remainingTime/type',
keyword: 'type',
params: { type: 'number' },
message: 'must be number'
}
);
}
var valid0 = _errs5 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.remainingImmediateTime !== undefined) {
let data3 = data.remainingImmediateTime
const _errs7 = errors
if (!(typeof data3 == 'number' && isFinite(data3))) {errors.push(
{
instancePath: instancePath + '/remainingImmediateTime',
schemaPath: '#/properties/remainingImmediateTime/type',
keyword: 'type',
params: { type: 'number' },
message: 'must be number'
}
);
}
var valid0 = _errs7 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.startTime !== undefined) {
let data4 = data.startTime
const _errs9 = errors
if (!(typeof data4 == 'number' && isFinite(data4))) {errors.push(
{
instancePath: instancePath + '/startTime',
schemaPath: '#/properties/startTime/type',
keyword: 'type',
params: { type: 'number' },
message: 'must be number'
}
);
}
var valid0 = _errs9 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.duration !== undefined) {
let data5 = data.duration
const _errs11 = errors
if (!(typeof data5 == 'number' && isFinite(data5))) {errors.push(
{
instancePath: instancePath + '/duration',
schemaPath: '#/properties/duration/type',
keyword: 'type',
params: { type: 'number' },
message: 'must be number'
}
);
}
var valid0 = _errs11 === errors
} else {
var valid0 = true
}
}
}
}
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
