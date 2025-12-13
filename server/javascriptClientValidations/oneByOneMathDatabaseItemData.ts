'use strict'
const schema21 = {
$id: 'oneByOneMathDatabaseItemData',
type: 'object',
properties: {
firstNumber: { minimum: 0, type: 'integer' },
secondNumber: { minimum: 0, type: 'integer' },
options: { maxLength: 364, type: 'string' },
sound: { format: 'uuid', type: 'string' },
audioType: { default: 2, minimum: 0, maximum: 4, type: 'integer' },
successSound: { format: 'uuid', type: 'string' },
successSoundType: { default: 2, minimum: 0, maximum: 4, type: 'integer' },
successImage: { format: 'uuid', type: 'string' },
successImageType: { default: 1, minimum: 0, maximum: 3, type: 'integer' },
successAnimations: { default: 'Fireworks', maxLength: 100, type: 'string' },
successImageTime: { default: 3000, minimum: 0, type: 'integer' }
},
required: [
'firstNumber',
'secondNumber',
'options',
'sound',
'audioType',
'successSound',
'successSoundType',
'successImage',
'successImageType',
'successAnimations',
'successImageTime'
]
}
import * as ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = ucs2length.default;
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerOneByOneMathDatabaseItemDataInterface } from '../serverInterfaces/ServerOneByOneMathDatabaseItemDataInterface'
export async function validateOneByOneMathDatabaseItemData(
data:ServerOneByOneMathDatabaseItemDataInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="oneByOneMathDatabaseItemData" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.firstNumber === undefined) {
const err0 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'firstNumber' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
if (data.secondNumber === undefined) {
const err1 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'secondNumber' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
if (data.options === undefined) {
const err2 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'options' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err2]
} else {
vErrors.push(err2)
}

}
if (data.sound === undefined) {
const err3 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'sound' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
if (data.audioType === undefined) {
const err4 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'audioType' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
if (data.successSound === undefined) {
const err5 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'successSound' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err5]
} else {
vErrors.push(err5)
}

}
if (data.successSoundType === undefined) {
const err6 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'successSoundType' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err6]
} else {
vErrors.push(err6)
}

}
if (data.successImage === undefined) {
const err7 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'successImage' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err7]
} else {
vErrors.push(err7)
}

}
if (data.successImageType === undefined) {
const err8 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'successImageType' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err8]
} else {
vErrors.push(err8)
}

}
if (data.successAnimations === undefined) {
const err9 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'successAnimations' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err9]
} else {
vErrors.push(err9)
}

}
if (data.successImageTime === undefined) {
const err10 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'successImageTime' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err10]
} else {
vErrors.push(err10)
}

}
if (data.firstNumber !== undefined) {
let data0 = data.firstNumber
if (
!(
typeof data0 == 'number' &&
!(data0 % 1) &&
!isNaN(data0) &&
isFinite(data0)
)
) {
const err11 = {
instancePath: instancePath + '/firstNumber',
schemaPath: '#/properties/firstNumber/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err11]
} else {
vErrors.push(err11)
}

}
if (typeof data0 == 'number' && isFinite(data0)) {
if (data0 < 0 || isNaN(data0)) {
const err12 = {
instancePath: instancePath + '/firstNumber',
schemaPath: '#/properties/firstNumber/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err12]
} else {
vErrors.push(err12)
}

}
}
}
if (data.secondNumber !== undefined) {
let data1 = data.secondNumber
if (
!(
typeof data1 == 'number' &&
!(data1 % 1) &&
!isNaN(data1) &&
isFinite(data1)
)
) {
const err13 = {
instancePath: instancePath + '/secondNumber',
schemaPath: '#/properties/secondNumber/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err13]
} else {
vErrors.push(err13)
}

}
if (typeof data1 == 'number' && isFinite(data1)) {
if (data1 < 0 || isNaN(data1)) {
const err14 = {
instancePath: instancePath + '/secondNumber',
schemaPath: '#/properties/secondNumber/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err14]
} else {
vErrors.push(err14)
}

}
}
}
if (data.options !== undefined) {
let data2 = data.options
if (typeof data2 === 'string') {
if (func4(data2) > 364) {
const err15 = {
instancePath: instancePath + '/options',
schemaPath: '#/properties/options/maxLength',
keyword: 'maxLength',
params: { limit: 364 },
 message: "Must_be_less_than_364_characters"
}
if (vErrors === null) {
vErrors = [err15]
} else {
vErrors.push(err15)
}

}
} else {
const err16 = {
instancePath: instancePath + '/options',
schemaPath: '#/properties/options/type',
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
if (data.sound !== undefined) {
let data3 = data.sound
if (typeof data3 === 'string') {
if (!formats2.test(data3)) {
const err17 = {
instancePath: instancePath + '/sound',
schemaPath: '#/properties/sound/format',
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
instancePath: instancePath + '/sound',
schemaPath: '#/properties/sound/type',
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
if (data.audioType !== undefined) {
let data4 = data.audioType
if (
!(
typeof data4 == 'number' &&
!(data4 % 1) &&
!isNaN(data4) &&
isFinite(data4)
)
) {
const err19 = {
instancePath: instancePath + '/audioType',
schemaPath: '#/properties/audioType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err19]
} else {
vErrors.push(err19)
}

}
if (typeof data4 == 'number' && isFinite(data4)) {
if (data4 > 4 || isNaN(data4)) {
const err20 = {
instancePath: instancePath + '/audioType',
schemaPath: '#/properties/audioType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 4 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
if (vErrors === null) {
vErrors = [err20]
} else {
vErrors.push(err20)
}

}
if (data4 < 0 || isNaN(data4)) {
const err21 = {
instancePath: instancePath + '/audioType',
schemaPath: '#/properties/audioType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err21]
} else {
vErrors.push(err21)
}

}
}
}
if (data.successSound !== undefined) {
let data5 = data.successSound
if (typeof data5 === 'string') {
if (!formats2.test(data5)) {
const err22 = {
instancePath: instancePath + '/successSound',
schemaPath: '#/properties/successSound/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err22]
} else {
vErrors.push(err22)
}

}
} else {
const err23 = {
instancePath: instancePath + '/successSound',
schemaPath: '#/properties/successSound/type',
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
if (data.successSoundType !== undefined) {
let data6 = data.successSoundType
if (
!(
typeof data6 == 'number' &&
!(data6 % 1) &&
!isNaN(data6) &&
isFinite(data6)
)
) {
const err24 = {
instancePath: instancePath + '/successSoundType',
schemaPath: '#/properties/successSoundType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err24]
} else {
vErrors.push(err24)
}

}
if (typeof data6 == 'number' && isFinite(data6)) {
if (data6 > 4 || isNaN(data6)) {
const err25 = {
instancePath: instancePath + '/successSoundType',
schemaPath: '#/properties/successSoundType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 4 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
if (vErrors === null) {
vErrors = [err25]
} else {
vErrors.push(err25)
}

}
if (data6 < 0 || isNaN(data6)) {
const err26 = {
instancePath: instancePath + '/successSoundType',
schemaPath: '#/properties/successSoundType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err26]
} else {
vErrors.push(err26)
}

}
}
}
if (data.successImage !== undefined) {
let data7 = data.successImage
if (typeof data7 === 'string') {
if (!formats2.test(data7)) {
const err27 = {
instancePath: instancePath + '/successImage',
schemaPath: '#/properties/successImage/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err27]
} else {
vErrors.push(err27)
}

}
} else {
const err28 = {
instancePath: instancePath + '/successImage',
schemaPath: '#/properties/successImage/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err28]
} else {
vErrors.push(err28)
}

}
}
if (data.successImageType !== undefined) {
let data8 = data.successImageType
if (
!(
typeof data8 == 'number' &&
!(data8 % 1) &&
!isNaN(data8) &&
isFinite(data8)
)
) {
const err29 = {
instancePath: instancePath + '/successImageType',
schemaPath: '#/properties/successImageType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err29]
} else {
vErrors.push(err29)
}

}
if (typeof data8 == 'number' && isFinite(data8)) {
if (data8 > 3 || isNaN(data8)) {
const err30 = {
instancePath: instancePath + '/successImageType',
schemaPath: '#/properties/successImageType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
if (vErrors === null) {
vErrors = [err30]
} else {
vErrors.push(err30)
}

}
if (data8 < 0 || isNaN(data8)) {
const err31 = {
instancePath: instancePath + '/successImageType',
schemaPath: '#/properties/successImageType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err31]
} else {
vErrors.push(err31)
}

}
}
}
if (data.successAnimations !== undefined) {
let data9 = data.successAnimations
if (typeof data9 === 'string') {
if (func4(data9) > 100) {
const err32 = {
instancePath: instancePath + '/successAnimations',
schemaPath: '#/properties/successAnimations/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
if (vErrors === null) {
vErrors = [err32]
} else {
vErrors.push(err32)
}

}
} else {
const err33 = {
instancePath: instancePath + '/successAnimations',
schemaPath: '#/properties/successAnimations/type',
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
if (data.successImageTime !== undefined) {
let data10 = data.successImageTime
if (
!(
typeof data10 == 'number' &&
!(data10 % 1) &&
!isNaN(data10) &&
isFinite(data10)
)
) {
const err34 = {
instancePath: instancePath + '/successImageTime',
schemaPath: '#/properties/successImageTime/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err34]
} else {
vErrors.push(err34)
}

}
if (typeof data10 == 'number' && isFinite(data10)) {
if (data10 < 0 || isNaN(data10)) {
const err35 = {
instancePath: instancePath + '/successImageTime',
schemaPath: '#/properties/successImageTime/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err35]
} else {
vErrors.push(err35)
}

}
}
}
} else {
const err36 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err36]
} else {
vErrors.push(err36)
}

}
return vErrors
}
