'use strict'
const schema34 = {
$id: 'syncResponse',
type: 'object',
properties: {
id: { format: 'uuid', type: 'string' },
level: { minimum: 0, maximum: 9, type: 'integer' },
values: { type: 'object', patternProperties: { '^(.*)$': {} } },
action: { minimum: 0, maximum: 3, type: 'integer' },
app: {
$id: 'app',
type: 'object',
properties: {
email: {
minLength: 5,
maxLength: 100,
format: 'email',
transform: ['trim', 'toLowerCase'],
type: 'string'},
name: {
minLength: 1,
maxLength: 100,
transform: ['trim', 'toLowerCase'],
type: 'string'},
uniqueName: {
minLength: 1,
maxLength: 100,
pattern: '/^(?!API$|I$).+$/i',
isNameGloballyUnique: true,
transform: ['trim', 'toLowerCase'],
type: 'string'},
version: { default: 0, minimum: 0, type: 'integer' },
touched: { default: false, type: 'boolean' },
lastModified: { default: 1763901578597, type: 'number' },
homePageImageType: {
default: 0,
minimum: 0,
maximum: 3,
type: 'integer'},
homePageImage: {
default: '00000000-0000-0000-0000-000000000001',
format: 'uuid',
type: 'string'},
authenticationType: {
minLength: 1,
maxLength: 100,
transform: ['trim', 'toLowerCase'],
type: 'string'},
lang: {
default: 'en-US',
minLength: 1,
maxLength: 100,
transform: ['trim', 'toLowerCase'],
type: 'string'},
enableNarrator: { default: false, type: 'boolean' },
groups: { default: '', maxLength: 8000, type: 'string' },
id: {
default: '019ab0ba-1d65-71b9-aa75-5576dc859e13',
format: 'uuid',
minLength: 36,
type: 'string'},
lastSync: { default: 0, type: 'number' }
},
required: [
'email',
'name',
'uniqueName',
'version',
'touched',
'lastModified',
'homePageImageType',
'homePageImage',
'authenticationType',
'lang',
'enableNarrator',
'groups',
'id',
'lastSync'
]
},
database: {
$id: 'database',
type: 'object',
properties: {
name: { minLength: 1, maxLength: 100, type: 'string' },
lastModified: { default: 1763901578598, type: 'number' },
version: { default: 0, minimum: 0, type: 'integer' },
appId: { format: 'uuid', type: 'string' },
id: {
default: '019ab0ba-1d66-760f-aeb7-50ceef4eeb61',
format: 'uuid',
type: 'string'},
order: { default: 0, minimum: 0, type: 'integer' },
homePageIconType: {
default: 0,
minimum: 0,
maximum: 3,
type: 'integer'},
homePageIcon: {
default: '00000000-0000-0000-0000-000000000002',
format: 'uuid',
type: 'string'
}
},
required: [
'name',
'lastModified',
'version',
'appId',
'id',
'order',
'homePageIconType',
'homePageIcon'
]
},
databaseUnit: {
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
successVideoType: {
default: 0,
minimum: 0,
maximum: 2,
type: 'integer'},
successVideoUrl: { maxLength: 100, type: 'string' },
successAnimations: {
default: 'Fireworks',
maxLength: 100,
type: 'string'},
successSound: { format: 'uuid', type: 'string' },
successSoundType: {
default: 2,
minimum: 0,
maximum: 4,
type: 'integer'},
homePageImageType: {
default: 0,
minimum: 0,
maximum: 3,
type: 'integer'},
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
},
databaseItem: {
$id: 'databaseItem',
type: 'object',
properties: {
itemType: { minimum: 0, maximum: 5, type: 'integer' },
order: { minimum: 0, type: 'integer' },
unitId: { format: 'uuid', type: 'string' },
appId: { format: 'uuid', type: 'string' },
lastModified: { type: 'number' },
touched: { default: false, type: 'boolean' },
version: { minimum: 0, type: 'integer' },
databaseId: { format: 'uuid', type: 'string' },
id: { format: 'uuid', type: 'string' },
dataText: { maxLength: 8000, type: 'string' },
data: {}
},
required: [
'itemType',
'order',
'unitId',
'appId',
'lastModified',
'touched',
'version',
'databaseId',
'id',
'dataText',
'data'
]
},
followerRequest: {
$id: 'followerRequest',
type: 'object',
properties: {
leaderAppId: {
default: '00000000-0000-0000-0000-000000000000',
format: 'uuid',
type: 'string'},
followerAppId: {
default: '00000000-0000-0000-0000-000000000000',
format: 'uuid',
type: 'string'},
id: {
default: '019ab0ba-1d66-760f-aeb7-59a89593d766',
format: 'uuid',
type: 'string'},
followerName: {
minLength: 1,
maxLength: 100,
default: 'Follower Name',
type: 'string'},
leaderName: {
minLength: 1,
maxLength: 100,
default: 'Leader Name',
type: 'string'},
followerEmail: {
minLength: 1,
maxLength: 100,
format: 'email',
doesEmailExist: true,
default: 'follower@example.com',
type: 'string'},
leaderEmail: {
minLength: 1,
maxLength: 100,
format: 'email',
doesEmailExist: true,
default: 'leader@example.com',
type: 'string'},
initiatedByFollower: { default: false, type: 'boolean' },
lastModified: { default: 1763901578598, type: 'number' },
touched: { default: false, type: 'boolean' },
version: { default: 0, minimum: 0, type: 'integer' },
status: { default: 0, minimum: 0, maximum: 2, type: 'integer' },
groups: { maxLength: 8000, default: '', type: 'string' },
points: { default: 0, minimum: 0, type: 'integer' }
},
required: [
'leaderAppId',
'followerAppId',
'id',
'followerName',
'leaderName',
'followerEmail',
'leaderEmail',
'initiatedByFollower',
'lastModified',
'touched',
'version',
'status',
'groups',
'points'
]
},
followerDatabase: {
$id: 'followerDatabase',
type: 'object',
properties: {
followerRequestId: {
default: '00000000-0000-0000-0000-000000000000',
format: 'uuid',
type: 'string'},
id: {
default: '019ab0ba-1d66-760f-aeb7-55fdbe2baa33',
format: 'uuid',
type: 'string'},
databaseId: {
default: '00000000-0000-0000-0000-000000000000',
format: 'uuid',
type: 'string'},
lastModified: { default: 1763901578598, type: 'number' },
touched: { default: false, type: 'boolean' },
version: { default: 0, minimum: 0, type: 'integer' }
},
required: [
'followerRequestId',
'id',
'databaseId',
'lastModified',
'touched',
'version'
]
},
followerDatabaseCompletion: {
$id: 'followerDatabaseCompletion',
type: 'object',
properties: {
id: {
default: '019ab0ba-1d66-760f-aeb7-62a7e59a1f9c',
format: 'uuid',
type: 'string'},
followerRequestId: { format: 'uuid', type: 'string' },
description: { maxLength: 1000, type: 'string' },
itemId: { format: 'uuid', type: 'string' },
parentItemId: { format: 'uuid', type: 'string' },
itemLevel: { minimum: 0, maximum: 9, type: 'integer' },
lastModified: { type: 'number' },
touched: { default: false, type: 'boolean' },
version: { minimum: 0, type: 'integer' }
},
required: [
'id',
'followerRequestId',
'description',
'itemId',
'parentItemId',
'itemLevel',
'lastModified',
'touched',
'version'
]
},
router: {
$id: 'router',
type: 'object',
properties: {
id: {
default: '019ab0ba-1d66-760f-aeb7-67d4c33d8580',
format: 'uuid',
type: 'string'},
appId: { format: 'uuid', type: 'string' },
routerMac: {
default: '00:00:00:00:00:00',
format: 'regex',
pattern: '^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$',
contentEncoding: 'base64',
type: 'string'},
ipAddress: { default: '0.0.0.0', format: 'ipv4', type: 'string' },
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
type: 'string'},
version: { default: 0, minimum: 0, type: 'integer' },
lastModified: { default: 1763901578598, type: 'number' },
touched: { default: false, type: 'boolean' },
status: { default: 1, maximum: 2, type: 'integer' }
},
required: [
'id',
'appId',
'routerMac',
'ipAddress',
'mondayTimesAndDurations',
'tuesdayTimesAndDurations',
'wednesdayTimesAndDurations',
'thursdayTimesAndDurations',
'fridayTimesAndDurations',
'saturdayTimesAndDurations',
'sundayTimesAndDurations',
'version',
'lastModified',
'touched',
'status'
]
},
media: {
$id: 'media',
type: 'object',
properties: {
id: {
default: '019ab0ba-1d66-760f-aeb7-5ceaed8cd594',
format: 'uuid',
type: 'string'},
size: { minimum: 0, type: 'integer' },
data: { maxLength: 8000, type: 'string' },
appId: { format: 'uuid', type: 'string' },
touched: { default: false, type: 'boolean' }
},
required: ['id', 'size', 'data', 'appId', 'touched']
},
message: { type: 'string' },
result: { minimum: 0, maximum: 8, type: 'integer' }
}
}
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
const formats0 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
import * as formats from 'ajv-formats/dist/formats'
const formats94 = formats.fullFormats.regex as any
const formats96 = /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/
import transform from 'ajv-keywords/dist/definitions/transform'
const func2 = transform.transform.toLowerCase
const func3 = transform.transform.trim
import * as ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = ucs2length.default;
const pattern0 = new RegExp(/^(?!API$|I$).+$/, 'i');
const pattern1 = new RegExp('^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$', 'u')
const pattern2 = new RegExp('^([0-9]{2}:[0-9]{2})\\|([0-9]+)$', 'u')
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerSyncResponseInterface } from '../serverInterfaces/ServerSyncResponseInterface'
export async function validateSyncResponse(
data:ServerSyncResponseInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="syncResponse" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.id !== undefined) {
let data0 = data.id
if (typeof data0 === 'string') {
if (!formats2.test(data0)) {
const err0 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
} else {
const err1 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
}
if (data.level !== undefined) {
let data1 = data.level
if (
!(
typeof data1 == 'number' &&
!(data1 % 1) &&
!isNaN(data1) &&
isFinite(data1)
)
) {
const err2 = {
instancePath: instancePath + '/level',
schemaPath: '#/properties/level/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err2]
} else {
vErrors.push(err2)
}

}
if (typeof data1 == 'number' && isFinite(data1)) {
if (data1 > 9 || isNaN(data1)) {
const err3 = {
instancePath: instancePath + '/level',
schemaPath: '#/properties/level/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 9 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
if (data1 < 0 || isNaN(data1)) {
const err4 = {
instancePath: instancePath + '/level',
schemaPath: '#/properties/level/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
message: 'must be >= 0'
}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
}
}
if (data.values !== undefined) {
let data2 = data.values
if (!(data2 && typeof data2 == 'object' && !Array.isArray(data2))) {
const err5 = {
instancePath: instancePath + '/values',
schemaPath: '#/properties/values/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err5]
} else {
vErrors.push(err5)
}

}
}
if (data.action !== undefined) {
let data3 = data.action
if (
!(
typeof data3 == 'number' &&
!(data3 % 1) &&
!isNaN(data3) &&
isFinite(data3)
)
) {
const err6 = {
instancePath: instancePath + '/action',
schemaPath: '#/properties/action/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err6]
} else {
vErrors.push(err6)
}

}
if (typeof data3 == 'number' && isFinite(data3)) {
if (data3 > 3 || isNaN(data3)) {
const err7 = {
instancePath: instancePath + '/action',
schemaPath: '#/properties/action/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err7]
} else {
vErrors.push(err7)
}

}
if (data3 < 0 || isNaN(data3)) {
const err8 = {
instancePath: instancePath + '/action',
schemaPath: '#/properties/action/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
message: 'must be >= 0'
}
if (vErrors === null) {
vErrors = [err8]
} else {
vErrors.push(err8)
}

}
}
}
if (data.app !== undefined) {
let data4 = data.app
if (data4 && typeof data4 == 'object' && !Array.isArray(data4)) {
if (data4.email === undefined) {
const err9 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'email' },
message: "must have required property '" + 'email' + "'"
}
if (vErrors === null) {
vErrors = [err9]
} else {
vErrors.push(err9)
}

}
if (data4.name === undefined) {
const err10 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'name' },
message: "must have required property '" + 'name' + "'"
}
if (vErrors === null) {
vErrors = [err10]
} else {
vErrors.push(err10)
}

}
if (data4.uniqueName === undefined) {
const err11 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'uniqueName' },
message: "must have required property '" + 'uniqueName' + "'"
}
if (vErrors === null) {
vErrors = [err11]
} else {
vErrors.push(err11)
}

}
if (data4.version === undefined) {
const err12 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'version' },
message: "must have required property '" + 'version' + "'"
}
if (vErrors === null) {
vErrors = [err12]
} else {
vErrors.push(err12)
}

}
if (data4.touched === undefined) {
const err13 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'touched' },
message: "must have required property '" + 'touched' + "'"
}
if (vErrors === null) {
vErrors = [err13]
} else {
vErrors.push(err13)
}

}
if (data4.lastModified === undefined) {
const err14 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err14]
} else {
vErrors.push(err14)
}

}
if (data4.homePageImageType === undefined) {
const err15 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'homePageImageType' },
message: "must have required property '" + 'homePageImageType' + "'"
}
if (vErrors === null) {
vErrors = [err15]
} else {
vErrors.push(err15)
}

}
if (data4.homePageImage === undefined) {
const err16 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'homePageImage' },
message: "must have required property '" + 'homePageImage' + "'"
}
if (vErrors === null) {
vErrors = [err16]
} else {
vErrors.push(err16)
}

}
if (data4.authenticationType === undefined) {
const err17 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'authenticationType' },
message: "must have required property '" + 'authenticationType' + "'"
}
if (vErrors === null) {
vErrors = [err17]
} else {
vErrors.push(err17)
}

}
if (data4.lang === undefined) {
const err18 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'lang' },
message: "must have required property '" + 'lang' + "'"
}
if (vErrors === null) {
vErrors = [err18]
} else {
vErrors.push(err18)
}

}
if (data4.enableNarrator === undefined) {
const err19 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'enableNarrator' },
message: "must have required property '" + 'enableNarrator' + "'"
}
if (vErrors === null) {
vErrors = [err19]
} else {
vErrors.push(err19)
}

}
if (data4.groups === undefined) {
const err20 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'groups' },
message: "must have required property '" + 'groups' + "'"
}
if (vErrors === null) {
vErrors = [err20]
} else {
vErrors.push(err20)
}

}
if (data4.id === undefined) {
const err21 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err21]
} else {
vErrors.push(err21)
}

}
if (data4.lastSync === undefined) {
const err22 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'lastSync' },
message: "must have required property '" + 'lastSync' + "'"
}
if (vErrors === null) {
vErrors = [err22]
} else {
vErrors.push(err22)
}

}
if (data4.email !== undefined) {
let data5 = data4.email
if (typeof data5 == 'string' && data4 !== undefined) {
data5 = func2(func3(data5))
data4['email'] = data5
}
if (typeof data5 === 'string') {
if (func4(data5) > 100) {
const err23 = {
instancePath: instancePath + '/app/email',
schemaPath: '#/properties/app/properties/email/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err23]
} else {
vErrors.push(err23)
}

}
if (func4(data5) < 5) {
const err24 = {
instancePath: instancePath + '/app/email',
schemaPath: '#/properties/app/properties/email/minLength',
keyword: 'minLength',
params: { limit: 5 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err24]
} else {
vErrors.push(err24)
}

}
if (!formats0.test(data5)) {
const err25 = {
instancePath: instancePath + '/app/email',
schemaPath: '#/properties/app/properties/email/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"}
if (vErrors === null) {
vErrors = [err25]
} else {
vErrors.push(err25)
}

}
} else {
const err26 = {
instancePath: instancePath + '/app/email',
schemaPath: '#/properties/app/properties/email/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err26]
} else {
vErrors.push(err26)
}

}
}
if (data4.name !== undefined) {
let data6 = data4.name
if (typeof data6 == 'string' && data4 !== undefined) {
data6 = func2(func3(data6))
data4['name'] = data6
}
if (typeof data6 === 'string') {
if (func4(data6) > 100) {
const err27 = {
instancePath: instancePath + '/app/name',
schemaPath: '#/properties/app/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err27]
} else {
vErrors.push(err27)
}

}
if (func4(data6) < 1) {
const err28 = {
instancePath: instancePath + '/app/name',
schemaPath: '#/properties/app/properties/name/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err28]
} else {
vErrors.push(err28)
}

}
} else {
const err29 = {
instancePath: instancePath + '/app/name',
schemaPath: '#/properties/app/properties/name/type',
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
if (data4.uniqueName !== undefined) {
let data7 = data4.uniqueName
if (typeof data7 == 'string' && data4 !== undefined) {
data7 = func2(func3(data7))
data4['uniqueName'] = data7
}
if (typeof data7 === 'string') {
if (func4(data7) > 100) {
const err30 = {
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err30]
} else {
vErrors.push(err30)
}

}
if (func4(data7) < 1) {
const err31 = {
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err31]
} else {
vErrors.push(err31)
}

}
if (!pattern0.test(data7)) {
const err32 = {
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/pattern',
keyword: 'pattern',
params: { pattern: '/^(?!API$|I$).+$/i' },
 message: "Unique_name_contains_reserved_words"}
if (vErrors === null) {
vErrors = [err32]
} else {
vErrors.push(err32)
}

}
if (
!await serverAndClientFunctions.isNameGloballyUnique(data,data7)
) {
const err33 = {
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/isNameGloballyUnique',
keyword: 'isNameGloballyUnique',
params: {},
 message: "Not_Globally_Unique"}
if (vErrors === null) {
vErrors = [err33]
} else {
vErrors.push(err33)
}

}
} else {
const err34 = {
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/type',
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
if (data4.version !== undefined) {
let data8 = data4.version
if (
!(
typeof data8 == 'number' &&
!(data8 % 1) &&
!isNaN(data8) &&
isFinite(data8)
)
) {
const err35 = {
instancePath: instancePath + '/app/version',
schemaPath: '#/properties/app/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err35]
} else {
vErrors.push(err35)
}

}
if (typeof data8 == 'number' && isFinite(data8)) {
if (data8 < 0 || isNaN(data8)) {
const err36 = {
instancePath: instancePath + '/app/version',
schemaPath: '#/properties/app/properties/version/minimum',
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
if (data4.touched !== undefined) {
if (typeof data4.touched !== 'boolean') {
const err37 = {
instancePath: instancePath + '/app/touched',
schemaPath: '#/properties/app/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
if (vErrors === null) {
vErrors = [err37]
} else {
vErrors.push(err37)
}

}
}
if (data4.lastModified !== undefined) {
let data10 = data4.lastModified
if (!(typeof data10 == 'number' && isFinite(data10))) {
const err38 = {
instancePath: instancePath + '/app/lastModified',
schemaPath: '#/properties/app/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
if (vErrors === null) {
vErrors = [err38]
} else {
vErrors.push(err38)
}

}
}
if (data4.homePageImageType !== undefined) {
let data11 = data4.homePageImageType
if (
!(
typeof data11 == 'number' &&
!(data11 % 1) &&
!isNaN(data11) &&
isFinite(data11)
)
) {
const err39 = {
instancePath: instancePath + '/app/homePageImageType',
schemaPath: '#/properties/app/properties/homePageImageType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err39]
} else {
vErrors.push(err39)
}

}
if (typeof data11 == 'number' && isFinite(data11)) {
if (data11 > 3 || isNaN(data11)) {
const err40 = {
instancePath: instancePath + '/app/homePageImageType',
schemaPath: '#/properties/app/properties/homePageImageType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err40]
} else {
vErrors.push(err40)
}

}
if (data11 < 0 || isNaN(data11)) {
const err41 = {
instancePath: instancePath + '/app/homePageImageType',
schemaPath: '#/properties/app/properties/homePageImageType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err41]
} else {
vErrors.push(err41)
}

}
}
}
if (data4.homePageImage !== undefined) {
let data12 = data4.homePageImage
if (typeof data12 === 'string') {
if (!formats2.test(data12)) {
const err42 = {
instancePath: instancePath + '/app/homePageImage',
schemaPath: '#/properties/app/properties/homePageImage/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err42]
} else {
vErrors.push(err42)
}

}
} else {
const err43 = {
instancePath: instancePath + '/app/homePageImage',
schemaPath: '#/properties/app/properties/homePageImage/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err43]
} else {
vErrors.push(err43)
}

}
}
if (data4.authenticationType !== undefined) {
let data13 = data4.authenticationType
if (typeof data13 == 'string' && data4 !== undefined) {
data13 = func2(func3(data13))
data4['authenticationType'] = data13
}
if (typeof data13 === 'string') {
if (func4(data13) > 100) {
const err44 = {
instancePath: instancePath + '/app/authenticationType',
schemaPath: '#/properties/app/properties/authenticationType/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err44]
} else {
vErrors.push(err44)
}

}
if (func4(data13) < 1) {
const err45 = {
instancePath: instancePath + '/app/authenticationType',
schemaPath: '#/properties/app/properties/authenticationType/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err45]
} else {
vErrors.push(err45)
}

}
} else {
const err46 = {
instancePath: instancePath + '/app/authenticationType',
schemaPath: '#/properties/app/properties/authenticationType/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err46]
} else {
vErrors.push(err46)
}

}
}
if (data4.lang !== undefined) {
let data14 = data4.lang
if (typeof data14 == 'string' && data4 !== undefined) {
data14 = func2(func3(data14))
data4['lang'] = data14
}
if (typeof data14 === 'string') {
if (func4(data14) > 100) {
const err47 = {
instancePath: instancePath + '/app/lang',
schemaPath: '#/properties/app/properties/lang/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err47]
} else {
vErrors.push(err47)
}

}
if (func4(data14) < 1) {
const err48 = {
instancePath: instancePath + '/app/lang',
schemaPath: '#/properties/app/properties/lang/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err48]
} else {
vErrors.push(err48)
}

}
} else {
const err49 = {
instancePath: instancePath + '/app/lang',
schemaPath: '#/properties/app/properties/lang/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err49]
} else {
vErrors.push(err49)
}

}
}
if (data4.enableNarrator !== undefined) {
if (typeof data4.enableNarrator !== 'boolean') {
const err50 = {
instancePath: instancePath + '/app/enableNarrator',
schemaPath: '#/properties/app/properties/enableNarrator/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
if (vErrors === null) {
vErrors = [err50]
} else {
vErrors.push(err50)
}

}
}
if (data4.groups !== undefined) {
let data16 = data4.groups
if (typeof data16 === 'string') {
if (func4(data16) > 8000) {
const err51 = {
instancePath: instancePath + '/app/groups',
schemaPath: '#/properties/app/properties/groups/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"}
if (vErrors === null) {
vErrors = [err51]
} else {
vErrors.push(err51)
}

}
} else {
const err52 = {
instancePath: instancePath + '/app/groups',
schemaPath: '#/properties/app/properties/groups/type',
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
if (data4.id !== undefined) {
let data17 = data4.id
if (typeof data17 === 'string') {
if (func4(data17) < 36) {
const err53 = {
instancePath: instancePath + '/app/id',
schemaPath: '#/properties/app/properties/id/minLength',
keyword: 'minLength',
params: { limit: 36 },
 message: "Must_be_36_characters"}
if (vErrors === null) {
vErrors = [err53]
} else {
vErrors.push(err53)
}

}
if (!formats2.test(data17)) {
const err54 = {
instancePath: instancePath + '/app/id',
schemaPath: '#/properties/app/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err54]
} else {
vErrors.push(err54)
}

}
} else {
const err55 = {
instancePath: instancePath + '/app/id',
schemaPath: '#/properties/app/properties/id/type',
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
if (data4.lastSync !== undefined) {
let data18 = data4.lastSync
if (!(typeof data18 == 'number' && isFinite(data18))) {
const err56 = {
instancePath: instancePath + '/app/lastSync',
schemaPath: '#/properties/app/properties/lastSync/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
if (vErrors === null) {
vErrors = [err56]
} else {
vErrors.push(err56)
}

}
}
} else {
const err57 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/type',
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
}
if (data.database !== undefined) {
let data19 = data.database
if (data19 && typeof data19 == 'object' && !Array.isArray(data19)) {
if (data19.name === undefined) {
const err58 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'name' },
message: "must have required property '" + 'name' + "'"
}
if (vErrors === null) {
vErrors = [err58]
} else {
vErrors.push(err58)
}

}
if (data19.lastModified === undefined) {
const err59 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err59]
} else {
vErrors.push(err59)
}

}
if (data19.version === undefined) {
const err60 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'version' },
message: "must have required property '" + 'version' + "'"
}
if (vErrors === null) {
vErrors = [err60]
} else {
vErrors.push(err60)
}

}
if (data19.appId === undefined) {
const err61 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'appId' },
message: "must have required property '" + 'appId' + "'"
}
if (vErrors === null) {
vErrors = [err61]
} else {
vErrors.push(err61)
}

}
if (data19.id === undefined) {
const err62 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err62]
} else {
vErrors.push(err62)
}

}
if (data19.order === undefined) {
const err63 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'order' },
message: "must have required property '" + 'order' + "'"
}
if (vErrors === null) {
vErrors = [err63]
} else {
vErrors.push(err63)
}

}
if (data19.homePageIconType === undefined) {
const err64 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'homePageIconType' },
message: "must have required property '" + 'homePageIconType' + "'"
}
if (vErrors === null) {
vErrors = [err64]
} else {
vErrors.push(err64)
}

}
if (data19.homePageIcon === undefined) {
const err65 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'homePageIcon' },
message: "must have required property '" + 'homePageIcon' + "'"
}
if (vErrors === null) {
vErrors = [err65]
} else {
vErrors.push(err65)
}

}
if (data19.name !== undefined) {
let data20 = data19.name
if (typeof data20 === 'string') {
if (func4(data20) > 100) {
const err66 = {
instancePath: instancePath + '/database/name',
schemaPath: '#/properties/database/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err66]
} else {
vErrors.push(err66)
}

}
if (func4(data20) < 1) {
const err67 = {
instancePath: instancePath + '/database/name',
schemaPath: '#/properties/database/properties/name/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err67]
} else {
vErrors.push(err67)
}

}
} else {
const err68 = {
instancePath: instancePath + '/database/name',
schemaPath: '#/properties/database/properties/name/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err68]
} else {
vErrors.push(err68)
}

}
}
if (data19.lastModified !== undefined) {
let data21 = data19.lastModified
if (!(typeof data21 == 'number' && isFinite(data21))) {
const err69 = {
instancePath: instancePath + '/database/lastModified',
schemaPath: '#/properties/database/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
if (vErrors === null) {
vErrors = [err69]
} else {
vErrors.push(err69)
}

}
}
if (data19.version !== undefined) {
let data22 = data19.version
if (
!(
typeof data22 == 'number' &&
!(data22 % 1) &&
!isNaN(data22) &&
isFinite(data22)
)
) {
const err70 = {
instancePath: instancePath + '/database/version',
schemaPath: '#/properties/database/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err70]
} else {
vErrors.push(err70)
}

}
if (typeof data22 == 'number' && isFinite(data22)) {
if (data22 < 0 || isNaN(data22)) {
const err71 = {
instancePath: instancePath + '/database/version',
schemaPath: '#/properties/database/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err71]
} else {
vErrors.push(err71)
}

}
}
}
if (data19.appId !== undefined) {
let data23 = data19.appId
if (typeof data23 === 'string') {
if (!formats2.test(data23)) {
const err72 = {
instancePath: instancePath + '/database/appId',
schemaPath: '#/properties/database/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err72]
} else {
vErrors.push(err72)
}

}
} else {
const err73 = {
instancePath: instancePath + '/database/appId',
schemaPath: '#/properties/database/properties/appId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err73]
} else {
vErrors.push(err73)
}

}
}
if (data19.id !== undefined) {
let data24 = data19.id
if (typeof data24 === 'string') {
if (!formats2.test(data24)) {
const err74 = {
instancePath: instancePath + '/database/id',
schemaPath: '#/properties/database/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err74]
} else {
vErrors.push(err74)
}

}
} else {
const err75 = {
instancePath: instancePath + '/database/id',
schemaPath: '#/properties/database/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err75]
} else {
vErrors.push(err75)
}

}
}
if (data19.order !== undefined) {
let data25 = data19.order
if (
!(
typeof data25 == 'number' &&
!(data25 % 1) &&
!isNaN(data25) &&
isFinite(data25)
)
) {
const err76 = {
instancePath: instancePath + '/database/order',
schemaPath: '#/properties/database/properties/order/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err76]
} else {
vErrors.push(err76)
}

}
if (typeof data25 == 'number' && isFinite(data25)) {
if (data25 < 0 || isNaN(data25)) {
const err77 = {
instancePath: instancePath + '/database/order',
schemaPath: '#/properties/database/properties/order/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err77]
} else {
vErrors.push(err77)
}

}
}
}
if (data19.homePageIconType !== undefined) {
let data26 = data19.homePageIconType
if (
!(
typeof data26 == 'number' &&
!(data26 % 1) &&
!isNaN(data26) &&
isFinite(data26)
)
) {
const err78 = {
instancePath: instancePath + '/database/homePageIconType',
schemaPath: '#/properties/database/properties/homePageIconType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err78]
} else {
vErrors.push(err78)
}

}
if (typeof data26 == 'number' && isFinite(data26)) {
if (data26 > 3 || isNaN(data26)) {
const err79 = {
instancePath: instancePath + '/database/homePageIconType',
schemaPath: '#/properties/database/properties/homePageIconType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err79]
} else {
vErrors.push(err79)
}

}
if (data26 < 0 || isNaN(data26)) {
const err80 = {
instancePath: instancePath + '/database/homePageIconType',
schemaPath: '#/properties/database/properties/homePageIconType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err80]
} else {
vErrors.push(err80)
}

}
}
}
if (data19.homePageIcon !== undefined) {
let data27 = data19.homePageIcon
if (typeof data27 === 'string') {
if (!formats2.test(data27)) {
const err81 = {
instancePath: instancePath + '/database/homePageIcon',
schemaPath: '#/properties/database/properties/homePageIcon/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err81]
} else {
vErrors.push(err81)
}

}
} else {
const err82 = {
instancePath: instancePath + '/database/homePageIcon',
schemaPath: '#/properties/database/properties/homePageIcon/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err82]
} else {
vErrors.push(err82)
}

}
}
} else {
const err83 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err83]
} else {
vErrors.push(err83)
}

}
}
if (data.databaseUnit !== undefined) {
let data28 = data.databaseUnit
if (data28 && typeof data28 == 'object' && !Array.isArray(data28)) {
if (data28.name === undefined) {
const err84 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'name' },
message: "must have required property '" + 'name' + "'"
}
if (vErrors === null) {
vErrors = [err84]
} else {
vErrors.push(err84)
}

}
if (data28.order === undefined) {
const err85 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'order' },
message: "must have required property '" + 'order' + "'"
}
if (vErrors === null) {
vErrors = [err85]
} else {
vErrors.push(err85)
}

}
if (data28.lastModified === undefined) {
const err86 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err86]
} else {
vErrors.push(err86)
}

}
if (data28.touched === undefined) {
const err87 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'touched' },
message: "must have required property '" + 'touched' + "'"
}
if (vErrors === null) {
vErrors = [err87]
} else {
vErrors.push(err87)
}

}
if (data28.version === undefined) {
const err88 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'version' },
message: "must have required property '" + 'version' + "'"
}
if (vErrors === null) {
vErrors = [err88]
} else {
vErrors.push(err88)
}

}
if (data28.id === undefined) {
const err89 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err89]
} else {
vErrors.push(err89)
}

}
if (data28.appId === undefined) {
const err90 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'appId' },
message: "must have required property '" + 'appId' + "'"
}
if (vErrors === null) {
vErrors = [err90]
} else {
vErrors.push(err90)
}

}
if (data28.databaseId === undefined) {
const err91 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'databaseId' },
message: "must have required property '" + 'databaseId' + "'"
}
if (vErrors === null) {
vErrors = [err91]
} else {
vErrors.push(err91)
}

}
if (data28.successVideoType === undefined) {
const err92 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'successVideoType' },
message: "must have required property '" + 'successVideoType' + "'"
}
if (vErrors === null) {
vErrors = [err92]
} else {
vErrors.push(err92)
}

}
if (data28.successVideoUrl === undefined) {
const err93 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'successVideoUrl' },
message: "must have required property '" + 'successVideoUrl' + "'"
}
if (vErrors === null) {
vErrors = [err93]
} else {
vErrors.push(err93)
}

}
if (data28.successAnimations === undefined) {
const err94 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'successAnimations' },
message: "must have required property '" + 'successAnimations' + "'"
}
if (vErrors === null) {
vErrors = [err94]
} else {
vErrors.push(err94)
}

}
if (data28.successSound === undefined) {
const err95 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'successSound' },
message: "must have required property '" + 'successSound' + "'"
}
if (vErrors === null) {
vErrors = [err95]
} else {
vErrors.push(err95)
}

}
if (data28.successSoundType === undefined) {
const err96 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'successSoundType' },
message: "must have required property '" + 'successSoundType' + "'"
}
if (vErrors === null) {
vErrors = [err96]
} else {
vErrors.push(err96)
}

}
if (data28.homePageImageType === undefined) {
const err97 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'homePageImageType' },
message: "must have required property '" + 'homePageImageType' + "'"
}
if (vErrors === null) {
vErrors = [err97]
} else {
vErrors.push(err97)
}

}
if (data28.homePageImage === undefined) {
const err98 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'homePageImage' },
message: "must have required property '" + 'homePageImage' + "'"
}
if (vErrors === null) {
vErrors = [err98]
} else {
vErrors.push(err98)
}

}
if (data28.router === undefined) {
const err99 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'router' },
message: "must have required property '" + 'router' + "'"
}
if (vErrors === null) {
vErrors = [err99]
} else {
vErrors.push(err99)
}

}
if (data28.routerTime === undefined) {
const err100 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'routerTime' },
message: "must have required property '" + 'routerTime' + "'"
}
if (vErrors === null) {
vErrors = [err100]
} else {
vErrors.push(err100)
}

}
if (data28.routerTimeImmediate === undefined) {
const err101 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'routerTimeImmediate' },
message: "must have required property '" + 'routerTimeImmediate' + "'"
}
if (vErrors === null) {
vErrors = [err101]
} else {
vErrors.push(err101)
}

}
if (data28.points === undefined) {
const err102 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'points' },
message: "must have required property '" + 'points' + "'"
}
if (vErrors === null) {
vErrors = [err102]
} else {
vErrors.push(err102)
}

}
if (data28.name !== undefined) {
let data29 = data28.name
if (typeof data29 === 'string') {
if (func4(data29) > 100) {
const err103 = {
instancePath: instancePath + '/databaseUnit/name',
schemaPath: '#/properties/databaseUnit/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err103]
} else {
vErrors.push(err103)
}

}
if (func4(data29) < 1) {
const err104 = {
instancePath: instancePath + '/databaseUnit/name',
schemaPath: '#/properties/databaseUnit/properties/name/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err104]
} else {
vErrors.push(err104)
}

}
} else {
const err105 = {
instancePath: instancePath + '/databaseUnit/name',
schemaPath: '#/properties/databaseUnit/properties/name/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err105]
} else {
vErrors.push(err105)
}

}
}
if (data28.order !== undefined) {
let data30 = data28.order
if (
!(
typeof data30 == 'number' &&
!(data30 % 1) &&
!isNaN(data30) &&
isFinite(data30)
)
) {
const err106 = {
instancePath: instancePath + '/databaseUnit/order',
schemaPath: '#/properties/databaseUnit/properties/order/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err106]
} else {
vErrors.push(err106)
}

}
if (typeof data30 == 'number' && isFinite(data30)) {
if (data30 < 0 || isNaN(data30)) {
const err107 = {
instancePath: instancePath + '/databaseUnit/order',
schemaPath: '#/properties/databaseUnit/properties/order/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err107]
} else {
vErrors.push(err107)
}

}
}
}
if (data28.lastModified !== undefined) {
let data31 = data28.lastModified
if (!(typeof data31 == 'number' && isFinite(data31))) {
const err108 = {
instancePath: instancePath + '/databaseUnit/lastModified',
schemaPath: '#/properties/databaseUnit/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
if (vErrors === null) {
vErrors = [err108]
} else {
vErrors.push(err108)
}

}
}
if (data28.touched !== undefined) {
if (typeof data28.touched !== 'boolean') {
const err109 = {
instancePath: instancePath + '/databaseUnit/touched',
schemaPath: '#/properties/databaseUnit/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
if (vErrors === null) {
vErrors = [err109]
} else {
vErrors.push(err109)
}

}
}
if (data28.version !== undefined) {
let data33 = data28.version
if (
!(
typeof data33 == 'number' &&
!(data33 % 1) &&
!isNaN(data33) &&
isFinite(data33)
)
) {
const err110 = {
instancePath: instancePath + '/databaseUnit/version',
schemaPath: '#/properties/databaseUnit/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err110]
} else {
vErrors.push(err110)
}

}
if (typeof data33 == 'number' && isFinite(data33)) {
if (data33 < 0 || isNaN(data33)) {
const err111 = {
instancePath: instancePath + '/databaseUnit/version',
schemaPath: '#/properties/databaseUnit/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err111]
} else {
vErrors.push(err111)
}

}
}
}
if (data28.id !== undefined) {
let data34 = data28.id
if (typeof data34 === 'string') {
if (!formats2.test(data34)) {
const err112 = {
instancePath: instancePath + '/databaseUnit/id',
schemaPath: '#/properties/databaseUnit/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err112]
} else {
vErrors.push(err112)
}

}
} else {
const err113 = {
instancePath: instancePath + '/databaseUnit/id',
schemaPath: '#/properties/databaseUnit/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err113]
} else {
vErrors.push(err113)
}

}
}
if (data28.appId !== undefined) {
let data35 = data28.appId
if (typeof data35 === 'string') {
if (!formats2.test(data35)) {
const err114 = {
instancePath: instancePath + '/databaseUnit/appId',
schemaPath: '#/properties/databaseUnit/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err114]
} else {
vErrors.push(err114)
}

}
} else {
const err115 = {
instancePath: instancePath + '/databaseUnit/appId',
schemaPath: '#/properties/databaseUnit/properties/appId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err115]
} else {
vErrors.push(err115)
}

}
}
if (data28.databaseId !== undefined) {
let data36 = data28.databaseId
if (typeof data36 === 'string') {
if (!formats2.test(data36)) {
const err116 = {
instancePath: instancePath + '/databaseUnit/databaseId',
schemaPath: '#/properties/databaseUnit/properties/databaseId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err116]
} else {
vErrors.push(err116)
}

}
} else {
const err117 = {
instancePath: instancePath + '/databaseUnit/databaseId',
schemaPath: '#/properties/databaseUnit/properties/databaseId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err117]
} else {
vErrors.push(err117)
}

}
}
if (data28.successVideoType !== undefined) {
let data37 = data28.successVideoType
if (
!(
typeof data37 == 'number' &&
!(data37 % 1) &&
!isNaN(data37) &&
isFinite(data37)
)
) {
const err118 = {
instancePath: instancePath + '/databaseUnit/successVideoType',
schemaPath: '#/properties/databaseUnit/properties/successVideoType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err118]
} else {
vErrors.push(err118)
}

}
if (typeof data37 == 'number' && isFinite(data37)) {
if (data37 > 2 || isNaN(data37)) {
const err119 = {
instancePath: instancePath + '/databaseUnit/successVideoType',
schemaPath: '#/properties/databaseUnit/properties/successVideoType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 2 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err119]
} else {
vErrors.push(err119)
}

}
if (data37 < 0 || isNaN(data37)) {
const err120 = {
instancePath: instancePath + '/databaseUnit/successVideoType',
schemaPath: '#/properties/databaseUnit/properties/successVideoType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err120]
} else {
vErrors.push(err120)
}

}
}
}
if (data28.successVideoUrl !== undefined) {
let data38 = data28.successVideoUrl
if (typeof data38 === 'string') {
if (func4(data38) > 100) {
const err121 = {
instancePath: instancePath + '/databaseUnit/successVideoUrl',
schemaPath: '#/properties/databaseUnit/properties/successVideoUrl/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err121]
} else {
vErrors.push(err121)
}

}
} else {
const err122 = {
instancePath: instancePath + '/databaseUnit/successVideoUrl',
schemaPath: '#/properties/databaseUnit/properties/successVideoUrl/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err122]
} else {
vErrors.push(err122)
}

}
}
if (data28.successAnimations !== undefined) {
let data39 = data28.successAnimations
if (typeof data39 === 'string') {
if (func4(data39) > 100) {
const err123 = {
instancePath: instancePath + '/databaseUnit/successAnimations',
schemaPath: '#/properties/databaseUnit/properties/successAnimations/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err123]
} else {
vErrors.push(err123)
}

}
} else {
const err124 = {
instancePath: instancePath + '/databaseUnit/successAnimations',
schemaPath: '#/properties/databaseUnit/properties/successAnimations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err124]
} else {
vErrors.push(err124)
}

}
}
if (data28.successSound !== undefined) {
let data40 = data28.successSound
if (typeof data40 === 'string') {
if (!formats2.test(data40)) {
const err125 = {
instancePath: instancePath + '/databaseUnit/successSound',
schemaPath: '#/properties/databaseUnit/properties/successSound/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err125]
} else {
vErrors.push(err125)
}

}
} else {
const err126 = {
instancePath: instancePath + '/databaseUnit/successSound',
schemaPath: '#/properties/databaseUnit/properties/successSound/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err126]
} else {
vErrors.push(err126)
}

}
}
if (data28.successSoundType !== undefined) {
let data41 = data28.successSoundType
if (
!(
typeof data41 == 'number' &&
!(data41 % 1) &&
!isNaN(data41) &&
isFinite(data41)
)
) {
const err127 = {
instancePath: instancePath + '/databaseUnit/successSoundType',
schemaPath: '#/properties/databaseUnit/properties/successSoundType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err127]
} else {
vErrors.push(err127)
}

}
if (typeof data41 == 'number' && isFinite(data41)) {
if (data41 > 4 || isNaN(data41)) {
const err128 = {
instancePath: instancePath + '/databaseUnit/successSoundType',
schemaPath: '#/properties/databaseUnit/properties/successSoundType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 4 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err128]
} else {
vErrors.push(err128)
}

}
if (data41 < 0 || isNaN(data41)) {
const err129 = {
instancePath: instancePath + '/databaseUnit/successSoundType',
schemaPath: '#/properties/databaseUnit/properties/successSoundType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err129]
} else {
vErrors.push(err129)
}

}
}
}
if (data28.homePageImageType !== undefined) {
let data42 = data28.homePageImageType
if (
!(
typeof data42 == 'number' &&
!(data42 % 1) &&
!isNaN(data42) &&
isFinite(data42)
)
) {
const err130 = {
instancePath: instancePath + '/databaseUnit/homePageImageType',
schemaPath: '#/properties/databaseUnit/properties/homePageImageType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err130]
} else {
vErrors.push(err130)
}

}
if (typeof data42 == 'number' && isFinite(data42)) {
if (data42 > 3 || isNaN(data42)) {
const err131 = {
instancePath: instancePath + '/databaseUnit/homePageImageType',
schemaPath: '#/properties/databaseUnit/properties/homePageImageType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err131]
} else {
vErrors.push(err131)
}

}
if (data42 < 0 || isNaN(data42)) {
const err132 = {
instancePath: instancePath + '/databaseUnit/homePageImageType',
schemaPath: '#/properties/databaseUnit/properties/homePageImageType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err132]
} else {
vErrors.push(err132)
}

}
}
}
if (data28.homePageImage !== undefined) {
let data43 = data28.homePageImage
if (typeof data43 === 'string') {
if (!formats2.test(data43)) {
const err133 = {
instancePath: instancePath + '/databaseUnit/homePageImage',
schemaPath: '#/properties/databaseUnit/properties/homePageImage/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err133]
} else {
vErrors.push(err133)
}

}
} else {
const err134 = {
instancePath: instancePath + '/databaseUnit/homePageImage',
schemaPath: '#/properties/databaseUnit/properties/homePageImage/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err134]
} else {
vErrors.push(err134)
}

}
}
if (data28.router !== undefined) {
let data44 = data28.router
if (typeof data44 === 'string') {
if (!formats2.test(data44)) {
const err135 = {
instancePath: instancePath + '/databaseUnit/router',
schemaPath: '#/properties/databaseUnit/properties/router/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err135]
} else {
vErrors.push(err135)
}

}
} else {
const err136 = {
instancePath: instancePath + '/databaseUnit/router',
schemaPath: '#/properties/databaseUnit/properties/router/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err136]
} else {
vErrors.push(err136)
}

}
}
if (data28.routerTime !== undefined) {
let data45 = data28.routerTime
if (!(typeof data45 == 'number' && isFinite(data45))) {
const err137 = {
instancePath: instancePath + '/databaseUnit/routerTime',
schemaPath: '#/properties/databaseUnit/properties/routerTime/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
if (vErrors === null) {
vErrors = [err137]
} else {
vErrors.push(err137)
}

}
}
if (data28.routerTimeImmediate !== undefined) {
if (typeof data28.routerTimeImmediate !== 'boolean') {
const err138 = {
instancePath: instancePath + '/databaseUnit/routerTimeImmediate',
schemaPath: '#/properties/databaseUnit/properties/routerTimeImmediate/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
if (vErrors === null) {
vErrors = [err138]
} else {
vErrors.push(err138)
}

}
}
if (data28.points !== undefined) {
let data47 = data28.points
if (
!(
typeof data47 == 'number' &&
!(data47 % 1) &&
!isNaN(data47) &&
isFinite(data47)
)
) {
const err139 = {
instancePath: instancePath + '/databaseUnit/points',
schemaPath: '#/properties/databaseUnit/properties/points/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err139]
} else {
vErrors.push(err139)
}

}
if (typeof data47 == 'number' && isFinite(data47)) {
if (data47 < 0 || isNaN(data47)) {
const err140 = {
instancePath: instancePath + '/databaseUnit/points',
schemaPath: '#/properties/databaseUnit/properties/points/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err140]
} else {
vErrors.push(err140)
}

}
}
}
} else {
const err141 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err141]
} else {
vErrors.push(err141)
}

}
}
if (data.databaseItem !== undefined) {
let data48 = data.databaseItem
if (data48 && typeof data48 == 'object' && !Array.isArray(data48)) {
if (data48.itemType === undefined) {
const err142 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'itemType' },
message: "must have required property '" + 'itemType' + "'"
}
if (vErrors === null) {
vErrors = [err142]
} else {
vErrors.push(err142)
}

}
if (data48.order === undefined) {
const err143 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'order' },
message: "must have required property '" + 'order' + "'"
}
if (vErrors === null) {
vErrors = [err143]
} else {
vErrors.push(err143)
}

}
if (data48.unitId === undefined) {
const err144 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'unitId' },
message: "must have required property '" + 'unitId' + "'"
}
if (vErrors === null) {
vErrors = [err144]
} else {
vErrors.push(err144)
}

}
if (data48.appId === undefined) {
const err145 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'appId' },
message: "must have required property '" + 'appId' + "'"
}
if (vErrors === null) {
vErrors = [err145]
} else {
vErrors.push(err145)
}

}
if (data48.lastModified === undefined) {
const err146 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err146]
} else {
vErrors.push(err146)
}

}
if (data48.touched === undefined) {
const err147 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'touched' },
message: "must have required property '" + 'touched' + "'"
}
if (vErrors === null) {
vErrors = [err147]
} else {
vErrors.push(err147)
}

}
if (data48.version === undefined) {
const err148 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'version' },
message: "must have required property '" + 'version' + "'"
}
if (vErrors === null) {
vErrors = [err148]
} else {
vErrors.push(err148)
}

}
if (data48.databaseId === undefined) {
const err149 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'databaseId' },
message: "must have required property '" + 'databaseId' + "'"
}
if (vErrors === null) {
vErrors = [err149]
} else {
vErrors.push(err149)
}

}
if (data48.id === undefined) {
const err150 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err150]
} else {
vErrors.push(err150)
}

}
if (data48.dataText === undefined) {
const err151 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'dataText' },
message: "must have required property '" + 'dataText' + "'"
}
if (vErrors === null) {
vErrors = [err151]
} else {
vErrors.push(err151)
}

}
if (data48.data === undefined) {
const err152 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'data' },
message: "must have required property '" + 'data' + "'"
}
if (vErrors === null) {
vErrors = [err152]
} else {
vErrors.push(err152)
}

}
if (data48.itemType !== undefined) {
let data49 = data48.itemType
if (
!(
typeof data49 == 'number' &&
!(data49 % 1) &&
!isNaN(data49) &&
isFinite(data49)
)
) {
const err153 = {
instancePath: instancePath + '/databaseItem/itemType',
schemaPath: '#/properties/databaseItem/properties/itemType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err153]
} else {
vErrors.push(err153)
}

}
if (typeof data49 == 'number' && isFinite(data49)) {
if (data49 > 5 || isNaN(data49)) {
const err154 = {
instancePath: instancePath + '/databaseItem/itemType',
schemaPath: '#/properties/databaseItem/properties/itemType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 5 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err154]
} else {
vErrors.push(err154)
}

}
if (data49 < 0 || isNaN(data49)) {
const err155 = {
instancePath: instancePath + '/databaseItem/itemType',
schemaPath: '#/properties/databaseItem/properties/itemType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err155]
} else {
vErrors.push(err155)
}

}
}
}
if (data48.order !== undefined) {
let data50 = data48.order
if (
!(
typeof data50 == 'number' &&
!(data50 % 1) &&
!isNaN(data50) &&
isFinite(data50)
)
) {
const err156 = {
instancePath: instancePath + '/databaseItem/order',
schemaPath: '#/properties/databaseItem/properties/order/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err156]
} else {
vErrors.push(err156)
}

}
if (typeof data50 == 'number' && isFinite(data50)) {
if (data50 < 0 || isNaN(data50)) {
const err157 = {
instancePath: instancePath + '/databaseItem/order',
schemaPath: '#/properties/databaseItem/properties/order/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err157]
} else {
vErrors.push(err157)
}

}
}
}
if (data48.unitId !== undefined) {
let data51 = data48.unitId
if (typeof data51 === 'string') {
if (!formats2.test(data51)) {
const err158 = {
instancePath: instancePath + '/databaseItem/unitId',
schemaPath: '#/properties/databaseItem/properties/unitId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err158]
} else {
vErrors.push(err158)
}

}
} else {
const err159 = {
instancePath: instancePath + '/databaseItem/unitId',
schemaPath: '#/properties/databaseItem/properties/unitId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err159]
} else {
vErrors.push(err159)
}

}
}
if (data48.appId !== undefined) {
let data52 = data48.appId
if (typeof data52 === 'string') {
if (!formats2.test(data52)) {
const err160 = {
instancePath: instancePath + '/databaseItem/appId',
schemaPath: '#/properties/databaseItem/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err160]
} else {
vErrors.push(err160)
}

}
} else {
const err161 = {
instancePath: instancePath + '/databaseItem/appId',
schemaPath: '#/properties/databaseItem/properties/appId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err161]
} else {
vErrors.push(err161)
}

}
}
if (data48.lastModified !== undefined) {
let data53 = data48.lastModified
if (!(typeof data53 == 'number' && isFinite(data53))) {
const err162 = {
instancePath: instancePath + '/databaseItem/lastModified',
schemaPath: '#/properties/databaseItem/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
if (vErrors === null) {
vErrors = [err162]
} else {
vErrors.push(err162)
}

}
}
if (data48.touched !== undefined) {
if (typeof data48.touched !== 'boolean') {
const err163 = {
instancePath: instancePath + '/databaseItem/touched',
schemaPath: '#/properties/databaseItem/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
if (vErrors === null) {
vErrors = [err163]
} else {
vErrors.push(err163)
}

}
}
if (data48.version !== undefined) {
let data55 = data48.version
if (
!(
typeof data55 == 'number' &&
!(data55 % 1) &&
!isNaN(data55) &&
isFinite(data55)
)
) {
const err164 = {
instancePath: instancePath + '/databaseItem/version',
schemaPath: '#/properties/databaseItem/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err164]
} else {
vErrors.push(err164)
}

}
if (typeof data55 == 'number' && isFinite(data55)) {
if (data55 < 0 || isNaN(data55)) {
const err165 = {
instancePath: instancePath + '/databaseItem/version',
schemaPath: '#/properties/databaseItem/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err165]
} else {
vErrors.push(err165)
}

}
}
}
if (data48.databaseId !== undefined) {
let data56 = data48.databaseId
if (typeof data56 === 'string') {
if (!formats2.test(data56)) {
const err166 = {
instancePath: instancePath + '/databaseItem/databaseId',
schemaPath: '#/properties/databaseItem/properties/databaseId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err166]
} else {
vErrors.push(err166)
}

}
} else {
const err167 = {
instancePath: instancePath + '/databaseItem/databaseId',
schemaPath: '#/properties/databaseItem/properties/databaseId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err167]
} else {
vErrors.push(err167)
}

}
}
if (data48.id !== undefined) {
let data57 = data48.id
if (typeof data57 === 'string') {
if (!formats2.test(data57)) {
const err168 = {
instancePath: instancePath + '/databaseItem/id',
schemaPath: '#/properties/databaseItem/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err168]
} else {
vErrors.push(err168)
}

}
} else {
const err169 = {
instancePath: instancePath + '/databaseItem/id',
schemaPath: '#/properties/databaseItem/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err169]
} else {
vErrors.push(err169)
}

}
}
if (data48.dataText !== undefined) {
let data58 = data48.dataText
if (typeof data58 === 'string') {
if (func4(data58) > 8000) {
const err170 = {
instancePath: instancePath + '/databaseItem/dataText',
schemaPath: '#/properties/databaseItem/properties/dataText/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"}
if (vErrors === null) {
vErrors = [err170]
} else {
vErrors.push(err170)
}

}
} else {
const err171 = {
instancePath: instancePath + '/databaseItem/dataText',
schemaPath: '#/properties/databaseItem/properties/dataText/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err171]
} else {
vErrors.push(err171)
}

}
}
} else {
const err172 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err172]
} else {
vErrors.push(err172)
}

}
}
if (data.followerRequest !== undefined) {
let data59 = data.followerRequest
if (data59 && typeof data59 == 'object' && !Array.isArray(data59)) {
if (data59.leaderAppId === undefined) {
const err173 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'leaderAppId' },
message: "must have required property '" + 'leaderAppId' + "'"
}
if (vErrors === null) {
vErrors = [err173]
} else {
vErrors.push(err173)
}

}
if (data59.followerAppId === undefined) {
const err174 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'followerAppId' },
message: "must have required property '" + 'followerAppId' + "'"
}
if (vErrors === null) {
vErrors = [err174]
} else {
vErrors.push(err174)
}

}
if (data59.id === undefined) {
const err175 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err175]
} else {
vErrors.push(err175)
}

}
if (data59.followerName === undefined) {
const err176 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'followerName' },
message: "must have required property '" + 'followerName' + "'"
}
if (vErrors === null) {
vErrors = [err176]
} else {
vErrors.push(err176)
}

}
if (data59.leaderName === undefined) {
const err177 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'leaderName' },
message: "must have required property '" + 'leaderName' + "'"
}
if (vErrors === null) {
vErrors = [err177]
} else {
vErrors.push(err177)
}

}
if (data59.followerEmail === undefined) {
const err178 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'followerEmail' },
message: "must have required property '" + 'followerEmail' + "'"
}
if (vErrors === null) {
vErrors = [err178]
} else {
vErrors.push(err178)
}

}
if (data59.leaderEmail === undefined) {
const err179 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'leaderEmail' },
message: "must have required property '" + 'leaderEmail' + "'"
}
if (vErrors === null) {
vErrors = [err179]
} else {
vErrors.push(err179)
}

}
if (data59.initiatedByFollower === undefined) {
const err180 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'initiatedByFollower' },
message: "must have required property '" + 'initiatedByFollower' + "'"
}
if (vErrors === null) {
vErrors = [err180]
} else {
vErrors.push(err180)
}

}
if (data59.lastModified === undefined) {
const err181 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err181]
} else {
vErrors.push(err181)
}

}
if (data59.touched === undefined) {
const err182 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'touched' },
message: "must have required property '" + 'touched' + "'"
}
if (vErrors === null) {
vErrors = [err182]
} else {
vErrors.push(err182)
}

}
if (data59.version === undefined) {
const err183 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'version' },
message: "must have required property '" + 'version' + "'"
}
if (vErrors === null) {
vErrors = [err183]
} else {
vErrors.push(err183)
}

}
if (data59.status === undefined) {
const err184 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'status' },
message: "must have required property '" + 'status' + "'"
}
if (vErrors === null) {
vErrors = [err184]
} else {
vErrors.push(err184)
}

}
if (data59.groups === undefined) {
const err185 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'groups' },
message: "must have required property '" + 'groups' + "'"
}
if (vErrors === null) {
vErrors = [err185]
} else {
vErrors.push(err185)
}

}
if (data59.points === undefined) {
const err186 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'points' },
message: "must have required property '" + 'points' + "'"
}
if (vErrors === null) {
vErrors = [err186]
} else {
vErrors.push(err186)
}

}
if (data59.leaderAppId !== undefined) {
let data60 = data59.leaderAppId
if (typeof data60 === 'string') {
if (!formats2.test(data60)) {
const err187 = {
instancePath: instancePath + '/followerRequest/leaderAppId',
schemaPath: '#/properties/followerRequest/properties/leaderAppId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err187]
} else {
vErrors.push(err187)
}

}
} else {
const err188 = {
instancePath: instancePath + '/followerRequest/leaderAppId',
schemaPath: '#/properties/followerRequest/properties/leaderAppId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err188]
} else {
vErrors.push(err188)
}

}
}
if (data59.followerAppId !== undefined) {
let data61 = data59.followerAppId
if (typeof data61 === 'string') {
if (!formats2.test(data61)) {
const err189 = {
instancePath: instancePath + '/followerRequest/followerAppId',
schemaPath: '#/properties/followerRequest/properties/followerAppId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err189]
} else {
vErrors.push(err189)
}

}
} else {
const err190 = {
instancePath: instancePath + '/followerRequest/followerAppId',
schemaPath: '#/properties/followerRequest/properties/followerAppId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err190]
} else {
vErrors.push(err190)
}

}
}
if (data59.id !== undefined) {
let data62 = data59.id
if (typeof data62 === 'string') {
if (!formats2.test(data62)) {
const err191 = {
instancePath: instancePath + '/followerRequest/id',
schemaPath: '#/properties/followerRequest/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err191]
} else {
vErrors.push(err191)
}

}
} else {
const err192 = {
instancePath: instancePath + '/followerRequest/id',
schemaPath: '#/properties/followerRequest/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err192]
} else {
vErrors.push(err192)
}

}
}
if (data59.followerName !== undefined) {
let data63 = data59.followerName
if (typeof data63 === 'string') {
if (func4(data63) > 100) {
const err193 = {
instancePath: instancePath + '/followerRequest/followerName',
schemaPath: '#/properties/followerRequest/properties/followerName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err193]
} else {
vErrors.push(err193)
}

}
if (func4(data63) < 1) {
const err194 = {
instancePath: instancePath + '/followerRequest/followerName',
schemaPath: '#/properties/followerRequest/properties/followerName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err194]
} else {
vErrors.push(err194)
}

}
} else {
const err195 = {
instancePath: instancePath + '/followerRequest/followerName',
schemaPath: '#/properties/followerRequest/properties/followerName/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err195]
} else {
vErrors.push(err195)
}

}
}
if (data59.leaderName !== undefined) {
let data64 = data59.leaderName
if (typeof data64 === 'string') {
if (func4(data64) > 100) {
const err196 = {
instancePath: instancePath + '/followerRequest/leaderName',
schemaPath: '#/properties/followerRequest/properties/leaderName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err196]
} else {
vErrors.push(err196)
}

}
if (func4(data64) < 1) {
const err197 = {
instancePath: instancePath + '/followerRequest/leaderName',
schemaPath: '#/properties/followerRequest/properties/leaderName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err197]
} else {
vErrors.push(err197)
}

}
} else {
const err198 = {
instancePath: instancePath + '/followerRequest/leaderName',
schemaPath: '#/properties/followerRequest/properties/leaderName/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err198]
} else {
vErrors.push(err198)
}

}
}
if (data59.followerEmail !== undefined) {
let data65 = data59.followerEmail
if (typeof data65 === 'string') {
if (func4(data65) > 100) {
const err199 = {
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err199]
} else {
vErrors.push(err199)
}

}
if (func4(data65) < 1) {
const err200 = {
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err200]
} else {
vErrors.push(err200)
}

}
if (!formats0.test(data65)) {
const err201 = {
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"}
if (vErrors === null) {
vErrors = [err201]
} else {
vErrors.push(err201)
}

}
if (!await serverAndClientFunctions.doesEmailExist(data65)) {
const err202 = {
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/doesEmailExist',
keyword: 'doesEmailExist',
params: {},
 message: "Email_does_not_exist"}
if (vErrors === null) {
vErrors = [err202]
} else {
vErrors.push(err202)
}

}
} else {
const err203 = {
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err203]
} else {
vErrors.push(err203)
}

}
}
if (data59.leaderEmail !== undefined) {
let data66 = data59.leaderEmail
if (typeof data66 === 'string') {
if (func4(data66) > 100) {
const err204 = {
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err204]
} else {
vErrors.push(err204)
}

}
if (func4(data66) < 1) {
const err205 = {
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err205]
} else {
vErrors.push(err205)
}

}
if (!formats0.test(data66)) {
const err206 = {
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"}
if (vErrors === null) {
vErrors = [err206]
} else {
vErrors.push(err206)
}

}
if (!await serverAndClientFunctions.doesEmailExist(data66)) {
const err207 = {
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/doesEmailExist',
keyword: 'doesEmailExist',
params: {},
 message: "Email_does_not_exist"}
if (vErrors === null) {
vErrors = [err207]
} else {
vErrors.push(err207)
}

}
} else {
const err208 = {
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err208]
} else {
vErrors.push(err208)
}

}
}
if (data59.initiatedByFollower !== undefined) {
if (typeof data59.initiatedByFollower !== 'boolean') {
const err209 = {
instancePath: instancePath + '/followerRequest/initiatedByFollower',
schemaPath: '#/properties/followerRequest/properties/initiatedByFollower/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
if (vErrors === null) {
vErrors = [err209]
} else {
vErrors.push(err209)
}

}
}
if (data59.lastModified !== undefined) {
let data68 = data59.lastModified
if (!(typeof data68 == 'number' && isFinite(data68))) {
const err210 = {
instancePath: instancePath + '/followerRequest/lastModified',
schemaPath: '#/properties/followerRequest/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
if (vErrors === null) {
vErrors = [err210]
} else {
vErrors.push(err210)
}

}
}
if (data59.touched !== undefined) {
if (typeof data59.touched !== 'boolean') {
const err211 = {
instancePath: instancePath + '/followerRequest/touched',
schemaPath: '#/properties/followerRequest/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
if (vErrors === null) {
vErrors = [err211]
} else {
vErrors.push(err211)
}

}
}
if (data59.version !== undefined) {
let data70 = data59.version
if (
!(
typeof data70 == 'number' &&
!(data70 % 1) &&
!isNaN(data70) &&
isFinite(data70)
)
) {
const err212 = {
instancePath: instancePath + '/followerRequest/version',
schemaPath: '#/properties/followerRequest/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err212]
} else {
vErrors.push(err212)
}

}
if (typeof data70 == 'number' && isFinite(data70)) {
if (data70 < 0 || isNaN(data70)) {
const err213 = {
instancePath: instancePath + '/followerRequest/version',
schemaPath: '#/properties/followerRequest/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err213]
} else {
vErrors.push(err213)
}

}
}
}
if (data59.status !== undefined) {
let data71 = data59.status
if (
!(
typeof data71 == 'number' &&
!(data71 % 1) &&
!isNaN(data71) &&
isFinite(data71)
)
) {
const err214 = {
instancePath: instancePath + '/followerRequest/status',
schemaPath: '#/properties/followerRequest/properties/status/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err214]
} else {
vErrors.push(err214)
}

}
if (typeof data71 == 'number' && isFinite(data71)) {
if (data71 > 2 || isNaN(data71)) {
const err215 = {
instancePath: instancePath + '/followerRequest/status',
schemaPath: '#/properties/followerRequest/properties/status/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 2 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err215]
} else {
vErrors.push(err215)
}

}
if (data71 < 0 || isNaN(data71)) {
const err216 = {
instancePath: instancePath + '/followerRequest/status',
schemaPath: '#/properties/followerRequest/properties/status/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err216]
} else {
vErrors.push(err216)
}

}
}
}
if (data59.groups !== undefined) {
let data72 = data59.groups
if (typeof data72 === 'string') {
if (func4(data72) > 8000) {
const err217 = {
instancePath: instancePath + '/followerRequest/groups',
schemaPath: '#/properties/followerRequest/properties/groups/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"}
if (vErrors === null) {
vErrors = [err217]
} else {
vErrors.push(err217)
}

}
} else {
const err218 = {
instancePath: instancePath + '/followerRequest/groups',
schemaPath: '#/properties/followerRequest/properties/groups/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err218]
} else {
vErrors.push(err218)
}

}
}
if (data59.points !== undefined) {
let data73 = data59.points
if (
!(
typeof data73 == 'number' &&
!(data73 % 1) &&
!isNaN(data73) &&
isFinite(data73)
)
) {
const err219 = {
instancePath: instancePath + '/followerRequest/points',
schemaPath: '#/properties/followerRequest/properties/points/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err219]
} else {
vErrors.push(err219)
}

}
if (typeof data73 == 'number' && isFinite(data73)) {
if (data73 < 0 || isNaN(data73)) {
const err220 = {
instancePath: instancePath + '/followerRequest/points',
schemaPath: '#/properties/followerRequest/properties/points/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err220]
} else {
vErrors.push(err220)
}

}
}
}
} else {
const err221 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err221]
} else {
vErrors.push(err221)
}

}
}
if (data.followerDatabase !== undefined) {
let data74 = data.followerDatabase
if (data74 && typeof data74 == 'object' && !Array.isArray(data74)) {
if (data74.followerRequestId === undefined) {
const err222 = {
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/required',
keyword: 'required',
params: { missingProperty: 'followerRequestId' },
message: "must have required property '" + 'followerRequestId' + "'"
}
if (vErrors === null) {
vErrors = [err222]
} else {
vErrors.push(err222)
}

}
if (data74.id === undefined) {
const err223 = {
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err223]
} else {
vErrors.push(err223)
}

}
if (data74.databaseId === undefined) {
const err224 = {
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/required',
keyword: 'required',
params: { missingProperty: 'databaseId' },
message: "must have required property '" + 'databaseId' + "'"
}
if (vErrors === null) {
vErrors = [err224]
} else {
vErrors.push(err224)
}

}
if (data74.lastModified === undefined) {
const err225 = {
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err225]
} else {
vErrors.push(err225)
}

}
if (data74.touched === undefined) {
const err226 = {
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/required',
keyword: 'required',
params: { missingProperty: 'touched' },
message: "must have required property '" + 'touched' + "'"
}
if (vErrors === null) {
vErrors = [err226]
} else {
vErrors.push(err226)
}

}
if (data74.version === undefined) {
const err227 = {
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/required',
keyword: 'required',
params: { missingProperty: 'version' },
message: "must have required property '" + 'version' + "'"
}
if (vErrors === null) {
vErrors = [err227]
} else {
vErrors.push(err227)
}

}
if (data74.followerRequestId !== undefined) {
let data75 = data74.followerRequestId
if (typeof data75 === 'string') {
if (!formats2.test(data75)) {
const err228 = {
instancePath: instancePath + '/followerDatabase/followerRequestId',
schemaPath: '#/properties/followerDatabase/properties/followerRequestId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err228]
} else {
vErrors.push(err228)
}

}
} else {
const err229 = {
instancePath: instancePath + '/followerDatabase/followerRequestId',
schemaPath: '#/properties/followerDatabase/properties/followerRequestId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err229]
} else {
vErrors.push(err229)
}

}
}
if (data74.id !== undefined) {
let data76 = data74.id
if (typeof data76 === 'string') {
if (!formats2.test(data76)) {
const err230 = {
instancePath: instancePath + '/followerDatabase/id',
schemaPath: '#/properties/followerDatabase/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err230]
} else {
vErrors.push(err230)
}

}
} else {
const err231 = {
instancePath: instancePath + '/followerDatabase/id',
schemaPath: '#/properties/followerDatabase/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err231]
} else {
vErrors.push(err231)
}

}
}
if (data74.databaseId !== undefined) {
let data77 = data74.databaseId
if (typeof data77 === 'string') {
if (!formats2.test(data77)) {
const err232 = {
instancePath: instancePath + '/followerDatabase/databaseId',
schemaPath: '#/properties/followerDatabase/properties/databaseId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err232]
} else {
vErrors.push(err232)
}

}
} else {
const err233 = {
instancePath: instancePath + '/followerDatabase/databaseId',
schemaPath: '#/properties/followerDatabase/properties/databaseId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err233]
} else {
vErrors.push(err233)
}

}
}
if (data74.lastModified !== undefined) {
let data78 = data74.lastModified
if (!(typeof data78 == 'number' && isFinite(data78))) {
const err234 = {
instancePath: instancePath + '/followerDatabase/lastModified',
schemaPath: '#/properties/followerDatabase/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
if (vErrors === null) {
vErrors = [err234]
} else {
vErrors.push(err234)
}

}
}
if (data74.touched !== undefined) {
if (typeof data74.touched !== 'boolean') {
const err235 = {
instancePath: instancePath + '/followerDatabase/touched',
schemaPath: '#/properties/followerDatabase/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
if (vErrors === null) {
vErrors = [err235]
} else {
vErrors.push(err235)
}

}
}
if (data74.version !== undefined) {
let data80 = data74.version
if (
!(
typeof data80 == 'number' &&
!(data80 % 1) &&
!isNaN(data80) &&
isFinite(data80)
)
) {
const err236 = {
instancePath: instancePath + '/followerDatabase/version',
schemaPath: '#/properties/followerDatabase/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err236]
} else {
vErrors.push(err236)
}

}
if (typeof data80 == 'number' && isFinite(data80)) {
if (data80 < 0 || isNaN(data80)) {
const err237 = {
instancePath: instancePath + '/followerDatabase/version',
schemaPath: '#/properties/followerDatabase/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err237]
} else {
vErrors.push(err237)
}

}
}
}
} else {
const err238 = {
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err238]
} else {
vErrors.push(err238)
}

}
}
if (data.followerDatabaseCompletion !== undefined) {
let data81 = data.followerDatabaseCompletion
if (data81 && typeof data81 == 'object' && !Array.isArray(data81)) {
if (data81.id === undefined) {
const err239 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err239]
} else {
vErrors.push(err239)
}

}
if (data81.followerRequestId === undefined) {
const err240 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: 'followerRequestId' },
message: "must have required property '" + 'followerRequestId' + "'"
}
if (vErrors === null) {
vErrors = [err240]
} else {
vErrors.push(err240)
}

}
if (data81.description === undefined) {
const err241 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: 'description' },
message: "must have required property '" + 'description' + "'"
}
if (vErrors === null) {
vErrors = [err241]
} else {
vErrors.push(err241)
}

}
if (data81.itemId === undefined) {
const err242 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: 'itemId' },
message: "must have required property '" + 'itemId' + "'"
}
if (vErrors === null) {
vErrors = [err242]
} else {
vErrors.push(err242)
}

}
if (data81.parentItemId === undefined) {
const err243 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: 'parentItemId' },
message: "must have required property '" + 'parentItemId' + "'"
}
if (vErrors === null) {
vErrors = [err243]
} else {
vErrors.push(err243)
}

}
if (data81.itemLevel === undefined) {
const err244 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: 'itemLevel' },
message: "must have required property '" + 'itemLevel' + "'"
}
if (vErrors === null) {
vErrors = [err244]
} else {
vErrors.push(err244)
}

}
if (data81.lastModified === undefined) {
const err245 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err245]
} else {
vErrors.push(err245)
}

}
if (data81.touched === undefined) {
const err246 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: 'touched' },
message: "must have required property '" + 'touched' + "'"
}
if (vErrors === null) {
vErrors = [err246]
} else {
vErrors.push(err246)
}

}
if (data81.version === undefined) {
const err247 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: 'version' },
message: "must have required property '" + 'version' + "'"
}
if (vErrors === null) {
vErrors = [err247]
} else {
vErrors.push(err247)
}

}
if (data81.id !== undefined) {
let data82 = data81.id
if (typeof data82 === 'string') {
if (!formats2.test(data82)) {
const err248 = {
instancePath: instancePath + '/followerDatabaseCompletion/id',
schemaPath: '#/properties/followerDatabaseCompletion/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err248]
} else {
vErrors.push(err248)
}

}
} else {
const err249 = {
instancePath: instancePath + '/followerDatabaseCompletion/id',
schemaPath: '#/properties/followerDatabaseCompletion/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err249]
} else {
vErrors.push(err249)
}

}
}
if (data81.followerRequestId !== undefined) {
let data83 = data81.followerRequestId
if (typeof data83 === 'string') {
if (!formats2.test(data83)) {
const err250 = {
instancePath: instancePath + '/followerDatabaseCompletion/followerRequestId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/followerRequestId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err250]
} else {
vErrors.push(err250)
}

}
} else {
const err251 = {
instancePath: instancePath + '/followerDatabaseCompletion/followerRequestId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/followerRequestId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err251]
} else {
vErrors.push(err251)
}

}
}
if (data81.description !== undefined) {
let data84 = data81.description
if (typeof data84 === 'string') {
if (func4(data84) > 1000) {
const err252 = {
instancePath: instancePath + '/followerDatabaseCompletion/description',
schemaPath: '#/properties/followerDatabaseCompletion/properties/description/maxLength',
keyword: 'maxLength',
params: { limit: 1000 },
 message: "Must_be_less_than_1000_characters"}
if (vErrors === null) {
vErrors = [err252]
} else {
vErrors.push(err252)
}

}
} else {
const err253 = {
instancePath: instancePath + '/followerDatabaseCompletion/description',
schemaPath: '#/properties/followerDatabaseCompletion/properties/description/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err253]
} else {
vErrors.push(err253)
}

}
}
if (data81.itemId !== undefined) {
let data85 = data81.itemId
if (typeof data85 === 'string') {
if (!formats2.test(data85)) {
const err254 = {
instancePath: instancePath + '/followerDatabaseCompletion/itemId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err254]
} else {
vErrors.push(err254)
}

}
} else {
const err255 = {
instancePath: instancePath + '/followerDatabaseCompletion/itemId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err255]
} else {
vErrors.push(err255)
}

}
}
if (data81.parentItemId !== undefined) {
let data86 = data81.parentItemId
if (typeof data86 === 'string') {
if (!formats2.test(data86)) {
const err256 = {
instancePath: instancePath + '/followerDatabaseCompletion/parentItemId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/parentItemId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err256]
} else {
vErrors.push(err256)
}

}
} else {
const err257 = {
instancePath: instancePath + '/followerDatabaseCompletion/parentItemId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/parentItemId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err257]
} else {
vErrors.push(err257)
}

}
}
if (data81.itemLevel !== undefined) {
let data87 = data81.itemLevel
if (
!(
typeof data87 == 'number' &&
!(data87 % 1) &&
!isNaN(data87) &&
isFinite(data87)
)
) {
const err258 = {
instancePath: instancePath + '/followerDatabaseCompletion/itemLevel',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemLevel/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err258]
} else {
vErrors.push(err258)
}

}
if (typeof data87 == 'number' && isFinite(data87)) {
if (data87 > 9 || isNaN(data87)) {
const err259 = {
instancePath: instancePath + '/followerDatabaseCompletion/itemLevel',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemLevel/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 9 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err259]
} else {
vErrors.push(err259)
}

}
if (data87 < 0 || isNaN(data87)) {
const err260 = {
instancePath: instancePath + '/followerDatabaseCompletion/itemLevel',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemLevel/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err260]
} else {
vErrors.push(err260)
}

}
}
}
if (data81.lastModified !== undefined) {
let data88 = data81.lastModified
if (!(typeof data88 == 'number' && isFinite(data88))) {
const err261 = {
instancePath: instancePath + '/followerDatabaseCompletion/lastModified',
schemaPath: '#/properties/followerDatabaseCompletion/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
if (vErrors === null) {
vErrors = [err261]
} else {
vErrors.push(err261)
}

}
}
if (data81.touched !== undefined) {
if (typeof data81.touched !== 'boolean') {
const err262 = {
instancePath: instancePath + '/followerDatabaseCompletion/touched',
schemaPath: '#/properties/followerDatabaseCompletion/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
if (vErrors === null) {
vErrors = [err262]
} else {
vErrors.push(err262)
}

}
}
if (data81.version !== undefined) {
let data90 = data81.version
if (
!(
typeof data90 == 'number' &&
!(data90 % 1) &&
!isNaN(data90) &&
isFinite(data90)
)
) {
const err263 = {
instancePath: instancePath + '/followerDatabaseCompletion/version',
schemaPath: '#/properties/followerDatabaseCompletion/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err263]
} else {
vErrors.push(err263)
}

}
if (typeof data90 == 'number' && isFinite(data90)) {
if (data90 < 0 || isNaN(data90)) {
const err264 = {
instancePath: instancePath + '/followerDatabaseCompletion/version',
schemaPath: '#/properties/followerDatabaseCompletion/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err264]
} else {
vErrors.push(err264)
}

}
}
}
} else {
const err265 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err265]
} else {
vErrors.push(err265)
}

}
}
if (data.router !== undefined) {
let data91 = data.router
if (data91 && typeof data91 == 'object' && !Array.isArray(data91)) {
if (data91.id === undefined) {
const err266 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err266]
} else {
vErrors.push(err266)
}

}
if (data91.appId === undefined) {
const err267 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'appId' },
message: "must have required property '" + 'appId' + "'"
}
if (vErrors === null) {
vErrors = [err267]
} else {
vErrors.push(err267)
}

}
if (data91.routerMac === undefined) {
const err268 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'routerMac' },
message: "must have required property '" + 'routerMac' + "'"
}
if (vErrors === null) {
vErrors = [err268]
} else {
vErrors.push(err268)
}

}
if (data91.ipAddress === undefined) {
const err269 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'ipAddress' },
message: "must have required property '" + 'ipAddress' + "'"
}
if (vErrors === null) {
vErrors = [err269]
} else {
vErrors.push(err269)
}

}
if (data91.mondayTimesAndDurations === undefined) {
const err270 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'mondayTimesAndDurations' },
message: "must have required property '" + 'mondayTimesAndDurations' + "'"
}
if (vErrors === null) {
vErrors = [err270]
} else {
vErrors.push(err270)
}

}
if (data91.tuesdayTimesAndDurations === undefined) {
const err271 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'tuesdayTimesAndDurations' },
message: "must have required property '" + 'tuesdayTimesAndDurations' + "'"
}
if (vErrors === null) {
vErrors = [err271]
} else {
vErrors.push(err271)
}

}
if (data91.wednesdayTimesAndDurations === undefined) {
const err272 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'wednesdayTimesAndDurations' },
message: "must have required property '" + 'wednesdayTimesAndDurations' +
"'"
}
if (vErrors === null) {
vErrors = [err272]
} else {
vErrors.push(err272)
}

}
if (data91.thursdayTimesAndDurations === undefined) {
const err273 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'thursdayTimesAndDurations' },
message: "must have required property '" + 'thursdayTimesAndDurations' +
"'"
}
if (vErrors === null) {
vErrors = [err273]
} else {
vErrors.push(err273)
}

}
if (data91.fridayTimesAndDurations === undefined) {
const err274 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'fridayTimesAndDurations' },
message: "must have required property '" + 'fridayTimesAndDurations' + "'"
}
if (vErrors === null) {
vErrors = [err274]
} else {
vErrors.push(err274)
}

}
if (data91.saturdayTimesAndDurations === undefined) {
const err275 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'saturdayTimesAndDurations' },
message: "must have required property '" + 'saturdayTimesAndDurations' +
"'"
}
if (vErrors === null) {
vErrors = [err275]
} else {
vErrors.push(err275)
}

}
if (data91.sundayTimesAndDurations === undefined) {
const err276 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'sundayTimesAndDurations' },
message: "must have required property '" + 'sundayTimesAndDurations' + "'"
}
if (vErrors === null) {
vErrors = [err276]
} else {
vErrors.push(err276)
}

}
if (data91.version === undefined) {
const err277 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'version' },
message: "must have required property '" + 'version' + "'"
}
if (vErrors === null) {
vErrors = [err277]
} else {
vErrors.push(err277)
}

}
if (data91.lastModified === undefined) {
const err278 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err278]
} else {
vErrors.push(err278)
}

}
if (data91.touched === undefined) {
const err279 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'touched' },
message: "must have required property '" + 'touched' + "'"
}
if (vErrors === null) {
vErrors = [err279]
} else {
vErrors.push(err279)
}

}
if (data91.status === undefined) {
const err280 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'status' },
message: "must have required property '" + 'status' + "'"
}
if (vErrors === null) {
vErrors = [err280]
} else {
vErrors.push(err280)
}

}
if (data91.id !== undefined) {
let data92 = data91.id
if (typeof data92 === 'string') {
if (!formats2.test(data92)) {
const err281 = {
instancePath: instancePath + '/router/id',
schemaPath: '#/properties/router/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err281]
} else {
vErrors.push(err281)
}

}
} else {
const err282 = {
instancePath: instancePath + '/router/id',
schemaPath: '#/properties/router/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err282]
} else {
vErrors.push(err282)
}

}
}
if (data91.appId !== undefined) {
let data93 = data91.appId
if (typeof data93 === 'string') {
if (!formats2.test(data93)) {
const err283 = {
instancePath: instancePath + '/router/appId',
schemaPath: '#/properties/router/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err283]
} else {
vErrors.push(err283)
}

}
} else {
const err284 = {
instancePath: instancePath + '/router/appId',
schemaPath: '#/properties/router/properties/appId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err284]
} else {
vErrors.push(err284)
}

}
}
if (data91.routerMac !== undefined) {
let data94 = data91.routerMac
if (typeof data94 === 'string') {
if (!pattern1.test(data94)) {
const err285 = {
instancePath: instancePath + '/router/routerMac',
schemaPath: '#/properties/router/properties/routerMac/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$'},
 message: "Must_be_a_valid_MAC_address"}
if (vErrors === null) {
vErrors = [err285]
} else {
vErrors.push(err285)
}

}
if (!formats94(data94)) {
const err286 = {
instancePath: instancePath + '/router/routerMac',
schemaPath: '#/properties/router/properties/routerMac/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_MAC_address"}
if (vErrors === null) {
vErrors = [err286]
} else {
vErrors.push(err286)
}

}
} else {
const err287 = {
instancePath: instancePath + '/router/routerMac',
schemaPath: '#/properties/router/properties/routerMac/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err287]
} else {
vErrors.push(err287)
}

}
}
if (data91.ipAddress !== undefined) {
let data95 = data91.ipAddress
if (typeof data95 === 'string') {
if (!formats96.test(data95)) {
const err288 = {
instancePath: instancePath + '/router/ipAddress',
schemaPath: '#/properties/router/properties/ipAddress/format',
keyword: 'format',
params: { format: 'ipv4' },
 message: "Must_be_a_valid_IP_address"}
if (vErrors === null) {
vErrors = [err288]
} else {
vErrors.push(err288)
}

}
} else {
const err289 = {
instancePath: instancePath + '/router/ipAddress',
schemaPath: '#/properties/router/properties/ipAddress/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err289]
} else {
vErrors.push(err289)
}

}
}
if (data91.mondayTimesAndDurations !== undefined) {
let data96 = data91.mondayTimesAndDurations
if (typeof data96 === 'string') {
if (!pattern2.test(data96)) {
const err290 = {
instancePath: instancePath + '/router/mondayTimesAndDurations',
schemaPath: '#/properties/router/properties/mondayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err290]
} else {
vErrors.push(err290)
}

}
if (!formats94(data96)) {
const err291 = {
instancePath: instancePath + '/router/mondayTimesAndDurations',
schemaPath: '#/properties/router/properties/mondayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err291]
} else {
vErrors.push(err291)
}

}
} else {
const err292 = {
instancePath: instancePath + '/router/mondayTimesAndDurations',
schemaPath: '#/properties/router/properties/mondayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err292]
} else {
vErrors.push(err292)
}

}
}
if (data91.tuesdayTimesAndDurations !== undefined) {
let data97 = data91.tuesdayTimesAndDurations
if (typeof data97 === 'string') {
if (!pattern2.test(data97)) {
const err293 = {
instancePath: instancePath + '/router/tuesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/tuesdayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err293]
} else {
vErrors.push(err293)
}

}
if (!formats94(data97)) {
const err294 = {
instancePath: instancePath + '/router/tuesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/tuesdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err294]
} else {
vErrors.push(err294)
}

}
} else {
const err295 = {
instancePath: instancePath + '/router/tuesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/tuesdayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err295]
} else {
vErrors.push(err295)
}

}
}
if (data91.wednesdayTimesAndDurations !== undefined) {
let data98 = data91.wednesdayTimesAndDurations
if (typeof data98 === 'string') {
if (!pattern2.test(data98)) {
const err296 = {
instancePath: instancePath + '/router/wednesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/wednesdayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err296]
} else {
vErrors.push(err296)
}

}
if (!formats94(data98)) {
const err297 = {
instancePath: instancePath + '/router/wednesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/wednesdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err297]
} else {
vErrors.push(err297)
}

}
} else {
const err298 = {
instancePath: instancePath + '/router/wednesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/wednesdayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err298]
} else {
vErrors.push(err298)
}

}
}
if (data91.thursdayTimesAndDurations !== undefined) {
let data99 = data91.thursdayTimesAndDurations
if (typeof data99 === 'string') {
if (!pattern2.test(data99)) {
const err299 = {
instancePath: instancePath + '/router/thursdayTimesAndDurations',
schemaPath: '#/properties/router/properties/thursdayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err299]
} else {
vErrors.push(err299)
}

}
if (!formats94(data99)) {
const err300 = {
instancePath: instancePath + '/router/thursdayTimesAndDurations',
schemaPath: '#/properties/router/properties/thursdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err300]
} else {
vErrors.push(err300)
}

}
} else {
const err301 = {
instancePath: instancePath + '/router/thursdayTimesAndDurations',
schemaPath: '#/properties/router/properties/thursdayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err301]
} else {
vErrors.push(err301)
}

}
}
if (data91.fridayTimesAndDurations !== undefined) {
let data100 = data91.fridayTimesAndDurations
if (typeof data100 === 'string') {
if (!pattern2.test(data100)) {
const err302 = {
instancePath: instancePath + '/router/fridayTimesAndDurations',
schemaPath: '#/properties/router/properties/fridayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err302]
} else {
vErrors.push(err302)
}

}
if (!formats94(data100)) {
const err303 = {
instancePath: instancePath + '/router/fridayTimesAndDurations',
schemaPath: '#/properties/router/properties/fridayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err303]
} else {
vErrors.push(err303)
}

}
} else {
const err304 = {
instancePath: instancePath + '/router/fridayTimesAndDurations',
schemaPath: '#/properties/router/properties/fridayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err304]
} else {
vErrors.push(err304)
}

}
}
if (data91.saturdayTimesAndDurations !== undefined) {
let data101 = data91.saturdayTimesAndDurations
if (typeof data101 === 'string') {
if (!pattern2.test(data101)) {
const err305 = {
instancePath: instancePath + '/router/saturdayTimesAndDurations',
schemaPath: '#/properties/router/properties/saturdayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err305]
} else {
vErrors.push(err305)
}

}
if (!formats94(data101)) {
const err306 = {
instancePath: instancePath + '/router/saturdayTimesAndDurations',
schemaPath: '#/properties/router/properties/saturdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err306]
} else {
vErrors.push(err306)
}

}
} else {
const err307 = {
instancePath: instancePath + '/router/saturdayTimesAndDurations',
schemaPath: '#/properties/router/properties/saturdayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err307]
} else {
vErrors.push(err307)
}

}
}
if (data91.sundayTimesAndDurations !== undefined) {
let data102 = data91.sundayTimesAndDurations
if (typeof data102 === 'string') {
if (!pattern2.test(data102)) {
const err308 = {
instancePath: instancePath + '/router/sundayTimesAndDurations',
schemaPath: '#/properties/router/properties/sundayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err308]
} else {
vErrors.push(err308)
}

}
if (!formats94(data102)) {
const err309 = {
instancePath: instancePath + '/router/sundayTimesAndDurations',
schemaPath: '#/properties/router/properties/sundayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err309]
} else {
vErrors.push(err309)
}

}
} else {
const err310 = {
instancePath: instancePath + '/router/sundayTimesAndDurations',
schemaPath: '#/properties/router/properties/sundayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err310]
} else {
vErrors.push(err310)
}

}
}
if (data91.version !== undefined) {
let data103 = data91.version
if (
!(
typeof data103 == 'number' &&
!(data103 % 1) &&
!isNaN(data103) &&
isFinite(data103)
)
) {
const err311 = {
instancePath: instancePath + '/router/version',
schemaPath: '#/properties/router/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err311]
} else {
vErrors.push(err311)
}

}
if (typeof data103 == 'number' && isFinite(data103)) {
if (data103 < 0 || isNaN(data103)) {
const err312 = {
instancePath: instancePath + '/router/version',
schemaPath: '#/properties/router/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err312]
} else {
vErrors.push(err312)
}

}
}
}
if (data91.lastModified !== undefined) {
let data104 = data91.lastModified
if (!(typeof data104 == 'number' && isFinite(data104))) {
const err313 = {
instancePath: instancePath + '/router/lastModified',
schemaPath: '#/properties/router/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
if (vErrors === null) {
vErrors = [err313]
} else {
vErrors.push(err313)
}

}
}
if (data91.touched !== undefined) {
if (typeof data91.touched !== 'boolean') {
const err314 = {
instancePath: instancePath + '/router/touched',
schemaPath: '#/properties/router/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
if (vErrors === null) {
vErrors = [err314]
} else {
vErrors.push(err314)
}

}
}
if (data91.status !== undefined) {
let data106 = data91.status
if (
!(
typeof data106 == 'number' &&
!(data106 % 1) &&
!isNaN(data106) &&
isFinite(data106)
)
) {
const err315 = {
instancePath: instancePath + '/router/status',
schemaPath: '#/properties/router/properties/status/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err315]
} else {
vErrors.push(err315)
}

}
if (typeof data106 == 'number' && isFinite(data106)) {
if (data106 > 2 || isNaN(data106)) {
const err316 = {
instancePath: instancePath + '/router/status',
schemaPath: '#/properties/router/properties/status/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 2 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err316]
} else {
vErrors.push(err316)
}

}
}
}
} else {
const err317 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err317]
} else {
vErrors.push(err317)
}

}
}
if (data.media !== undefined) {
let data107 = data.media
if (data107 && typeof data107 == 'object' && !Array.isArray(data107)) {
if (data107.id === undefined) {
const err318 = {
instancePath: instancePath + '/media',
schemaPath: '#/properties/media/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err318]
} else {
vErrors.push(err318)
}

}
if (data107.size === undefined) {
const err319 = {
instancePath: instancePath + '/media',
schemaPath: '#/properties/media/required',
keyword: 'required',
params: { missingProperty: 'size' },
message: "must have required property '" + 'size' + "'"
}
if (vErrors === null) {
vErrors = [err319]
} else {
vErrors.push(err319)
}

}
if (data107.data === undefined) {
const err320 = {
instancePath: instancePath + '/media',
schemaPath: '#/properties/media/required',
keyword: 'required',
params: { missingProperty: 'data' },
message: "must have required property '" + 'data' + "'"
}
if (vErrors === null) {
vErrors = [err320]
} else {
vErrors.push(err320)
}

}
if (data107.appId === undefined) {
const err321 = {
instancePath: instancePath + '/media',
schemaPath: '#/properties/media/required',
keyword: 'required',
params: { missingProperty: 'appId' },
message: "must have required property '" + 'appId' + "'"
}
if (vErrors === null) {
vErrors = [err321]
} else {
vErrors.push(err321)
}

}
if (data107.touched === undefined) {
const err322 = {
instancePath: instancePath + '/media',
schemaPath: '#/properties/media/required',
keyword: 'required',
params: { missingProperty: 'touched' },
message: "must have required property '" + 'touched' + "'"
}
if (vErrors === null) {
vErrors = [err322]
} else {
vErrors.push(err322)
}

}
if (data107.id !== undefined) {
let data108 = data107.id
if (typeof data108 === 'string') {
if (!formats2.test(data108)) {
const err323 = {
instancePath: instancePath + '/media/id',
schemaPath: '#/properties/media/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err323]
} else {
vErrors.push(err323)
}

}
} else {
const err324 = {
instancePath: instancePath + '/media/id',
schemaPath: '#/properties/media/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err324]
} else {
vErrors.push(err324)
}

}
}
if (data107.size !== undefined) {
let data109 = data107.size
if (
!(
typeof data109 == 'number' &&
!(data109 % 1) &&
!isNaN(data109) &&
isFinite(data109)
)
) {
const err325 = {
instancePath: instancePath + '/media/size',
schemaPath: '#/properties/media/properties/size/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err325]
} else {
vErrors.push(err325)
}

}
if (typeof data109 == 'number' && isFinite(data109)) {
if (data109 < 0 || isNaN(data109)) {
const err326 = {
instancePath: instancePath + '/media/size',
schemaPath: '#/properties/media/properties/size/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err326]
} else {
vErrors.push(err326)
}

}
}
}
if (data107.data !== undefined) {
let data110 = data107.data
if (typeof data110 === 'string') {
if (func4(data110) > 8000) {
const err327 = {
instancePath: instancePath + '/media/data',
schemaPath: '#/properties/media/properties/data/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"}
if (vErrors === null) {
vErrors = [err327]
} else {
vErrors.push(err327)
}

}
} else {
const err328 = {
instancePath: instancePath + '/media/data',
schemaPath: '#/properties/media/properties/data/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err328]
} else {
vErrors.push(err328)
}

}
}
if (data107.appId !== undefined) {
let data111 = data107.appId
if (typeof data111 === 'string') {
if (!formats2.test(data111)) {
const err329 = {
instancePath: instancePath + '/media/appId',
schemaPath: '#/properties/media/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err329]
} else {
vErrors.push(err329)
}

}
} else {
const err330 = {
instancePath: instancePath + '/media/appId',
schemaPath: '#/properties/media/properties/appId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err330]
} else {
vErrors.push(err330)
}

}
}
if (data107.touched !== undefined) {
if (typeof data107.touched !== 'boolean') {
const err331 = {
instancePath: instancePath + '/media/touched',
schemaPath: '#/properties/media/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
if (vErrors === null) {
vErrors = [err331]
} else {
vErrors.push(err331)
}

}
}
} else {
const err332 = {
instancePath: instancePath + '/media',
schemaPath: '#/properties/media/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err332]
} else {
vErrors.push(err332)
}

}
}
if (data.message !== undefined) {
if (typeof data.message !== 'string') {
const err333 = {
instancePath: instancePath + '/message',
schemaPath: '#/properties/message/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err333]
} else {
vErrors.push(err333)
}

}
}
if (data.result !== undefined) {
let data114 = data.result
if (
!(
typeof data114 == 'number' &&
!(data114 % 1) &&
!isNaN(data114) &&
isFinite(data114)
)
) {
const err334 = {
instancePath: instancePath + '/result',
schemaPath: '#/properties/result/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err334]
} else {
vErrors.push(err334)
}

}
if (typeof data114 == 'number' && isFinite(data114)) {
if (data114 > 8 || isNaN(data114)) {
const err335 = {
instancePath: instancePath + '/result',
schemaPath: '#/properties/result/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 8 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err335]
} else {
vErrors.push(err335)
}

}
if (data114 < 0 || isNaN(data114)) {
const err336 = {
instancePath: instancePath + '/result',
schemaPath: '#/properties/result/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
message: 'must be >= 0'
}
if (vErrors === null) {
vErrors = [err336]
} else {
vErrors.push(err336)
}

}
}
}
} else {
const err337 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err337]
} else {
vErrors.push(err337)
}

}
return vErrors
}
