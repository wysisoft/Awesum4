'use strict'
const schema40 = {
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
const formats94 = formats.fullFormats.regex as any
const pattern2 = new RegExp('^([0-9]{2}:[0-9]{2})\\|([0-9]+)$', 'u')
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerUpdateRouterTimesAndDurationsRequestInterface } from '../serverInterfaces/ServerUpdateRouterTimesAndDurationsRequestInterface'
export async function validateUpdateRouterTimesAndDurationsRequest(
data:ServerUpdateRouterTimesAndDurationsRequestInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="updateRouterTimesAndDurationsRequest" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
let missing0
if (
(data.type === undefined && (missing0 = 'type')) ||
(data.routerId === undefined && (missing0 = 'routerId')) ||
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
(missing0 = 'sundayTimesAndDurations'))
) {errors.push(
{
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: missing0 },
 message: "Required"}
);
} else {
if (data.type !== undefined) {
let data0 = data.type
const _errs1 = errors
if (typeof data0 !== 'string') {errors.push(
{
instancePath: instancePath + '/type',
schemaPath: '#/properties/type/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
if ('updateRouterTimesAndDurationsRequest' !== data0) {errors.push(
{
instancePath: instancePath + '/type',
schemaPath: '#/properties/type/const',
keyword: 'const',
params: {
allowedValue: 'updateRouterTimesAndDurationsRequest'},
message: 'must be equal to constant'
}
);
}
var valid0 = _errs1 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.routerId !== undefined) {
let data1 = data.routerId
const _errs3 = errors
if (true) {
if (true) {
if (typeof data1 === 'string') {
if (!formats2.test(data1)) {errors.push(
{
instancePath: instancePath + '/routerId',
schemaPath: '#/properties/routerId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/routerId',
schemaPath: '#/properties/routerId/type',
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
if (data.mondayTimesAndDurations !== undefined) {
let data2 = data.mondayTimesAndDurations
const _errs5 = errors
if (true) {
if (true) {
if (typeof data2 === 'string') {
if (!pattern2.test(data2)) {errors.push(
{
instancePath: instancePath + '/mondayTimesAndDurations',
schemaPath: '#/properties/mondayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats94(data2)) {errors.push(
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
var valid0 = _errs5 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.tuesdayTimesAndDurations !== undefined) {
let data3 = data.tuesdayTimesAndDurations
const _errs7 = errors
if (true) {
if (true) {
if (typeof data3 === 'string') {
if (!pattern2.test(data3)) {errors.push(
{
instancePath: instancePath + '/tuesdayTimesAndDurations',
schemaPath: '#/properties/tuesdayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats94(data3)) {errors.push(
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
var valid0 = _errs7 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.wednesdayTimesAndDurations !== undefined) {
let data4 = data.wednesdayTimesAndDurations
const _errs9 = errors
if (true) {
if (true) {
if (typeof data4 === 'string') {
if (!pattern2.test(data4)) {errors.push(
{
instancePath: instancePath + '/wednesdayTimesAndDurations',
schemaPath: '#/properties/wednesdayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats94(data4)) {errors.push(
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
var valid0 = _errs9 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.thursdayTimesAndDurations !== undefined) {
let data5 = data.thursdayTimesAndDurations
const _errs11 = errors
if (true) {
if (true) {
if (typeof data5 === 'string') {
if (!pattern2.test(data5)) {errors.push(
{
instancePath: instancePath + '/thursdayTimesAndDurations',
schemaPath: '#/properties/thursdayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats94(data5)) {errors.push(
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
var valid0 = _errs11 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.fridayTimesAndDurations !== undefined) {
let data6 = data.fridayTimesAndDurations
const _errs13 = errors
if (true) {
if (true) {
if (typeof data6 === 'string') {
if (!pattern2.test(data6)) {errors.push(
{
instancePath: instancePath + '/fridayTimesAndDurations',
schemaPath: '#/properties/fridayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats94(data6)) {errors.push(
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
var valid0 = _errs13 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.saturdayTimesAndDurations !== undefined) {
let data7 = data.saturdayTimesAndDurations
const _errs15 = errors
if (true) {
if (true) {
if (typeof data7 === 'string') {
if (!pattern2.test(data7)) {errors.push(
{
instancePath: instancePath + '/saturdayTimesAndDurations',
schemaPath: '#/properties/saturdayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats94(data7)) {errors.push(
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
var valid0 = _errs15 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.sundayTimesAndDurations !== undefined) {
let data8 = data.sundayTimesAndDurations
const _errs17 = errors
if (true) {
if (true) {
if (typeof data8 === 'string') {
if (!pattern2.test(data8)) {errors.push(
{
instancePath: instancePath + '/sundayTimesAndDurations',
schemaPath: '#/properties/sundayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats94(data8)) {errors.push(
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
var valid0 = _errs17 === errors
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
