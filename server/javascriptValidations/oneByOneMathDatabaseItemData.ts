'use strict'
const schema19 = {
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
import ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = (ucs2length as any).default;
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerOneByOneMathDatabaseItemDataInterface } from '../serverInterfaces/ServerOneByOneMathDatabaseItemDataInterface'
export async function validateOneByOneMathDatabaseItemData(
data:ServerOneByOneMathDatabaseItemDataInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="oneByOneMathDatabaseItemData" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
let missing0
if (
(data.firstNumber === undefined && (missing0 = 'firstNumber')) ||
(data.secondNumber === undefined && (missing0 = 'secondNumber')) ||
(data.options === undefined && (missing0 = 'options')) ||
(data.sound === undefined && (missing0 = 'sound')) ||
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
 message: "Required"}
);
} else {
if (data.firstNumber !== undefined) {
let data0 = data.firstNumber
const _errs1 = errors
if (
!(
typeof data0 == 'number' &&
!(data0 % 1) &&
!isNaN(data0) &&
isFinite(data0)
)
) {errors.push(
{
instancePath: instancePath + '/firstNumber',
schemaPath: '#/properties/firstNumber/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data0 == 'number' && isFinite(data0)) {
if (data0 < 0 || isNaN(data0)) {errors.push(
{
instancePath: instancePath + '/firstNumber',
schemaPath: '#/properties/firstNumber/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
var valid0 = _errs1 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.secondNumber !== undefined) {
let data1 = data.secondNumber
const _errs3 = errors
if (
!(
typeof data1 == 'number' &&
!(data1 % 1) &&
!isNaN(data1) &&
isFinite(data1)
)
) {errors.push(
{
instancePath: instancePath + '/secondNumber',
schemaPath: '#/properties/secondNumber/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data1 == 'number' && isFinite(data1)) {
if (data1 < 0 || isNaN(data1)) {errors.push(
{
instancePath: instancePath + '/secondNumber',
schemaPath: '#/properties/secondNumber/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
var valid0 = _errs3 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.options !== undefined) {
let data2 = data.options
const _errs5 = errors
if (true) {
if (typeof data2 === 'string') {
if (func4(data2) > 364) {errors.push(
{
instancePath: instancePath + '/options',
schemaPath: '#/properties/options/maxLength',
keyword: 'maxLength',
params: { limit: 364 },
 message: "Must_be_less_than_364_characters"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/options',
schemaPath: '#/properties/options/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
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
 message: "Must_be_a_valid_UUID"}
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
if (data.audioType !== undefined) {
let data4 = data.audioType
const _errs9 = errors
if (
!(
typeof data4 == 'number' &&
!(data4 % 1) &&
!isNaN(data4) &&
isFinite(data4)
)
) {errors.push(
{
instancePath: instancePath + '/audioType',
schemaPath: '#/properties/audioType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data4 == 'number' && isFinite(data4)) {
if (data4 > 4 || isNaN(data4)) {errors.push(
{
instancePath: instancePath + '/audioType',
schemaPath: '#/properties/audioType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 4 },
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data4 < 0 || isNaN(data4)) {errors.push(
{
instancePath: instancePath + '/audioType',
schemaPath: '#/properties/audioType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
}
var valid0 = _errs9 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.successSound !== undefined) {
let data5 = data.successSound
const _errs11 = errors
if (true) {
if (true) {
if (typeof data5 === 'string') {
if (!formats2.test(data5)) {errors.push(
{
instancePath: instancePath + '/successSound',
schemaPath: '#/properties/successSound/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
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
var valid0 = _errs11 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.successSoundType !== undefined) {
let data6 = data.successSoundType
const _errs13 = errors
if (
!(
typeof data6 == 'number' &&
!(data6 % 1) &&
!isNaN(data6) &&
isFinite(data6)
)
) {errors.push(
{
instancePath: instancePath + '/successSoundType',
schemaPath: '#/properties/successSoundType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data6 == 'number' && isFinite(data6)) {
if (data6 > 4 || isNaN(data6)) {errors.push(
{
instancePath: instancePath + '/successSoundType',
schemaPath: '#/properties/successSoundType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 4 },
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data6 < 0 || isNaN(data6)) {errors.push(
{
instancePath: instancePath + '/successSoundType',
schemaPath: '#/properties/successSoundType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
}
var valid0 = _errs13 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.successImage !== undefined) {
let data7 = data.successImage
const _errs15 = errors
if (true) {
if (true) {
if (typeof data7 === 'string') {
if (!formats2.test(data7)) {errors.push(
{
instancePath: instancePath + '/successImage',
schemaPath: '#/properties/successImage/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
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
var valid0 = _errs15 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.successImageType !== undefined) {
let data8 = data.successImageType
const _errs17 = errors
if (
!(
typeof data8 == 'number' &&
!(data8 % 1) &&
!isNaN(data8) &&
isFinite(data8)
)
) {errors.push(
{
instancePath: instancePath + '/successImageType',
schemaPath: '#/properties/successImageType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data8 == 'number' && isFinite(data8)) {
if (data8 > 3 || isNaN(data8)) {errors.push(
{
instancePath: instancePath + '/successImageType',
schemaPath: '#/properties/successImageType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data8 < 0 || isNaN(data8)) {errors.push(
{
instancePath: instancePath + '/successImageType',
schemaPath: '#/properties/successImageType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
}
var valid0 = _errs17 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.successAnimations !== undefined) {
let data9 = data.successAnimations
const _errs19 = errors
if (true) {
if (typeof data9 === 'string') {
if (func4(data9) > 100) {errors.push(
{
instancePath: instancePath + '/successAnimations',
schemaPath: '#/properties/successAnimations/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
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
var valid0 = _errs19 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.successImageTime !== undefined) {
let data10 = data.successImageTime
const _errs21 = errors
if (
!(
typeof data10 == 'number' &&
!(data10 % 1) &&
!isNaN(data10) &&
isFinite(data10)
)
) {errors.push(
{
instancePath: instancePath + '/successImageTime',
schemaPath: '#/properties/successImageTime/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data10 == 'number' &&
isFinite(data10)
) {
if (data10 < 0 || isNaN(data10)) {errors.push(
{
instancePath: instancePath + '/successImageTime',
schemaPath: '#/properties/successImageTime/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
var valid0 = _errs21 === errors
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
