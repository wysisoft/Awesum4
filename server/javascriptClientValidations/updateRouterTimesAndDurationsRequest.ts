'use strict'
const schema38 = {
$id: 'updateRouterTimesAndDurationsRequest',
type: 'object',
properties: {
type: { const: 'updateRouterTimesAndDurationsRequest', type: 'string' },
routerId: { format: 'uuid', type: 'string' },
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
type: 'string'
}
},
required: [
'type',
'routerId',
'mondayTimesAndDurations',
'tuesdayTimesAndDurations',
'wednesdayTimesAndDurations',
'thursdayTimesAndDurations',
'fridayTimesAndDurations',
'saturdayTimesAndDurations',
'sundayTimesAndDurations'
]
}
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import * as formats from 'ajv-formats/dist/formats'
const formats90 = formats.fullFormats.regex as any
const pattern2 = new RegExp('^([0-9]{2}:[0-9]{2})\\|([0-9]+)$', 'u')
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerUpdateRouterTimesAndDurationsRequestInterface } from '../serverInterfaces/ServerUpdateRouterTimesAndDurationsRequestInterface'
export async function validateUpdateRouterTimesAndDurationsRequest(
data:ServerUpdateRouterTimesAndDurationsRequestInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="updateRouterTimesAndDurationsRequest" */ 
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
if (data.routerId === undefined) {
const err1 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'routerId' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
if (data.mondayTimesAndDurations === undefined) {
const err2 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'mondayTimesAndDurations' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err2]
} else {
vErrors.push(err2)
}

}
if (data.tuesdayTimesAndDurations === undefined) {
const err3 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'tuesdayTimesAndDurations' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
if (data.wednesdayTimesAndDurations === undefined) {
const err4 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'wednesdayTimesAndDurations' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
if (data.thursdayTimesAndDurations === undefined) {
const err5 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'thursdayTimesAndDurations' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err5]
} else {
vErrors.push(err5)
}

}
if (data.fridayTimesAndDurations === undefined) {
const err6 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'fridayTimesAndDurations' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err6]
} else {
vErrors.push(err6)
}

}
if (data.saturdayTimesAndDurations === undefined) {
const err7 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'saturdayTimesAndDurations' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err7]
} else {
vErrors.push(err7)
}

}
if (data.sundayTimesAndDurations === undefined) {
const err8 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'sundayTimesAndDurations' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err8]
} else {
vErrors.push(err8)
}

}
if (data.type !== undefined) {
let data0 = data.type
if (typeof data0 !== 'string') {
const err9 = {
instancePath: instancePath + '/type',
schemaPath: '#/properties/type/type',
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
if ('updateRouterTimesAndDurationsRequest' !== data0) {
const err10 = {
instancePath: instancePath + '/type',
schemaPath: '#/properties/type/const',
keyword: 'const',
params: { allowedValue: 'updateRouterTimesAndDurationsRequest' },
message: 'must be equal to constant'
}
if (vErrors === null) {
vErrors = [err10]
} else {
vErrors.push(err10)
}

}
}
if (data.routerId !== undefined) {
let data1 = data.routerId
if (typeof data1 === 'string') {
if (!formats2.test(data1)) {
const err11 = {
instancePath: instancePath + '/routerId',
schemaPath: '#/properties/routerId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err11]
} else {
vErrors.push(err11)
}

}
} else {
const err12 = {
instancePath: instancePath + '/routerId',
schemaPath: '#/properties/routerId/type',
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
if (data.mondayTimesAndDurations !== undefined) {
let data2 = data.mondayTimesAndDurations
if (typeof data2 === 'string') {
if (!pattern2.test(data2)) {
const err13 = {
instancePath: instancePath + '/mondayTimesAndDurations',
schemaPath: '#/properties/mondayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err13]
} else {
vErrors.push(err13)
}

}
if (!formats90(data2)) {
const err14 = {
instancePath: instancePath + '/mondayTimesAndDurations',
schemaPath: '#/properties/mondayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err14]
} else {
vErrors.push(err14)
}

}
} else {
const err15 = {
instancePath: instancePath + '/mondayTimesAndDurations',
schemaPath: '#/properties/mondayTimesAndDurations/type',
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
if (data.tuesdayTimesAndDurations !== undefined) {
let data3 = data.tuesdayTimesAndDurations
if (typeof data3 === 'string') {
if (!pattern2.test(data3)) {
const err16 = {
instancePath: instancePath + '/tuesdayTimesAndDurations',
schemaPath: '#/properties/tuesdayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err16]
} else {
vErrors.push(err16)
}

}
if (!formats90(data3)) {
const err17 = {
instancePath: instancePath + '/tuesdayTimesAndDurations',
schemaPath: '#/properties/tuesdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err17]
} else {
vErrors.push(err17)
}

}
} else {
const err18 = {
instancePath: instancePath + '/tuesdayTimesAndDurations',
schemaPath: '#/properties/tuesdayTimesAndDurations/type',
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
if (data.wednesdayTimesAndDurations !== undefined) {
let data4 = data.wednesdayTimesAndDurations
if (typeof data4 === 'string') {
if (!pattern2.test(data4)) {
const err19 = {
instancePath: instancePath + '/wednesdayTimesAndDurations',
schemaPath: '#/properties/wednesdayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err19]
} else {
vErrors.push(err19)
}

}
if (!formats90(data4)) {
const err20 = {
instancePath: instancePath + '/wednesdayTimesAndDurations',
schemaPath: '#/properties/wednesdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err20]
} else {
vErrors.push(err20)
}

}
} else {
const err21 = {
instancePath: instancePath + '/wednesdayTimesAndDurations',
schemaPath: '#/properties/wednesdayTimesAndDurations/type',
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
if (data.thursdayTimesAndDurations !== undefined) {
let data5 = data.thursdayTimesAndDurations
if (typeof data5 === 'string') {
if (!pattern2.test(data5)) {
const err22 = {
instancePath: instancePath + '/thursdayTimesAndDurations',
schemaPath: '#/properties/thursdayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err22]
} else {
vErrors.push(err22)
}

}
if (!formats90(data5)) {
const err23 = {
instancePath: instancePath + '/thursdayTimesAndDurations',
schemaPath: '#/properties/thursdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err23]
} else {
vErrors.push(err23)
}

}
} else {
const err24 = {
instancePath: instancePath + '/thursdayTimesAndDurations',
schemaPath: '#/properties/thursdayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err24]
} else {
vErrors.push(err24)
}

}
}
if (data.fridayTimesAndDurations !== undefined) {
let data6 = data.fridayTimesAndDurations
if (typeof data6 === 'string') {
if (!pattern2.test(data6)) {
const err25 = {
instancePath: instancePath + '/fridayTimesAndDurations',
schemaPath: '#/properties/fridayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err25]
} else {
vErrors.push(err25)
}

}
if (!formats90(data6)) {
const err26 = {
instancePath: instancePath + '/fridayTimesAndDurations',
schemaPath: '#/properties/fridayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err26]
} else {
vErrors.push(err26)
}

}
} else {
const err27 = {
instancePath: instancePath + '/fridayTimesAndDurations',
schemaPath: '#/properties/fridayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err27]
} else {
vErrors.push(err27)
}

}
}
if (data.saturdayTimesAndDurations !== undefined) {
let data7 = data.saturdayTimesAndDurations
if (typeof data7 === 'string') {
if (!pattern2.test(data7)) {
const err28 = {
instancePath: instancePath + '/saturdayTimesAndDurations',
schemaPath: '#/properties/saturdayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err28]
} else {
vErrors.push(err28)
}

}
if (!formats90(data7)) {
const err29 = {
instancePath: instancePath + '/saturdayTimesAndDurations',
schemaPath: '#/properties/saturdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err29]
} else {
vErrors.push(err29)
}

}
} else {
const err30 = {
instancePath: instancePath + '/saturdayTimesAndDurations',
schemaPath: '#/properties/saturdayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err30]
} else {
vErrors.push(err30)
}

}
}
if (data.sundayTimesAndDurations !== undefined) {
let data8 = data.sundayTimesAndDurations
if (typeof data8 === 'string') {
if (!pattern2.test(data8)) {
const err31 = {
instancePath: instancePath + '/sundayTimesAndDurations',
schemaPath: '#/properties/sundayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err31]
} else {
vErrors.push(err31)
}

}
if (!formats90(data8)) {
const err32 = {
instancePath: instancePath + '/sundayTimesAndDurations',
schemaPath: '#/properties/sundayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err32]
} else {
vErrors.push(err32)
}

}
} else {
const err33 = {
instancePath: instancePath + '/sundayTimesAndDurations',
schemaPath: '#/properties/sundayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err33]
} else {
vErrors.push(err33)
}

}
}
} else {
const err34 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err34]
} else {
vErrors.push(err34)
}

}
return vErrors
}
