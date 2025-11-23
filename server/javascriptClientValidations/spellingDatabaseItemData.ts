'use strict'
const schema20 = {
$id: 'spellingDatabaseItemData',
type: 'object',
properties: {
letters: { maxLength: 364, type: 'string' },
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
'letters',
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
import type { ServerSpellingDatabaseItemDataInterface } from '../serverInterfaces/ServerSpellingDatabaseItemDataInterface'
export async function validateSpellingDatabaseItemData(
data:ServerSpellingDatabaseItemDataInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="spellingDatabaseItemData" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.letters === undefined) {
const err0 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'letters' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
if (data.image === undefined) {
const err1 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'image' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
if (data.sound === undefined) {
const err2 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'sound' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err2]
} else {
vErrors.push(err2)
}

}
if (data.text === undefined) {
const err3 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'text' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
if (data.imageType === undefined) {
const err4 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'imageType' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
if (data.visualHint === undefined) {
const err5 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'visualHint' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err5]
} else {
vErrors.push(err5)
}

}
if (data.audioType === undefined) {
const err6 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'audioType' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err6]
} else {
vErrors.push(err6)
}

}
if (data.successSound === undefined) {
const err7 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'successSound' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err7]
} else {
vErrors.push(err7)
}

}
if (data.successSoundType === undefined) {
const err8 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'successSoundType' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err8]
} else {
vErrors.push(err8)
}

}
if (data.successImage === undefined) {
const err9 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'successImage' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err9]
} else {
vErrors.push(err9)
}

}
if (data.successImageType === undefined) {
const err10 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'successImageType' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err10]
} else {
vErrors.push(err10)
}

}
if (data.successAnimations === undefined) {
const err11 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'successAnimations' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err11]
} else {
vErrors.push(err11)
}

}
if (data.successImageTime === undefined) {
const err12 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'successImageTime' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err12]
} else {
vErrors.push(err12)
}

}
if (data.letters !== undefined) {
let data0 = data.letters
if (typeof data0 === 'string') {
if (func4(data0) > 364) {
const err13 = {
instancePath: instancePath + '/letters',
schemaPath: '#/properties/letters/maxLength',
keyword: 'maxLength',
params: { limit: 364 },
 message: "Must_be_less_than_364_characters"}
if (vErrors === null) {
vErrors = [err13]
} else {
vErrors.push(err13)
}

}
} else {
const err14 = {
instancePath: instancePath + '/letters',
schemaPath: '#/properties/letters/type',
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
if (data.image !== undefined) {
let data1 = data.image
if (typeof data1 === 'string') {
if (!formats2.test(data1)) {
const err15 = {
instancePath: instancePath + '/image',
schemaPath: '#/properties/image/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err15]
} else {
vErrors.push(err15)
}

}
} else {
const err16 = {
instancePath: instancePath + '/image',
schemaPath: '#/properties/image/type',
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
let data2 = data.sound
if (typeof data2 === 'string') {
if (!formats2.test(data2)) {
const err17 = {
instancePath: instancePath + '/sound',
schemaPath: '#/properties/sound/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
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
if (data.text !== undefined) {
let data3 = data.text
if (typeof data3 === 'string') {
if (func4(data3) > 14) {
const err19 = {
instancePath: instancePath + '/text',
schemaPath: '#/properties/text/maxLength',
keyword: 'maxLength',
params: { limit: 14 },
 message: "Must_be_less_than_14_characters"}
if (vErrors === null) {
vErrors = [err19]
} else {
vErrors.push(err19)
}

}
if (func4(data3) < 1) {
const err20 = {
instancePath: instancePath + '/text',
schemaPath: '#/properties/text/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err20]
} else {
vErrors.push(err20)
}

}
} else {
const err21 = {
instancePath: instancePath + '/text',
schemaPath: '#/properties/text/type',
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
if (data.imageType !== undefined) {
let data4 = data.imageType
if (
!(
typeof data4 == 'number' &&
!(data4 % 1) &&
!isNaN(data4) &&
isFinite(data4)
)
) {
const err22 = {
instancePath: instancePath + '/imageType',
schemaPath: '#/properties/imageType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err22]
} else {
vErrors.push(err22)
}

}
if (typeof data4 == 'number' && isFinite(data4)) {
if (data4 > 3 || isNaN(data4)) {
const err23 = {
instancePath: instancePath + '/imageType',
schemaPath: '#/properties/imageType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err23]
} else {
vErrors.push(err23)
}

}
if (data4 < 0 || isNaN(data4)) {
const err24 = {
instancePath: instancePath + '/imageType',
schemaPath: '#/properties/imageType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err24]
} else {
vErrors.push(err24)
}

}
}
}
if (data.visualHint !== undefined) {
let data5 = data.visualHint
if (typeof data5 === 'string') {
if (func4(data5) > 100) {
const err25 = {
instancePath: instancePath + '/visualHint',
schemaPath: '#/properties/visualHint/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err25]
} else {
vErrors.push(err25)
}

}
if (func4(data5) < 1) {
const err26 = {
instancePath: instancePath + '/visualHint',
schemaPath: '#/properties/visualHint/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err26]
} else {
vErrors.push(err26)
}

}
} else {
const err27 = {
instancePath: instancePath + '/visualHint',
schemaPath: '#/properties/visualHint/type',
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
if (data.audioType !== undefined) {
let data6 = data.audioType
if (
!(
typeof data6 == 'number' &&
!(data6 % 1) &&
!isNaN(data6) &&
isFinite(data6)
)
) {
const err28 = {
instancePath: instancePath + '/audioType',
schemaPath: '#/properties/audioType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err28]
} else {
vErrors.push(err28)
}

}
if (typeof data6 == 'number' && isFinite(data6)) {
if (data6 > 4 || isNaN(data6)) {
const err29 = {
instancePath: instancePath + '/audioType',
schemaPath: '#/properties/audioType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 4 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err29]
} else {
vErrors.push(err29)
}

}
if (data6 < 0 || isNaN(data6)) {
const err30 = {
instancePath: instancePath + '/audioType',
schemaPath: '#/properties/audioType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err30]
} else {
vErrors.push(err30)
}

}
}
}
if (data.successSound !== undefined) {
let data7 = data.successSound
if (typeof data7 === 'string') {
if (!formats2.test(data7)) {
const err31 = {
instancePath: instancePath + '/successSound',
schemaPath: '#/properties/successSound/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err31]
} else {
vErrors.push(err31)
}

}
} else {
const err32 = {
instancePath: instancePath + '/successSound',
schemaPath: '#/properties/successSound/type',
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
if (data.successSoundType !== undefined) {
let data8 = data.successSoundType
if (
!(
typeof data8 == 'number' &&
!(data8 % 1) &&
!isNaN(data8) &&
isFinite(data8)
)
) {
const err33 = {
instancePath: instancePath + '/successSoundType',
schemaPath: '#/properties/successSoundType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err33]
} else {
vErrors.push(err33)
}

}
if (typeof data8 == 'number' && isFinite(data8)) {
if (data8 > 4 || isNaN(data8)) {
const err34 = {
instancePath: instancePath + '/successSoundType',
schemaPath: '#/properties/successSoundType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 4 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err34]
} else {
vErrors.push(err34)
}

}
if (data8 < 0 || isNaN(data8)) {
const err35 = {
instancePath: instancePath + '/successSoundType',
schemaPath: '#/properties/successSoundType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err35]
} else {
vErrors.push(err35)
}

}
}
}
if (data.successImage !== undefined) {
let data9 = data.successImage
if (typeof data9 === 'string') {
if (!formats2.test(data9)) {
const err36 = {
instancePath: instancePath + '/successImage',
schemaPath: '#/properties/successImage/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err36]
} else {
vErrors.push(err36)
}

}
} else {
const err37 = {
instancePath: instancePath + '/successImage',
schemaPath: '#/properties/successImage/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err37]
} else {
vErrors.push(err37)
}

}
}
if (data.successImageType !== undefined) {
let data10 = data.successImageType
if (
!(
typeof data10 == 'number' &&
!(data10 % 1) &&
!isNaN(data10) &&
isFinite(data10)
)
) {
const err38 = {
instancePath: instancePath + '/successImageType',
schemaPath: '#/properties/successImageType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err38]
} else {
vErrors.push(err38)
}

}
if (typeof data10 == 'number' && isFinite(data10)) {
if (data10 > 3 || isNaN(data10)) {
const err39 = {
instancePath: instancePath + '/successImageType',
schemaPath: '#/properties/successImageType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err39]
} else {
vErrors.push(err39)
}

}
if (data10 < 0 || isNaN(data10)) {
const err40 = {
instancePath: instancePath + '/successImageType',
schemaPath: '#/properties/successImageType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err40]
} else {
vErrors.push(err40)
}

}
}
}
if (data.successAnimations !== undefined) {
let data11 = data.successAnimations
if (typeof data11 === 'string') {
if (func4(data11) > 100) {
const err41 = {
instancePath: instancePath + '/successAnimations',
schemaPath: '#/properties/successAnimations/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err41]
} else {
vErrors.push(err41)
}

}
} else {
const err42 = {
instancePath: instancePath + '/successAnimations',
schemaPath: '#/properties/successAnimations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err42]
} else {
vErrors.push(err42)
}

}
}
if (data.successImageTime !== undefined) {
let data12 = data.successImageTime
if (
!(
typeof data12 == 'number' &&
!(data12 % 1) &&
!isNaN(data12) &&
isFinite(data12)
)
) {
const err43 = {
instancePath: instancePath + '/successImageTime',
schemaPath: '#/properties/successImageTime/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err43]
} else {
vErrors.push(err43)
}

}
if (typeof data12 == 'number' && isFinite(data12)) {
if (data12 < 0 || isNaN(data12)) {
const err44 = {
instancePath: instancePath + '/successImageTime',
schemaPath: '#/properties/successImageTime/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err44]
} else {
vErrors.push(err44)
}

}
}
}
} else {
const err45 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err45]
} else {
vErrors.push(err45)
}

}
return vErrors
}
