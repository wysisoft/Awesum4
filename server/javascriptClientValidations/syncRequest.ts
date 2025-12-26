'use strict'
const schema37 = {
$id: 'syncRequest',
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
lastModified: { default: 1766705790326, type: 'number' },
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
default: '019b57de-fd76-747c-b304-03c369028860',
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
lastModified: { default: 0, type: 'number' },
version: { default: 0, minimum: 0, type: 'integer' },
appId: { format: 'uuid', type: 'string' },
id: {
default: '019b57de-fd76-747c-b304-04e220c16b11',
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
type: 'string'},
touched: { default: true, type: 'boolean' },
unitLastModified: { default: 0, type: 'number' },
itemLastModified: { default: 0, type: 'number' },
mediaLastModified: { default: 0, type: 'number' }
},
required: [
'name',
'lastModified',
'version',
'appId',
'id',
'order',
'homePageIconType',
'homePageIcon',
'touched',
'unitLastModified',
'itemLastModified',
'mediaLastModified'
]
},
databaseUnit: {
$id: 'databaseUnit',
type: 'object',
properties: {
name: { minLength: 1, maxLength: 100, type: 'string' },
order: { minimum: 0, type: 'integer' },
lastModified: { default: 0, type: 'number' },
touched: { default: true, type: 'boolean' },
version: { minimum: 0, type: 'integer' },
id: { format: 'uuid', type: 'string' },
appId: { format: 'uuid', type: 'string' },
databaseId: { format: 'uuid', type: 'string' },
successVideoType: {
default: 2,
minimum: 0,
maximum: 2,
type: 'integer'},
successVideoUrl: { maxLength: 100, type: 'string' },
successAnimations: {
default: 'Fireworks',
maxLength: 100,
type: 'string'},
successSound: {
default: '00000000-0000-0000-0000-000000000005',
format: 'uuid',
type: 'string'},
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
router: {
default: '00000000-0000-0000-0000-000000000000',
format: 'uuid',
type: 'string'},
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
lastModified: { default: 0, type: 'number' },
touched: { default: true, type: 'boolean' },
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
'dataText'
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
default: '019b57de-fd76-747c-b304-0dbbc7213c98',
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
lastModified: { default: 0, type: 'number' },
touched: { default: true, type: 'boolean' },
version: { default: 0, minimum: 0, type: 'integer' },
status: { default: 0, minimum: 0, maximum: 2, type: 'integer' },
groups: { maxLength: 8000, default: '', type: 'string' },
points: { default: 0, minimum: 0, type: 'integer' },
completionLastModified: { default: 0, type: 'number' }
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
'points',
'completionLastModified'
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
default: '019b57de-fd76-747c-b304-0a75fad8fc1b',
format: 'uuid',
type: 'string'},
databaseId: {
default: '00000000-0000-0000-0000-000000000000',
format: 'uuid',
type: 'string'},
lastModified: { default: 0, type: 'number' },
touched: { default: true, type: 'boolean' },
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
router: {
$id: 'router',
type: 'object',
properties: {
id: {
default: '019b57de-fd76-747c-b304-180c2be7b861',
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
lastModified: { default: 0, type: 'number' },
touched: { default: true, type: 'boolean' },
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
followerDatabaseCompletion: {
$id: 'followerDatabaseCompletion',
type: 'object',
properties: {
id: {
default: '019b57de-fd76-747c-b304-15ef70b629f3',
format: 'uuid',
type: 'string'},
followerRequestId: { format: 'uuid', type: 'string' },
itemId: { format: 'uuid', type: 'string' },
parentItemId: { format: 'uuid', type: 'string' },
itemLevel: { minimum: 0, maximum: 9, type: 'integer' },
lastModified: { default: 0, type: 'number' }
},
required: [
'id',
'followerRequestId',
'itemId',
'parentItemId',
'itemLevel',
'lastModified'
]
},
media: {
$id: 'media',
type: 'object',
properties: {
id: {
default: '019b57de-fd76-747c-b304-11c855f30ea2',
format: 'uuid',
type: 'string'},
size: { minimum: 0, type: 'integer' },
data: { maxLength: 8000, type: 'string' },
appId: { format: 'uuid', type: 'string' },
touched: { default: true, type: 'boolean' }
},
required: ['id', 'size', 'data', 'appId', 'touched']
}
},
required: ['id']
}
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
const formats0 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
import * as formats from 'ajv-formats/dist/formats'
const formats102 = formats.fullFormats.regex as any
const formats104 = /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/
import transform from 'ajv-keywords/dist/definitions/transform'
const func2 = transform.transform.toLowerCase
const func3 = transform.transform.trim
import * as ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = ucs2length.default;
const pattern0 = new RegExp(/^(?!API$|I$).+$/, 'i');
const pattern1 = new RegExp('^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$', 'u')
const pattern2 = new RegExp('^([0-9]{2}:[0-9]{2})\\|([0-9]+)$', 'u')
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerSyncRequestInterface } from '../serverInterfaces/ServerSyncRequestInterface'
export async function validateSyncRequest(
data:ServerSyncRequestInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="syncRequest" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.id === undefined) {
const err0 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'id' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
if (data.id !== undefined) {
let data0 = data.id
if (typeof data0 === 'string') {
if (!formats2.test(data0)) {
const err1 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
} else {
const err2 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err2]
} else {
vErrors.push(err2)
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
const err3 = {
instancePath: instancePath + '/level',
schemaPath: '#/properties/level/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
if (typeof data1 == 'number' && isFinite(data1)) {
if (data1 > 9 || isNaN(data1)) {
const err4 = {
instancePath: instancePath + '/level',
schemaPath: '#/properties/level/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 9 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
if (data1 < 0 || isNaN(data1)) {
const err5 = {
instancePath: instancePath + '/level',
schemaPath: '#/properties/level/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err5]
} else {
vErrors.push(err5)
}

}
}
}
if (data.values !== undefined) {
let data2 = data.values
if (!(data2 && typeof data2 == 'object' && !Array.isArray(data2))) {
const err6 = {
instancePath: instancePath + '/values',
schemaPath: '#/properties/values/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err6]
} else {
vErrors.push(err6)
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
const err7 = {
instancePath: instancePath + '/action',
schemaPath: '#/properties/action/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err7]
} else {
vErrors.push(err7)
}

}
if (typeof data3 == 'number' && isFinite(data3)) {
if (data3 > 3 || isNaN(data3)) {
const err8 = {
instancePath: instancePath + '/action',
schemaPath: '#/properties/action/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
if (vErrors === null) {
vErrors = [err8]
} else {
vErrors.push(err8)
}

}
if (data3 < 0 || isNaN(data3)) {
const err9 = {
instancePath: instancePath + '/action',
schemaPath: '#/properties/action/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
message: 'must be >= 0'
}
if (vErrors === null) {
vErrors = [err9]
} else {
vErrors.push(err9)
}

}
}
}
if (data.app !== undefined) {
let data4 = data.app
if (data4 && typeof data4 == 'object' && !Array.isArray(data4)) {
if (data4.email === undefined) {
const err10 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'email' },
message: "must have required property '" + 'email' + "'"
}
if (vErrors === null) {
vErrors = [err10]
} else {
vErrors.push(err10)
}

}
if (data4.name === undefined) {
const err11 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'name' },
message: "must have required property '" + 'name' + "'"
}
if (vErrors === null) {
vErrors = [err11]
} else {
vErrors.push(err11)
}

}
if (data4.uniqueName === undefined) {
const err12 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'uniqueName' },
message: "must have required property '" + 'uniqueName' + "'"
}
if (vErrors === null) {
vErrors = [err12]
} else {
vErrors.push(err12)
}

}
if (data4.version === undefined) {
const err13 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'version' },
message: "must have required property '" + 'version' + "'"
}
if (vErrors === null) {
vErrors = [err13]
} else {
vErrors.push(err13)
}

}
if (data4.touched === undefined) {
const err14 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'touched' },
message: "must have required property '" + 'touched' + "'"
}
if (vErrors === null) {
vErrors = [err14]
} else {
vErrors.push(err14)
}

}
if (data4.lastModified === undefined) {
const err15 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err15]
} else {
vErrors.push(err15)
}

}
if (data4.homePageImageType === undefined) {
const err16 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'homePageImageType' },
message: "must have required property '" + 'homePageImageType' + "'"
}
if (vErrors === null) {
vErrors = [err16]
} else {
vErrors.push(err16)
}

}
if (data4.homePageImage === undefined) {
const err17 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'homePageImage' },
message: "must have required property '" + 'homePageImage' + "'"
}
if (vErrors === null) {
vErrors = [err17]
} else {
vErrors.push(err17)
}

}
if (data4.authenticationType === undefined) {
const err18 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'authenticationType' },
message: "must have required property '" + 'authenticationType' + "'"
}
if (vErrors === null) {
vErrors = [err18]
} else {
vErrors.push(err18)
}

}
if (data4.lang === undefined) {
const err19 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'lang' },
message: "must have required property '" + 'lang' + "'"
}
if (vErrors === null) {
vErrors = [err19]
} else {
vErrors.push(err19)
}

}
if (data4.enableNarrator === undefined) {
const err20 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'enableNarrator' },
message: "must have required property '" + 'enableNarrator' + "'"
}
if (vErrors === null) {
vErrors = [err20]
} else {
vErrors.push(err20)
}

}
if (data4.groups === undefined) {
const err21 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'groups' },
message: "must have required property '" + 'groups' + "'"
}
if (vErrors === null) {
vErrors = [err21]
} else {
vErrors.push(err21)
}

}
if (data4.id === undefined) {
const err22 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err22]
} else {
vErrors.push(err22)
}

}
if (data4.lastSync === undefined) {
const err23 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'lastSync' },
message: "must have required property '" + 'lastSync' + "'"
}
if (vErrors === null) {
vErrors = [err23]
} else {
vErrors.push(err23)
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
const err24 = {
instancePath: instancePath + '/app/email',
schemaPath: '#/properties/app/properties/email/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
if (vErrors === null) {
vErrors = [err24]
} else {
vErrors.push(err24)
}

}
if (func4(data5) < 5) {
const err25 = {
instancePath: instancePath + '/app/email',
schemaPath: '#/properties/app/properties/email/minLength',
keyword: 'minLength',
params: { limit: 5 },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err25]
} else {
vErrors.push(err25)
}

}
if (!formats0.test(data5)) {
const err26 = {
instancePath: instancePath + '/app/email',
schemaPath: '#/properties/app/properties/email/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"
}
if (vErrors === null) {
vErrors = [err26]
} else {
vErrors.push(err26)
}

}
} else {
const err27 = {
instancePath: instancePath + '/app/email',
schemaPath: '#/properties/app/properties/email/type',
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
if (data4.name !== undefined) {
let data6 = data4.name
if (typeof data6 == 'string' && data4 !== undefined) {
data6 = func2(func3(data6))
data4['name'] = data6
}
if (typeof data6 === 'string') {
if (func4(data6) > 100) {
const err28 = {
instancePath: instancePath + '/app/name',
schemaPath: '#/properties/app/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
if (vErrors === null) {
vErrors = [err28]
} else {
vErrors.push(err28)
}

}
if (func4(data6) < 1) {
const err29 = {
instancePath: instancePath + '/app/name',
schemaPath: '#/properties/app/properties/name/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err29]
} else {
vErrors.push(err29)
}

}
} else {
const err30 = {
instancePath: instancePath + '/app/name',
schemaPath: '#/properties/app/properties/name/type',
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
if (data4.uniqueName !== undefined) {
let data7 = data4.uniqueName
if (typeof data7 == 'string' && data4 !== undefined) {
data7 = func2(func3(data7))
data4['uniqueName'] = data7
}
if (typeof data7 === 'string') {
if (func4(data7) > 100) {
const err31 = {
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
if (vErrors === null) {
vErrors = [err31]
} else {
vErrors.push(err31)
}

}
if (func4(data7) < 1) {
const err32 = {
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err32]
} else {
vErrors.push(err32)
}

}
if (!pattern0.test(data7)) {
const err33 = {
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/pattern',
keyword: 'pattern',
params: { pattern: '/^(?!API$|I$).+$/i' },
 message: "Unique_name_contains_reserved_words"
}
if (vErrors === null) {
vErrors = [err33]
} else {
vErrors.push(err33)
}

}
if (
!await serverAndClientFunctions.isNameGloballyUnique(data,data7)
) {
const err34 = {
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/isNameGloballyUnique',
keyword: 'isNameGloballyUnique',
params: {},
 message: "Not_Globally_Unique"
}
if (vErrors === null) {
vErrors = [err34]
} else {
vErrors.push(err34)
}

}
} else {
const err35 = {
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/type',
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
const err36 = {
instancePath: instancePath + '/app/version',
schemaPath: '#/properties/app/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err36]
} else {
vErrors.push(err36)
}

}
if (typeof data8 == 'number' && isFinite(data8)) {
if (data8 < 0 || isNaN(data8)) {
const err37 = {
instancePath: instancePath + '/app/version',
schemaPath: '#/properties/app/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err37]
} else {
vErrors.push(err37)
}

}
}
}
if (data4.touched !== undefined) {
if (typeof data4.touched !== 'boolean') {
const err38 = {
instancePath: instancePath + '/app/touched',
schemaPath: '#/properties/app/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
if (vErrors === null) {
vErrors = [err38]
} else {
vErrors.push(err38)
}

}
}
if (data4.lastModified !== undefined) {
let data10 = data4.lastModified
if (!(typeof data10 == 'number' && isFinite(data10))) {
const err39 = {
instancePath: instancePath + '/app/lastModified',
schemaPath: '#/properties/app/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err39]
} else {
vErrors.push(err39)
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
const err40 = {
instancePath: instancePath + '/app/homePageImageType',
schemaPath: '#/properties/app/properties/homePageImageType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err40]
} else {
vErrors.push(err40)
}

}
if (typeof data11 == 'number' && isFinite(data11)) {
if (data11 > 3 || isNaN(data11)) {
const err41 = {
instancePath: instancePath + '/app/homePageImageType',
schemaPath: '#/properties/app/properties/homePageImageType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
if (vErrors === null) {
vErrors = [err41]
} else {
vErrors.push(err41)
}

}
if (data11 < 0 || isNaN(data11)) {
const err42 = {
instancePath: instancePath + '/app/homePageImageType',
schemaPath: '#/properties/app/properties/homePageImageType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err42]
} else {
vErrors.push(err42)
}

}
}
}
if (data4.homePageImage !== undefined) {
let data12 = data4.homePageImage
if (typeof data12 === 'string') {
if (!formats2.test(data12)) {
const err43 = {
instancePath: instancePath + '/app/homePageImage',
schemaPath: '#/properties/app/properties/homePageImage/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err43]
} else {
vErrors.push(err43)
}

}
} else {
const err44 = {
instancePath: instancePath + '/app/homePageImage',
schemaPath: '#/properties/app/properties/homePageImage/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err44]
} else {
vErrors.push(err44)
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
const err45 = {
instancePath: instancePath + '/app/authenticationType',
schemaPath: '#/properties/app/properties/authenticationType/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
if (vErrors === null) {
vErrors = [err45]
} else {
vErrors.push(err45)
}

}
if (func4(data13) < 1) {
const err46 = {
instancePath: instancePath + '/app/authenticationType',
schemaPath: '#/properties/app/properties/authenticationType/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err46]
} else {
vErrors.push(err46)
}

}
} else {
const err47 = {
instancePath: instancePath + '/app/authenticationType',
schemaPath: '#/properties/app/properties/authenticationType/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err47]
} else {
vErrors.push(err47)
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
const err48 = {
instancePath: instancePath + '/app/lang',
schemaPath: '#/properties/app/properties/lang/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
if (vErrors === null) {
vErrors = [err48]
} else {
vErrors.push(err48)
}

}
if (func4(data14) < 1) {
const err49 = {
instancePath: instancePath + '/app/lang',
schemaPath: '#/properties/app/properties/lang/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err49]
} else {
vErrors.push(err49)
}

}
} else {
const err50 = {
instancePath: instancePath + '/app/lang',
schemaPath: '#/properties/app/properties/lang/type',
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
if (data4.enableNarrator !== undefined) {
if (typeof data4.enableNarrator !== 'boolean') {
const err51 = {
instancePath: instancePath + '/app/enableNarrator',
schemaPath: '#/properties/app/properties/enableNarrator/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
if (vErrors === null) {
vErrors = [err51]
} else {
vErrors.push(err51)
}

}
}
if (data4.groups !== undefined) {
let data16 = data4.groups
if (typeof data16 === 'string') {
if (func4(data16) > 8000) {
const err52 = {
instancePath: instancePath + '/app/groups',
schemaPath: '#/properties/app/properties/groups/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"
}
if (vErrors === null) {
vErrors = [err52]
} else {
vErrors.push(err52)
}

}
} else {
const err53 = {
instancePath: instancePath + '/app/groups',
schemaPath: '#/properties/app/properties/groups/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err53]
} else {
vErrors.push(err53)
}

}
}
if (data4.id !== undefined) {
let data17 = data4.id
if (typeof data17 === 'string') {
if (func4(data17) < 36) {
const err54 = {
instancePath: instancePath + '/app/id',
schemaPath: '#/properties/app/properties/id/minLength',
keyword: 'minLength',
params: { limit: 36 },
 message: "Must_be_36_characters"
}
if (vErrors === null) {
vErrors = [err54]
} else {
vErrors.push(err54)
}

}
if (!formats2.test(data17)) {
const err55 = {
instancePath: instancePath + '/app/id',
schemaPath: '#/properties/app/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err55]
} else {
vErrors.push(err55)
}

}
} else {
const err56 = {
instancePath: instancePath + '/app/id',
schemaPath: '#/properties/app/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err56]
} else {
vErrors.push(err56)
}

}
}
if (data4.lastSync !== undefined) {
let data18 = data4.lastSync
if (!(typeof data18 == 'number' && isFinite(data18))) {
const err57 = {
instancePath: instancePath + '/app/lastSync',
schemaPath: '#/properties/app/properties/lastSync/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err57]
} else {
vErrors.push(err57)
}

}
}
} else {
const err58 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/type',
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
if (data.database !== undefined) {
let data19 = data.database
if (data19 && typeof data19 == 'object' && !Array.isArray(data19)) {
if (data19.name === undefined) {
const err59 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'name' },
message: "must have required property '" + 'name' + "'"
}
if (vErrors === null) {
vErrors = [err59]
} else {
vErrors.push(err59)
}

}
if (data19.lastModified === undefined) {
const err60 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err60]
} else {
vErrors.push(err60)
}

}
if (data19.version === undefined) {
const err61 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'version' },
message: "must have required property '" + 'version' + "'"
}
if (vErrors === null) {
vErrors = [err61]
} else {
vErrors.push(err61)
}

}
if (data19.appId === undefined) {
const err62 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'appId' },
message: "must have required property '" + 'appId' + "'"
}
if (vErrors === null) {
vErrors = [err62]
} else {
vErrors.push(err62)
}

}
if (data19.id === undefined) {
const err63 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err63]
} else {
vErrors.push(err63)
}

}
if (data19.order === undefined) {
const err64 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'order' },
message: "must have required property '" + 'order' + "'"
}
if (vErrors === null) {
vErrors = [err64]
} else {
vErrors.push(err64)
}

}
if (data19.homePageIconType === undefined) {
const err65 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'homePageIconType' },
message: "must have required property '" + 'homePageIconType' + "'"
}
if (vErrors === null) {
vErrors = [err65]
} else {
vErrors.push(err65)
}

}
if (data19.homePageIcon === undefined) {
const err66 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'homePageIcon' },
message: "must have required property '" + 'homePageIcon' + "'"
}
if (vErrors === null) {
vErrors = [err66]
} else {
vErrors.push(err66)
}

}
if (data19.touched === undefined) {
const err67 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'touched' },
message: "must have required property '" + 'touched' + "'"
}
if (vErrors === null) {
vErrors = [err67]
} else {
vErrors.push(err67)
}

}
if (data19.unitLastModified === undefined) {
const err68 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'unitLastModified' },
message: "must have required property '" + 'unitLastModified' + "'"
}
if (vErrors === null) {
vErrors = [err68]
} else {
vErrors.push(err68)
}

}
if (data19.itemLastModified === undefined) {
const err69 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'itemLastModified' },
message: "must have required property '" + 'itemLastModified' + "'"
}
if (vErrors === null) {
vErrors = [err69]
} else {
vErrors.push(err69)
}

}
if (data19.mediaLastModified === undefined) {
const err70 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'mediaLastModified' },
message: "must have required property '" + 'mediaLastModified' + "'"
}
if (vErrors === null) {
vErrors = [err70]
} else {
vErrors.push(err70)
}

}
if (data19.name !== undefined) {
let data20 = data19.name
if (typeof data20 === 'string') {
if (func4(data20) > 100) {
const err71 = {
instancePath: instancePath + '/database/name',
schemaPath: '#/properties/database/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
if (vErrors === null) {
vErrors = [err71]
} else {
vErrors.push(err71)
}

}
if (func4(data20) < 1) {
const err72 = {
instancePath: instancePath + '/database/name',
schemaPath: '#/properties/database/properties/name/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err72]
} else {
vErrors.push(err72)
}

}
} else {
const err73 = {
instancePath: instancePath + '/database/name',
schemaPath: '#/properties/database/properties/name/type',
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
if (data19.lastModified !== undefined) {
let data21 = data19.lastModified
if (!(typeof data21 == 'number' && isFinite(data21))) {
const err74 = {
instancePath: instancePath + '/database/lastModified',
schemaPath: '#/properties/database/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err74]
} else {
vErrors.push(err74)
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
const err75 = {
instancePath: instancePath + '/database/version',
schemaPath: '#/properties/database/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err75]
} else {
vErrors.push(err75)
}

}
if (typeof data22 == 'number' && isFinite(data22)) {
if (data22 < 0 || isNaN(data22)) {
const err76 = {
instancePath: instancePath + '/database/version',
schemaPath: '#/properties/database/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err76]
} else {
vErrors.push(err76)
}

}
}
}
if (data19.appId !== undefined) {
let data23 = data19.appId
if (typeof data23 === 'string') {
if (!formats2.test(data23)) {
const err77 = {
instancePath: instancePath + '/database/appId',
schemaPath: '#/properties/database/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err77]
} else {
vErrors.push(err77)
}

}
} else {
const err78 = {
instancePath: instancePath + '/database/appId',
schemaPath: '#/properties/database/properties/appId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err78]
} else {
vErrors.push(err78)
}

}
}
if (data19.id !== undefined) {
let data24 = data19.id
if (typeof data24 === 'string') {
if (!formats2.test(data24)) {
const err79 = {
instancePath: instancePath + '/database/id',
schemaPath: '#/properties/database/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err79]
} else {
vErrors.push(err79)
}

}
} else {
const err80 = {
instancePath: instancePath + '/database/id',
schemaPath: '#/properties/database/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err80]
} else {
vErrors.push(err80)
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
const err81 = {
instancePath: instancePath + '/database/order',
schemaPath: '#/properties/database/properties/order/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err81]
} else {
vErrors.push(err81)
}

}
if (typeof data25 == 'number' && isFinite(data25)) {
if (data25 < 0 || isNaN(data25)) {
const err82 = {
instancePath: instancePath + '/database/order',
schemaPath: '#/properties/database/properties/order/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err82]
} else {
vErrors.push(err82)
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
const err83 = {
instancePath: instancePath + '/database/homePageIconType',
schemaPath: '#/properties/database/properties/homePageIconType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err83]
} else {
vErrors.push(err83)
}

}
if (typeof data26 == 'number' && isFinite(data26)) {
if (data26 > 3 || isNaN(data26)) {
const err84 = {
instancePath: instancePath + '/database/homePageIconType',
schemaPath: '#/properties/database/properties/homePageIconType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
if (vErrors === null) {
vErrors = [err84]
} else {
vErrors.push(err84)
}

}
if (data26 < 0 || isNaN(data26)) {
const err85 = {
instancePath: instancePath + '/database/homePageIconType',
schemaPath: '#/properties/database/properties/homePageIconType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err85]
} else {
vErrors.push(err85)
}

}
}
}
if (data19.homePageIcon !== undefined) {
let data27 = data19.homePageIcon
if (typeof data27 === 'string') {
if (!formats2.test(data27)) {
const err86 = {
instancePath: instancePath + '/database/homePageIcon',
schemaPath: '#/properties/database/properties/homePageIcon/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err86]
} else {
vErrors.push(err86)
}

}
} else {
const err87 = {
instancePath: instancePath + '/database/homePageIcon',
schemaPath: '#/properties/database/properties/homePageIcon/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err87]
} else {
vErrors.push(err87)
}

}
}
if (data19.touched !== undefined) {
if (typeof data19.touched !== 'boolean') {
const err88 = {
instancePath: instancePath + '/database/touched',
schemaPath: '#/properties/database/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
if (vErrors === null) {
vErrors = [err88]
} else {
vErrors.push(err88)
}

}
}
if (data19.unitLastModified !== undefined) {
let data29 = data19.unitLastModified
if (!(typeof data29 == 'number' && isFinite(data29))) {
const err89 = {
instancePath: instancePath + '/database/unitLastModified',
schemaPath: '#/properties/database/properties/unitLastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err89]
} else {
vErrors.push(err89)
}

}
}
if (data19.itemLastModified !== undefined) {
let data30 = data19.itemLastModified
if (!(typeof data30 == 'number' && isFinite(data30))) {
const err90 = {
instancePath: instancePath + '/database/itemLastModified',
schemaPath: '#/properties/database/properties/itemLastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err90]
} else {
vErrors.push(err90)
}

}
}
if (data19.mediaLastModified !== undefined) {
let data31 = data19.mediaLastModified
if (!(typeof data31 == 'number' && isFinite(data31))) {
const err91 = {
instancePath: instancePath + '/database/mediaLastModified',
schemaPath: '#/properties/database/properties/mediaLastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err91]
} else {
vErrors.push(err91)
}

}
}
} else {
const err92 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err92]
} else {
vErrors.push(err92)
}

}
}
if (data.databaseUnit !== undefined) {
let data32 = data.databaseUnit
if (data32 && typeof data32 == 'object' && !Array.isArray(data32)) {
if (data32.name === undefined) {
const err93 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'name' },
message: "must have required property '" + 'name' + "'"
}
if (vErrors === null) {
vErrors = [err93]
} else {
vErrors.push(err93)
}

}
if (data32.order === undefined) {
const err94 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'order' },
message: "must have required property '" + 'order' + "'"
}
if (vErrors === null) {
vErrors = [err94]
} else {
vErrors.push(err94)
}

}
if (data32.lastModified === undefined) {
const err95 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err95]
} else {
vErrors.push(err95)
}

}
if (data32.touched === undefined) {
const err96 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'touched' },
message: "must have required property '" + 'touched' + "'"
}
if (vErrors === null) {
vErrors = [err96]
} else {
vErrors.push(err96)
}

}
if (data32.version === undefined) {
const err97 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'version' },
message: "must have required property '" + 'version' + "'"
}
if (vErrors === null) {
vErrors = [err97]
} else {
vErrors.push(err97)
}

}
if (data32.id === undefined) {
const err98 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err98]
} else {
vErrors.push(err98)
}

}
if (data32.appId === undefined) {
const err99 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'appId' },
message: "must have required property '" + 'appId' + "'"
}
if (vErrors === null) {
vErrors = [err99]
} else {
vErrors.push(err99)
}

}
if (data32.databaseId === undefined) {
const err100 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'databaseId' },
message: "must have required property '" + 'databaseId' + "'"
}
if (vErrors === null) {
vErrors = [err100]
} else {
vErrors.push(err100)
}

}
if (data32.successVideoType === undefined) {
const err101 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'successVideoType' },
message: "must have required property '" + 'successVideoType' + "'"
}
if (vErrors === null) {
vErrors = [err101]
} else {
vErrors.push(err101)
}

}
if (data32.successVideoUrl === undefined) {
const err102 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'successVideoUrl' },
message: "must have required property '" + 'successVideoUrl' + "'"
}
if (vErrors === null) {
vErrors = [err102]
} else {
vErrors.push(err102)
}

}
if (data32.successAnimations === undefined) {
const err103 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'successAnimations' },
message: "must have required property '" + 'successAnimations' + "'"
}
if (vErrors === null) {
vErrors = [err103]
} else {
vErrors.push(err103)
}

}
if (data32.successSound === undefined) {
const err104 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'successSound' },
message: "must have required property '" + 'successSound' + "'"
}
if (vErrors === null) {
vErrors = [err104]
} else {
vErrors.push(err104)
}

}
if (data32.successSoundType === undefined) {
const err105 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'successSoundType' },
message: "must have required property '" + 'successSoundType' + "'"
}
if (vErrors === null) {
vErrors = [err105]
} else {
vErrors.push(err105)
}

}
if (data32.homePageImageType === undefined) {
const err106 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'homePageImageType' },
message: "must have required property '" + 'homePageImageType' + "'"
}
if (vErrors === null) {
vErrors = [err106]
} else {
vErrors.push(err106)
}

}
if (data32.homePageImage === undefined) {
const err107 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'homePageImage' },
message: "must have required property '" + 'homePageImage' + "'"
}
if (vErrors === null) {
vErrors = [err107]
} else {
vErrors.push(err107)
}

}
if (data32.router === undefined) {
const err108 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'router' },
message: "must have required property '" + 'router' + "'"
}
if (vErrors === null) {
vErrors = [err108]
} else {
vErrors.push(err108)
}

}
if (data32.routerTime === undefined) {
const err109 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'routerTime' },
message: "must have required property '" + 'routerTime' + "'"
}
if (vErrors === null) {
vErrors = [err109]
} else {
vErrors.push(err109)
}

}
if (data32.routerTimeImmediate === undefined) {
const err110 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'routerTimeImmediate' },
message: "must have required property '" + 'routerTimeImmediate' + "'"
}
if (vErrors === null) {
vErrors = [err110]
} else {
vErrors.push(err110)
}

}
if (data32.points === undefined) {
const err111 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'points' },
message: "must have required property '" + 'points' + "'"
}
if (vErrors === null) {
vErrors = [err111]
} else {
vErrors.push(err111)
}

}
if (data32.name !== undefined) {
let data33 = data32.name
if (typeof data33 === 'string') {
if (func4(data33) > 100) {
const err112 = {
instancePath: instancePath + '/databaseUnit/name',
schemaPath: '#/properties/databaseUnit/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
if (vErrors === null) {
vErrors = [err112]
} else {
vErrors.push(err112)
}

}
if (func4(data33) < 1) {
const err113 = {
instancePath: instancePath + '/databaseUnit/name',
schemaPath: '#/properties/databaseUnit/properties/name/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err113]
} else {
vErrors.push(err113)
}

}
} else {
const err114 = {
instancePath: instancePath + '/databaseUnit/name',
schemaPath: '#/properties/databaseUnit/properties/name/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err114]
} else {
vErrors.push(err114)
}

}
}
if (data32.order !== undefined) {
let data34 = data32.order
if (
!(
typeof data34 == 'number' &&
!(data34 % 1) &&
!isNaN(data34) &&
isFinite(data34)
)
) {
const err115 = {
instancePath: instancePath + '/databaseUnit/order',
schemaPath: '#/properties/databaseUnit/properties/order/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err115]
} else {
vErrors.push(err115)
}

}
if (typeof data34 == 'number' && isFinite(data34)) {
if (data34 < 0 || isNaN(data34)) {
const err116 = {
instancePath: instancePath + '/databaseUnit/order',
schemaPath: '#/properties/databaseUnit/properties/order/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err116]
} else {
vErrors.push(err116)
}

}
}
}
if (data32.lastModified !== undefined) {
let data35 = data32.lastModified
if (!(typeof data35 == 'number' && isFinite(data35))) {
const err117 = {
instancePath: instancePath + '/databaseUnit/lastModified',
schemaPath: '#/properties/databaseUnit/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err117]
} else {
vErrors.push(err117)
}

}
}
if (data32.touched !== undefined) {
if (typeof data32.touched !== 'boolean') {
const err118 = {
instancePath: instancePath + '/databaseUnit/touched',
schemaPath: '#/properties/databaseUnit/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
if (vErrors === null) {
vErrors = [err118]
} else {
vErrors.push(err118)
}

}
}
if (data32.version !== undefined) {
let data37 = data32.version
if (
!(
typeof data37 == 'number' &&
!(data37 % 1) &&
!isNaN(data37) &&
isFinite(data37)
)
) {
const err119 = {
instancePath: instancePath + '/databaseUnit/version',
schemaPath: '#/properties/databaseUnit/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err119]
} else {
vErrors.push(err119)
}

}
if (typeof data37 == 'number' && isFinite(data37)) {
if (data37 < 0 || isNaN(data37)) {
const err120 = {
instancePath: instancePath + '/databaseUnit/version',
schemaPath: '#/properties/databaseUnit/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err120]
} else {
vErrors.push(err120)
}

}
}
}
if (data32.id !== undefined) {
let data38 = data32.id
if (typeof data38 === 'string') {
if (!formats2.test(data38)) {
const err121 = {
instancePath: instancePath + '/databaseUnit/id',
schemaPath: '#/properties/databaseUnit/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err121]
} else {
vErrors.push(err121)
}

}
} else {
const err122 = {
instancePath: instancePath + '/databaseUnit/id',
schemaPath: '#/properties/databaseUnit/properties/id/type',
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
if (data32.appId !== undefined) {
let data39 = data32.appId
if (typeof data39 === 'string') {
if (!formats2.test(data39)) {
const err123 = {
instancePath: instancePath + '/databaseUnit/appId',
schemaPath: '#/properties/databaseUnit/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err123]
} else {
vErrors.push(err123)
}

}
} else {
const err124 = {
instancePath: instancePath + '/databaseUnit/appId',
schemaPath: '#/properties/databaseUnit/properties/appId/type',
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
if (data32.databaseId !== undefined) {
let data40 = data32.databaseId
if (typeof data40 === 'string') {
if (!formats2.test(data40)) {
const err125 = {
instancePath: instancePath + '/databaseUnit/databaseId',
schemaPath: '#/properties/databaseUnit/properties/databaseId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err125]
} else {
vErrors.push(err125)
}

}
} else {
const err126 = {
instancePath: instancePath + '/databaseUnit/databaseId',
schemaPath: '#/properties/databaseUnit/properties/databaseId/type',
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
if (data32.successVideoType !== undefined) {
let data41 = data32.successVideoType
if (
!(
typeof data41 == 'number' &&
!(data41 % 1) &&
!isNaN(data41) &&
isFinite(data41)
)
) {
const err127 = {
instancePath: instancePath + '/databaseUnit/successVideoType',
schemaPath: '#/properties/databaseUnit/properties/successVideoType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err127]
} else {
vErrors.push(err127)
}

}
if (typeof data41 == 'number' && isFinite(data41)) {
if (data41 > 2 || isNaN(data41)) {
const err128 = {
instancePath: instancePath + '/databaseUnit/successVideoType',
schemaPath: '#/properties/databaseUnit/properties/successVideoType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 2 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
if (vErrors === null) {
vErrors = [err128]
} else {
vErrors.push(err128)
}

}
if (data41 < 0 || isNaN(data41)) {
const err129 = {
instancePath: instancePath + '/databaseUnit/successVideoType',
schemaPath: '#/properties/databaseUnit/properties/successVideoType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err129]
} else {
vErrors.push(err129)
}

}
}
}
if (data32.successVideoUrl !== undefined) {
let data42 = data32.successVideoUrl
if (typeof data42 === 'string') {
if (func4(data42) > 100) {
const err130 = {
instancePath: instancePath + '/databaseUnit/successVideoUrl',
schemaPath: '#/properties/databaseUnit/properties/successVideoUrl/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
if (vErrors === null) {
vErrors = [err130]
} else {
vErrors.push(err130)
}

}
} else {
const err131 = {
instancePath: instancePath + '/databaseUnit/successVideoUrl',
schemaPath: '#/properties/databaseUnit/properties/successVideoUrl/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err131]
} else {
vErrors.push(err131)
}

}
}
if (data32.successAnimations !== undefined) {
let data43 = data32.successAnimations
if (typeof data43 === 'string') {
if (func4(data43) > 100) {
const err132 = {
instancePath: instancePath + '/databaseUnit/successAnimations',
schemaPath: '#/properties/databaseUnit/properties/successAnimations/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
if (vErrors === null) {
vErrors = [err132]
} else {
vErrors.push(err132)
}

}
} else {
const err133 = {
instancePath: instancePath + '/databaseUnit/successAnimations',
schemaPath: '#/properties/databaseUnit/properties/successAnimations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err133]
} else {
vErrors.push(err133)
}

}
}
if (data32.successSound !== undefined) {
let data44 = data32.successSound
if (typeof data44 === 'string') {
if (!formats2.test(data44)) {
const err134 = {
instancePath: instancePath + '/databaseUnit/successSound',
schemaPath: '#/properties/databaseUnit/properties/successSound/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err134]
} else {
vErrors.push(err134)
}

}
} else {
const err135 = {
instancePath: instancePath + '/databaseUnit/successSound',
schemaPath: '#/properties/databaseUnit/properties/successSound/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err135]
} else {
vErrors.push(err135)
}

}
}
if (data32.successSoundType !== undefined) {
let data45 = data32.successSoundType
if (
!(
typeof data45 == 'number' &&
!(data45 % 1) &&
!isNaN(data45) &&
isFinite(data45)
)
) {
const err136 = {
instancePath: instancePath + '/databaseUnit/successSoundType',
schemaPath: '#/properties/databaseUnit/properties/successSoundType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err136]
} else {
vErrors.push(err136)
}

}
if (typeof data45 == 'number' && isFinite(data45)) {
if (data45 > 4 || isNaN(data45)) {
const err137 = {
instancePath: instancePath + '/databaseUnit/successSoundType',
schemaPath: '#/properties/databaseUnit/properties/successSoundType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 4 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
if (vErrors === null) {
vErrors = [err137]
} else {
vErrors.push(err137)
}

}
if (data45 < 0 || isNaN(data45)) {
const err138 = {
instancePath: instancePath + '/databaseUnit/successSoundType',
schemaPath: '#/properties/databaseUnit/properties/successSoundType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err138]
} else {
vErrors.push(err138)
}

}
}
}
if (data32.homePageImageType !== undefined) {
let data46 = data32.homePageImageType
if (
!(
typeof data46 == 'number' &&
!(data46 % 1) &&
!isNaN(data46) &&
isFinite(data46)
)
) {
const err139 = {
instancePath: instancePath + '/databaseUnit/homePageImageType',
schemaPath: '#/properties/databaseUnit/properties/homePageImageType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err139]
} else {
vErrors.push(err139)
}

}
if (typeof data46 == 'number' && isFinite(data46)) {
if (data46 > 3 || isNaN(data46)) {
const err140 = {
instancePath: instancePath + '/databaseUnit/homePageImageType',
schemaPath: '#/properties/databaseUnit/properties/homePageImageType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
if (vErrors === null) {
vErrors = [err140]
} else {
vErrors.push(err140)
}

}
if (data46 < 0 || isNaN(data46)) {
const err141 = {
instancePath: instancePath + '/databaseUnit/homePageImageType',
schemaPath: '#/properties/databaseUnit/properties/homePageImageType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err141]
} else {
vErrors.push(err141)
}

}
}
}
if (data32.homePageImage !== undefined) {
let data47 = data32.homePageImage
if (typeof data47 === 'string') {
if (!formats2.test(data47)) {
const err142 = {
instancePath: instancePath + '/databaseUnit/homePageImage',
schemaPath: '#/properties/databaseUnit/properties/homePageImage/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err142]
} else {
vErrors.push(err142)
}

}
} else {
const err143 = {
instancePath: instancePath + '/databaseUnit/homePageImage',
schemaPath: '#/properties/databaseUnit/properties/homePageImage/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err143]
} else {
vErrors.push(err143)
}

}
}
if (data32.router !== undefined) {
let data48 = data32.router
if (typeof data48 === 'string') {
if (!formats2.test(data48)) {
const err144 = {
instancePath: instancePath + '/databaseUnit/router',
schemaPath: '#/properties/databaseUnit/properties/router/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err144]
} else {
vErrors.push(err144)
}

}
} else {
const err145 = {
instancePath: instancePath + '/databaseUnit/router',
schemaPath: '#/properties/databaseUnit/properties/router/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err145]
} else {
vErrors.push(err145)
}

}
}
if (data32.routerTime !== undefined) {
let data49 = data32.routerTime
if (!(typeof data49 == 'number' && isFinite(data49))) {
const err146 = {
instancePath: instancePath + '/databaseUnit/routerTime',
schemaPath: '#/properties/databaseUnit/properties/routerTime/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err146]
} else {
vErrors.push(err146)
}

}
}
if (data32.routerTimeImmediate !== undefined) {
if (typeof data32.routerTimeImmediate !== 'boolean') {
const err147 = {
instancePath: instancePath + '/databaseUnit/routerTimeImmediate',
schemaPath: '#/properties/databaseUnit/properties/routerTimeImmediate/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
if (vErrors === null) {
vErrors = [err147]
} else {
vErrors.push(err147)
}

}
}
if (data32.points !== undefined) {
let data51 = data32.points
if (
!(
typeof data51 == 'number' &&
!(data51 % 1) &&
!isNaN(data51) &&
isFinite(data51)
)
) {
const err148 = {
instancePath: instancePath + '/databaseUnit/points',
schemaPath: '#/properties/databaseUnit/properties/points/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err148]
} else {
vErrors.push(err148)
}

}
if (typeof data51 == 'number' && isFinite(data51)) {
if (data51 < 0 || isNaN(data51)) {
const err149 = {
instancePath: instancePath + '/databaseUnit/points',
schemaPath: '#/properties/databaseUnit/properties/points/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err149]
} else {
vErrors.push(err149)
}

}
}
}
} else {
const err150 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err150]
} else {
vErrors.push(err150)
}

}
}
if (data.databaseItem !== undefined) {
let data52 = data.databaseItem
if (data52 && typeof data52 == 'object' && !Array.isArray(data52)) {
if (data52.itemType === undefined) {
const err151 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'itemType' },
message: "must have required property '" + 'itemType' + "'"
}
if (vErrors === null) {
vErrors = [err151]
} else {
vErrors.push(err151)
}

}
if (data52.order === undefined) {
const err152 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'order' },
message: "must have required property '" + 'order' + "'"
}
if (vErrors === null) {
vErrors = [err152]
} else {
vErrors.push(err152)
}

}
if (data52.unitId === undefined) {
const err153 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'unitId' },
message: "must have required property '" + 'unitId' + "'"
}
if (vErrors === null) {
vErrors = [err153]
} else {
vErrors.push(err153)
}

}
if (data52.appId === undefined) {
const err154 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'appId' },
message: "must have required property '" + 'appId' + "'"
}
if (vErrors === null) {
vErrors = [err154]
} else {
vErrors.push(err154)
}

}
if (data52.lastModified === undefined) {
const err155 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err155]
} else {
vErrors.push(err155)
}

}
if (data52.touched === undefined) {
const err156 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'touched' },
message: "must have required property '" + 'touched' + "'"
}
if (vErrors === null) {
vErrors = [err156]
} else {
vErrors.push(err156)
}

}
if (data52.version === undefined) {
const err157 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'version' },
message: "must have required property '" + 'version' + "'"
}
if (vErrors === null) {
vErrors = [err157]
} else {
vErrors.push(err157)
}

}
if (data52.databaseId === undefined) {
const err158 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'databaseId' },
message: "must have required property '" + 'databaseId' + "'"
}
if (vErrors === null) {
vErrors = [err158]
} else {
vErrors.push(err158)
}

}
if (data52.id === undefined) {
const err159 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err159]
} else {
vErrors.push(err159)
}

}
if (data52.dataText === undefined) {
const err160 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'dataText' },
message: "must have required property '" + 'dataText' + "'"
}
if (vErrors === null) {
vErrors = [err160]
} else {
vErrors.push(err160)
}

}
if (data52.itemType !== undefined) {
let data53 = data52.itemType
if (
!(
typeof data53 == 'number' &&
!(data53 % 1) &&
!isNaN(data53) &&
isFinite(data53)
)
) {
const err161 = {
instancePath: instancePath + '/databaseItem/itemType',
schemaPath: '#/properties/databaseItem/properties/itemType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err161]
} else {
vErrors.push(err161)
}

}
if (typeof data53 == 'number' && isFinite(data53)) {
if (data53 > 5 || isNaN(data53)) {
const err162 = {
instancePath: instancePath + '/databaseItem/itemType',
schemaPath: '#/properties/databaseItem/properties/itemType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 5 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
if (vErrors === null) {
vErrors = [err162]
} else {
vErrors.push(err162)
}

}
if (data53 < 0 || isNaN(data53)) {
const err163 = {
instancePath: instancePath + '/databaseItem/itemType',
schemaPath: '#/properties/databaseItem/properties/itemType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err163]
} else {
vErrors.push(err163)
}

}
}
}
if (data52.order !== undefined) {
let data54 = data52.order
if (
!(
typeof data54 == 'number' &&
!(data54 % 1) &&
!isNaN(data54) &&
isFinite(data54)
)
) {
const err164 = {
instancePath: instancePath + '/databaseItem/order',
schemaPath: '#/properties/databaseItem/properties/order/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err164]
} else {
vErrors.push(err164)
}

}
if (typeof data54 == 'number' && isFinite(data54)) {
if (data54 < 0 || isNaN(data54)) {
const err165 = {
instancePath: instancePath + '/databaseItem/order',
schemaPath: '#/properties/databaseItem/properties/order/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err165]
} else {
vErrors.push(err165)
}

}
}
}
if (data52.unitId !== undefined) {
let data55 = data52.unitId
if (typeof data55 === 'string') {
if (!formats2.test(data55)) {
const err166 = {
instancePath: instancePath + '/databaseItem/unitId',
schemaPath: '#/properties/databaseItem/properties/unitId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err166]
} else {
vErrors.push(err166)
}

}
} else {
const err167 = {
instancePath: instancePath + '/databaseItem/unitId',
schemaPath: '#/properties/databaseItem/properties/unitId/type',
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
if (data52.appId !== undefined) {
let data56 = data52.appId
if (typeof data56 === 'string') {
if (!formats2.test(data56)) {
const err168 = {
instancePath: instancePath + '/databaseItem/appId',
schemaPath: '#/properties/databaseItem/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err168]
} else {
vErrors.push(err168)
}

}
} else {
const err169 = {
instancePath: instancePath + '/databaseItem/appId',
schemaPath: '#/properties/databaseItem/properties/appId/type',
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
if (data52.lastModified !== undefined) {
let data57 = data52.lastModified
if (!(typeof data57 == 'number' && isFinite(data57))) {
const err170 = {
instancePath: instancePath + '/databaseItem/lastModified',
schemaPath: '#/properties/databaseItem/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err170]
} else {
vErrors.push(err170)
}

}
}
if (data52.touched !== undefined) {
if (typeof data52.touched !== 'boolean') {
const err171 = {
instancePath: instancePath + '/databaseItem/touched',
schemaPath: '#/properties/databaseItem/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
if (vErrors === null) {
vErrors = [err171]
} else {
vErrors.push(err171)
}

}
}
if (data52.version !== undefined) {
let data59 = data52.version
if (
!(
typeof data59 == 'number' &&
!(data59 % 1) &&
!isNaN(data59) &&
isFinite(data59)
)
) {
const err172 = {
instancePath: instancePath + '/databaseItem/version',
schemaPath: '#/properties/databaseItem/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err172]
} else {
vErrors.push(err172)
}

}
if (typeof data59 == 'number' && isFinite(data59)) {
if (data59 < 0 || isNaN(data59)) {
const err173 = {
instancePath: instancePath + '/databaseItem/version',
schemaPath: '#/properties/databaseItem/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err173]
} else {
vErrors.push(err173)
}

}
}
}
if (data52.databaseId !== undefined) {
let data60 = data52.databaseId
if (typeof data60 === 'string') {
if (!formats2.test(data60)) {
const err174 = {
instancePath: instancePath + '/databaseItem/databaseId',
schemaPath: '#/properties/databaseItem/properties/databaseId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err174]
} else {
vErrors.push(err174)
}

}
} else {
const err175 = {
instancePath: instancePath + '/databaseItem/databaseId',
schemaPath: '#/properties/databaseItem/properties/databaseId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err175]
} else {
vErrors.push(err175)
}

}
}
if (data52.id !== undefined) {
let data61 = data52.id
if (typeof data61 === 'string') {
if (!formats2.test(data61)) {
const err176 = {
instancePath: instancePath + '/databaseItem/id',
schemaPath: '#/properties/databaseItem/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err176]
} else {
vErrors.push(err176)
}

}
} else {
const err177 = {
instancePath: instancePath + '/databaseItem/id',
schemaPath: '#/properties/databaseItem/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err177]
} else {
vErrors.push(err177)
}

}
}
if (data52.dataText !== undefined) {
let data62 = data52.dataText
if (typeof data62 === 'string') {
if (func4(data62) > 8000) {
const err178 = {
instancePath: instancePath + '/databaseItem/dataText',
schemaPath: '#/properties/databaseItem/properties/dataText/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"
}
if (vErrors === null) {
vErrors = [err178]
} else {
vErrors.push(err178)
}

}
} else {
const err179 = {
instancePath: instancePath + '/databaseItem/dataText',
schemaPath: '#/properties/databaseItem/properties/dataText/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err179]
} else {
vErrors.push(err179)
}

}
}
} else {
const err180 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err180]
} else {
vErrors.push(err180)
}

}
}
if (data.followerRequest !== undefined) {
let data63 = data.followerRequest
if (data63 && typeof data63 == 'object' && !Array.isArray(data63)) {
if (data63.leaderAppId === undefined) {
const err181 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'leaderAppId' },
message: "must have required property '" + 'leaderAppId' + "'"
}
if (vErrors === null) {
vErrors = [err181]
} else {
vErrors.push(err181)
}

}
if (data63.followerAppId === undefined) {
const err182 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'followerAppId' },
message: "must have required property '" + 'followerAppId' + "'"
}
if (vErrors === null) {
vErrors = [err182]
} else {
vErrors.push(err182)
}

}
if (data63.id === undefined) {
const err183 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err183]
} else {
vErrors.push(err183)
}

}
if (data63.followerName === undefined) {
const err184 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'followerName' },
message: "must have required property '" + 'followerName' + "'"
}
if (vErrors === null) {
vErrors = [err184]
} else {
vErrors.push(err184)
}

}
if (data63.leaderName === undefined) {
const err185 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'leaderName' },
message: "must have required property '" + 'leaderName' + "'"
}
if (vErrors === null) {
vErrors = [err185]
} else {
vErrors.push(err185)
}

}
if (data63.followerEmail === undefined) {
const err186 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'followerEmail' },
message: "must have required property '" + 'followerEmail' + "'"
}
if (vErrors === null) {
vErrors = [err186]
} else {
vErrors.push(err186)
}

}
if (data63.leaderEmail === undefined) {
const err187 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'leaderEmail' },
message: "must have required property '" + 'leaderEmail' + "'"
}
if (vErrors === null) {
vErrors = [err187]
} else {
vErrors.push(err187)
}

}
if (data63.initiatedByFollower === undefined) {
const err188 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'initiatedByFollower' },
message: "must have required property '" + 'initiatedByFollower' + "'"
}
if (vErrors === null) {
vErrors = [err188]
} else {
vErrors.push(err188)
}

}
if (data63.lastModified === undefined) {
const err189 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err189]
} else {
vErrors.push(err189)
}

}
if (data63.touched === undefined) {
const err190 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'touched' },
message: "must have required property '" + 'touched' + "'"
}
if (vErrors === null) {
vErrors = [err190]
} else {
vErrors.push(err190)
}

}
if (data63.version === undefined) {
const err191 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'version' },
message: "must have required property '" + 'version' + "'"
}
if (vErrors === null) {
vErrors = [err191]
} else {
vErrors.push(err191)
}

}
if (data63.status === undefined) {
const err192 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'status' },
message: "must have required property '" + 'status' + "'"
}
if (vErrors === null) {
vErrors = [err192]
} else {
vErrors.push(err192)
}

}
if (data63.groups === undefined) {
const err193 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'groups' },
message: "must have required property '" + 'groups' + "'"
}
if (vErrors === null) {
vErrors = [err193]
} else {
vErrors.push(err193)
}

}
if (data63.points === undefined) {
const err194 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'points' },
message: "must have required property '" + 'points' + "'"
}
if (vErrors === null) {
vErrors = [err194]
} else {
vErrors.push(err194)
}

}
if (data63.completionLastModified === undefined) {
const err195 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'completionLastModified' },
message: "must have required property '" + 'completionLastModified' + "'"
}
if (vErrors === null) {
vErrors = [err195]
} else {
vErrors.push(err195)
}

}
if (data63.leaderAppId !== undefined) {
let data64 = data63.leaderAppId
if (typeof data64 === 'string') {
if (!formats2.test(data64)) {
const err196 = {
instancePath: instancePath + '/followerRequest/leaderAppId',
schemaPath: '#/properties/followerRequest/properties/leaderAppId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err196]
} else {
vErrors.push(err196)
}

}
} else {
const err197 = {
instancePath: instancePath + '/followerRequest/leaderAppId',
schemaPath: '#/properties/followerRequest/properties/leaderAppId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err197]
} else {
vErrors.push(err197)
}

}
}
if (data63.followerAppId !== undefined) {
let data65 = data63.followerAppId
if (typeof data65 === 'string') {
if (!formats2.test(data65)) {
const err198 = {
instancePath: instancePath + '/followerRequest/followerAppId',
schemaPath: '#/properties/followerRequest/properties/followerAppId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err198]
} else {
vErrors.push(err198)
}

}
} else {
const err199 = {
instancePath: instancePath + '/followerRequest/followerAppId',
schemaPath: '#/properties/followerRequest/properties/followerAppId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err199]
} else {
vErrors.push(err199)
}

}
}
if (data63.id !== undefined) {
let data66 = data63.id
if (typeof data66 === 'string') {
if (!formats2.test(data66)) {
const err200 = {
instancePath: instancePath + '/followerRequest/id',
schemaPath: '#/properties/followerRequest/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err200]
} else {
vErrors.push(err200)
}

}
} else {
const err201 = {
instancePath: instancePath + '/followerRequest/id',
schemaPath: '#/properties/followerRequest/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err201]
} else {
vErrors.push(err201)
}

}
}
if (data63.followerName !== undefined) {
let data67 = data63.followerName
if (typeof data67 === 'string') {
if (func4(data67) > 100) {
const err202 = {
instancePath: instancePath + '/followerRequest/followerName',
schemaPath: '#/properties/followerRequest/properties/followerName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
if (vErrors === null) {
vErrors = [err202]
} else {
vErrors.push(err202)
}

}
if (func4(data67) < 1) {
const err203 = {
instancePath: instancePath + '/followerRequest/followerName',
schemaPath: '#/properties/followerRequest/properties/followerName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err203]
} else {
vErrors.push(err203)
}

}
} else {
const err204 = {
instancePath: instancePath + '/followerRequest/followerName',
schemaPath: '#/properties/followerRequest/properties/followerName/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err204]
} else {
vErrors.push(err204)
}

}
}
if (data63.leaderName !== undefined) {
let data68 = data63.leaderName
if (typeof data68 === 'string') {
if (func4(data68) > 100) {
const err205 = {
instancePath: instancePath + '/followerRequest/leaderName',
schemaPath: '#/properties/followerRequest/properties/leaderName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
if (vErrors === null) {
vErrors = [err205]
} else {
vErrors.push(err205)
}

}
if (func4(data68) < 1) {
const err206 = {
instancePath: instancePath + '/followerRequest/leaderName',
schemaPath: '#/properties/followerRequest/properties/leaderName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err206]
} else {
vErrors.push(err206)
}

}
} else {
const err207 = {
instancePath: instancePath + '/followerRequest/leaderName',
schemaPath: '#/properties/followerRequest/properties/leaderName/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err207]
} else {
vErrors.push(err207)
}

}
}
if (data63.followerEmail !== undefined) {
let data69 = data63.followerEmail
if (typeof data69 === 'string') {
if (func4(data69) > 100) {
const err208 = {
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
if (vErrors === null) {
vErrors = [err208]
} else {
vErrors.push(err208)
}

}
if (func4(data69) < 1) {
const err209 = {
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err209]
} else {
vErrors.push(err209)
}

}
if (!formats0.test(data69)) {
const err210 = {
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"
}
if (vErrors === null) {
vErrors = [err210]
} else {
vErrors.push(err210)
}

}
if (!await serverAndClientFunctions.doesEmailExist(data69)) {
const err211 = {
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/doesEmailExist',
keyword: 'doesEmailExist',
params: {},
 message: "Email_does_not_exist"
}
if (vErrors === null) {
vErrors = [err211]
} else {
vErrors.push(err211)
}

}
} else {
const err212 = {
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err212]
} else {
vErrors.push(err212)
}

}
}
if (data63.leaderEmail !== undefined) {
let data70 = data63.leaderEmail
if (typeof data70 === 'string') {
if (func4(data70) > 100) {
const err213 = {
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
if (vErrors === null) {
vErrors = [err213]
} else {
vErrors.push(err213)
}

}
if (func4(data70) < 1) {
const err214 = {
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err214]
} else {
vErrors.push(err214)
}

}
if (!formats0.test(data70)) {
const err215 = {
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"
}
if (vErrors === null) {
vErrors = [err215]
} else {
vErrors.push(err215)
}

}
if (!await serverAndClientFunctions.doesEmailExist(data70)) {
const err216 = {
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/doesEmailExist',
keyword: 'doesEmailExist',
params: {},
 message: "Email_does_not_exist"
}
if (vErrors === null) {
vErrors = [err216]
} else {
vErrors.push(err216)
}

}
} else {
const err217 = {
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err217]
} else {
vErrors.push(err217)
}

}
}
if (data63.initiatedByFollower !== undefined) {
if (typeof data63.initiatedByFollower !== 'boolean') {
const err218 = {
instancePath: instancePath + '/followerRequest/initiatedByFollower',
schemaPath: '#/properties/followerRequest/properties/initiatedByFollower/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
if (vErrors === null) {
vErrors = [err218]
} else {
vErrors.push(err218)
}

}
}
if (data63.lastModified !== undefined) {
let data72 = data63.lastModified
if (!(typeof data72 == 'number' && isFinite(data72))) {
const err219 = {
instancePath: instancePath + '/followerRequest/lastModified',
schemaPath: '#/properties/followerRequest/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err219]
} else {
vErrors.push(err219)
}

}
}
if (data63.touched !== undefined) {
if (typeof data63.touched !== 'boolean') {
const err220 = {
instancePath: instancePath + '/followerRequest/touched',
schemaPath: '#/properties/followerRequest/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
if (vErrors === null) {
vErrors = [err220]
} else {
vErrors.push(err220)
}

}
}
if (data63.version !== undefined) {
let data74 = data63.version
if (
!(
typeof data74 == 'number' &&
!(data74 % 1) &&
!isNaN(data74) &&
isFinite(data74)
)
) {
const err221 = {
instancePath: instancePath + '/followerRequest/version',
schemaPath: '#/properties/followerRequest/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err221]
} else {
vErrors.push(err221)
}

}
if (typeof data74 == 'number' && isFinite(data74)) {
if (data74 < 0 || isNaN(data74)) {
const err222 = {
instancePath: instancePath + '/followerRequest/version',
schemaPath: '#/properties/followerRequest/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err222]
} else {
vErrors.push(err222)
}

}
}
}
if (data63.status !== undefined) {
let data75 = data63.status
if (
!(
typeof data75 == 'number' &&
!(data75 % 1) &&
!isNaN(data75) &&
isFinite(data75)
)
) {
const err223 = {
instancePath: instancePath + '/followerRequest/status',
schemaPath: '#/properties/followerRequest/properties/status/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err223]
} else {
vErrors.push(err223)
}

}
if (typeof data75 == 'number' && isFinite(data75)) {
if (data75 > 2 || isNaN(data75)) {
const err224 = {
instancePath: instancePath + '/followerRequest/status',
schemaPath: '#/properties/followerRequest/properties/status/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 2 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
if (vErrors === null) {
vErrors = [err224]
} else {
vErrors.push(err224)
}

}
if (data75 < 0 || isNaN(data75)) {
const err225 = {
instancePath: instancePath + '/followerRequest/status',
schemaPath: '#/properties/followerRequest/properties/status/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err225]
} else {
vErrors.push(err225)
}

}
}
}
if (data63.groups !== undefined) {
let data76 = data63.groups
if (typeof data76 === 'string') {
if (func4(data76) > 8000) {
const err226 = {
instancePath: instancePath + '/followerRequest/groups',
schemaPath: '#/properties/followerRequest/properties/groups/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"
}
if (vErrors === null) {
vErrors = [err226]
} else {
vErrors.push(err226)
}

}
} else {
const err227 = {
instancePath: instancePath + '/followerRequest/groups',
schemaPath: '#/properties/followerRequest/properties/groups/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err227]
} else {
vErrors.push(err227)
}

}
}
if (data63.points !== undefined) {
let data77 = data63.points
if (
!(
typeof data77 == 'number' &&
!(data77 % 1) &&
!isNaN(data77) &&
isFinite(data77)
)
) {
const err228 = {
instancePath: instancePath + '/followerRequest/points',
schemaPath: '#/properties/followerRequest/properties/points/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err228]
} else {
vErrors.push(err228)
}

}
if (typeof data77 == 'number' && isFinite(data77)) {
if (data77 < 0 || isNaN(data77)) {
const err229 = {
instancePath: instancePath + '/followerRequest/points',
schemaPath: '#/properties/followerRequest/properties/points/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err229]
} else {
vErrors.push(err229)
}

}
}
}
if (data63.completionLastModified !== undefined) {
let data78 = data63.completionLastModified
if (!(typeof data78 == 'number' && isFinite(data78))) {
const err230 = {
instancePath: instancePath + '/followerRequest/completionLastModified',
schemaPath: '#/properties/followerRequest/properties/completionLastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err230]
} else {
vErrors.push(err230)
}

}
}
} else {
const err231 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err231]
} else {
vErrors.push(err231)
}

}
}
if (data.followerDatabase !== undefined) {
let data79 = data.followerDatabase
if (data79 && typeof data79 == 'object' && !Array.isArray(data79)) {
if (data79.followerRequestId === undefined) {
const err232 = {
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/required',
keyword: 'required',
params: { missingProperty: 'followerRequestId' },
message: "must have required property '" + 'followerRequestId' + "'"
}
if (vErrors === null) {
vErrors = [err232]
} else {
vErrors.push(err232)
}

}
if (data79.id === undefined) {
const err233 = {
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err233]
} else {
vErrors.push(err233)
}

}
if (data79.databaseId === undefined) {
const err234 = {
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/required',
keyword: 'required',
params: { missingProperty: 'databaseId' },
message: "must have required property '" + 'databaseId' + "'"
}
if (vErrors === null) {
vErrors = [err234]
} else {
vErrors.push(err234)
}

}
if (data79.lastModified === undefined) {
const err235 = {
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err235]
} else {
vErrors.push(err235)
}

}
if (data79.touched === undefined) {
const err236 = {
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/required',
keyword: 'required',
params: { missingProperty: 'touched' },
message: "must have required property '" + 'touched' + "'"
}
if (vErrors === null) {
vErrors = [err236]
} else {
vErrors.push(err236)
}

}
if (data79.version === undefined) {
const err237 = {
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/required',
keyword: 'required',
params: { missingProperty: 'version' },
message: "must have required property '" + 'version' + "'"
}
if (vErrors === null) {
vErrors = [err237]
} else {
vErrors.push(err237)
}

}
if (data79.followerRequestId !== undefined) {
let data80 = data79.followerRequestId
if (typeof data80 === 'string') {
if (!formats2.test(data80)) {
const err238 = {
instancePath: instancePath + '/followerDatabase/followerRequestId',
schemaPath: '#/properties/followerDatabase/properties/followerRequestId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err238]
} else {
vErrors.push(err238)
}

}
} else {
const err239 = {
instancePath: instancePath + '/followerDatabase/followerRequestId',
schemaPath: '#/properties/followerDatabase/properties/followerRequestId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err239]
} else {
vErrors.push(err239)
}

}
}
if (data79.id !== undefined) {
let data81 = data79.id
if (typeof data81 === 'string') {
if (!formats2.test(data81)) {
const err240 = {
instancePath: instancePath + '/followerDatabase/id',
schemaPath: '#/properties/followerDatabase/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err240]
} else {
vErrors.push(err240)
}

}
} else {
const err241 = {
instancePath: instancePath + '/followerDatabase/id',
schemaPath: '#/properties/followerDatabase/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err241]
} else {
vErrors.push(err241)
}

}
}
if (data79.databaseId !== undefined) {
let data82 = data79.databaseId
if (typeof data82 === 'string') {
if (!formats2.test(data82)) {
const err242 = {
instancePath: instancePath + '/followerDatabase/databaseId',
schemaPath: '#/properties/followerDatabase/properties/databaseId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err242]
} else {
vErrors.push(err242)
}

}
} else {
const err243 = {
instancePath: instancePath + '/followerDatabase/databaseId',
schemaPath: '#/properties/followerDatabase/properties/databaseId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err243]
} else {
vErrors.push(err243)
}

}
}
if (data79.lastModified !== undefined) {
let data83 = data79.lastModified
if (!(typeof data83 == 'number' && isFinite(data83))) {
const err244 = {
instancePath: instancePath + '/followerDatabase/lastModified',
schemaPath: '#/properties/followerDatabase/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err244]
} else {
vErrors.push(err244)
}

}
}
if (data79.touched !== undefined) {
if (typeof data79.touched !== 'boolean') {
const err245 = {
instancePath: instancePath + '/followerDatabase/touched',
schemaPath: '#/properties/followerDatabase/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
if (vErrors === null) {
vErrors = [err245]
} else {
vErrors.push(err245)
}

}
}
if (data79.version !== undefined) {
let data85 = data79.version
if (
!(
typeof data85 == 'number' &&
!(data85 % 1) &&
!isNaN(data85) &&
isFinite(data85)
)
) {
const err246 = {
instancePath: instancePath + '/followerDatabase/version',
schemaPath: '#/properties/followerDatabase/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err246]
} else {
vErrors.push(err246)
}

}
if (typeof data85 == 'number' && isFinite(data85)) {
if (data85 < 0 || isNaN(data85)) {
const err247 = {
instancePath: instancePath + '/followerDatabase/version',
schemaPath: '#/properties/followerDatabase/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err247]
} else {
vErrors.push(err247)
}

}
}
}
} else {
const err248 = {
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err248]
} else {
vErrors.push(err248)
}

}
}
if (data.router !== undefined) {
let data86 = data.router
if (data86 && typeof data86 == 'object' && !Array.isArray(data86)) {
if (data86.id === undefined) {
const err249 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err249]
} else {
vErrors.push(err249)
}

}
if (data86.appId === undefined) {
const err250 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'appId' },
message: "must have required property '" + 'appId' + "'"
}
if (vErrors === null) {
vErrors = [err250]
} else {
vErrors.push(err250)
}

}
if (data86.routerMac === undefined) {
const err251 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'routerMac' },
message: "must have required property '" + 'routerMac' + "'"
}
if (vErrors === null) {
vErrors = [err251]
} else {
vErrors.push(err251)
}

}
if (data86.ipAddress === undefined) {
const err252 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'ipAddress' },
message: "must have required property '" + 'ipAddress' + "'"
}
if (vErrors === null) {
vErrors = [err252]
} else {
vErrors.push(err252)
}

}
if (data86.mondayTimesAndDurations === undefined) {
const err253 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'mondayTimesAndDurations' },
message: "must have required property '" + 'mondayTimesAndDurations' + "'"
}
if (vErrors === null) {
vErrors = [err253]
} else {
vErrors.push(err253)
}

}
if (data86.tuesdayTimesAndDurations === undefined) {
const err254 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'tuesdayTimesAndDurations' },
message: "must have required property '" + 'tuesdayTimesAndDurations' + "'"
}
if (vErrors === null) {
vErrors = [err254]
} else {
vErrors.push(err254)
}

}
if (data86.wednesdayTimesAndDurations === undefined) {
const err255 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'wednesdayTimesAndDurations' },
message: "must have required property '" + 'wednesdayTimesAndDurations' +
"'"
}
if (vErrors === null) {
vErrors = [err255]
} else {
vErrors.push(err255)
}

}
if (data86.thursdayTimesAndDurations === undefined) {
const err256 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'thursdayTimesAndDurations' },
message: "must have required property '" + 'thursdayTimesAndDurations' +
"'"
}
if (vErrors === null) {
vErrors = [err256]
} else {
vErrors.push(err256)
}

}
if (data86.fridayTimesAndDurations === undefined) {
const err257 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'fridayTimesAndDurations' },
message: "must have required property '" + 'fridayTimesAndDurations' + "'"
}
if (vErrors === null) {
vErrors = [err257]
} else {
vErrors.push(err257)
}

}
if (data86.saturdayTimesAndDurations === undefined) {
const err258 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'saturdayTimesAndDurations' },
message: "must have required property '" + 'saturdayTimesAndDurations' +
"'"
}
if (vErrors === null) {
vErrors = [err258]
} else {
vErrors.push(err258)
}

}
if (data86.sundayTimesAndDurations === undefined) {
const err259 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'sundayTimesAndDurations' },
message: "must have required property '" + 'sundayTimesAndDurations' + "'"
}
if (vErrors === null) {
vErrors = [err259]
} else {
vErrors.push(err259)
}

}
if (data86.version === undefined) {
const err260 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'version' },
message: "must have required property '" + 'version' + "'"
}
if (vErrors === null) {
vErrors = [err260]
} else {
vErrors.push(err260)
}

}
if (data86.lastModified === undefined) {
const err261 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err261]
} else {
vErrors.push(err261)
}

}
if (data86.touched === undefined) {
const err262 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'touched' },
message: "must have required property '" + 'touched' + "'"
}
if (vErrors === null) {
vErrors = [err262]
} else {
vErrors.push(err262)
}

}
if (data86.status === undefined) {
const err263 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'status' },
message: "must have required property '" + 'status' + "'"
}
if (vErrors === null) {
vErrors = [err263]
} else {
vErrors.push(err263)
}

}
if (data86.id !== undefined) {
let data87 = data86.id
if (typeof data87 === 'string') {
if (!formats2.test(data87)) {
const err264 = {
instancePath: instancePath + '/router/id',
schemaPath: '#/properties/router/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err264]
} else {
vErrors.push(err264)
}

}
} else {
const err265 = {
instancePath: instancePath + '/router/id',
schemaPath: '#/properties/router/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err265]
} else {
vErrors.push(err265)
}

}
}
if (data86.appId !== undefined) {
let data88 = data86.appId
if (typeof data88 === 'string') {
if (!formats2.test(data88)) {
const err266 = {
instancePath: instancePath + '/router/appId',
schemaPath: '#/properties/router/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err266]
} else {
vErrors.push(err266)
}

}
} else {
const err267 = {
instancePath: instancePath + '/router/appId',
schemaPath: '#/properties/router/properties/appId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err267]
} else {
vErrors.push(err267)
}

}
}
if (data86.routerMac !== undefined) {
let data89 = data86.routerMac
if (typeof data89 === 'string') {
if (!pattern1.test(data89)) {
const err268 = {
instancePath: instancePath + '/router/routerMac',
schemaPath: '#/properties/router/properties/routerMac/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$'},
 message: "Must_be_a_valid_MAC_address"
}
if (vErrors === null) {
vErrors = [err268]
} else {
vErrors.push(err268)
}

}
if (!formats102(data89)) {
const err269 = {
instancePath: instancePath + '/router/routerMac',
schemaPath: '#/properties/router/properties/routerMac/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_MAC_address"
}
if (vErrors === null) {
vErrors = [err269]
} else {
vErrors.push(err269)
}

}
} else {
const err270 = {
instancePath: instancePath + '/router/routerMac',
schemaPath: '#/properties/router/properties/routerMac/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err270]
} else {
vErrors.push(err270)
}

}
}
if (data86.ipAddress !== undefined) {
let data90 = data86.ipAddress
if (typeof data90 === 'string') {
if (!formats104.test(data90)) {
const err271 = {
instancePath: instancePath + '/router/ipAddress',
schemaPath: '#/properties/router/properties/ipAddress/format',
keyword: 'format',
params: { format: 'ipv4' },
 message: "Must_be_a_valid_IP_address"
}
if (vErrors === null) {
vErrors = [err271]
} else {
vErrors.push(err271)
}

}
} else {
const err272 = {
instancePath: instancePath + '/router/ipAddress',
schemaPath: '#/properties/router/properties/ipAddress/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err272]
} else {
vErrors.push(err272)
}

}
}
if (data86.mondayTimesAndDurations !== undefined) {
let data91 = data86.mondayTimesAndDurations
if (typeof data91 === 'string') {
if (!pattern2.test(data91)) {
const err273 = {
instancePath: instancePath + '/router/mondayTimesAndDurations',
schemaPath: '#/properties/router/properties/mondayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err273]
} else {
vErrors.push(err273)
}

}
if (!formats102(data91)) {
const err274 = {
instancePath: instancePath + '/router/mondayTimesAndDurations',
schemaPath: '#/properties/router/properties/mondayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err274]
} else {
vErrors.push(err274)
}

}
} else {
const err275 = {
instancePath: instancePath + '/router/mondayTimesAndDurations',
schemaPath: '#/properties/router/properties/mondayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err275]
} else {
vErrors.push(err275)
}

}
}
if (data86.tuesdayTimesAndDurations !== undefined) {
let data92 = data86.tuesdayTimesAndDurations
if (typeof data92 === 'string') {
if (!pattern2.test(data92)) {
const err276 = {
instancePath: instancePath + '/router/tuesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/tuesdayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err276]
} else {
vErrors.push(err276)
}

}
if (!formats102(data92)) {
const err277 = {
instancePath: instancePath + '/router/tuesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/tuesdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err277]
} else {
vErrors.push(err277)
}

}
} else {
const err278 = {
instancePath: instancePath + '/router/tuesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/tuesdayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err278]
} else {
vErrors.push(err278)
}

}
}
if (data86.wednesdayTimesAndDurations !== undefined) {
let data93 = data86.wednesdayTimesAndDurations
if (typeof data93 === 'string') {
if (!pattern2.test(data93)) {
const err279 = {
instancePath: instancePath + '/router/wednesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/wednesdayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err279]
} else {
vErrors.push(err279)
}

}
if (!formats102(data93)) {
const err280 = {
instancePath: instancePath + '/router/wednesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/wednesdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err280]
} else {
vErrors.push(err280)
}

}
} else {
const err281 = {
instancePath: instancePath + '/router/wednesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/wednesdayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err281]
} else {
vErrors.push(err281)
}

}
}
if (data86.thursdayTimesAndDurations !== undefined) {
let data94 = data86.thursdayTimesAndDurations
if (typeof data94 === 'string') {
if (!pattern2.test(data94)) {
const err282 = {
instancePath: instancePath + '/router/thursdayTimesAndDurations',
schemaPath: '#/properties/router/properties/thursdayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err282]
} else {
vErrors.push(err282)
}

}
if (!formats102(data94)) {
const err283 = {
instancePath: instancePath + '/router/thursdayTimesAndDurations',
schemaPath: '#/properties/router/properties/thursdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err283]
} else {
vErrors.push(err283)
}

}
} else {
const err284 = {
instancePath: instancePath + '/router/thursdayTimesAndDurations',
schemaPath: '#/properties/router/properties/thursdayTimesAndDurations/type',
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
if (data86.fridayTimesAndDurations !== undefined) {
let data95 = data86.fridayTimesAndDurations
if (typeof data95 === 'string') {
if (!pattern2.test(data95)) {
const err285 = {
instancePath: instancePath + '/router/fridayTimesAndDurations',
schemaPath: '#/properties/router/properties/fridayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err285]
} else {
vErrors.push(err285)
}

}
if (!formats102(data95)) {
const err286 = {
instancePath: instancePath + '/router/fridayTimesAndDurations',
schemaPath: '#/properties/router/properties/fridayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err286]
} else {
vErrors.push(err286)
}

}
} else {
const err287 = {
instancePath: instancePath + '/router/fridayTimesAndDurations',
schemaPath: '#/properties/router/properties/fridayTimesAndDurations/type',
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
if (data86.saturdayTimesAndDurations !== undefined) {
let data96 = data86.saturdayTimesAndDurations
if (typeof data96 === 'string') {
if (!pattern2.test(data96)) {
const err288 = {
instancePath: instancePath + '/router/saturdayTimesAndDurations',
schemaPath: '#/properties/router/properties/saturdayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err288]
} else {
vErrors.push(err288)
}

}
if (!formats102(data96)) {
const err289 = {
instancePath: instancePath + '/router/saturdayTimesAndDurations',
schemaPath: '#/properties/router/properties/saturdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err289]
} else {
vErrors.push(err289)
}

}
} else {
const err290 = {
instancePath: instancePath + '/router/saturdayTimesAndDurations',
schemaPath: '#/properties/router/properties/saturdayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err290]
} else {
vErrors.push(err290)
}

}
}
if (data86.sundayTimesAndDurations !== undefined) {
let data97 = data86.sundayTimesAndDurations
if (typeof data97 === 'string') {
if (!pattern2.test(data97)) {
const err291 = {
instancePath: instancePath + '/router/sundayTimesAndDurations',
schemaPath: '#/properties/router/properties/sundayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err291]
} else {
vErrors.push(err291)
}

}
if (!formats102(data97)) {
const err292 = {
instancePath: instancePath + '/router/sundayTimesAndDurations',
schemaPath: '#/properties/router/properties/sundayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"
}
if (vErrors === null) {
vErrors = [err292]
} else {
vErrors.push(err292)
}

}
} else {
const err293 = {
instancePath: instancePath + '/router/sundayTimesAndDurations',
schemaPath: '#/properties/router/properties/sundayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err293]
} else {
vErrors.push(err293)
}

}
}
if (data86.version !== undefined) {
let data98 = data86.version
if (
!(
typeof data98 == 'number' &&
!(data98 % 1) &&
!isNaN(data98) &&
isFinite(data98)
)
) {
const err294 = {
instancePath: instancePath + '/router/version',
schemaPath: '#/properties/router/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err294]
} else {
vErrors.push(err294)
}

}
if (typeof data98 == 'number' && isFinite(data98)) {
if (data98 < 0 || isNaN(data98)) {
const err295 = {
instancePath: instancePath + '/router/version',
schemaPath: '#/properties/router/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err295]
} else {
vErrors.push(err295)
}

}
}
}
if (data86.lastModified !== undefined) {
let data99 = data86.lastModified
if (!(typeof data99 == 'number' && isFinite(data99))) {
const err296 = {
instancePath: instancePath + '/router/lastModified',
schemaPath: '#/properties/router/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err296]
} else {
vErrors.push(err296)
}

}
}
if (data86.touched !== undefined) {
if (typeof data86.touched !== 'boolean') {
const err297 = {
instancePath: instancePath + '/router/touched',
schemaPath: '#/properties/router/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
if (vErrors === null) {
vErrors = [err297]
} else {
vErrors.push(err297)
}

}
}
if (data86.status !== undefined) {
let data101 = data86.status
if (
!(
typeof data101 == 'number' &&
!(data101 % 1) &&
!isNaN(data101) &&
isFinite(data101)
)
) {
const err298 = {
instancePath: instancePath + '/router/status',
schemaPath: '#/properties/router/properties/status/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err298]
} else {
vErrors.push(err298)
}

}
if (typeof data101 == 'number' && isFinite(data101)) {
if (data101 > 2 || isNaN(data101)) {
const err299 = {
instancePath: instancePath + '/router/status',
schemaPath: '#/properties/router/properties/status/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 2 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
if (vErrors === null) {
vErrors = [err299]
} else {
vErrors.push(err299)
}

}
}
}
} else {
const err300 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err300]
} else {
vErrors.push(err300)
}

}
}
if (data.followerDatabaseCompletion !== undefined) {
let data102 = data.followerDatabaseCompletion
if (data102 && typeof data102 == 'object' && !Array.isArray(data102)) {
if (data102.id === undefined) {
const err301 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err301]
} else {
vErrors.push(err301)
}

}
if (data102.followerRequestId === undefined) {
const err302 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: 'followerRequestId' },
message: "must have required property '" + 'followerRequestId' + "'"
}
if (vErrors === null) {
vErrors = [err302]
} else {
vErrors.push(err302)
}

}
if (data102.itemId === undefined) {
const err303 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: 'itemId' },
message: "must have required property '" + 'itemId' + "'"
}
if (vErrors === null) {
vErrors = [err303]
} else {
vErrors.push(err303)
}

}
if (data102.parentItemId === undefined) {
const err304 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: 'parentItemId' },
message: "must have required property '" + 'parentItemId' + "'"
}
if (vErrors === null) {
vErrors = [err304]
} else {
vErrors.push(err304)
}

}
if (data102.itemLevel === undefined) {
const err305 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: 'itemLevel' },
message: "must have required property '" + 'itemLevel' + "'"
}
if (vErrors === null) {
vErrors = [err305]
} else {
vErrors.push(err305)
}

}
if (data102.lastModified === undefined) {
const err306 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err306]
} else {
vErrors.push(err306)
}

}
if (data102.id !== undefined) {
let data103 = data102.id
if (typeof data103 === 'string') {
if (!formats2.test(data103)) {
const err307 = {
instancePath: instancePath + '/followerDatabaseCompletion/id',
schemaPath: '#/properties/followerDatabaseCompletion/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err307]
} else {
vErrors.push(err307)
}

}
} else {
const err308 = {
instancePath: instancePath + '/followerDatabaseCompletion/id',
schemaPath: '#/properties/followerDatabaseCompletion/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err308]
} else {
vErrors.push(err308)
}

}
}
if (data102.followerRequestId !== undefined) {
let data104 = data102.followerRequestId
if (typeof data104 === 'string') {
if (!formats2.test(data104)) {
const err309 = {
instancePath: instancePath + '/followerDatabaseCompletion/followerRequestId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/followerRequestId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err309]
} else {
vErrors.push(err309)
}

}
} else {
const err310 = {
instancePath: instancePath + '/followerDatabaseCompletion/followerRequestId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/followerRequestId/type',
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
if (data102.itemId !== undefined) {
let data105 = data102.itemId
if (typeof data105 === 'string') {
if (!formats2.test(data105)) {
const err311 = {
instancePath: instancePath + '/followerDatabaseCompletion/itemId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err311]
} else {
vErrors.push(err311)
}

}
} else {
const err312 = {
instancePath: instancePath + '/followerDatabaseCompletion/itemId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err312]
} else {
vErrors.push(err312)
}

}
}
if (data102.parentItemId !== undefined) {
let data106 = data102.parentItemId
if (typeof data106 === 'string') {
if (!formats2.test(data106)) {
const err313 = {
instancePath: instancePath + '/followerDatabaseCompletion/parentItemId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/parentItemId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err313]
} else {
vErrors.push(err313)
}

}
} else {
const err314 = {
instancePath: instancePath + '/followerDatabaseCompletion/parentItemId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/parentItemId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err314]
} else {
vErrors.push(err314)
}

}
}
if (data102.itemLevel !== undefined) {
let data107 = data102.itemLevel
if (
!(
typeof data107 == 'number' &&
!(data107 % 1) &&
!isNaN(data107) &&
isFinite(data107)
)
) {
const err315 = {
instancePath: instancePath + '/followerDatabaseCompletion/itemLevel',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemLevel/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err315]
} else {
vErrors.push(err315)
}

}
if (typeof data107 == 'number' && isFinite(data107)) {
if (data107 > 9 || isNaN(data107)) {
const err316 = {
instancePath: instancePath + '/followerDatabaseCompletion/itemLevel',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemLevel/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 9 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
if (vErrors === null) {
vErrors = [err316]
} else {
vErrors.push(err316)
}

}
if (data107 < 0 || isNaN(data107)) {
const err317 = {
instancePath: instancePath + '/followerDatabaseCompletion/itemLevel',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemLevel/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err317]
} else {
vErrors.push(err317)
}

}
}
}
if (data102.lastModified !== undefined) {
let data108 = data102.lastModified
if (!(typeof data108 == 'number' && isFinite(data108))) {
const err318 = {
instancePath: instancePath + '/followerDatabaseCompletion/lastModified',
schemaPath: '#/properties/followerDatabaseCompletion/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err318]
} else {
vErrors.push(err318)
}

}
}
} else {
const err319 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err319]
} else {
vErrors.push(err319)
}

}
}
if (data.media !== undefined) {
let data109 = data.media
if (data109 && typeof data109 == 'object' && !Array.isArray(data109)) {
if (data109.id === undefined) {
const err320 = {
instancePath: instancePath + '/media',
schemaPath: '#/properties/media/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err320]
} else {
vErrors.push(err320)
}

}
if (data109.size === undefined) {
const err321 = {
instancePath: instancePath + '/media',
schemaPath: '#/properties/media/required',
keyword: 'required',
params: { missingProperty: 'size' },
message: "must have required property '" + 'size' + "'"
}
if (vErrors === null) {
vErrors = [err321]
} else {
vErrors.push(err321)
}

}
if (data109.data === undefined) {
const err322 = {
instancePath: instancePath + '/media',
schemaPath: '#/properties/media/required',
keyword: 'required',
params: { missingProperty: 'data' },
message: "must have required property '" + 'data' + "'"
}
if (vErrors === null) {
vErrors = [err322]
} else {
vErrors.push(err322)
}

}
if (data109.appId === undefined) {
const err323 = {
instancePath: instancePath + '/media',
schemaPath: '#/properties/media/required',
keyword: 'required',
params: { missingProperty: 'appId' },
message: "must have required property '" + 'appId' + "'"
}
if (vErrors === null) {
vErrors = [err323]
} else {
vErrors.push(err323)
}

}
if (data109.touched === undefined) {
const err324 = {
instancePath: instancePath + '/media',
schemaPath: '#/properties/media/required',
keyword: 'required',
params: { missingProperty: 'touched' },
message: "must have required property '" + 'touched' + "'"
}
if (vErrors === null) {
vErrors = [err324]
} else {
vErrors.push(err324)
}

}
if (data109.id !== undefined) {
let data110 = data109.id
if (typeof data110 === 'string') {
if (!formats2.test(data110)) {
const err325 = {
instancePath: instancePath + '/media/id',
schemaPath: '#/properties/media/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err325]
} else {
vErrors.push(err325)
}

}
} else {
const err326 = {
instancePath: instancePath + '/media/id',
schemaPath: '#/properties/media/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err326]
} else {
vErrors.push(err326)
}

}
}
if (data109.size !== undefined) {
let data111 = data109.size
if (
!(
typeof data111 == 'number' &&
!(data111 % 1) &&
!isNaN(data111) &&
isFinite(data111)
)
) {
const err327 = {
instancePath: instancePath + '/media/size',
schemaPath: '#/properties/media/properties/size/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err327]
} else {
vErrors.push(err327)
}

}
if (typeof data111 == 'number' && isFinite(data111)) {
if (data111 < 0 || isNaN(data111)) {
const err328 = {
instancePath: instancePath + '/media/size',
schemaPath: '#/properties/media/properties/size/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err328]
} else {
vErrors.push(err328)
}

}
}
}
if (data109.data !== undefined) {
let data112 = data109.data
if (typeof data112 === 'string') {
if (func4(data112) > 8000) {
const err329 = {
instancePath: instancePath + '/media/data',
schemaPath: '#/properties/media/properties/data/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"
}
if (vErrors === null) {
vErrors = [err329]
} else {
vErrors.push(err329)
}

}
} else {
const err330 = {
instancePath: instancePath + '/media/data',
schemaPath: '#/properties/media/properties/data/type',
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
if (data109.appId !== undefined) {
let data113 = data109.appId
if (typeof data113 === 'string') {
if (!formats2.test(data113)) {
const err331 = {
instancePath: instancePath + '/media/appId',
schemaPath: '#/properties/media/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err331]
} else {
vErrors.push(err331)
}

}
} else {
const err332 = {
instancePath: instancePath + '/media/appId',
schemaPath: '#/properties/media/properties/appId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err332]
} else {
vErrors.push(err332)
}

}
}
if (data109.touched !== undefined) {
if (typeof data109.touched !== 'boolean') {
const err333 = {
instancePath: instancePath + '/media/touched',
schemaPath: '#/properties/media/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
if (vErrors === null) {
vErrors = [err333]
} else {
vErrors.push(err333)
}

}
}
} else {
const err334 = {
instancePath: instancePath + '/media',
schemaPath: '#/properties/media/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err334]
} else {
vErrors.push(err334)
}

}
}
} else {
const err335 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err335]
} else {
vErrors.push(err335)
}

}
return vErrors
}
