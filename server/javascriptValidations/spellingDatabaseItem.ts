'use strict'
const schema30 = {
$id: 'spellingDatabaseItem',
type: 'object',
properties: {
data: {
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
},
itemType: { minimum: 0, maximum: 5, type: 'integer' },
order: { minimum: 0, type: 'integer' },
unitId: { format: 'uuid', type: 'string' },
appId: { format: 'uuid', type: 'string' },
lastModified: { type: 'number' },
touched: { default: false, type: 'boolean' },
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
'touched',
'version',
'databaseId',
'id',
'dataText'
]
}
import ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = (ucs2length as any).default;
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerSpellingDatabaseItemInterface } from '../serverInterfaces/ServerSpellingDatabaseItemInterface'
export async function validateSpellingDatabaseItem(
data:ServerSpellingDatabaseItemInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="spellingDatabaseItem" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
let missing0
if (
(data.data === undefined && (missing0 = 'data')) ||
(data.itemType === undefined && (missing0 = 'itemType')) ||
(data.order === undefined && (missing0 = 'order')) ||
(data.unitId === undefined && (missing0 = 'unitId')) ||
(data.appId === undefined && (missing0 = 'appId')) ||
(data.lastModified === undefined && (missing0 = 'lastModified')) ||
(data.touched === undefined && (missing0 = 'touched')) ||
(data.version === undefined && (missing0 = 'version')) ||
(data.databaseId === undefined && (missing0 = 'databaseId')) ||
(data.id === undefined && (missing0 = 'id')) ||
(data.dataText === undefined && (missing0 = 'dataText'))
) {errors.push(
{
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: missing0 },
 message: "Required"}
);
} else {
if (data.data !== undefined) {
let data0 = data.data
const _errs1 = errors
if (true) {
if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
let missing1
if (
(data0.letters === undefined && (missing1 = 'letters')) ||
(data0.image === undefined && (missing1 = 'image')) ||
(data0.sound === undefined && (missing1 = 'sound')) ||
(data0.text === undefined && (missing1 = 'text')) ||
(data0.imageType === undefined && (missing1 = 'imageType')) ||
(data0.visualHint === undefined && (missing1 = 'visualHint')) ||
(data0.audioType === undefined && (missing1 = 'audioType')) ||
(data0.successSound === undefined &&
(missing1 = 'successSound')) ||
(data0.successSoundType === undefined &&
(missing1 = 'successSoundType')) ||
(data0.successImage === undefined &&
(missing1 = 'successImage')) ||
(data0.successImageType === undefined &&
(missing1 = 'successImageType')) ||
(data0.successAnimations === undefined &&
(missing1 = 'successAnimations')) ||
(data0.successImageTime === undefined &&
(missing1 = 'successImageTime'))
) {errors.push(
{
instancePath: instancePath + '/data',
schemaPath: '#/properties/data/required',
keyword: 'required',
params: { missingProperty: missing1 },
message: "must have required property '" + missing1 + "'"
}
);
} else {
if (data0.letters !== undefined) {
let data1 = data0.letters
const _errs3 = errors
if (true) {
if (typeof data1 === 'string') {
if (func4(data1) > 364) {errors.push(
{
instancePath: instancePath + '/data/letters',
schemaPath: '#/properties/data/properties/letters/maxLength',
keyword: 'maxLength',
params: { limit: 364 },
 message: "Must_be_less_than_364_characters"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/data/letters',
schemaPath: '#/properties/data/properties/letters/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid1 = _errs3 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.image !== undefined) {
let data2 = data0.image
const _errs5 = errors
if (true) {
if (true) {
if (typeof data2 === 'string') {
if (!formats2.test(data2)) {errors.push(
{
instancePath: instancePath + '/data/image',
schemaPath: '#/properties/data/properties/image/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/data/image',
schemaPath: '#/properties/data/properties/image/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid1 = _errs5 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.sound !== undefined) {
let data3 = data0.sound
const _errs7 = errors
if (true) {
if (true) {
if (typeof data3 === 'string') {
if (!formats2.test(data3)) {errors.push(
{
instancePath: instancePath + '/data/sound',
schemaPath: '#/properties/data/properties/sound/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/data/sound',
schemaPath: '#/properties/data/properties/sound/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid1 = _errs7 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.text !== undefined) {
let data4 = data0.text
const _errs9 = errors
if (true) {
if (typeof data4 === 'string') {
if (func4(data4) > 14) {errors.push(
{
instancePath: instancePath + '/data/text',
schemaPath: '#/properties/data/properties/text/maxLength',
keyword: 'maxLength',
params: { limit: 14 },
 message: "Must_be_less_than_14_characters"}
);
} else {
if (func4(data4) < 1) {errors.push(
{
instancePath: instancePath + '/data/text',
schemaPath: '#/properties/data/properties/text/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/data/text',
schemaPath: '#/properties/data/properties/text/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid1 = _errs9 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.imageType !== undefined) {
let data5 = data0.imageType
const _errs11 = errors
if (
!(
typeof data5 == 'number' &&
!(data5 % 1) &&
!isNaN(data5) &&
isFinite(data5)
)
) {errors.push(
{
instancePath: instancePath + '/data/imageType',
schemaPath: '#/properties/data/properties/imageType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data5 == 'number' && isFinite(data5)) {
if (data5 > 3 || isNaN(data5)) {errors.push(
{
instancePath: instancePath + '/data/imageType',
schemaPath: '#/properties/data/properties/imageType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data5 < 0 || isNaN(data5)) {errors.push(
{
instancePath: instancePath + '/data/imageType',
schemaPath: '#/properties/data/properties/imageType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
}
var valid1 = _errs11 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.visualHint !== undefined) {
let data6 = data0.visualHint
const _errs13 = errors
if (true) {
if (typeof data6 === 'string') {
if (func4(data6) > 100) {errors.push(
{
instancePath: instancePath + '/data/visualHint',
schemaPath: '#/properties/data/properties/visualHint/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data6) < 1) {errors.push(
{
instancePath: instancePath + '/data/visualHint',
schemaPath: '#/properties/data/properties/visualHint/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/data/visualHint',
schemaPath: '#/properties/data/properties/visualHint/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid1 = _errs13 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.audioType !== undefined) {
let data7 = data0.audioType
const _errs15 = errors
if (
!(
typeof data7 == 'number' &&
!(data7 % 1) &&
!isNaN(data7) &&
isFinite(data7)
)
) {errors.push(
{
instancePath: instancePath + '/data/audioType',
schemaPath: '#/properties/data/properties/audioType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data7 == 'number' &&
isFinite(data7)
) {
if (data7 > 4 || isNaN(data7)) {errors.push(
{
instancePath: instancePath + '/data/audioType',
schemaPath: '#/properties/data/properties/audioType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 4 },
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data7 < 0 || isNaN(data7)) {errors.push(
{
instancePath: instancePath + '/data/audioType',
schemaPath: '#/properties/data/properties/audioType/minimum',
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
}
var valid1 = _errs15 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.successSound !== undefined) {
let data8 = data0.successSound
const _errs17 = errors
if (true) {
if (true) {
if (typeof data8 === 'string') {
if (!formats2.test(data8)) {errors.push(
{
instancePath: instancePath + '/data/successSound',
schemaPath: '#/properties/data/properties/successSound/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/data/successSound',
schemaPath: '#/properties/data/properties/successSound/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid1 = _errs17 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.successSoundType !== undefined) {
let data9 = data0.successSoundType
const _errs19 = errors
if (
!(
typeof data9 == 'number' &&
!(data9 % 1) &&
!isNaN(data9) &&
isFinite(data9)
)
) {errors.push(
{
instancePath: instancePath + '/data/successSoundType',
schemaPath: '#/properties/data/properties/successSoundType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data9 == 'number' &&
isFinite(data9)
) {
if (data9 > 4 || isNaN(data9)) {errors.push(
{
instancePath: instancePath + '/data/successSoundType',
schemaPath: '#/properties/data/properties/successSoundType/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 4
},
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data9 < 0 || isNaN(data9)) {errors.push(
{
instancePath: instancePath + '/data/successSoundType',
schemaPath: '#/properties/data/properties/successSoundType/minimum',
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
}
var valid1 = _errs19 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.successImage !== undefined) {
let data10 = data0.successImage
const _errs21 = errors
if (true) {
if (true) {
if (typeof data10 === 'string') {
if (!formats2.test(data10)) {errors.push(
{
instancePath: instancePath + '/data/successImage',
schemaPath: '#/properties/data/properties/successImage/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/data/successImage',
schemaPath: '#/properties/data/properties/successImage/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid1 = _errs21 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.successImageType !== undefined) {
let data11 = data0.successImageType
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
instancePath: instancePath + '/data/successImageType',
schemaPath: '#/properties/data/properties/successImageType/type',
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
if (data11 > 3 || isNaN(data11)) {errors.push(
{
instancePath: instancePath + '/data/successImageType',
schemaPath: '#/properties/data/properties/successImageType/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 3
},
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data11 < 0 || isNaN(data11)) {errors.push(
{
instancePath: instancePath + '/data/successImageType',
schemaPath: '#/properties/data/properties/successImageType/minimum',
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
}
var valid1 = _errs23 === errors
} else {
var valid1 = true
}
if (valid1) {
if (
data0.successAnimations !== undefined
) {
let data12 = data0.successAnimations
const _errs25 = errors
if (true) {
if (typeof data12 === 'string') {
if (func4(data12) > 100) {errors.push(
{
instancePath: instancePath + '/data/successAnimations',
schemaPath: '#/properties/data/properties/successAnimations/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/data/successAnimations',
schemaPath: '#/properties/data/properties/successAnimations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid1 = _errs25 === errors
} else {
var valid1 = true
}
if (valid1) {
if (
data0.successImageTime !== undefined
) {
let data13 = data0.successImageTime
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
instancePath: instancePath + '/data/successImageTime',
schemaPath: '#/properties/data/properties/successImageTime/type',
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
if (data13 < 0 || isNaN(data13)) {errors.push(
{
instancePath: instancePath + '/data/successImageTime',
schemaPath: '#/properties/data/properties/successImageTime/minimum',
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
var valid1 = _errs27 === errors
} else {
var valid1 = true
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
instancePath: instancePath + '/data',
schemaPath: '#/properties/data/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
);
}
}
var valid0 = _errs1 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.itemType !== undefined) {
let data14 = data.itemType
const _errs29 = errors
if (
!(
typeof data14 == 'number' &&
!(data14 % 1) &&
!isNaN(data14) &&
isFinite(data14)
)
) {errors.push(
{
instancePath: instancePath + '/itemType',
schemaPath: '#/properties/itemType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data14 == 'number' && isFinite(data14)) {
if (data14 > 5 || isNaN(data14)) {errors.push(
{
instancePath: instancePath + '/itemType',
schemaPath: '#/properties/itemType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 5 },
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data14 < 0 || isNaN(data14)) {errors.push(
{
instancePath: instancePath + '/itemType',
schemaPath: '#/properties/itemType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
}
var valid0 = _errs29 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.order !== undefined) {
let data15 = data.order
const _errs31 = errors
if (
!(
typeof data15 == 'number' &&
!(data15 % 1) &&
!isNaN(data15) &&
isFinite(data15)
)
) {errors.push(
{
instancePath: instancePath + '/order',
schemaPath: '#/properties/order/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data15 == 'number' && isFinite(data15)) {
if (data15 < 0 || isNaN(data15)) {errors.push(
{
instancePath: instancePath + '/order',
schemaPath: '#/properties/order/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
var valid0 = _errs31 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.unitId !== undefined) {
let data16 = data.unitId
const _errs33 = errors
if (true) {
if (true) {
if (typeof data16 === 'string') {
if (!formats2.test(data16)) {errors.push(
{
instancePath: instancePath + '/unitId',
schemaPath: '#/properties/unitId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/unitId',
schemaPath: '#/properties/unitId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid0 = _errs33 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.appId !== undefined) {
let data17 = data.appId
const _errs35 = errors
if (true) {
if (true) {
if (typeof data17 === 'string') {
if (!formats2.test(data17)) {errors.push(
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
var valid0 = _errs35 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.lastModified !== undefined) {
let data18 = data.lastModified
const _errs37 = errors
if (!(typeof data18 == 'number' && isFinite(data18))) {errors.push(
{
instancePath: instancePath + '/lastModified',
schemaPath: '#/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
);
}
var valid0 = _errs37 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.touched !== undefined) {
const _errs39 = errors
if (typeof data.touched !== 'boolean') {errors.push(
{
instancePath: instancePath + '/touched',
schemaPath: '#/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
);
}
var valid0 = _errs39 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.version !== undefined) {
let data20 = data.version
const _errs41 = errors
if (
!(
typeof data20 == 'number' &&
!(data20 % 1) &&
!isNaN(data20) &&
isFinite(data20)
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
if (typeof data20 == 'number' && isFinite(data20)) {
if (data20 < 0 || isNaN(data20)) {errors.push(
{
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
var valid0 = _errs41 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.databaseId !== undefined) {
let data21 = data.databaseId
const _errs43 = errors
if (true) {
if (true) {
if (typeof data21 === 'string') {
if (!formats2.test(data21)) {errors.push(
{
instancePath: instancePath + '/databaseId',
schemaPath: '#/properties/databaseId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/databaseId',
schemaPath: '#/properties/databaseId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid0 = _errs43 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.id !== undefined) {
let data22 = data.id
const _errs45 = errors
if (true) {
if (true) {
if (typeof data22 === 'string') {
if (!formats2.test(data22)) {errors.push(
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
var valid0 = _errs45 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.dataText !== undefined) {
let data23 = data.dataText
const _errs47 = errors
if (true) {
if (typeof data23 === 'string') {
if (func4(data23) > 8000) {errors.push(
{
instancePath: instancePath + '/dataText',
schemaPath: '#/properties/dataText/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/dataText',
schemaPath: '#/properties/dataText/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid0 = _errs47 === errors
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
