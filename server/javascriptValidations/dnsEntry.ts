'use strict'
const schema42 = {
$id: 'dnsEntry',
type: 'object',
properties: {
timestamp: { type: 'number' },
domain: { type: 'string' },
routerId: {
default: '019a7424-d933-71e8-89c8-272f5007c45b',
format: 'uuid',
type: 'string'},
id: {
default: '019a7424-d933-71e8-89c8-29be0bd31314',
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
/*# sourceURL="dnsEntry" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
let missing0
if (
(data.timestamp === undefined && (missing0 = 'timestamp')) ||
(data.domain === undefined && (missing0 = 'domain')) ||
(data.routerId === undefined && (missing0 = 'routerId')) ||
(data.id === undefined && (missing0 = 'id'))
) {errors.push(
{
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: missing0 },
 message: "Required"}
);
} else {
if (data.timestamp !== undefined) {
let data0 = data.timestamp
const _errs1 = errors
if (!(typeof data0 == 'number' && isFinite(data0))) {errors.push(
{
instancePath: instancePath + '/timestamp',
schemaPath: '#/properties/timestamp/type',
keyword: 'type',
params: { type: 'number' },
message: 'must be number'
}
);
}
var valid0 = _errs1 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.domain !== undefined) {
const _errs3 = errors
if (typeof data.domain !== 'string') {errors.push(
{
instancePath: instancePath + '/domain',
schemaPath: '#/properties/domain/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
var valid0 = _errs3 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.routerId !== undefined) {
let data2 = data.routerId
const _errs5 = errors
if (true) {
if (true) {
if (typeof data2 === 'string') {
if (!formats2.test(data2)) {errors.push(
{
instancePath: instancePath + '/routerId',
schemaPath: '#/properties/routerId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/routerId',
schemaPath: '#/properties/routerId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid0 = _errs5 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.id !== undefined) {
let data3 = data.id
const _errs7 = errors
if (true) {
if (true) {
if (typeof data3 === 'string') {
if (!formats2.test(data3)) {errors.push(
{
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid0 = _errs7 === errors
} else {
var valid0 = true
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
