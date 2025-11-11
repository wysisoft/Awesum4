'use strict'
const schema30 = {
$id: 'oneByTwoDigraphsDatabaseItem',
type: 'object',
properties: {
data: {
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
successSoundType: {
default: 2,
minimum: 0,
maximum: 4,
type: 'integer'},
successImage: { format: 'uuid', type: 'string' },
successImageType: {
default: 1,
minimum: 0,
maximum: 3,
type: 'integer'},
successAnimations: {
default: 'Fireworks',
maxLength: 100,
type: 'string'},
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
},
itemType: { minimum: 0, maximum: 5, type: 'integer' },
order: { minimum: 0, type: 'integer' },
unitId: { format: 'uuid', type: 'string' },
appId: { format: 'uuid', type: 'string' },
lastModified: { type: 'number' },
version: { minimum: 0, type: 'integer' },
databaseId: { format: 'uuid', type: 'string' },
id: { format: 'uuid', type: 'string' },
dataText: { maxLength: 8000, type: 'string' }
},
required: [
'data',
'itemType',
'order',
'unitId',
'appId',
'lastModified',
'version',
'databaseId',
'id',
'dataText'
]
}
import * as ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = ucs2length.default;
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerOneByTwoDigraphsDatabaseItemInterface } from '../serverInterfaces/ServerOneByTwoDigraphsDatabaseItemInterface'
export async function validateOneByTwoDigraphsDatabaseItem(
data:ServerOneByTwoDigraphsDatabaseItemInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="oneByTwoDigraphsDatabaseItem" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.data === undefined) {
const err0 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'data' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
if (data.itemType === undefined) {
const err1 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'itemType' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
if (data.order === undefined) {
const err2 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'order' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err2]
} else {
vErrors.push(err2)
}

}
if (data.unitId === undefined) {
const err3 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'unitId' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
if (data.appId === undefined) {
const err4 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'appId' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
if (data.lastModified === undefined) {
const err5 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err5]
} else {
vErrors.push(err5)
}

}
if (data.version === undefined) {
const err6 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'version' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err6]
} else {
vErrors.push(err6)
}

}
if (data.databaseId === undefined) {
const err7 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'databaseId' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err7]
} else {
vErrors.push(err7)
}

}
if (data.id === undefined) {
const err8 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'id' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err8]
} else {
vErrors.push(err8)
}

}
if (data.dataText === undefined) {
const err9 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'dataText' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err9]
} else {
vErrors.push(err9)
}

}
if (data.data !== undefined) {
let data0 = data.data
if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
if (data0.leftDigraphs === undefined) {
const err10 = {
instancePath: instancePath + '/data',
schemaPath: '#/properties/data/required',
keyword: 'required',
params: { missingProperty: 'leftDigraphs' },
message: "must have required property '" + 'leftDigraphs' + "'"
}
if (vErrors === null) {
vErrors = [err10]
} else {
vErrors.push(err10)
}

}
if (data0.rightDigraphs === undefined) {
const err11 = {
instancePath: instancePath + '/data',
schemaPath: '#/properties/data/required',
keyword: 'required',
params: { missingProperty: 'rightDigraphs' },
message: "must have required property '" + 'rightDigraphs' + "'"
}
if (vErrors === null) {
vErrors = [err11]
} else {
vErrors.push(err11)
}

}
if (data0.image === undefined) {
const err12 = {
instancePath: instancePath + '/data',
schemaPath: '#/properties/data/required',
keyword: 'required',
params: { missingProperty: 'image' },
message: "must have required property '" + 'image' + "'"
}
if (vErrors === null) {
vErrors = [err12]
} else {
vErrors.push(err12)
}

}
if (data0.sound === undefined) {
const err13 = {
instancePath: instancePath + '/data',
schemaPath: '#/properties/data/required',
keyword: 'required',
params: { missingProperty: 'sound' },
message: "must have required property '" + 'sound' + "'"
}
if (vErrors === null) {
vErrors = [err13]
} else {
vErrors.push(err13)
}

}
if (data0.text === undefined) {
const err14 = {
instancePath: instancePath + '/data',
schemaPath: '#/properties/data/required',
keyword: 'required',
params: { missingProperty: 'text' },
message: "must have required property '" + 'text' + "'"
}
if (vErrors === null) {
vErrors = [err14]
} else {
vErrors.push(err14)
}

}
if (data0.imageType === undefined) {
const err15 = {
instancePath: instancePath + '/data',
schemaPath: '#/properties/data/required',
keyword: 'required',
params: { missingProperty: 'imageType' },
message: "must have required property '" + 'imageType' + "'"
}
if (vErrors === null) {
vErrors = [err15]
} else {
vErrors.push(err15)
}

}
if (data0.visualHint === undefined) {
const err16 = {
instancePath: instancePath + '/data',
schemaPath: '#/properties/data/required',
keyword: 'required',
params: { missingProperty: 'visualHint' },
message: "must have required property '" + 'visualHint' + "'"
}
if (vErrors === null) {
vErrors = [err16]
} else {
vErrors.push(err16)
}

}
if (data0.audioType === undefined) {
const err17 = {
instancePath: instancePath + '/data',
schemaPath: '#/properties/data/required',
keyword: 'required',
params: { missingProperty: 'audioType' },
message: "must have required property '" + 'audioType' + "'"
}
if (vErrors === null) {
vErrors = [err17]
} else {
vErrors.push(err17)
}

}
if (data0.successSound === undefined) {
const err18 = {
instancePath: instancePath + '/data',
schemaPath: '#/properties/data/required',
keyword: 'required',
params: { missingProperty: 'successSound' },
message: "must have required property '" + 'successSound' + "'"
}
if (vErrors === null) {
vErrors = [err18]
} else {
vErrors.push(err18)
}

}
if (data0.successSoundType === undefined) {
const err19 = {
instancePath: instancePath + '/data',
schemaPath: '#/properties/data/required',
keyword: 'required',
params: { missingProperty: 'successSoundType' },
message: "must have required property '" + 'successSoundType' + "'"
}
if (vErrors === null) {
vErrors = [err19]
} else {
vErrors.push(err19)
}

}
if (data0.successImage === undefined) {
const err20 = {
instancePath: instancePath + '/data',
schemaPath: '#/properties/data/required',
keyword: 'required',
params: { missingProperty: 'successImage' },
message: "must have required property '" + 'successImage' + "'"
}
if (vErrors === null) {
vErrors = [err20]
} else {
vErrors.push(err20)
}

}
if (data0.successImageType === undefined) {
const err21 = {
instancePath: instancePath + '/data',
schemaPath: '#/properties/data/required',
keyword: 'required',
params: { missingProperty: 'successImageType' },
message: "must have required property '" + 'successImageType' + "'"
}
if (vErrors === null) {
vErrors = [err21]
} else {
vErrors.push(err21)
}

}
if (data0.successAnimations === undefined) {
const err22 = {
instancePath: instancePath + '/data',
schemaPath: '#/properties/data/required',
keyword: 'required',
params: { missingProperty: 'successAnimations' },
message: "must have required property '" + 'successAnimations' + "'"
}
if (vErrors === null) {
vErrors = [err22]
} else {
vErrors.push(err22)
}

}
if (data0.successImageTime === undefined) {
const err23 = {
instancePath: instancePath + '/data',
schemaPath: '#/properties/data/required',
keyword: 'required',
params: { missingProperty: 'successImageTime' },
message: "must have required property '" + 'successImageTime' + "'"
}
if (vErrors === null) {
vErrors = [err23]
} else {
vErrors.push(err23)
}

}
if (data0.leftDigraphs !== undefined) {
let data1 = data0.leftDigraphs
if (typeof data1 === 'string') {
if (func4(data1) > 364) {
const err24 = {
instancePath: instancePath + '/data/leftDigraphs',
schemaPath: '#/properties/data/properties/leftDigraphs/maxLength',
keyword: 'maxLength',
params: { limit: 364 },
 message: "Must_be_less_than_364_characters"}
if (vErrors === null) {
vErrors = [err24]
} else {
vErrors.push(err24)
}

}
} else {
const err25 = {
instancePath: instancePath + '/data/leftDigraphs',
schemaPath: '#/properties/data/properties/leftDigraphs/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err25]
} else {
vErrors.push(err25)
}

}
}
if (data0.rightDigraphs !== undefined) {
let data2 = data0.rightDigraphs
if (typeof data2 === 'string') {
if (func4(data2) > 364) {
const err26 = {
instancePath: instancePath + '/data/rightDigraphs',
schemaPath: '#/properties/data/properties/rightDigraphs/maxLength',
keyword: 'maxLength',
params: { limit: 364 },
 message: "Must_be_less_than_364_characters"}
if (vErrors === null) {
vErrors = [err26]
} else {
vErrors.push(err26)
}

}
} else {
const err27 = {
instancePath: instancePath + '/data/rightDigraphs',
schemaPath: '#/properties/data/properties/rightDigraphs/type',
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
if (data0.image !== undefined) {
let data3 = data0.image
if (typeof data3 === 'string') {
if (!formats2.test(data3)) {
const err28 = {
instancePath: instancePath + '/data/image',
schemaPath: '#/properties/data/properties/image/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err28]
} else {
vErrors.push(err28)
}

}
} else {
const err29 = {
instancePath: instancePath + '/data/image',
schemaPath: '#/properties/data/properties/image/type',
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
if (data0.sound !== undefined) {
let data4 = data0.sound
if (typeof data4 === 'string') {
if (!formats2.test(data4)) {
const err30 = {
instancePath: instancePath + '/data/sound',
schemaPath: '#/properties/data/properties/sound/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err30]
} else {
vErrors.push(err30)
}

}
} else {
const err31 = {
instancePath: instancePath + '/data/sound',
schemaPath: '#/properties/data/properties/sound/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err31]
} else {
vErrors.push(err31)
}

}
}
if (data0.text !== undefined) {
let data5 = data0.text
if (typeof data5 === 'string') {
if (func4(data5) > 14) {
const err32 = {
instancePath: instancePath + '/data/text',
schemaPath: '#/properties/data/properties/text/maxLength',
keyword: 'maxLength',
params: { limit: 14 },
 message: "Must_be_less_than_14_characters"}
if (vErrors === null) {
vErrors = [err32]
} else {
vErrors.push(err32)
}

}
if (func4(data5) < 1) {
const err33 = {
instancePath: instancePath + '/data/text',
schemaPath: '#/properties/data/properties/text/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err33]
} else {
vErrors.push(err33)
}

}
} else {
const err34 = {
instancePath: instancePath + '/data/text',
schemaPath: '#/properties/data/properties/text/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err34]
} else {
vErrors.push(err34)
}

}
}
if (data0.imageType !== undefined) {
let data6 = data0.imageType
if (
!(
typeof data6 == 'number' &&
!(data6 % 1) &&
!isNaN(data6) &&
isFinite(data6)
)
) {
const err35 = {
instancePath: instancePath + '/data/imageType',
schemaPath: '#/properties/data/properties/imageType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err35]
} else {
vErrors.push(err35)
}

}
if (typeof data6 == 'number' && isFinite(data6)) {
if (data6 > 3 || isNaN(data6)) {
const err36 = {
instancePath: instancePath + '/data/imageType',
schemaPath: '#/properties/data/properties/imageType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err36]
} else {
vErrors.push(err36)
}

}
if (data6 < 0 || isNaN(data6)) {
const err37 = {
instancePath: instancePath + '/data/imageType',
schemaPath: '#/properties/data/properties/imageType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err37]
} else {
vErrors.push(err37)
}

}
}
}
if (data0.visualHint !== undefined) {
let data7 = data0.visualHint
if (typeof data7 === 'string') {
if (func4(data7) > 100) {
const err38 = {
instancePath: instancePath + '/data/visualHint',
schemaPath: '#/properties/data/properties/visualHint/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err38]
} else {
vErrors.push(err38)
}

}
if (func4(data7) < 1) {
const err39 = {
instancePath: instancePath + '/data/visualHint',
schemaPath: '#/properties/data/properties/visualHint/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err39]
} else {
vErrors.push(err39)
}

}
} else {
const err40 = {
instancePath: instancePath + '/data/visualHint',
schemaPath: '#/properties/data/properties/visualHint/type',
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
if (data0.audioType !== undefined) {
let data8 = data0.audioType
if (
!(
typeof data8 == 'number' &&
!(data8 % 1) &&
!isNaN(data8) &&
isFinite(data8)
)
) {
const err41 = {
instancePath: instancePath + '/data/audioType',
schemaPath: '#/properties/data/properties/audioType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err41]
} else {
vErrors.push(err41)
}

}
if (typeof data8 == 'number' && isFinite(data8)) {
if (data8 > 4 || isNaN(data8)) {
const err42 = {
instancePath: instancePath + '/data/audioType',
schemaPath: '#/properties/data/properties/audioType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 4 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err42]
} else {
vErrors.push(err42)
}

}
if (data8 < 0 || isNaN(data8)) {
const err43 = {
instancePath: instancePath + '/data/audioType',
schemaPath: '#/properties/data/properties/audioType/minimum',
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
if (data0.successSound !== undefined) {
let data9 = data0.successSound
if (typeof data9 === 'string') {
if (!formats2.test(data9)) {
const err44 = {
instancePath: instancePath + '/data/successSound',
schemaPath: '#/properties/data/properties/successSound/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err44]
} else {
vErrors.push(err44)
}

}
} else {
const err45 = {
instancePath: instancePath + '/data/successSound',
schemaPath: '#/properties/data/properties/successSound/type',
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
if (data0.successSoundType !== undefined) {
let data10 = data0.successSoundType
if (
!(
typeof data10 == 'number' &&
!(data10 % 1) &&
!isNaN(data10) &&
isFinite(data10)
)
) {
const err46 = {
instancePath: instancePath + '/data/successSoundType',
schemaPath: '#/properties/data/properties/successSoundType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err46]
} else {
vErrors.push(err46)
}

}
if (typeof data10 == 'number' && isFinite(data10)) {
if (data10 > 4 || isNaN(data10)) {
const err47 = {
instancePath: instancePath + '/data/successSoundType',
schemaPath: '#/properties/data/properties/successSoundType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 4 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err47]
} else {
vErrors.push(err47)
}

}
if (data10 < 0 || isNaN(data10)) {
const err48 = {
instancePath: instancePath + '/data/successSoundType',
schemaPath: '#/properties/data/properties/successSoundType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err48]
} else {
vErrors.push(err48)
}

}
}
}
if (data0.successImage !== undefined) {
let data11 = data0.successImage
if (typeof data11 === 'string') {
if (!formats2.test(data11)) {
const err49 = {
instancePath: instancePath + '/data/successImage',
schemaPath: '#/properties/data/properties/successImage/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err49]
} else {
vErrors.push(err49)
}

}
} else {
const err50 = {
instancePath: instancePath + '/data/successImage',
schemaPath: '#/properties/data/properties/successImage/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err50]
} else {
vErrors.push(err50)
}

}
}
if (data0.successImageType !== undefined) {
let data12 = data0.successImageType
if (
!(
typeof data12 == 'number' &&
!(data12 % 1) &&
!isNaN(data12) &&
isFinite(data12)
)
) {
const err51 = {
instancePath: instancePath + '/data/successImageType',
schemaPath: '#/properties/data/properties/successImageType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err51]
} else {
vErrors.push(err51)
}

}
if (typeof data12 == 'number' && isFinite(data12)) {
if (data12 > 3 || isNaN(data12)) {
const err52 = {
instancePath: instancePath + '/data/successImageType',
schemaPath: '#/properties/data/properties/successImageType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err52]
} else {
vErrors.push(err52)
}

}
if (data12 < 0 || isNaN(data12)) {
const err53 = {
instancePath: instancePath + '/data/successImageType',
schemaPath: '#/properties/data/properties/successImageType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err53]
} else {
vErrors.push(err53)
}

}
}
}
if (data0.successAnimations !== undefined) {
let data13 = data0.successAnimations
if (typeof data13 === 'string') {
if (func4(data13) > 100) {
const err54 = {
instancePath: instancePath + '/data/successAnimations',
schemaPath: '#/properties/data/properties/successAnimations/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err54]
} else {
vErrors.push(err54)
}

}
} else {
const err55 = {
instancePath: instancePath + '/data/successAnimations',
schemaPath: '#/properties/data/properties/successAnimations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err55]
} else {
vErrors.push(err55)
}

}
}
if (data0.successImageTime !== undefined) {
let data14 = data0.successImageTime
if (
!(
typeof data14 == 'number' &&
!(data14 % 1) &&
!isNaN(data14) &&
isFinite(data14)
)
) {
const err56 = {
instancePath: instancePath + '/data/successImageTime',
schemaPath: '#/properties/data/properties/successImageTime/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err56]
} else {
vErrors.push(err56)
}

}
if (typeof data14 == 'number' && isFinite(data14)) {
if (data14 < 0 || isNaN(data14)) {
const err57 = {
instancePath: instancePath + '/data/successImageTime',
schemaPath: '#/properties/data/properties/successImageTime/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err57]
} else {
vErrors.push(err57)
}

}
}
}
} else {
const err58 = {
instancePath: instancePath + '/data',
schemaPath: '#/properties/data/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err58]
} else {
vErrors.push(err58)
}

}
}
if (data.itemType !== undefined) {
let data15 = data.itemType
if (
!(
typeof data15 == 'number' &&
!(data15 % 1) &&
!isNaN(data15) &&
isFinite(data15)
)
) {
const err59 = {
instancePath: instancePath + '/itemType',
schemaPath: '#/properties/itemType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err59]
} else {
vErrors.push(err59)
}

}
if (typeof data15 == 'number' && isFinite(data15)) {
if (data15 > 5 || isNaN(data15)) {
const err60 = {
instancePath: instancePath + '/itemType',
schemaPath: '#/properties/itemType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 5 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err60]
} else {
vErrors.push(err60)
}

}
if (data15 < 0 || isNaN(data15)) {
const err61 = {
instancePath: instancePath + '/itemType',
schemaPath: '#/properties/itemType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err61]
} else {
vErrors.push(err61)
}

}
}
}
if (data.order !== undefined) {
let data16 = data.order
if (
!(
typeof data16 == 'number' &&
!(data16 % 1) &&
!isNaN(data16) &&
isFinite(data16)
)
) {
const err62 = {
instancePath: instancePath + '/order',
schemaPath: '#/properties/order/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err62]
} else {
vErrors.push(err62)
}

}
if (typeof data16 == 'number' && isFinite(data16)) {
if (data16 < 0 || isNaN(data16)) {
const err63 = {
instancePath: instancePath + '/order',
schemaPath: '#/properties/order/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err63]
} else {
vErrors.push(err63)
}

}
}
}
if (data.unitId !== undefined) {
let data17 = data.unitId
if (typeof data17 === 'string') {
if (!formats2.test(data17)) {
const err64 = {
instancePath: instancePath + '/unitId',
schemaPath: '#/properties/unitId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err64]
} else {
vErrors.push(err64)
}

}
} else {
const err65 = {
instancePath: instancePath + '/unitId',
schemaPath: '#/properties/unitId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err65]
} else {
vErrors.push(err65)
}

}
}
if (data.appId !== undefined) {
let data18 = data.appId
if (typeof data18 === 'string') {
if (!formats2.test(data18)) {
const err66 = {
instancePath: instancePath + '/appId',
schemaPath: '#/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err66]
} else {
vErrors.push(err66)
}

}
} else {
const err67 = {
instancePath: instancePath + '/appId',
schemaPath: '#/properties/appId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err67]
} else {
vErrors.push(err67)
}

}
}
if (data.lastModified !== undefined) {
let data19 = data.lastModified
if (!(typeof data19 == 'number' && isFinite(data19))) {
const err68 = {
instancePath: instancePath + '/lastModified',
schemaPath: '#/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
if (vErrors === null) {
vErrors = [err68]
} else {
vErrors.push(err68)
}

}
}
if (data.version !== undefined) {
let data20 = data.version
if (
!(
typeof data20 == 'number' &&
!(data20 % 1) &&
!isNaN(data20) &&
isFinite(data20)
)
) {
const err69 = {
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err69]
} else {
vErrors.push(err69)
}

}
if (typeof data20 == 'number' && isFinite(data20)) {
if (data20 < 0 || isNaN(data20)) {
const err70 = {
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err70]
} else {
vErrors.push(err70)
}

}
}
}
if (data.databaseId !== undefined) {
let data21 = data.databaseId
if (typeof data21 === 'string') {
if (!formats2.test(data21)) {
const err71 = {
instancePath: instancePath + '/databaseId',
schemaPath: '#/properties/databaseId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err71]
} else {
vErrors.push(err71)
}

}
} else {
const err72 = {
instancePath: instancePath + '/databaseId',
schemaPath: '#/properties/databaseId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err72]
} else {
vErrors.push(err72)
}

}
}
if (data.id !== undefined) {
let data22 = data.id
if (typeof data22 === 'string') {
if (!formats2.test(data22)) {
const err73 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err73]
} else {
vErrors.push(err73)
}

}
} else {
const err74 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err74]
} else {
vErrors.push(err74)
}

}
}
if (data.dataText !== undefined) {
let data23 = data.dataText
if (typeof data23 === 'string') {
if (func4(data23) > 8000) {
const err75 = {
instancePath: instancePath + '/dataText',
schemaPath: '#/properties/dataText/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"}
if (vErrors === null) {
vErrors = [err75]
} else {
vErrors.push(err75)
}

}
} else {
const err76 = {
instancePath: instancePath + '/dataText',
schemaPath: '#/properties/dataText/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err76]
} else {
vErrors.push(err76)
}

}
}
} else {
const err77 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err77]
} else {
vErrors.push(err77)
}

}
return vErrors
}
