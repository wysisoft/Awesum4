'use strict'
const schema20 = {
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
import ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = (ucs2length as any).default;
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerOneByTwoDigraphsDatabaseItemDataInterface } from '../serverInterfaces/ServerOneByTwoDigraphsDatabaseItemDataInterface'
export async function validateOneByTwoDigraphsDatabaseItemData(
data:ServerOneByTwoDigraphsDatabaseItemDataInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="oneByTwoDigraphsDatabaseItemData" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
let missing0
if (
(data.leftDigraphs === undefined && (missing0 = 'leftDigraphs')) ||
(data.rightDigraphs === undefined && (missing0 = 'rightDigraphs')) ||
(data.image === undefined && (missing0 = 'image')) ||
(data.sound === undefined && (missing0 = 'sound')) ||
(data.text === undefined && (missing0 = 'text')) ||
(data.imageType === undefined && (missing0 = 'imageType')) ||
(data.visualHint === undefined && (missing0 = 'visualHint')) ||
(data.audioType === undefined && (missing0 = 'audioType')) ||
(data.successSound === undefined && (missing0 = 'successSound')) ||
(data.successSoundType === undefined &&
(missing0 = 'successSoundType')) ||
(data.successImage === undefined && (missing0 = 'successImage')) ||
(data.successImageType === undefined &&
(missing0 = 'successImageType')) ||
(data.successAnimations === undefined &&
(missing0 = 'successAnimations')) ||
(data.successImageTime === undefined && (missing0 = 'successImageTime'))
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
if (data.leftDigraphs !== undefined) {
let data0 = data.leftDigraphs
const _errs1 = errors
if (true) {
if (typeof data0 === 'string') {
if (func4(data0) > 364) {errors.push(
{
instancePath: instancePath + '/leftDigraphs',
schemaPath: '#/properties/leftDigraphs/maxLength',
keyword: 'maxLength',
params: { limit: 364 },
 message: "Must_be_less_than_364_characters"
}
);
}
} else {errors.push(
{
instancePath: instancePath + '/leftDigraphs',
schemaPath: '#/properties/leftDigraphs/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid0 = _errs1 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.rightDigraphs !== undefined) {
let data1 = data.rightDigraphs
const _errs3 = errors
if (true) {
if (typeof data1 === 'string') {
if (func4(data1) > 364) {errors.push(
{
instancePath: instancePath + '/rightDigraphs',
schemaPath: '#/properties/rightDigraphs/maxLength',
keyword: 'maxLength',
params: { limit: 364 },
 message: "Must_be_less_than_364_characters"
}
);
}
} else {errors.push(
{
instancePath: instancePath + '/rightDigraphs',
schemaPath: '#/properties/rightDigraphs/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid0 = _errs3 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.image !== undefined) {
let data2 = data.image
const _errs5 = errors
if (true) {
if (true) {
if (typeof data2 === 'string') {
if (!formats2.test(data2)) {errors.push(
{
instancePath: instancePath + '/image',
schemaPath: '#/properties/image/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
);
}
} else {errors.push(
{
instancePath: instancePath + '/image',
schemaPath: '#/properties/image/type',
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
if (data.sound !== undefined) {
let data3 = data.sound
const _errs7 = errors
if (true) {
if (true) {
if (typeof data3 === 'string') {
if (!formats2.test(data3)) {errors.push(
{
instancePath: instancePath + '/sound',
schemaPath: '#/properties/sound/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
);
}
} else {errors.push(
{
instancePath: instancePath + '/sound',
schemaPath: '#/properties/sound/type',
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
if (data.text !== undefined) {
let data4 = data.text
const _errs9 = errors
if (true) {
if (typeof data4 === 'string') {
if (func4(data4) > 14) {errors.push(
{
instancePath: instancePath + '/text',
schemaPath: '#/properties/text/maxLength',
keyword: 'maxLength',
params: { limit: 14 },
 message: "Must_be_less_than_14_characters"
}
);
} else {
if (func4(data4) < 1) {errors.push(
{
instancePath: instancePath + '/text',
schemaPath: '#/properties/text/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/text',
schemaPath: '#/properties/text/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid0 = _errs9 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.imageType !== undefined) {
let data5 = data.imageType
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
instancePath: instancePath + '/imageType',
schemaPath: '#/properties/imageType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (typeof data5 == 'number' && isFinite(data5)) {
if (data5 > 3 || isNaN(data5)) {errors.push(
{
instancePath: instancePath + '/imageType',
schemaPath: '#/properties/imageType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
);
} else {
if (data5 < 0 || isNaN(data5)) {errors.push(
{
instancePath: instancePath + '/imageType',
schemaPath: '#/properties/imageType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
);
}
}
}
}
var valid0 = _errs11 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.visualHint !== undefined) {
let data6 = data.visualHint
const _errs13 = errors
if (true) {
if (typeof data6 === 'string') {
if (func4(data6) > 100) {errors.push(
{
instancePath: instancePath + '/visualHint',
schemaPath: '#/properties/visualHint/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data6) < 1) {errors.push(
{
instancePath: instancePath + '/visualHint',
schemaPath: '#/properties/visualHint/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/visualHint',
schemaPath: '#/properties/visualHint/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid0 = _errs13 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.audioType !== undefined) {
let data7 = data.audioType
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
instancePath: instancePath + '/audioType',
schemaPath: '#/properties/audioType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (typeof data7 == 'number' && isFinite(data7)) {
if (data7 > 4 || isNaN(data7)) {errors.push(
{
instancePath: instancePath + '/audioType',
schemaPath: '#/properties/audioType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 4 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
);
} else {
if (data7 < 0 || isNaN(data7)) {errors.push(
{
instancePath: instancePath + '/audioType',
schemaPath: '#/properties/audioType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
);
}
}
}
}
var valid0 = _errs15 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.successSound !== undefined) {
let data8 = data.successSound
const _errs17 = errors
if (true) {
if (true) {
if (typeof data8 === 'string') {
if (!formats2.test(data8)) {errors.push(
{
instancePath: instancePath + '/successSound',
schemaPath: '#/properties/successSound/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
);
}
} else {errors.push(
{
instancePath: instancePath + '/successSound',
schemaPath: '#/properties/successSound/type',
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
if (data.successSoundType !== undefined) {
let data9 = data.successSoundType
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
instancePath: instancePath + '/successSoundType',
schemaPath: '#/properties/successSoundType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (typeof data9 == 'number' && isFinite(data9)) {
if (data9 > 4 || isNaN(data9)) {errors.push(
{
instancePath: instancePath + '/successSoundType',
schemaPath: '#/properties/successSoundType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 4 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
);
} else {
if (data9 < 0 || isNaN(data9)) {errors.push(
{
instancePath: instancePath + '/successSoundType',
schemaPath: '#/properties/successSoundType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
);
}
}
}
}
var valid0 = _errs19 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.successImage !== undefined) {
let data10 = data.successImage
const _errs21 = errors
if (true) {
if (true) {
if (typeof data10 === 'string') {
if (!formats2.test(data10)) {errors.push(
{
instancePath: instancePath + '/successImage',
schemaPath: '#/properties/successImage/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
);
}
} else {errors.push(
{
instancePath: instancePath + '/successImage',
schemaPath: '#/properties/successImage/type',
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
if (data.successImageType !== undefined) {
let data11 = data.successImageType
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
instancePath: instancePath + '/successImageType',
schemaPath: '#/properties/successImageType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (
typeof data11 == 'number' &&
isFinite(data11)
) {
if (data11 > 3 || isNaN(data11)) {errors.push(
{
instancePath: instancePath + '/successImageType',
schemaPath: '#/properties/successImageType/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 3
},
 message: "Must_be_less_than_or_equal_to_maximum"
}
);
} else {
if (data11 < 0 || isNaN(data11)) {errors.push(
{
instancePath: instancePath + '/successImageType',
schemaPath: '#/properties/successImageType/minimum',
keyword: 'minimum',
params: {
comparison: '>=',
limit: 0
},
 message: "Must_be_greater_than_or_equal_to_0"
}
);
}
}
}
}
var valid0 = _errs23 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.successAnimations !== undefined) {
let data12 = data.successAnimations
const _errs25 = errors
if (true) {
if (typeof data12 === 'string') {
if (func4(data12) > 100) {errors.push(
{
instancePath: instancePath + '/successAnimations',
schemaPath: '#/properties/successAnimations/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
);
}
} else {errors.push(
{
instancePath: instancePath + '/successAnimations',
schemaPath: '#/properties/successAnimations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid0 = _errs25 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.successImageTime !== undefined) {
let data13 = data.successImageTime
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
instancePath: instancePath + '/successImageTime',
schemaPath: '#/properties/successImageTime/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (
typeof data13 == 'number' &&
isFinite(data13)
) {
if (data13 < 0 || isNaN(data13)) {errors.push(
{
instancePath: instancePath + '/successImageTime',
schemaPath: '#/properties/successImageTime/minimum',
keyword: 'minimum',
params: {
comparison: '>=',
limit: 0
},
 message: "Must_be_greater_than_or_equal_to_0"
}
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
