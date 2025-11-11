'use strict'
const schema18 = {
$id: 'oneByTwoDigraphsDatabaseItemData',
type: 'object',
properties: {
leftDigraphs: { maxLength: 364, type: 'string' },
rightDigraphs: { maxLength: 364, type: 'string' },
image: { format: 'uuid', type: 'string' },
sound: { format: 'uuid', type: 'string' },
text: { minLength: 1, maxLength: 14, type: 'string' },
imageType: { default: 1, minimum: 0, maximum: 3, type: 'integer' },
visualHint: {
default: 'hint',
minLength: 1,
maxLength: 100,
type: 'string'},
audioType: { default: 2, minimum: 0, maximum: 4, type: 'integer' },
successSound: { format: 'uuid', type: 'string' },
successSoundType: { default: 2, minimum: 0, maximum: 4, type: 'integer' },
successImage: { format: 'uuid', type: 'string' },
successImageType: { default: 1, minimum: 0, maximum: 3, type: 'integer' },
successAnimations: { default: 'Fireworks', maxLength: 100, type: 'string' },
successImageTime: { default: 3000, minimum: 0, type: 'integer' }
},
required: [
'leftDigraphs',
'rightDigraphs',
'image',
'sound',
'text',
'imageType',
'visualHint',
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
import type { ServerOneByTwoDigraphsDatabaseItemDataInterface } from '../serverInterfaces/ServerOneByTwoDigraphsDatabaseItemDataInterface'
export async function validateOneByTwoDigraphsDatabaseItemData(
data:ServerOneByTwoDigraphsDatabaseItemDataInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="oneByTwoDigraphsDatabaseItemData" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.leftDigraphs === undefined) {
const err0 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'leftDigraphs' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
if (data.rightDigraphs === undefined) {
const err1 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'rightDigraphs' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
if (data.image === undefined) {
const err2 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'image' },
 message: "Required"}
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
 message: "Required"}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
if (data.text === undefined) {
const err4 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'text' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
if (data.imageType === undefined) {
const err5 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'imageType' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err5]
} else {
vErrors.push(err5)
}

}
if (data.visualHint === undefined) {
const err6 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'visualHint' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err6]
} else {
vErrors.push(err6)
}

}
if (data.audioType === undefined) {
const err7 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'audioType' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err7]
} else {
vErrors.push(err7)
}

}
if (data.successSound === undefined) {
const err8 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'successSound' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err8]
} else {
vErrors.push(err8)
}

}
if (data.successSoundType === undefined) {
const err9 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'successSoundType' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err9]
} else {
vErrors.push(err9)
}

}
if (data.successImage === undefined) {
const err10 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'successImage' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err10]
} else {
vErrors.push(err10)
}

}
if (data.successImageType === undefined) {
const err11 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'successImageType' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err11]
} else {
vErrors.push(err11)
}

}
if (data.successAnimations === undefined) {
const err12 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'successAnimations' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err12]
} else {
vErrors.push(err12)
}

}
if (data.successImageTime === undefined) {
const err13 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'successImageTime' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err13]
} else {
vErrors.push(err13)
}

}
if (data.leftDigraphs !== undefined) {
let data0 = data.leftDigraphs
if (typeof data0 === 'string') {
if (func4(data0) > 364) {
const err14 = {
instancePath: instancePath + '/leftDigraphs',
schemaPath: '#/properties/leftDigraphs/maxLength',
keyword: 'maxLength',
params: { limit: 364 },
 message: "Must_be_less_than_364_characters"}
if (vErrors === null) {
vErrors = [err14]
} else {
vErrors.push(err14)
}

}
} else {
const err15 = {
instancePath: instancePath + '/leftDigraphs',
schemaPath: '#/properties/leftDigraphs/type',
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
if (data.rightDigraphs !== undefined) {
let data1 = data.rightDigraphs
if (typeof data1 === 'string') {
if (func4(data1) > 364) {
const err16 = {
instancePath: instancePath + '/rightDigraphs',
schemaPath: '#/properties/rightDigraphs/maxLength',
keyword: 'maxLength',
params: { limit: 364 },
 message: "Must_be_less_than_364_characters"}
if (vErrors === null) {
vErrors = [err16]
} else {
vErrors.push(err16)
}

}
} else {
const err17 = {
instancePath: instancePath + '/rightDigraphs',
schemaPath: '#/properties/rightDigraphs/type',
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
if (data.image !== undefined) {
let data2 = data.image
if (typeof data2 === 'string') {
if (!formats2.test(data2)) {
const err18 = {
instancePath: instancePath + '/image',
schemaPath: '#/properties/image/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err18]
} else {
vErrors.push(err18)
}

}
} else {
const err19 = {
instancePath: instancePath + '/image',
schemaPath: '#/properties/image/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err19]
} else {
vErrors.push(err19)
}

}
}
if (data.sound !== undefined) {
let data3 = data.sound
if (typeof data3 === 'string') {
if (!formats2.test(data3)) {
const err20 = {
instancePath: instancePath + '/sound',
schemaPath: '#/properties/sound/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err20]
} else {
vErrors.push(err20)
}

}
} else {
const err21 = {
instancePath: instancePath + '/sound',
schemaPath: '#/properties/sound/type',
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
if (data.text !== undefined) {
let data4 = data.text
if (typeof data4 === 'string') {
if (func4(data4) > 14) {
const err22 = {
instancePath: instancePath + '/text',
schemaPath: '#/properties/text/maxLength',
keyword: 'maxLength',
params: { limit: 14 },
 message: "Must_be_less_than_14_characters"}
if (vErrors === null) {
vErrors = [err22]
} else {
vErrors.push(err22)
}

}
if (func4(data4) < 1) {
const err23 = {
instancePath: instancePath + '/text',
schemaPath: '#/properties/text/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err23]
} else {
vErrors.push(err23)
}

}
} else {
const err24 = {
instancePath: instancePath + '/text',
schemaPath: '#/properties/text/type',
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
if (data.imageType !== undefined) {
let data5 = data.imageType
if (
!(
typeof data5 == 'number' &&
!(data5 % 1) &&
!isNaN(data5) &&
isFinite(data5)
)
) {
const err25 = {
instancePath: instancePath + '/imageType',
schemaPath: '#/properties/imageType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err25]
} else {
vErrors.push(err25)
}

}
if (typeof data5 == 'number' && isFinite(data5)) {
if (data5 > 3 || isNaN(data5)) {
const err26 = {
instancePath: instancePath + '/imageType',
schemaPath: '#/properties/imageType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err26]
} else {
vErrors.push(err26)
}

}
if (data5 < 0 || isNaN(data5)) {
const err27 = {
instancePath: instancePath + '/imageType',
schemaPath: '#/properties/imageType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err27]
} else {
vErrors.push(err27)
}

}
}
}
if (data.visualHint !== undefined) {
let data6 = data.visualHint
if (typeof data6 === 'string') {
if (func4(data6) > 100) {
const err28 = {
instancePath: instancePath + '/visualHint',
schemaPath: '#/properties/visualHint/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err28]
} else {
vErrors.push(err28)
}

}
if (func4(data6) < 1) {
const err29 = {
instancePath: instancePath + '/visualHint',
schemaPath: '#/properties/visualHint/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err29]
} else {
vErrors.push(err29)
}

}
} else {
const err30 = {
instancePath: instancePath + '/visualHint',
schemaPath: '#/properties/visualHint/type',
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
if (data.audioType !== undefined) {
let data7 = data.audioType
if (
!(
typeof data7 == 'number' &&
!(data7 % 1) &&
!isNaN(data7) &&
isFinite(data7)
)
) {
const err31 = {
instancePath: instancePath + '/audioType',
schemaPath: '#/properties/audioType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err31]
} else {
vErrors.push(err31)
}

}
if (typeof data7 == 'number' && isFinite(data7)) {
if (data7 > 4 || isNaN(data7)) {
const err32 = {
instancePath: instancePath + '/audioType',
schemaPath: '#/properties/audioType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 4 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err32]
} else {
vErrors.push(err32)
}

}
if (data7 < 0 || isNaN(data7)) {
const err33 = {
instancePath: instancePath + '/audioType',
schemaPath: '#/properties/audioType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err33]
} else {
vErrors.push(err33)
}

}
}
}
if (data.successSound !== undefined) {
let data8 = data.successSound
if (typeof data8 === 'string') {
if (!formats2.test(data8)) {
const err34 = {
instancePath: instancePath + '/successSound',
schemaPath: '#/properties/successSound/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err34]
} else {
vErrors.push(err34)
}

}
} else {
const err35 = {
instancePath: instancePath + '/successSound',
schemaPath: '#/properties/successSound/type',
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
if (data.successSoundType !== undefined) {
let data9 = data.successSoundType
if (
!(
typeof data9 == 'number' &&
!(data9 % 1) &&
!isNaN(data9) &&
isFinite(data9)
)
) {
const err36 = {
instancePath: instancePath + '/successSoundType',
schemaPath: '#/properties/successSoundType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err36]
} else {
vErrors.push(err36)
}

}
if (typeof data9 == 'number' && isFinite(data9)) {
if (data9 > 4 || isNaN(data9)) {
const err37 = {
instancePath: instancePath + '/successSoundType',
schemaPath: '#/properties/successSoundType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 4 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err37]
} else {
vErrors.push(err37)
}

}
if (data9 < 0 || isNaN(data9)) {
const err38 = {
instancePath: instancePath + '/successSoundType',
schemaPath: '#/properties/successSoundType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err38]
} else {
vErrors.push(err38)
}

}
}
}
if (data.successImage !== undefined) {
let data10 = data.successImage
if (typeof data10 === 'string') {
if (!formats2.test(data10)) {
const err39 = {
instancePath: instancePath + '/successImage',
schemaPath: '#/properties/successImage/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err39]
} else {
vErrors.push(err39)
}

}
} else {
const err40 = {
instancePath: instancePath + '/successImage',
schemaPath: '#/properties/successImage/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err40]
} else {
vErrors.push(err40)
}

}
}
if (data.successImageType !== undefined) {
let data11 = data.successImageType
if (
!(
typeof data11 == 'number' &&
!(data11 % 1) &&
!isNaN(data11) &&
isFinite(data11)
)
) {
const err41 = {
instancePath: instancePath + '/successImageType',
schemaPath: '#/properties/successImageType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err41]
} else {
vErrors.push(err41)
}

}
if (typeof data11 == 'number' && isFinite(data11)) {
if (data11 > 3 || isNaN(data11)) {
const err42 = {
instancePath: instancePath + '/successImageType',
schemaPath: '#/properties/successImageType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err42]
} else {
vErrors.push(err42)
}

}
if (data11 < 0 || isNaN(data11)) {
const err43 = {
instancePath: instancePath + '/successImageType',
schemaPath: '#/properties/successImageType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err43]
} else {
vErrors.push(err43)
}

}
}
}
if (data.successAnimations !== undefined) {
let data12 = data.successAnimations
if (typeof data12 === 'string') {
if (func4(data12) > 100) {
const err44 = {
instancePath: instancePath + '/successAnimations',
schemaPath: '#/properties/successAnimations/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err44]
} else {
vErrors.push(err44)
}

}
} else {
const err45 = {
instancePath: instancePath + '/successAnimations',
schemaPath: '#/properties/successAnimations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err45]
} else {
vErrors.push(err45)
}

}
}
if (data.successImageTime !== undefined) {
let data13 = data.successImageTime
if (
!(
typeof data13 == 'number' &&
!(data13 % 1) &&
!isNaN(data13) &&
isFinite(data13)
)
) {
const err46 = {
instancePath: instancePath + '/successImageTime',
schemaPath: '#/properties/successImageTime/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err46]
} else {
vErrors.push(err46)
}

}
if (typeof data13 == 'number' && isFinite(data13)) {
if (data13 < 0 || isNaN(data13)) {
const err47 = {
instancePath: instancePath + '/successImageTime',
schemaPath: '#/properties/successImageTime/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err47]
} else {
vErrors.push(err47)
}

}
}
}
} else {
const err48 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err48]
} else {
vErrors.push(err48)
}

}
return vErrors
}
