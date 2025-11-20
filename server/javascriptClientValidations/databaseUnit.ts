'use strict'
const schema14 = {
$id: 'databaseUnit',
type: 'object',
properties: {
name: { minLength: 1, maxLength: 100, type: 'string' },
order: { minimum: 0, type: 'integer' },
lastModified: { type: 'number' },
touched: { default: false, type: 'boolean' },
version: { minimum: 0, type: 'integer' },
id: { format: 'uuid', type: 'string' },
appId: { format: 'uuid', type: 'string' },
databaseId: { format: 'uuid', type: 'string' },
successVideoType: { default: 0, minimum: 0, maximum: 2, type: 'integer' },
successVideoUrl: { maxLength: 100, type: 'string' },
successAnimations: { default: 'Fireworks', maxLength: 100, type: 'string' },
successSound: { format: 'uuid', type: 'string' },
successSoundType: { default: 2, minimum: 0, maximum: 4, type: 'integer' },
homePageImageType: { default: 0, minimum: 0, maximum: 3, type: 'integer' },
homePageImage: {
default: '00000000-0000-0000-0000-000000000002',
format: 'uuid',
type: 'string'},
router: { format: 'uuid', type: 'string' },
routerTime: { type: 'number' },
routerTimeImmediate: { default: false, type: 'boolean' },
points: { default: 0, minimum: 0, type: 'integer' }
},
required: [
'name',
'order',
'lastModified',
'touched',
'version',
'id',
'appId',
'databaseId',
'successVideoType',
'successVideoUrl',
'successAnimations',
'successSound',
'successSoundType',
'homePageImageType',
'homePageImage',
'router',
'routerTime',
'routerTimeImmediate',
'points'
]
}
import * as ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = ucs2length.default;
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerDatabaseUnitInterface } from '../serverInterfaces/ServerDatabaseUnitInterface'
export async function validateDatabaseUnit(
data:ServerDatabaseUnitInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="databaseUnit" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.name === undefined) {
const err0 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'name' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
if (data.order === undefined) {
const err1 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'order' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
if (data.lastModified === undefined) {
const err2 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err2]
} else {
vErrors.push(err2)
}

}
if (data.touched === undefined) {
const err3 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'touched' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
if (data.version === undefined) {
const err4 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'version' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
if (data.id === undefined) {
const err5 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'id' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err5]
} else {
vErrors.push(err5)
}

}
if (data.appId === undefined) {
const err6 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'appId' },
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
if (data.successVideoType === undefined) {
const err8 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'successVideoType' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err8]
} else {
vErrors.push(err8)
}

}
if (data.successVideoUrl === undefined) {
const err9 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'successVideoUrl' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err9]
} else {
vErrors.push(err9)
}

}
if (data.successAnimations === undefined) {
const err10 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'successAnimations' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err10]
} else {
vErrors.push(err10)
}

}
if (data.successSound === undefined) {
const err11 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'successSound' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err11]
} else {
vErrors.push(err11)
}

}
if (data.successSoundType === undefined) {
const err12 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'successSoundType' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err12]
} else {
vErrors.push(err12)
}

}
if (data.homePageImageType === undefined) {
const err13 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'homePageImageType' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err13]
} else {
vErrors.push(err13)
}

}
if (data.homePageImage === undefined) {
const err14 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'homePageImage' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err14]
} else {
vErrors.push(err14)
}

}
if (data.router === undefined) {
const err15 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'router' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err15]
} else {
vErrors.push(err15)
}

}
if (data.routerTime === undefined) {
const err16 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'routerTime' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err16]
} else {
vErrors.push(err16)
}

}
if (data.routerTimeImmediate === undefined) {
const err17 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'routerTimeImmediate' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err17]
} else {
vErrors.push(err17)
}

}
if (data.points === undefined) {
const err18 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'points' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err18]
} else {
vErrors.push(err18)
}

}
if (data.name !== undefined) {
let data0 = data.name
if (typeof data0 === 'string') {
if (func4(data0) > 100) {
const err19 = {
instancePath: instancePath + '/name',
schemaPath: '#/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err19]
} else {
vErrors.push(err19)
}

}
if (func4(data0) < 1) {
const err20 = {
instancePath: instancePath + '/name',
schemaPath: '#/properties/name/minLength',
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
instancePath: instancePath + '/name',
schemaPath: '#/properties/name/type',
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
if (data.order !== undefined) {
let data1 = data.order
if (
!(
typeof data1 == 'number' &&
!(data1 % 1) &&
!isNaN(data1) &&
isFinite(data1)
)
) {
const err22 = {
instancePath: instancePath + '/order',
schemaPath: '#/properties/order/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err22]
} else {
vErrors.push(err22)
}

}
if (typeof data1 == 'number' && isFinite(data1)) {
if (data1 < 0 || isNaN(data1)) {
const err23 = {
instancePath: instancePath + '/order',
schemaPath: '#/properties/order/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err23]
} else {
vErrors.push(err23)
}

}
}
}
if (data.lastModified !== undefined) {
let data2 = data.lastModified
if (!(typeof data2 == 'number' && isFinite(data2))) {
const err24 = {
instancePath: instancePath + '/lastModified',
schemaPath: '#/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
if (vErrors === null) {
vErrors = [err24]
} else {
vErrors.push(err24)
}

}
}
if (data.touched !== undefined) {
if (typeof data.touched !== 'boolean') {
const err25 = {
instancePath: instancePath + '/touched',
schemaPath: '#/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
if (vErrors === null) {
vErrors = [err25]
} else {
vErrors.push(err25)
}

}
}
if (data.version !== undefined) {
let data4 = data.version
if (
!(
typeof data4 == 'number' &&
!(data4 % 1) &&
!isNaN(data4) &&
isFinite(data4)
)
) {
const err26 = {
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err26]
} else {
vErrors.push(err26)
}

}
if (typeof data4 == 'number' && isFinite(data4)) {
if (data4 < 0 || isNaN(data4)) {
const err27 = {
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/minimum',
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
if (data.id !== undefined) {
let data5 = data.id
if (typeof data5 === 'string') {
if (!formats2.test(data5)) {
const err28 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/format',
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
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/type',
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
if (data.appId !== undefined) {
let data6 = data.appId
if (typeof data6 === 'string') {
if (!formats2.test(data6)) {
const err30 = {
instancePath: instancePath + '/appId',
schemaPath: '#/properties/appId/format',
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
instancePath: instancePath + '/appId',
schemaPath: '#/properties/appId/type',
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
if (data.databaseId !== undefined) {
let data7 = data.databaseId
if (typeof data7 === 'string') {
if (!formats2.test(data7)) {
const err32 = {
instancePath: instancePath + '/databaseId',
schemaPath: '#/properties/databaseId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err32]
} else {
vErrors.push(err32)
}

}
} else {
const err33 = {
instancePath: instancePath + '/databaseId',
schemaPath: '#/properties/databaseId/type',
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
if (data.successVideoType !== undefined) {
let data8 = data.successVideoType
if (
!(
typeof data8 == 'number' &&
!(data8 % 1) &&
!isNaN(data8) &&
isFinite(data8)
)
) {
const err34 = {
instancePath: instancePath + '/successVideoType',
schemaPath: '#/properties/successVideoType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err34]
} else {
vErrors.push(err34)
}

}
if (typeof data8 == 'number' && isFinite(data8)) {
if (data8 > 2 || isNaN(data8)) {
const err35 = {
instancePath: instancePath + '/successVideoType',
schemaPath: '#/properties/successVideoType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 2 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err35]
} else {
vErrors.push(err35)
}

}
if (data8 < 0 || isNaN(data8)) {
const err36 = {
instancePath: instancePath + '/successVideoType',
schemaPath: '#/properties/successVideoType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err36]
} else {
vErrors.push(err36)
}

}
}
}
if (data.successVideoUrl !== undefined) {
let data9 = data.successVideoUrl
if (typeof data9 === 'string') {
if (func4(data9) > 100) {
const err37 = {
instancePath: instancePath + '/successVideoUrl',
schemaPath: '#/properties/successVideoUrl/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err37]
} else {
vErrors.push(err37)
}

}
} else {
const err38 = {
instancePath: instancePath + '/successVideoUrl',
schemaPath: '#/properties/successVideoUrl/type',
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
if (data.successAnimations !== undefined) {
let data10 = data.successAnimations
if (typeof data10 === 'string') {
if (func4(data10) > 100) {
const err39 = {
instancePath: instancePath + '/successAnimations',
schemaPath: '#/properties/successAnimations/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err39]
} else {
vErrors.push(err39)
}

}
} else {
const err40 = {
instancePath: instancePath + '/successAnimations',
schemaPath: '#/properties/successAnimations/type',
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
if (data.successSound !== undefined) {
let data11 = data.successSound
if (typeof data11 === 'string') {
if (!formats2.test(data11)) {
const err41 = {
instancePath: instancePath + '/successSound',
schemaPath: '#/properties/successSound/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err41]
} else {
vErrors.push(err41)
}

}
} else {
const err42 = {
instancePath: instancePath + '/successSound',
schemaPath: '#/properties/successSound/type',
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
if (data.successSoundType !== undefined) {
let data12 = data.successSoundType
if (
!(
typeof data12 == 'number' &&
!(data12 % 1) &&
!isNaN(data12) &&
isFinite(data12)
)
) {
const err43 = {
instancePath: instancePath + '/successSoundType',
schemaPath: '#/properties/successSoundType/type',
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
if (data12 > 4 || isNaN(data12)) {
const err44 = {
instancePath: instancePath + '/successSoundType',
schemaPath: '#/properties/successSoundType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 4 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err44]
} else {
vErrors.push(err44)
}

}
if (data12 < 0 || isNaN(data12)) {
const err45 = {
instancePath: instancePath + '/successSoundType',
schemaPath: '#/properties/successSoundType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err45]
} else {
vErrors.push(err45)
}

}
}
}
if (data.homePageImageType !== undefined) {
let data13 = data.homePageImageType
if (
!(
typeof data13 == 'number' &&
!(data13 % 1) &&
!isNaN(data13) &&
isFinite(data13)
)
) {
const err46 = {
instancePath: instancePath + '/homePageImageType',
schemaPath: '#/properties/homePageImageType/type',
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
if (data13 > 3 || isNaN(data13)) {
const err47 = {
instancePath: instancePath + '/homePageImageType',
schemaPath: '#/properties/homePageImageType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err47]
} else {
vErrors.push(err47)
}

}
if (data13 < 0 || isNaN(data13)) {
const err48 = {
instancePath: instancePath + '/homePageImageType',
schemaPath: '#/properties/homePageImageType/minimum',
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
if (data.homePageImage !== undefined) {
let data14 = data.homePageImage
if (typeof data14 === 'string') {
if (!formats2.test(data14)) {
const err49 = {
instancePath: instancePath + '/homePageImage',
schemaPath: '#/properties/homePageImage/format',
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
instancePath: instancePath + '/homePageImage',
schemaPath: '#/properties/homePageImage/type',
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
if (data.router !== undefined) {
let data15 = data.router
if (typeof data15 === 'string') {
if (!formats2.test(data15)) {
const err51 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err51]
} else {
vErrors.push(err51)
}

}
} else {
const err52 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err52]
} else {
vErrors.push(err52)
}

}
}
if (data.routerTime !== undefined) {
let data16 = data.routerTime
if (!(typeof data16 == 'number' && isFinite(data16))) {
const err53 = {
instancePath: instancePath + '/routerTime',
schemaPath: '#/properties/routerTime/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
if (vErrors === null) {
vErrors = [err53]
} else {
vErrors.push(err53)
}

}
}
if (data.routerTimeImmediate !== undefined) {
if (typeof data.routerTimeImmediate !== 'boolean') {
const err54 = {
instancePath: instancePath + '/routerTimeImmediate',
schemaPath: '#/properties/routerTimeImmediate/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
if (vErrors === null) {
vErrors = [err54]
} else {
vErrors.push(err54)
}

}
}
if (data.points !== undefined) {
let data18 = data.points
if (
!(
typeof data18 == 'number' &&
!(data18 % 1) &&
!isNaN(data18) &&
isFinite(data18)
)
) {
const err55 = {
instancePath: instancePath + '/points',
schemaPath: '#/properties/points/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err55]
} else {
vErrors.push(err55)
}

}
if (typeof data18 == 'number' && isFinite(data18)) {
if (data18 < 0 || isNaN(data18)) {
const err56 = {
instancePath: instancePath + '/points',
schemaPath: '#/properties/points/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err56]
} else {
vErrors.push(err56)
}

}
}
}
} else {
const err57 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err57]
} else {
vErrors.push(err57)
}

}
return vErrors
}
