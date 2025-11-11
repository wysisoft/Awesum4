'use strict'
const schema28 = {
$id: 'router',
type: 'object',
properties: {
id: {
default: '019a73cd-a2ef-751c-8fbf-ebed4011b1cc',
format: 'uuid',
type: 'string'},
appId: { format: 'uuid', type: 'string' },
routerMac: {
default: '00:00:00:00:00:00',
format: 'regex',
pattern: '^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$',
contentEncoding: 'base64',
type: 'string'},
ipAddress: { default: '0.0.0.0', format: 'ipv4', type: 'string' },
mondayTimesAndDurations: {
default: '06:30|60',
format: 'regex',
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$',
type: 'string'},
tuesdayTimesAndDurations: {
default: '06:30|60',
format: 'regex',
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$',
type: 'string'},
wednesdayTimesAndDurations: {
default: '06:30|60',
format: 'regex',
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$',
type: 'string'},
thursdayTimesAndDurations: {
default: '06:30|60',
format: 'regex',
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$',
type: 'string'},
fridayTimesAndDurations: {
default: '06:30|60',
format: 'regex',
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$',
type: 'string'},
saturdayTimesAndDurations: {
default: '06:30|60',
format: 'regex',
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$',
type: 'string'},
sundayTimesAndDurations: {
default: '06:30|60',
format: 'regex',
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$',
type: 'string'},
version: { default: 0, minimum: 0, type: 'integer' },
lastModified: { default: 1762879447791, type: 'number' },
status: { default: 1, maximum: 2, type: 'integer' }
},
required: [
'id',
'appId',
'routerMac',
'ipAddress',
'mondayTimesAndDurations',
'tuesdayTimesAndDurations',
'wednesdayTimesAndDurations',
'thursdayTimesAndDurations',
'fridayTimesAndDurations',
'saturdayTimesAndDurations',
'sundayTimesAndDurations',
'version',
'lastModified',
'status'
]
}
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import * as formats from 'ajv-formats/dist/formats'
const formats94 = formats.fullFormats.regex as any
const formats96 = /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/
const pattern1 = new RegExp('^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$', 'u')
const pattern2 = new RegExp('^([0-9]{2}:[0-9]{2})\\|([0-9]+)$', 'u')
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerRouterInterface } from '../serverInterfaces/ServerRouterInterface'
export async function validateRouter(
data:ServerRouterInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="router" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
let missing0
if (
(data.id === undefined && (missing0 = 'id')) ||
(data.appId === undefined && (missing0 = 'appId')) ||
(data.routerMac === undefined && (missing0 = 'routerMac')) ||
(data.ipAddress === undefined && (missing0 = 'ipAddress')) ||
(data.mondayTimesAndDurations === undefined &&
(missing0 = 'mondayTimesAndDurations')) ||
(data.tuesdayTimesAndDurations === undefined &&
(missing0 = 'tuesdayTimesAndDurations')) ||
(data.wednesdayTimesAndDurations === undefined &&
(missing0 = 'wednesdayTimesAndDurations')) ||
(data.thursdayTimesAndDurations === undefined &&
(missing0 = 'thursdayTimesAndDurations')) ||
(data.fridayTimesAndDurations === undefined &&
(missing0 = 'fridayTimesAndDurations')) ||
(data.saturdayTimesAndDurations === undefined &&
(missing0 = 'saturdayTimesAndDurations')) ||
(data.sundayTimesAndDurations === undefined &&
(missing0 = 'sundayTimesAndDurations')) ||
(data.version === undefined && (missing0 = 'version')) ||
(data.lastModified === undefined && (missing0 = 'lastModified')) ||
(data.status === undefined && (missing0 = 'status'))
) {errors.push(
{
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: missing0 },
 message: "Required"}
);
} else {
if (data.id !== undefined) {
let data0 = data.id
const _errs1 = errors
if (true) {
if (true) {
if (typeof data0 === 'string') {
if (!formats2.test(data0)) {errors.push(
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
var valid0 = _errs1 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.appId !== undefined) {
let data1 = data.appId
const _errs3 = errors
if (true) {
if (true) {
if (typeof data1 === 'string') {
if (!formats2.test(data1)) {errors.push(
{
instancePath: instancePath + '/appId',
schemaPath: '#/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/appId',
schemaPath: '#/properties/appId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid0 = _errs3 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.routerMac !== undefined) {
let data2 = data.routerMac
const _errs5 = errors
if (true) {
if (true) {
if (typeof data2 === 'string') {
if (!pattern1.test(data2)) {errors.push(
{
instancePath: instancePath + '/routerMac',
schemaPath: '#/properties/routerMac/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$'},
 message: "Must_be_a_valid_MAC_address"}
);
} else {
if (!formats94(data2)) {errors.push(
{
instancePath: instancePath + '/routerMac',
schemaPath: '#/properties/routerMac/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_MAC_address"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/routerMac',
schemaPath: '#/properties/routerMac/type',
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
if (data.ipAddress !== undefined) {
let data3 = data.ipAddress
const _errs7 = errors
if (true) {
if (true) {
if (typeof data3 === 'string') {
if (!formats96.test(data3)) {errors.push(
{
instancePath: instancePath + '/ipAddress',
schemaPath: '#/properties/ipAddress/format',
keyword: 'format',
params: { format: 'ipv4' },
 message: "Must_be_a_valid_IP_address"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/ipAddress',
schemaPath: '#/properties/ipAddress/type',
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
if (valid0) {
if (data.mondayTimesAndDurations !== undefined) {
let data4 = data.mondayTimesAndDurations
const _errs9 = errors
if (true) {
if (true) {
if (typeof data4 === 'string') {
if (!pattern2.test(data4)) {errors.push(
{
instancePath: instancePath + '/mondayTimesAndDurations',
schemaPath: '#/properties/mondayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats94(data4)) {errors.push(
{
instancePath: instancePath + '/mondayTimesAndDurations',
schemaPath: '#/properties/mondayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/mondayTimesAndDurations',
schemaPath: '#/properties/mondayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid0 = _errs9 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.tuesdayTimesAndDurations !== undefined) {
let data5 = data.tuesdayTimesAndDurations
const _errs11 = errors
if (true) {
if (true) {
if (typeof data5 === 'string') {
if (!pattern2.test(data5)) {errors.push(
{
instancePath: instancePath + '/tuesdayTimesAndDurations',
schemaPath: '#/properties/tuesdayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats94(data5)) {errors.push(
{
instancePath: instancePath + '/tuesdayTimesAndDurations',
schemaPath: '#/properties/tuesdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/tuesdayTimesAndDurations',
schemaPath: '#/properties/tuesdayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid0 = _errs11 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.wednesdayTimesAndDurations !== undefined) {
let data6 = data.wednesdayTimesAndDurations
const _errs13 = errors
if (true) {
if (true) {
if (typeof data6 === 'string') {
if (!pattern2.test(data6)) {errors.push(
{
instancePath: instancePath + '/wednesdayTimesAndDurations',
schemaPath: '#/properties/wednesdayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats94(data6)) {errors.push(
{
instancePath: instancePath + '/wednesdayTimesAndDurations',
schemaPath: '#/properties/wednesdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/wednesdayTimesAndDurations',
schemaPath: '#/properties/wednesdayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid0 = _errs13 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.thursdayTimesAndDurations !== undefined) {
let data7 = data.thursdayTimesAndDurations
const _errs15 = errors
if (true) {
if (true) {
if (typeof data7 === 'string') {
if (!pattern2.test(data7)) {errors.push(
{
instancePath: instancePath + '/thursdayTimesAndDurations',
schemaPath: '#/properties/thursdayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats94(data7)) {errors.push(
{
instancePath: instancePath + '/thursdayTimesAndDurations',
schemaPath: '#/properties/thursdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/thursdayTimesAndDurations',
schemaPath: '#/properties/thursdayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid0 = _errs15 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.fridayTimesAndDurations !== undefined) {
let data8 = data.fridayTimesAndDurations
const _errs17 = errors
if (true) {
if (true) {
if (typeof data8 === 'string') {
if (!pattern2.test(data8)) {errors.push(
{
instancePath: instancePath + '/fridayTimesAndDurations',
schemaPath: '#/properties/fridayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats94(data8)) {errors.push(
{
instancePath: instancePath + '/fridayTimesAndDurations',
schemaPath: '#/properties/fridayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/fridayTimesAndDurations',
schemaPath: '#/properties/fridayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid0 = _errs17 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.saturdayTimesAndDurations !== undefined) {
let data9 = data.saturdayTimesAndDurations
const _errs19 = errors
if (true) {
if (true) {
if (typeof data9 === 'string') {
if (!pattern2.test(data9)) {errors.push(
{
instancePath: instancePath + '/saturdayTimesAndDurations',
schemaPath: '#/properties/saturdayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats94(data9)) {errors.push(
{
instancePath: instancePath + '/saturdayTimesAndDurations',
schemaPath: '#/properties/saturdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/saturdayTimesAndDurations',
schemaPath: '#/properties/saturdayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid0 = _errs19 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.sundayTimesAndDurations !== undefined) {
let data10 = data.sundayTimesAndDurations
const _errs21 = errors
if (true) {
if (true) {
if (typeof data10 === 'string') {
if (!pattern2.test(data10)) {errors.push(
{
instancePath: instancePath + '/sundayTimesAndDurations',
schemaPath: '#/properties/sundayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats94(data10)) {errors.push(
{
instancePath: instancePath + '/sundayTimesAndDurations',
schemaPath: '#/properties/sundayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/sundayTimesAndDurations',
schemaPath: '#/properties/sundayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid0 = _errs21 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.version !== undefined) {
let data11 = data.version
const _errs23 = errors
if (
!(
typeof data11 == 'number' &&
!(data11 % 1) &&
!isNaN(data11) &&
isFinite(data11)
)
) {errors.push(
{
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data11 == 'number' &&
isFinite(data11)
) {
if (data11 < 0 || isNaN(data11)) {errors.push(
{
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/minimum',
keyword: 'minimum',
params: {
comparison: '>=',
limit: 0
},
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
var valid0 = _errs23 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.lastModified !== undefined) {
let data12 = data.lastModified
const _errs25 = errors
if (
!(
typeof data12 == 'number' &&
isFinite(data12)
)
) {errors.push(
{
instancePath: instancePath + '/lastModified',
schemaPath: '#/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
);
}
var valid0 = _errs25 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.status !== undefined) {
let data13 = data.status
const _errs27 = errors
if (
!(
typeof data13 == 'number' &&
!(data13 % 1) &&
!isNaN(data13) &&
isFinite(data13)
)
) {errors.push(
{
instancePath: instancePath + '/status',
schemaPath: '#/properties/status/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data13 == 'number' &&
isFinite(data13)
) {
if (data13 > 2 || isNaN(data13)) {errors.push(
{
instancePath: instancePath + '/status',
schemaPath: '#/properties/status/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 2
},
 message: "Must_be_less_than_or_equal_to_maximum"}
);
}
}
}
var valid0 = _errs27 === errors
} else {
var valid0 = true
}
}
}
}
}
}
}
}
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
