'use strict'
const schema31 = {
$id: 'router',
type: 'object',
properties: {
id: {
default: '019b559d-4823-75ca-9892-5d7f2a8d1171',
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
lastModified: { default: 0, type: 'number' },
touched: { default: true, type: 'boolean' },
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
'touched',
'status'
]
}
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import * as formats from 'ajv-formats/dist/formats'
const formats102 = formats.fullFormats.regex as any
const formats104 = /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/
const pattern1 = new RegExp('^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$', 'u')
const pattern2 = new RegExp('^([0-9]{2}:[0-9]{2})\\|([0-9]+)$', 'u')
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerRouterInterface } from '../serverInterfaces/ServerRouterInterface'
export async function validateRouter(
data:ServerRouterInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="router" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.id === undefined) {
const err0 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'id' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
if (data.appId === undefined) {
const err1 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'appId' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
if (data.routerMac === undefined) {
const err2 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'routerMac' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err2]
} else {
vErrors.push(err2)
}

}
if (data.ipAddress === undefined) {
const err3 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'ipAddress' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
if (data.mondayTimesAndDurations === undefined) {
const err4 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'mondayTimesAndDurations' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
if (data.tuesdayTimesAndDurations === undefined) {
const err5 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'tuesdayTimesAndDurations' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err5]
} else {
vErrors.push(err5)
}

}
if (data.wednesdayTimesAndDurations === undefined) {
const err6 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'wednesdayTimesAndDurations' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err6]
} else {
vErrors.push(err6)
}

}
if (data.thursdayTimesAndDurations === undefined) {
const err7 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'thursdayTimesAndDurations' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err7]
} else {
vErrors.push(err7)
}

}
if (data.fridayTimesAndDurations === undefined) {
const err8 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'fridayTimesAndDurations' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err8]
} else {
vErrors.push(err8)
}

}
if (data.saturdayTimesAndDurations === undefined) {
const err9 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'saturdayTimesAndDurations' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err9]
} else {
vErrors.push(err9)
}

}
if (data.sundayTimesAndDurations === undefined) {
const err10 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'sundayTimesAndDurations' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err10]
} else {
vErrors.push(err10)
}

}
if (data.version === undefined) {
const err11 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'version' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err11]
} else {
vErrors.push(err11)
}

}
if (data.lastModified === undefined) {
const err12 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err12]
} else {
vErrors.push(err12)
}

}
if (data.touched === undefined) {
const err13 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'touched' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err13]
} else {
vErrors.push(err13)
}

}
if (data.status === undefined) {
const err14 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'status' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err14]
} else {
vErrors.push(err14)
}

}
if (data.id !== undefined) {
let data0 = data.id
if (typeof data0 === 'string') {
if (!formats2.test(data0)) {
const err15 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err15]
} else {
vErrors.push(err15)
}

}
} else {
const err16 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err16]
} else {
vErrors.push(err16)
}

}
}
if (data.appId !== undefined) {
let data1 = data.appId
if (typeof data1 === 'string') {
if (!formats2.test(data1)) {
const err17 = {
instancePath: instancePath + '/appId',
schemaPath: '#/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err17]
} else {
vErrors.push(err17)
}

}
} else {
const err18 = {
instancePath: instancePath + '/appId',
schemaPath: '#/properties/appId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err18]
} else {
vErrors.push(err18)
}

}
}
if (data.routerMac !== undefined) {
let data2 = data.routerMac
if (typeof data2 === 'string') {
if (!pattern1.test(data2)) {
const err19 = {
instancePath: instancePath + '/routerMac',
schemaPath: '#/properties/routerMac/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$' },
 message: "Must_be_a_valid_MAC_address"
}
if (vErrors === null) {
vErrors = [err19]
} else {
vErrors.push(err19)
}

}
if (!formats102(data2)) {
const err20 = {
instancePath: instancePath + '/routerMac',
schemaPath: '#/properties/routerMac/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_MAC_address"
}
if (vErrors === null) {
vErrors = [err20]
} else {
vErrors.push(err20)
}

}
} else {
const err21 = {
instancePath: instancePath + '/routerMac',
schemaPath: '#/properties/routerMac/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err21]
} else {
vErrors.push(err21)
}

}
}
if (data.ipAddress !== undefined) {
let data3 = data.ipAddress
if (typeof data3 === 'string') {
if (!formats104.test(data3)) {
const err22 = {
instancePath: instancePath + '/ipAddress',
schemaPath: '#/properties/ipAddress/format',
keyword: 'format',
params: { format: 'ipv4' },
 message: "Must_be_a_valid_IP_address"
}
if (vErrors === null) {
vErrors = [err22]
} else {
vErrors.push(err22)
}

}
} else {
const err23 = {
instancePath: instancePath + '/ipAddress',
schemaPath: '#/properties/ipAddress/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err23]
} else {
vErrors.push(err23)
}

}
}
if (data.mondayTimesAndDurations !== undefined) {
let data4 = data.mondayTimesAndDurations
if (typeof data4 === 'string') {
if (!pattern2.test(data4)) {
const err24 = {
instancePath: instancePath + '/mondayTimesAndDurations',
schemaPath: '#/properties/mondayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err24]
} else {
vErrors.push(err24)
}

}
if (!formats102(data4)) {
const err25 = {
instancePath: instancePath + '/mondayTimesAndDurations',
schemaPath: '#/properties/mondayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err25]
} else {
vErrors.push(err25)
}

}
} else {
const err26 = {
instancePath: instancePath + '/mondayTimesAndDurations',
schemaPath: '#/properties/mondayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err26]
} else {
vErrors.push(err26)
}

}
}
if (data.tuesdayTimesAndDurations !== undefined) {
let data5 = data.tuesdayTimesAndDurations
if (typeof data5 === 'string') {
if (!pattern2.test(data5)) {
const err27 = {
instancePath: instancePath + '/tuesdayTimesAndDurations',
schemaPath: '#/properties/tuesdayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err27]
} else {
vErrors.push(err27)
}

}
if (!formats102(data5)) {
const err28 = {
instancePath: instancePath + '/tuesdayTimesAndDurations',
schemaPath: '#/properties/tuesdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err28]
} else {
vErrors.push(err28)
}

}
} else {
const err29 = {
instancePath: instancePath + '/tuesdayTimesAndDurations',
schemaPath: '#/properties/tuesdayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err29]
} else {
vErrors.push(err29)
}

}
}
if (data.wednesdayTimesAndDurations !== undefined) {
let data6 = data.wednesdayTimesAndDurations
if (typeof data6 === 'string') {
if (!pattern2.test(data6)) {
const err30 = {
instancePath: instancePath + '/wednesdayTimesAndDurations',
schemaPath: '#/properties/wednesdayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err30]
} else {
vErrors.push(err30)
}

}
if (!formats102(data6)) {
const err31 = {
instancePath: instancePath + '/wednesdayTimesAndDurations',
schemaPath: '#/properties/wednesdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err31]
} else {
vErrors.push(err31)
}

}
} else {
const err32 = {
instancePath: instancePath + '/wednesdayTimesAndDurations',
schemaPath: '#/properties/wednesdayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err32]
} else {
vErrors.push(err32)
}

}
}
if (data.thursdayTimesAndDurations !== undefined) {
let data7 = data.thursdayTimesAndDurations
if (typeof data7 === 'string') {
if (!pattern2.test(data7)) {
const err33 = {
instancePath: instancePath + '/thursdayTimesAndDurations',
schemaPath: '#/properties/thursdayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err33]
} else {
vErrors.push(err33)
}

}
if (!formats102(data7)) {
const err34 = {
instancePath: instancePath + '/thursdayTimesAndDurations',
schemaPath: '#/properties/thursdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err34]
} else {
vErrors.push(err34)
}

}
} else {
const err35 = {
instancePath: instancePath + '/thursdayTimesAndDurations',
schemaPath: '#/properties/thursdayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err35]
} else {
vErrors.push(err35)
}

}
}
if (data.fridayTimesAndDurations !== undefined) {
let data8 = data.fridayTimesAndDurations
if (typeof data8 === 'string') {
if (!pattern2.test(data8)) {
const err36 = {
instancePath: instancePath + '/fridayTimesAndDurations',
schemaPath: '#/properties/fridayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err36]
} else {
vErrors.push(err36)
}

}
if (!formats102(data8)) {
const err37 = {
instancePath: instancePath + '/fridayTimesAndDurations',
schemaPath: '#/properties/fridayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err37]
} else {
vErrors.push(err37)
}

}
} else {
const err38 = {
instancePath: instancePath + '/fridayTimesAndDurations',
schemaPath: '#/properties/fridayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err38]
} else {
vErrors.push(err38)
}

}
}
if (data.saturdayTimesAndDurations !== undefined) {
let data9 = data.saturdayTimesAndDurations
if (typeof data9 === 'string') {
if (!pattern2.test(data9)) {
const err39 = {
instancePath: instancePath + '/saturdayTimesAndDurations',
schemaPath: '#/properties/saturdayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err39]
} else {
vErrors.push(err39)
}

}
if (!formats102(data9)) {
const err40 = {
instancePath: instancePath + '/saturdayTimesAndDurations',
schemaPath: '#/properties/saturdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err40]
} else {
vErrors.push(err40)
}

}
} else {
const err41 = {
instancePath: instancePath + '/saturdayTimesAndDurations',
schemaPath: '#/properties/saturdayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err41]
} else {
vErrors.push(err41)
}

}
}
if (data.sundayTimesAndDurations !== undefined) {
let data10 = data.sundayTimesAndDurations
if (typeof data10 === 'string') {
if (!pattern2.test(data10)) {
const err42 = {
instancePath: instancePath + '/sundayTimesAndDurations',
schemaPath: '#/properties/sundayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err42]
} else {
vErrors.push(err42)
}

}
if (!formats102(data10)) {
const err43 = {
instancePath: instancePath + '/sundayTimesAndDurations',
schemaPath: '#/properties/sundayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err43]
} else {
vErrors.push(err43)
}

}
} else {
const err44 = {
instancePath: instancePath + '/sundayTimesAndDurations',
schemaPath: '#/properties/sundayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err44]
} else {
vErrors.push(err44)
}

}
}
if (data.version !== undefined) {
let data11 = data.version
if (
!(
typeof data11 == 'number' &&
!(data11 % 1) &&
!isNaN(data11) &&
isFinite(data11)
)
) {
const err45 = {
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err45]
} else {
vErrors.push(err45)
}

}
if (typeof data11 == 'number' && isFinite(data11)) {
if (data11 < 0 || isNaN(data11)) {
const err46 = {
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err46]
} else {
vErrors.push(err46)
}

}
}
}
if (data.lastModified !== undefined) {
let data12 = data.lastModified
if (!(typeof data12 == 'number' && isFinite(data12))) {
const err47 = {
instancePath: instancePath + '/lastModified',
schemaPath: '#/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err47]
} else {
vErrors.push(err47)
}

}
}
if (data.touched !== undefined) {
if (typeof data.touched !== 'boolean') {
const err48 = {
instancePath: instancePath + '/touched',
schemaPath: '#/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
if (vErrors === null) {
vErrors = [err48]
} else {
vErrors.push(err48)
}

}
}
if (data.status !== undefined) {
let data14 = data.status
if (
!(
typeof data14 == 'number' &&
!(data14 % 1) &&
!isNaN(data14) &&
isFinite(data14)
)
) {
const err49 = {
instancePath: instancePath + '/status',
schemaPath: '#/properties/status/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err49]
} else {
vErrors.push(err49)
}

}
if (typeof data14 == 'number' && isFinite(data14)) {
if (data14 > 2 || isNaN(data14)) {
const err50 = {
instancePath: instancePath + '/status',
schemaPath: '#/properties/status/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 2 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
if (vErrors === null) {
vErrors = [err50]
} else {
vErrors.push(err50)
}

}
}
}
} else {
const err51 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err51]
} else {
vErrors.push(err51)
}

}
return vErrors
}
