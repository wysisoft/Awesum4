'use strict'
const schema34 = {
$id: 'syncRequest',
type: 'object',
properties: {
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
lastModified: { default: 1762879447790, type: 'number' },
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
groups: { maxLength: 8000, type: 'string' },
id: {
default: '019a73cd-a2ee-7146-ac1c-398d6acb2fba',
format: 'uuid',
minLength: 36,
type: 'string'
}
},
required: [
'email',
'name',
'uniqueName',
'version',
'lastModified',
'homePageImageType',
'homePageImage',
'authenticationType',
'lang',
'enableNarrator',
'groups',
'id'
]
},
database: {
$id: 'database',
type: 'object',
properties: {
name: { minLength: 1, maxLength: 100, type: 'string' },
lastModified: { default: 1762879447790, type: 'number' },
version: { default: 0, minimum: 0, type: 'integer' },
appId: { format: 'uuid', type: 'string' },
id: {
default: '019a73cd-a2ee-7146-ac1c-3fa80df8cbc5',
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
default: '019a73cd-a2ef-751c-8fbf-df931f81397a',
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
lastModified: { default: 1762879447791, type: 'number' },
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
default: '019a73cd-a2ef-751c-8fbf-d858f77eba66',
format: 'uuid',
type: 'string'},
databaseId: {
default: '00000000-0000-0000-0000-000000000000',
format: 'uuid',
type: 'string'},
lastModified: { default: 1762879447791, type: 'number' },
version: { default: 0, minimum: 0, type: 'integer' }
},
required: [
'followerRequestId',
'id',
'databaseId',
'lastModified',
'version'
]
},
router: {
$id: 'router',
type: 'object',
properties: {
id: {
default: '019a73cd-a2ef-751c-8fbf-ebed4011b1cc',
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
lastModified: { default: 1762879447791, type: 'number' },
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
'status'
]
},
followerDatabaseCompletion: {
$id: 'followerDatabaseCompletion',
type: 'object',
properties: {
id: {
default: '019a73cd-a2ef-751c-8fbf-e4c01016ed84',
format: 'uuid',
type: 'string'},
followerRequestId: { format: 'uuid', type: 'string' },
description: { maxLength: 1000, type: 'string' },
itemId: { format: 'uuid', type: 'string' },
parentItemId: { format: 'uuid', type: 'string' },
itemLevel: { minimum: 0, maximum: 8, type: 'integer' },
lastModified: { type: 'number' },
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
'version'
]
},
media: {
$id: 'media',
type: 'object',
properties: {
id: {
default: '019a73cd-a2ef-751c-8fbf-e0c3f7fe8316',
format: 'uuid',
type: 'string'},
size: { minimum: 0, type: 'integer' },
data: { maxLength: 8000, type: 'string' },
appId: { format: 'uuid', type: 'string' },
lastModified: { type: 'number' }
},
required: ['id', 'size', 'data', 'appId', 'lastModified']
},
deletion: {
$id: 'deletion',
type: 'object',
properties: {
id: { format: 'uuid', type: 'string' },
level: { minimum: 0, maximum: 8, type: 'integer' }
},
required: ['id', 'level']
}
}
}
import transform from 'ajv-keywords/dist/definitions/transform'
const func2 = transform.transform.toLowerCase
const func3 = transform.transform.trim
import * as ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = ucs2length.default;
const formats0 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import * as formats from 'ajv-formats/dist/formats'
const formats94 = formats.fullFormats.regex as any
const formats96 = /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/
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
if (data.app !== undefined) {
let data0 = data.app
if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
if (data0.email === undefined) {
const err0 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'email' },
message: "must have required property '" + 'email' + "'"
}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
if (data0.name === undefined) {
const err1 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'name' },
message: "must have required property '" + 'name' + "'"
}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
if (data0.uniqueName === undefined) {
const err2 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'uniqueName' },
message: "must have required property '" + 'uniqueName' + "'"
}
if (vErrors === null) {
vErrors = [err2]
} else {
vErrors.push(err2)
}

}
if (data0.version === undefined) {
const err3 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'version' },
message: "must have required property '" + 'version' + "'"
}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
if (data0.lastModified === undefined) {
const err4 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
if (data0.homePageImageType === undefined) {
const err5 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'homePageImageType' },
message: "must have required property '" + 'homePageImageType' + "'"
}
if (vErrors === null) {
vErrors = [err5]
} else {
vErrors.push(err5)
}

}
if (data0.homePageImage === undefined) {
const err6 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'homePageImage' },
message: "must have required property '" + 'homePageImage' + "'"
}
if (vErrors === null) {
vErrors = [err6]
} else {
vErrors.push(err6)
}

}
if (data0.authenticationType === undefined) {
const err7 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'authenticationType' },
message: "must have required property '" + 'authenticationType' + "'"
}
if (vErrors === null) {
vErrors = [err7]
} else {
vErrors.push(err7)
}

}
if (data0.lang === undefined) {
const err8 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'lang' },
message: "must have required property '" + 'lang' + "'"
}
if (vErrors === null) {
vErrors = [err8]
} else {
vErrors.push(err8)
}

}
if (data0.enableNarrator === undefined) {
const err9 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'enableNarrator' },
message: "must have required property '" + 'enableNarrator' + "'"
}
if (vErrors === null) {
vErrors = [err9]
} else {
vErrors.push(err9)
}

}
if (data0.groups === undefined) {
const err10 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'groups' },
message: "must have required property '" + 'groups' + "'"
}
if (vErrors === null) {
vErrors = [err10]
} else {
vErrors.push(err10)
}

}
if (data0.id === undefined) {
const err11 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err11]
} else {
vErrors.push(err11)
}

}
if (data0.email !== undefined) {
let data1 = data0.email
if (typeof data1 == 'string' && data0 !== undefined) {
data1 = func2(func3(data1))
data0['email'] = data1
}
if (typeof data1 === 'string') {
if (func4(data1) > 100) {
const err12 = {
instancePath: instancePath + '/app/email',
schemaPath: '#/properties/app/properties/email/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err12]
} else {
vErrors.push(err12)
}

}
if (func4(data1) < 5) {
const err13 = {
instancePath: instancePath + '/app/email',
schemaPath: '#/properties/app/properties/email/minLength',
keyword: 'minLength',
params: { limit: 5 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err13]
} else {
vErrors.push(err13)
}

}
if (!formats0.test(data1)) {
const err14 = {
instancePath: instancePath + '/app/email',
schemaPath: '#/properties/app/properties/email/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"}
if (vErrors === null) {
vErrors = [err14]
} else {
vErrors.push(err14)
}

}
} else {
const err15 = {
instancePath: instancePath + '/app/email',
schemaPath: '#/properties/app/properties/email/type',
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
if (data0.name !== undefined) {
let data2 = data0.name
if (typeof data2 == 'string' && data0 !== undefined) {
data2 = func2(func3(data2))
data0['name'] = data2
}
if (typeof data2 === 'string') {
if (func4(data2) > 100) {
const err16 = {
instancePath: instancePath + '/app/name',
schemaPath: '#/properties/app/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err16]
} else {
vErrors.push(err16)
}

}
if (func4(data2) < 1) {
const err17 = {
instancePath: instancePath + '/app/name',
schemaPath: '#/properties/app/properties/name/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err17]
} else {
vErrors.push(err17)
}

}
} else {
const err18 = {
instancePath: instancePath + '/app/name',
schemaPath: '#/properties/app/properties/name/type',
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
if (data0.uniqueName !== undefined) {
let data3 = data0.uniqueName
if (typeof data3 == 'string' && data0 !== undefined) {
data3 = func2(func3(data3))
data0['uniqueName'] = data3
}
if (typeof data3 === 'string') {
if (func4(data3) > 100) {
const err19 = {
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err19]
} else {
vErrors.push(err19)
}

}
if (func4(data3) < 1) {
const err20 = {
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err20]
} else {
vErrors.push(err20)
}

}
if (!pattern0.test(data3)) {
const err21 = {
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/pattern',
keyword: 'pattern',
params: { pattern: '/^(?!API$|I$).+$/i' },
 message: "Unique_name_contains_reserved_words"}
if (vErrors === null) {
vErrors = [err21]
} else {
vErrors.push(err21)
}

}
if (
!await serverAndClientFunctions.isNameGloballyUnique(data,data3)
) {
const err22 = {
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/isNameGloballyUnique',
keyword: 'isNameGloballyUnique',
params: {},
 message: "Not_Globally_Unique"}
if (vErrors === null) {
vErrors = [err22]
} else {
vErrors.push(err22)
}

}
} else {
const err23 = {
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err23]
} else {
vErrors.push(err23)
}

}
}
if (data0.version !== undefined) {
let data4 = data0.version
if (
!(
typeof data4 == 'number' &&
!(data4 % 1) &&
!isNaN(data4) &&
isFinite(data4)
)
) {
const err24 = {
instancePath: instancePath + '/app/version',
schemaPath: '#/properties/app/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err24]
} else {
vErrors.push(err24)
}

}
if (typeof data4 == 'number' && isFinite(data4)) {
if (data4 < 0 || isNaN(data4)) {
const err25 = {
instancePath: instancePath + '/app/version',
schemaPath: '#/properties/app/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err25]
} else {
vErrors.push(err25)
}

}
}
}
if (data0.lastModified !== undefined) {
let data5 = data0.lastModified
if (!(typeof data5 == 'number' && isFinite(data5))) {
const err26 = {
instancePath: instancePath + '/app/lastModified',
schemaPath: '#/properties/app/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
if (vErrors === null) {
vErrors = [err26]
} else {
vErrors.push(err26)
}

}
}
if (data0.homePageImageType !== undefined) {
let data6 = data0.homePageImageType
if (
!(
typeof data6 == 'number' &&
!(data6 % 1) &&
!isNaN(data6) &&
isFinite(data6)
)
) {
const err27 = {
instancePath: instancePath + '/app/homePageImageType',
schemaPath: '#/properties/app/properties/homePageImageType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err27]
} else {
vErrors.push(err27)
}

}
if (typeof data6 == 'number' && isFinite(data6)) {
if (data6 > 3 || isNaN(data6)) {
const err28 = {
instancePath: instancePath + '/app/homePageImageType',
schemaPath: '#/properties/app/properties/homePageImageType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err28]
} else {
vErrors.push(err28)
}

}
if (data6 < 0 || isNaN(data6)) {
const err29 = {
instancePath: instancePath + '/app/homePageImageType',
schemaPath: '#/properties/app/properties/homePageImageType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err29]
} else {
vErrors.push(err29)
}

}
}
}
if (data0.homePageImage !== undefined) {
let data7 = data0.homePageImage
if (typeof data7 === 'string') {
if (!formats2.test(data7)) {
const err30 = {
instancePath: instancePath + '/app/homePageImage',
schemaPath: '#/properties/app/properties/homePageImage/format',
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
instancePath: instancePath + '/app/homePageImage',
schemaPath: '#/properties/app/properties/homePageImage/type',
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
if (data0.authenticationType !== undefined) {
let data8 = data0.authenticationType
if (typeof data8 == 'string' && data0 !== undefined) {
data8 = func2(func3(data8))
data0['authenticationType'] = data8
}
if (typeof data8 === 'string') {
if (func4(data8) > 100) {
const err32 = {
instancePath: instancePath + '/app/authenticationType',
schemaPath: '#/properties/app/properties/authenticationType/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err32]
} else {
vErrors.push(err32)
}

}
if (func4(data8) < 1) {
const err33 = {
instancePath: instancePath + '/app/authenticationType',
schemaPath: '#/properties/app/properties/authenticationType/minLength',
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
instancePath: instancePath + '/app/authenticationType',
schemaPath: '#/properties/app/properties/authenticationType/type',
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
if (data0.lang !== undefined) {
let data9 = data0.lang
if (typeof data9 == 'string' && data0 !== undefined) {
data9 = func2(func3(data9))
data0['lang'] = data9
}
if (typeof data9 === 'string') {
if (func4(data9) > 100) {
const err35 = {
instancePath: instancePath + '/app/lang',
schemaPath: '#/properties/app/properties/lang/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err35]
} else {
vErrors.push(err35)
}

}
if (func4(data9) < 1) {
const err36 = {
instancePath: instancePath + '/app/lang',
schemaPath: '#/properties/app/properties/lang/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err36]
} else {
vErrors.push(err36)
}

}
} else {
const err37 = {
instancePath: instancePath + '/app/lang',
schemaPath: '#/properties/app/properties/lang/type',
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
if (data0.enableNarrator !== undefined) {
if (typeof data0.enableNarrator !== 'boolean') {
const err38 = {
instancePath: instancePath + '/app/enableNarrator',
schemaPath: '#/properties/app/properties/enableNarrator/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
if (vErrors === null) {
vErrors = [err38]
} else {
vErrors.push(err38)
}

}
}
if (data0.groups !== undefined) {
let data11 = data0.groups
if (typeof data11 === 'string') {
if (func4(data11) > 8000) {
const err39 = {
instancePath: instancePath + '/app/groups',
schemaPath: '#/properties/app/properties/groups/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"}
if (vErrors === null) {
vErrors = [err39]
} else {
vErrors.push(err39)
}

}
} else {
const err40 = {
instancePath: instancePath + '/app/groups',
schemaPath: '#/properties/app/properties/groups/type',
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
if (data0.id !== undefined) {
let data12 = data0.id
if (typeof data12 === 'string') {
if (func4(data12) < 36) {
const err41 = {
instancePath: instancePath + '/app/id',
schemaPath: '#/properties/app/properties/id/minLength',
keyword: 'minLength',
params: { limit: 36 },
 message: "Must_be_36_characters"}
if (vErrors === null) {
vErrors = [err41]
} else {
vErrors.push(err41)
}

}
if (!formats2.test(data12)) {
const err42 = {
instancePath: instancePath + '/app/id',
schemaPath: '#/properties/app/properties/id/format',
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
instancePath: instancePath + '/app/id',
schemaPath: '#/properties/app/properties/id/type',
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
} else {
const err44 = {
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err44]
} else {
vErrors.push(err44)
}

}
}
if (data.database !== undefined) {
let data13 = data.database
if (data13 && typeof data13 == 'object' && !Array.isArray(data13)) {
if (data13.name === undefined) {
const err45 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'name' },
message: "must have required property '" + 'name' + "'"
}
if (vErrors === null) {
vErrors = [err45]
} else {
vErrors.push(err45)
}

}
if (data13.lastModified === undefined) {
const err46 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err46]
} else {
vErrors.push(err46)
}

}
if (data13.version === undefined) {
const err47 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'version' },
message: "must have required property '" + 'version' + "'"
}
if (vErrors === null) {
vErrors = [err47]
} else {
vErrors.push(err47)
}

}
if (data13.appId === undefined) {
const err48 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'appId' },
message: "must have required property '" + 'appId' + "'"
}
if (vErrors === null) {
vErrors = [err48]
} else {
vErrors.push(err48)
}

}
if (data13.id === undefined) {
const err49 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err49]
} else {
vErrors.push(err49)
}

}
if (data13.order === undefined) {
const err50 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'order' },
message: "must have required property '" + 'order' + "'"
}
if (vErrors === null) {
vErrors = [err50]
} else {
vErrors.push(err50)
}

}
if (data13.homePageIconType === undefined) {
const err51 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'homePageIconType' },
message: "must have required property '" + 'homePageIconType' + "'"
}
if (vErrors === null) {
vErrors = [err51]
} else {
vErrors.push(err51)
}

}
if (data13.homePageIcon === undefined) {
const err52 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: 'homePageIcon' },
message: "must have required property '" + 'homePageIcon' + "'"
}
if (vErrors === null) {
vErrors = [err52]
} else {
vErrors.push(err52)
}

}
if (data13.name !== undefined) {
let data14 = data13.name
if (typeof data14 === 'string') {
if (func4(data14) > 100) {
const err53 = {
instancePath: instancePath + '/database/name',
schemaPath: '#/properties/database/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err53]
} else {
vErrors.push(err53)
}

}
if (func4(data14) < 1) {
const err54 = {
instancePath: instancePath + '/database/name',
schemaPath: '#/properties/database/properties/name/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err54]
} else {
vErrors.push(err54)
}

}
} else {
const err55 = {
instancePath: instancePath + '/database/name',
schemaPath: '#/properties/database/properties/name/type',
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
if (data13.lastModified !== undefined) {
let data15 = data13.lastModified
if (!(typeof data15 == 'number' && isFinite(data15))) {
const err56 = {
instancePath: instancePath + '/database/lastModified',
schemaPath: '#/properties/database/properties/lastModified/type',
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
if (data13.version !== undefined) {
let data16 = data13.version
if (
!(
typeof data16 == 'number' &&
!(data16 % 1) &&
!isNaN(data16) &&
isFinite(data16)
)
) {
const err57 = {
instancePath: instancePath + '/database/version',
schemaPath: '#/properties/database/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err57]
} else {
vErrors.push(err57)
}

}
if (typeof data16 == 'number' && isFinite(data16)) {
if (data16 < 0 || isNaN(data16)) {
const err58 = {
instancePath: instancePath + '/database/version',
schemaPath: '#/properties/database/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err58]
} else {
vErrors.push(err58)
}

}
}
}
if (data13.appId !== undefined) {
let data17 = data13.appId
if (typeof data17 === 'string') {
if (!formats2.test(data17)) {
const err59 = {
instancePath: instancePath + '/database/appId',
schemaPath: '#/properties/database/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err59]
} else {
vErrors.push(err59)
}

}
} else {
const err60 = {
instancePath: instancePath + '/database/appId',
schemaPath: '#/properties/database/properties/appId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err60]
} else {
vErrors.push(err60)
}

}
}
if (data13.id !== undefined) {
let data18 = data13.id
if (typeof data18 === 'string') {
if (!formats2.test(data18)) {
const err61 = {
instancePath: instancePath + '/database/id',
schemaPath: '#/properties/database/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err61]
} else {
vErrors.push(err61)
}

}
} else {
const err62 = {
instancePath: instancePath + '/database/id',
schemaPath: '#/properties/database/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err62]
} else {
vErrors.push(err62)
}

}
}
if (data13.order !== undefined) {
let data19 = data13.order
if (
!(
typeof data19 == 'number' &&
!(data19 % 1) &&
!isNaN(data19) &&
isFinite(data19)
)
) {
const err63 = {
instancePath: instancePath + '/database/order',
schemaPath: '#/properties/database/properties/order/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err63]
} else {
vErrors.push(err63)
}

}
if (typeof data19 == 'number' && isFinite(data19)) {
if (data19 < 0 || isNaN(data19)) {
const err64 = {
instancePath: instancePath + '/database/order',
schemaPath: '#/properties/database/properties/order/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err64]
} else {
vErrors.push(err64)
}

}
}
}
if (data13.homePageIconType !== undefined) {
let data20 = data13.homePageIconType
if (
!(
typeof data20 == 'number' &&
!(data20 % 1) &&
!isNaN(data20) &&
isFinite(data20)
)
) {
const err65 = {
instancePath: instancePath + '/database/homePageIconType',
schemaPath: '#/properties/database/properties/homePageIconType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err65]
} else {
vErrors.push(err65)
}

}
if (typeof data20 == 'number' && isFinite(data20)) {
if (data20 > 3 || isNaN(data20)) {
const err66 = {
instancePath: instancePath + '/database/homePageIconType',
schemaPath: '#/properties/database/properties/homePageIconType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err66]
} else {
vErrors.push(err66)
}

}
if (data20 < 0 || isNaN(data20)) {
const err67 = {
instancePath: instancePath + '/database/homePageIconType',
schemaPath: '#/properties/database/properties/homePageIconType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err67]
} else {
vErrors.push(err67)
}

}
}
}
if (data13.homePageIcon !== undefined) {
let data21 = data13.homePageIcon
if (typeof data21 === 'string') {
if (!formats2.test(data21)) {
const err68 = {
instancePath: instancePath + '/database/homePageIcon',
schemaPath: '#/properties/database/properties/homePageIcon/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err68]
} else {
vErrors.push(err68)
}

}
} else {
const err69 = {
instancePath: instancePath + '/database/homePageIcon',
schemaPath: '#/properties/database/properties/homePageIcon/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err69]
} else {
vErrors.push(err69)
}

}
}
} else {
const err70 = {
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err70]
} else {
vErrors.push(err70)
}

}
}
if (data.databaseUnit !== undefined) {
let data22 = data.databaseUnit
if (data22 && typeof data22 == 'object' && !Array.isArray(data22)) {
if (data22.name === undefined) {
const err71 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'name' },
message: "must have required property '" + 'name' + "'"
}
if (vErrors === null) {
vErrors = [err71]
} else {
vErrors.push(err71)
}

}
if (data22.order === undefined) {
const err72 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'order' },
message: "must have required property '" + 'order' + "'"
}
if (vErrors === null) {
vErrors = [err72]
} else {
vErrors.push(err72)
}

}
if (data22.lastModified === undefined) {
const err73 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err73]
} else {
vErrors.push(err73)
}

}
if (data22.version === undefined) {
const err74 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'version' },
message: "must have required property '" + 'version' + "'"
}
if (vErrors === null) {
vErrors = [err74]
} else {
vErrors.push(err74)
}

}
if (data22.id === undefined) {
const err75 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err75]
} else {
vErrors.push(err75)
}

}
if (data22.appId === undefined) {
const err76 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'appId' },
message: "must have required property '" + 'appId' + "'"
}
if (vErrors === null) {
vErrors = [err76]
} else {
vErrors.push(err76)
}

}
if (data22.databaseId === undefined) {
const err77 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'databaseId' },
message: "must have required property '" + 'databaseId' + "'"
}
if (vErrors === null) {
vErrors = [err77]
} else {
vErrors.push(err77)
}

}
if (data22.successVideoType === undefined) {
const err78 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'successVideoType' },
message: "must have required property '" + 'successVideoType' + "'"
}
if (vErrors === null) {
vErrors = [err78]
} else {
vErrors.push(err78)
}

}
if (data22.successVideoUrl === undefined) {
const err79 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'successVideoUrl' },
message: "must have required property '" + 'successVideoUrl' + "'"
}
if (vErrors === null) {
vErrors = [err79]
} else {
vErrors.push(err79)
}

}
if (data22.successAnimations === undefined) {
const err80 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'successAnimations' },
message: "must have required property '" + 'successAnimations' + "'"
}
if (vErrors === null) {
vErrors = [err80]
} else {
vErrors.push(err80)
}

}
if (data22.successSound === undefined) {
const err81 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'successSound' },
message: "must have required property '" + 'successSound' + "'"
}
if (vErrors === null) {
vErrors = [err81]
} else {
vErrors.push(err81)
}

}
if (data22.successSoundType === undefined) {
const err82 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'successSoundType' },
message: "must have required property '" + 'successSoundType' + "'"
}
if (vErrors === null) {
vErrors = [err82]
} else {
vErrors.push(err82)
}

}
if (data22.homePageImageType === undefined) {
const err83 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'homePageImageType' },
message: "must have required property '" + 'homePageImageType' + "'"
}
if (vErrors === null) {
vErrors = [err83]
} else {
vErrors.push(err83)
}

}
if (data22.homePageImage === undefined) {
const err84 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'homePageImage' },
message: "must have required property '" + 'homePageImage' + "'"
}
if (vErrors === null) {
vErrors = [err84]
} else {
vErrors.push(err84)
}

}
if (data22.router === undefined) {
const err85 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'router' },
message: "must have required property '" + 'router' + "'"
}
if (vErrors === null) {
vErrors = [err85]
} else {
vErrors.push(err85)
}

}
if (data22.routerTime === undefined) {
const err86 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'routerTime' },
message: "must have required property '" + 'routerTime' + "'"
}
if (vErrors === null) {
vErrors = [err86]
} else {
vErrors.push(err86)
}

}
if (data22.routerTimeImmediate === undefined) {
const err87 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'routerTimeImmediate' },
message: "must have required property '" + 'routerTimeImmediate' + "'"
}
if (vErrors === null) {
vErrors = [err87]
} else {
vErrors.push(err87)
}

}
if (data22.points === undefined) {
const err88 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: 'points' },
message: "must have required property '" + 'points' + "'"
}
if (vErrors === null) {
vErrors = [err88]
} else {
vErrors.push(err88)
}

}
if (data22.name !== undefined) {
let data23 = data22.name
if (typeof data23 === 'string') {
if (func4(data23) > 100) {
const err89 = {
instancePath: instancePath + '/databaseUnit/name',
schemaPath: '#/properties/databaseUnit/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err89]
} else {
vErrors.push(err89)
}

}
if (func4(data23) < 1) {
const err90 = {
instancePath: instancePath + '/databaseUnit/name',
schemaPath: '#/properties/databaseUnit/properties/name/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err90]
} else {
vErrors.push(err90)
}

}
} else {
const err91 = {
instancePath: instancePath + '/databaseUnit/name',
schemaPath: '#/properties/databaseUnit/properties/name/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err91]
} else {
vErrors.push(err91)
}

}
}
if (data22.order !== undefined) {
let data24 = data22.order
if (
!(
typeof data24 == 'number' &&
!(data24 % 1) &&
!isNaN(data24) &&
isFinite(data24)
)
) {
const err92 = {
instancePath: instancePath + '/databaseUnit/order',
schemaPath: '#/properties/databaseUnit/properties/order/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err92]
} else {
vErrors.push(err92)
}

}
if (typeof data24 == 'number' && isFinite(data24)) {
if (data24 < 0 || isNaN(data24)) {
const err93 = {
instancePath: instancePath + '/databaseUnit/order',
schemaPath: '#/properties/databaseUnit/properties/order/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err93]
} else {
vErrors.push(err93)
}

}
}
}
if (data22.lastModified !== undefined) {
let data25 = data22.lastModified
if (!(typeof data25 == 'number' && isFinite(data25))) {
const err94 = {
instancePath: instancePath + '/databaseUnit/lastModified',
schemaPath: '#/properties/databaseUnit/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
if (vErrors === null) {
vErrors = [err94]
} else {
vErrors.push(err94)
}

}
}
if (data22.version !== undefined) {
let data26 = data22.version
if (
!(
typeof data26 == 'number' &&
!(data26 % 1) &&
!isNaN(data26) &&
isFinite(data26)
)
) {
const err95 = {
instancePath: instancePath + '/databaseUnit/version',
schemaPath: '#/properties/databaseUnit/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err95]
} else {
vErrors.push(err95)
}

}
if (typeof data26 == 'number' && isFinite(data26)) {
if (data26 < 0 || isNaN(data26)) {
const err96 = {
instancePath: instancePath + '/databaseUnit/version',
schemaPath: '#/properties/databaseUnit/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err96]
} else {
vErrors.push(err96)
}

}
}
}
if (data22.id !== undefined) {
let data27 = data22.id
if (typeof data27 === 'string') {
if (!formats2.test(data27)) {
const err97 = {
instancePath: instancePath + '/databaseUnit/id',
schemaPath: '#/properties/databaseUnit/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err97]
} else {
vErrors.push(err97)
}

}
} else {
const err98 = {
instancePath: instancePath + '/databaseUnit/id',
schemaPath: '#/properties/databaseUnit/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err98]
} else {
vErrors.push(err98)
}

}
}
if (data22.appId !== undefined) {
let data28 = data22.appId
if (typeof data28 === 'string') {
if (!formats2.test(data28)) {
const err99 = {
instancePath: instancePath + '/databaseUnit/appId',
schemaPath: '#/properties/databaseUnit/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err99]
} else {
vErrors.push(err99)
}

}
} else {
const err100 = {
instancePath: instancePath + '/databaseUnit/appId',
schemaPath: '#/properties/databaseUnit/properties/appId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err100]
} else {
vErrors.push(err100)
}

}
}
if (data22.databaseId !== undefined) {
let data29 = data22.databaseId
if (typeof data29 === 'string') {
if (!formats2.test(data29)) {
const err101 = {
instancePath: instancePath + '/databaseUnit/databaseId',
schemaPath: '#/properties/databaseUnit/properties/databaseId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err101]
} else {
vErrors.push(err101)
}

}
} else {
const err102 = {
instancePath: instancePath + '/databaseUnit/databaseId',
schemaPath: '#/properties/databaseUnit/properties/databaseId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err102]
} else {
vErrors.push(err102)
}

}
}
if (data22.successVideoType !== undefined) {
let data30 = data22.successVideoType
if (
!(
typeof data30 == 'number' &&
!(data30 % 1) &&
!isNaN(data30) &&
isFinite(data30)
)
) {
const err103 = {
instancePath: instancePath + '/databaseUnit/successVideoType',
schemaPath: '#/properties/databaseUnit/properties/successVideoType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err103]
} else {
vErrors.push(err103)
}

}
if (typeof data30 == 'number' && isFinite(data30)) {
if (data30 > 2 || isNaN(data30)) {
const err104 = {
instancePath: instancePath + '/databaseUnit/successVideoType',
schemaPath: '#/properties/databaseUnit/properties/successVideoType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 2 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err104]
} else {
vErrors.push(err104)
}

}
if (data30 < 0 || isNaN(data30)) {
const err105 = {
instancePath: instancePath + '/databaseUnit/successVideoType',
schemaPath: '#/properties/databaseUnit/properties/successVideoType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err105]
} else {
vErrors.push(err105)
}

}
}
}
if (data22.successVideoUrl !== undefined) {
let data31 = data22.successVideoUrl
if (typeof data31 === 'string') {
if (func4(data31) > 100) {
const err106 = {
instancePath: instancePath + '/databaseUnit/successVideoUrl',
schemaPath: '#/properties/databaseUnit/properties/successVideoUrl/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err106]
} else {
vErrors.push(err106)
}

}
} else {
const err107 = {
instancePath: instancePath + '/databaseUnit/successVideoUrl',
schemaPath: '#/properties/databaseUnit/properties/successVideoUrl/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err107]
} else {
vErrors.push(err107)
}

}
}
if (data22.successAnimations !== undefined) {
let data32 = data22.successAnimations
if (typeof data32 === 'string') {
if (func4(data32) > 100) {
const err108 = {
instancePath: instancePath + '/databaseUnit/successAnimations',
schemaPath: '#/properties/databaseUnit/properties/successAnimations/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err108]
} else {
vErrors.push(err108)
}

}
} else {
const err109 = {
instancePath: instancePath + '/databaseUnit/successAnimations',
schemaPath: '#/properties/databaseUnit/properties/successAnimations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err109]
} else {
vErrors.push(err109)
}

}
}
if (data22.successSound !== undefined) {
let data33 = data22.successSound
if (typeof data33 === 'string') {
if (!formats2.test(data33)) {
const err110 = {
instancePath: instancePath + '/databaseUnit/successSound',
schemaPath: '#/properties/databaseUnit/properties/successSound/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err110]
} else {
vErrors.push(err110)
}

}
} else {
const err111 = {
instancePath: instancePath + '/databaseUnit/successSound',
schemaPath: '#/properties/databaseUnit/properties/successSound/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err111]
} else {
vErrors.push(err111)
}

}
}
if (data22.successSoundType !== undefined) {
let data34 = data22.successSoundType
if (
!(
typeof data34 == 'number' &&
!(data34 % 1) &&
!isNaN(data34) &&
isFinite(data34)
)
) {
const err112 = {
instancePath: instancePath + '/databaseUnit/successSoundType',
schemaPath: '#/properties/databaseUnit/properties/successSoundType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err112]
} else {
vErrors.push(err112)
}

}
if (typeof data34 == 'number' && isFinite(data34)) {
if (data34 > 4 || isNaN(data34)) {
const err113 = {
instancePath: instancePath + '/databaseUnit/successSoundType',
schemaPath: '#/properties/databaseUnit/properties/successSoundType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 4 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err113]
} else {
vErrors.push(err113)
}

}
if (data34 < 0 || isNaN(data34)) {
const err114 = {
instancePath: instancePath + '/databaseUnit/successSoundType',
schemaPath: '#/properties/databaseUnit/properties/successSoundType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err114]
} else {
vErrors.push(err114)
}

}
}
}
if (data22.homePageImageType !== undefined) {
let data35 = data22.homePageImageType
if (
!(
typeof data35 == 'number' &&
!(data35 % 1) &&
!isNaN(data35) &&
isFinite(data35)
)
) {
const err115 = {
instancePath: instancePath + '/databaseUnit/homePageImageType',
schemaPath: '#/properties/databaseUnit/properties/homePageImageType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err115]
} else {
vErrors.push(err115)
}

}
if (typeof data35 == 'number' && isFinite(data35)) {
if (data35 > 3 || isNaN(data35)) {
const err116 = {
instancePath: instancePath + '/databaseUnit/homePageImageType',
schemaPath: '#/properties/databaseUnit/properties/homePageImageType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err116]
} else {
vErrors.push(err116)
}

}
if (data35 < 0 || isNaN(data35)) {
const err117 = {
instancePath: instancePath + '/databaseUnit/homePageImageType',
schemaPath: '#/properties/databaseUnit/properties/homePageImageType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err117]
} else {
vErrors.push(err117)
}

}
}
}
if (data22.homePageImage !== undefined) {
let data36 = data22.homePageImage
if (typeof data36 === 'string') {
if (!formats2.test(data36)) {
const err118 = {
instancePath: instancePath + '/databaseUnit/homePageImage',
schemaPath: '#/properties/databaseUnit/properties/homePageImage/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err118]
} else {
vErrors.push(err118)
}

}
} else {
const err119 = {
instancePath: instancePath + '/databaseUnit/homePageImage',
schemaPath: '#/properties/databaseUnit/properties/homePageImage/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err119]
} else {
vErrors.push(err119)
}

}
}
if (data22.router !== undefined) {
let data37 = data22.router
if (typeof data37 === 'string') {
if (!formats2.test(data37)) {
const err120 = {
instancePath: instancePath + '/databaseUnit/router',
schemaPath: '#/properties/databaseUnit/properties/router/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err120]
} else {
vErrors.push(err120)
}

}
} else {
const err121 = {
instancePath: instancePath + '/databaseUnit/router',
schemaPath: '#/properties/databaseUnit/properties/router/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err121]
} else {
vErrors.push(err121)
}

}
}
if (data22.routerTime !== undefined) {
let data38 = data22.routerTime
if (!(typeof data38 == 'number' && isFinite(data38))) {
const err122 = {
instancePath: instancePath + '/databaseUnit/routerTime',
schemaPath: '#/properties/databaseUnit/properties/routerTime/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
if (vErrors === null) {
vErrors = [err122]
} else {
vErrors.push(err122)
}

}
}
if (data22.routerTimeImmediate !== undefined) {
if (typeof data22.routerTimeImmediate !== 'boolean') {
const err123 = {
instancePath: instancePath + '/databaseUnit/routerTimeImmediate',
schemaPath: '#/properties/databaseUnit/properties/routerTimeImmediate/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
if (vErrors === null) {
vErrors = [err123]
} else {
vErrors.push(err123)
}

}
}
if (data22.points !== undefined) {
let data40 = data22.points
if (
!(
typeof data40 == 'number' &&
!(data40 % 1) &&
!isNaN(data40) &&
isFinite(data40)
)
) {
const err124 = {
instancePath: instancePath + '/databaseUnit/points',
schemaPath: '#/properties/databaseUnit/properties/points/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err124]
} else {
vErrors.push(err124)
}

}
if (typeof data40 == 'number' && isFinite(data40)) {
if (data40 < 0 || isNaN(data40)) {
const err125 = {
instancePath: instancePath + '/databaseUnit/points',
schemaPath: '#/properties/databaseUnit/properties/points/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err125]
} else {
vErrors.push(err125)
}

}
}
}
} else {
const err126 = {
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err126]
} else {
vErrors.push(err126)
}

}
}
if (data.databaseItem !== undefined) {
let data41 = data.databaseItem
if (data41 && typeof data41 == 'object' && !Array.isArray(data41)) {
if (data41.itemType === undefined) {
const err127 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'itemType' },
message: "must have required property '" + 'itemType' + "'"
}
if (vErrors === null) {
vErrors = [err127]
} else {
vErrors.push(err127)
}

}
if (data41.order === undefined) {
const err128 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'order' },
message: "must have required property '" + 'order' + "'"
}
if (vErrors === null) {
vErrors = [err128]
} else {
vErrors.push(err128)
}

}
if (data41.unitId === undefined) {
const err129 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'unitId' },
message: "must have required property '" + 'unitId' + "'"
}
if (vErrors === null) {
vErrors = [err129]
} else {
vErrors.push(err129)
}

}
if (data41.appId === undefined) {
const err130 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'appId' },
message: "must have required property '" + 'appId' + "'"
}
if (vErrors === null) {
vErrors = [err130]
} else {
vErrors.push(err130)
}

}
if (data41.lastModified === undefined) {
const err131 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err131]
} else {
vErrors.push(err131)
}

}
if (data41.version === undefined) {
const err132 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'version' },
message: "must have required property '" + 'version' + "'"
}
if (vErrors === null) {
vErrors = [err132]
} else {
vErrors.push(err132)
}

}
if (data41.databaseId === undefined) {
const err133 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'databaseId' },
message: "must have required property '" + 'databaseId' + "'"
}
if (vErrors === null) {
vErrors = [err133]
} else {
vErrors.push(err133)
}

}
if (data41.id === undefined) {
const err134 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err134]
} else {
vErrors.push(err134)
}

}
if (data41.dataText === undefined) {
const err135 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'dataText' },
message: "must have required property '" + 'dataText' + "'"
}
if (vErrors === null) {
vErrors = [err135]
} else {
vErrors.push(err135)
}

}
if (data41.data === undefined) {
const err136 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: 'data' },
message: "must have required property '" + 'data' + "'"
}
if (vErrors === null) {
vErrors = [err136]
} else {
vErrors.push(err136)
}

}
if (data41.itemType !== undefined) {
let data42 = data41.itemType
if (
!(
typeof data42 == 'number' &&
!(data42 % 1) &&
!isNaN(data42) &&
isFinite(data42)
)
) {
const err137 = {
instancePath: instancePath + '/databaseItem/itemType',
schemaPath: '#/properties/databaseItem/properties/itemType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err137]
} else {
vErrors.push(err137)
}

}
if (typeof data42 == 'number' && isFinite(data42)) {
if (data42 > 5 || isNaN(data42)) {
const err138 = {
instancePath: instancePath + '/databaseItem/itemType',
schemaPath: '#/properties/databaseItem/properties/itemType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 5 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err138]
} else {
vErrors.push(err138)
}

}
if (data42 < 0 || isNaN(data42)) {
const err139 = {
instancePath: instancePath + '/databaseItem/itemType',
schemaPath: '#/properties/databaseItem/properties/itemType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err139]
} else {
vErrors.push(err139)
}

}
}
}
if (data41.order !== undefined) {
let data43 = data41.order
if (
!(
typeof data43 == 'number' &&
!(data43 % 1) &&
!isNaN(data43) &&
isFinite(data43)
)
) {
const err140 = {
instancePath: instancePath + '/databaseItem/order',
schemaPath: '#/properties/databaseItem/properties/order/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err140]
} else {
vErrors.push(err140)
}

}
if (typeof data43 == 'number' && isFinite(data43)) {
if (data43 < 0 || isNaN(data43)) {
const err141 = {
instancePath: instancePath + '/databaseItem/order',
schemaPath: '#/properties/databaseItem/properties/order/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err141]
} else {
vErrors.push(err141)
}

}
}
}
if (data41.unitId !== undefined) {
let data44 = data41.unitId
if (typeof data44 === 'string') {
if (!formats2.test(data44)) {
const err142 = {
instancePath: instancePath + '/databaseItem/unitId',
schemaPath: '#/properties/databaseItem/properties/unitId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err142]
} else {
vErrors.push(err142)
}

}
} else {
const err143 = {
instancePath: instancePath + '/databaseItem/unitId',
schemaPath: '#/properties/databaseItem/properties/unitId/type',
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
if (data41.appId !== undefined) {
let data45 = data41.appId
if (typeof data45 === 'string') {
if (!formats2.test(data45)) {
const err144 = {
instancePath: instancePath + '/databaseItem/appId',
schemaPath: '#/properties/databaseItem/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err144]
} else {
vErrors.push(err144)
}

}
} else {
const err145 = {
instancePath: instancePath + '/databaseItem/appId',
schemaPath: '#/properties/databaseItem/properties/appId/type',
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
if (data41.lastModified !== undefined) {
let data46 = data41.lastModified
if (!(typeof data46 == 'number' && isFinite(data46))) {
const err146 = {
instancePath: instancePath + '/databaseItem/lastModified',
schemaPath: '#/properties/databaseItem/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
if (vErrors === null) {
vErrors = [err146]
} else {
vErrors.push(err146)
}

}
}
if (data41.version !== undefined) {
let data47 = data41.version
if (
!(
typeof data47 == 'number' &&
!(data47 % 1) &&
!isNaN(data47) &&
isFinite(data47)
)
) {
const err147 = {
instancePath: instancePath + '/databaseItem/version',
schemaPath: '#/properties/databaseItem/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err147]
} else {
vErrors.push(err147)
}

}
if (typeof data47 == 'number' && isFinite(data47)) {
if (data47 < 0 || isNaN(data47)) {
const err148 = {
instancePath: instancePath + '/databaseItem/version',
schemaPath: '#/properties/databaseItem/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err148]
} else {
vErrors.push(err148)
}

}
}
}
if (data41.databaseId !== undefined) {
let data48 = data41.databaseId
if (typeof data48 === 'string') {
if (!formats2.test(data48)) {
const err149 = {
instancePath: instancePath + '/databaseItem/databaseId',
schemaPath: '#/properties/databaseItem/properties/databaseId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err149]
} else {
vErrors.push(err149)
}

}
} else {
const err150 = {
instancePath: instancePath + '/databaseItem/databaseId',
schemaPath: '#/properties/databaseItem/properties/databaseId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err150]
} else {
vErrors.push(err150)
}

}
}
if (data41.id !== undefined) {
let data49 = data41.id
if (typeof data49 === 'string') {
if (!formats2.test(data49)) {
const err151 = {
instancePath: instancePath + '/databaseItem/id',
schemaPath: '#/properties/databaseItem/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err151]
} else {
vErrors.push(err151)
}

}
} else {
const err152 = {
instancePath: instancePath + '/databaseItem/id',
schemaPath: '#/properties/databaseItem/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err152]
} else {
vErrors.push(err152)
}

}
}
if (data41.dataText !== undefined) {
let data50 = data41.dataText
if (typeof data50 === 'string') {
if (func4(data50) > 8000) {
const err153 = {
instancePath: instancePath + '/databaseItem/dataText',
schemaPath: '#/properties/databaseItem/properties/dataText/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"}
if (vErrors === null) {
vErrors = [err153]
} else {
vErrors.push(err153)
}

}
} else {
const err154 = {
instancePath: instancePath + '/databaseItem/dataText',
schemaPath: '#/properties/databaseItem/properties/dataText/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err154]
} else {
vErrors.push(err154)
}

}
}
} else {
const err155 = {
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err155]
} else {
vErrors.push(err155)
}

}
}
if (data.followerRequest !== undefined) {
let data51 = data.followerRequest
if (data51 && typeof data51 == 'object' && !Array.isArray(data51)) {
if (data51.leaderAppId === undefined) {
const err156 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'leaderAppId' },
message: "must have required property '" + 'leaderAppId' + "'"
}
if (vErrors === null) {
vErrors = [err156]
} else {
vErrors.push(err156)
}

}
if (data51.followerAppId === undefined) {
const err157 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'followerAppId' },
message: "must have required property '" + 'followerAppId' + "'"
}
if (vErrors === null) {
vErrors = [err157]
} else {
vErrors.push(err157)
}

}
if (data51.id === undefined) {
const err158 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err158]
} else {
vErrors.push(err158)
}

}
if (data51.followerName === undefined) {
const err159 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'followerName' },
message: "must have required property '" + 'followerName' + "'"
}
if (vErrors === null) {
vErrors = [err159]
} else {
vErrors.push(err159)
}

}
if (data51.leaderName === undefined) {
const err160 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'leaderName' },
message: "must have required property '" + 'leaderName' + "'"
}
if (vErrors === null) {
vErrors = [err160]
} else {
vErrors.push(err160)
}

}
if (data51.followerEmail === undefined) {
const err161 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'followerEmail' },
message: "must have required property '" + 'followerEmail' + "'"
}
if (vErrors === null) {
vErrors = [err161]
} else {
vErrors.push(err161)
}

}
if (data51.leaderEmail === undefined) {
const err162 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'leaderEmail' },
message: "must have required property '" + 'leaderEmail' + "'"
}
if (vErrors === null) {
vErrors = [err162]
} else {
vErrors.push(err162)
}

}
if (data51.initiatedByFollower === undefined) {
const err163 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'initiatedByFollower' },
message: "must have required property '" + 'initiatedByFollower' + "'"
}
if (vErrors === null) {
vErrors = [err163]
} else {
vErrors.push(err163)
}

}
if (data51.lastModified === undefined) {
const err164 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err164]
} else {
vErrors.push(err164)
}

}
if (data51.version === undefined) {
const err165 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'version' },
message: "must have required property '" + 'version' + "'"
}
if (vErrors === null) {
vErrors = [err165]
} else {
vErrors.push(err165)
}

}
if (data51.status === undefined) {
const err166 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'status' },
message: "must have required property '" + 'status' + "'"
}
if (vErrors === null) {
vErrors = [err166]
} else {
vErrors.push(err166)
}

}
if (data51.groups === undefined) {
const err167 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'groups' },
message: "must have required property '" + 'groups' + "'"
}
if (vErrors === null) {
vErrors = [err167]
} else {
vErrors.push(err167)
}

}
if (data51.points === undefined) {
const err168 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: 'points' },
message: "must have required property '" + 'points' + "'"
}
if (vErrors === null) {
vErrors = [err168]
} else {
vErrors.push(err168)
}

}
if (data51.leaderAppId !== undefined) {
let data52 = data51.leaderAppId
if (typeof data52 === 'string') {
if (!formats2.test(data52)) {
const err169 = {
instancePath: instancePath + '/followerRequest/leaderAppId',
schemaPath: '#/properties/followerRequest/properties/leaderAppId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err169]
} else {
vErrors.push(err169)
}

}
} else {
const err170 = {
instancePath: instancePath + '/followerRequest/leaderAppId',
schemaPath: '#/properties/followerRequest/properties/leaderAppId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err170]
} else {
vErrors.push(err170)
}

}
}
if (data51.followerAppId !== undefined) {
let data53 = data51.followerAppId
if (typeof data53 === 'string') {
if (!formats2.test(data53)) {
const err171 = {
instancePath: instancePath + '/followerRequest/followerAppId',
schemaPath: '#/properties/followerRequest/properties/followerAppId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err171]
} else {
vErrors.push(err171)
}

}
} else {
const err172 = {
instancePath: instancePath + '/followerRequest/followerAppId',
schemaPath: '#/properties/followerRequest/properties/followerAppId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err172]
} else {
vErrors.push(err172)
}

}
}
if (data51.id !== undefined) {
let data54 = data51.id
if (typeof data54 === 'string') {
if (!formats2.test(data54)) {
const err173 = {
instancePath: instancePath + '/followerRequest/id',
schemaPath: '#/properties/followerRequest/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err173]
} else {
vErrors.push(err173)
}

}
} else {
const err174 = {
instancePath: instancePath + '/followerRequest/id',
schemaPath: '#/properties/followerRequest/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err174]
} else {
vErrors.push(err174)
}

}
}
if (data51.followerName !== undefined) {
let data55 = data51.followerName
if (typeof data55 === 'string') {
if (func4(data55) > 100) {
const err175 = {
instancePath: instancePath + '/followerRequest/followerName',
schemaPath: '#/properties/followerRequest/properties/followerName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err175]
} else {
vErrors.push(err175)
}

}
if (func4(data55) < 1) {
const err176 = {
instancePath: instancePath + '/followerRequest/followerName',
schemaPath: '#/properties/followerRequest/properties/followerName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err176]
} else {
vErrors.push(err176)
}

}
} else {
const err177 = {
instancePath: instancePath + '/followerRequest/followerName',
schemaPath: '#/properties/followerRequest/properties/followerName/type',
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
if (data51.leaderName !== undefined) {
let data56 = data51.leaderName
if (typeof data56 === 'string') {
if (func4(data56) > 100) {
const err178 = {
instancePath: instancePath + '/followerRequest/leaderName',
schemaPath: '#/properties/followerRequest/properties/leaderName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err178]
} else {
vErrors.push(err178)
}

}
if (func4(data56) < 1) {
const err179 = {
instancePath: instancePath + '/followerRequest/leaderName',
schemaPath: '#/properties/followerRequest/properties/leaderName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err179]
} else {
vErrors.push(err179)
}

}
} else {
const err180 = {
instancePath: instancePath + '/followerRequest/leaderName',
schemaPath: '#/properties/followerRequest/properties/leaderName/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err180]
} else {
vErrors.push(err180)
}

}
}
if (data51.followerEmail !== undefined) {
let data57 = data51.followerEmail
if (typeof data57 === 'string') {
if (func4(data57) > 100) {
const err181 = {
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err181]
} else {
vErrors.push(err181)
}

}
if (func4(data57) < 1) {
const err182 = {
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err182]
} else {
vErrors.push(err182)
}

}
if (!formats0.test(data57)) {
const err183 = {
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"}
if (vErrors === null) {
vErrors = [err183]
} else {
vErrors.push(err183)
}

}
if (!await serverAndClientFunctions.doesEmailExist(data57)) {
const err184 = {
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/doesEmailExist',
keyword: 'doesEmailExist',
params: {},
 message: "Email_does_not_exist"}
if (vErrors === null) {
vErrors = [err184]
} else {
vErrors.push(err184)
}

}
} else {
const err185 = {
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err185]
} else {
vErrors.push(err185)
}

}
}
if (data51.leaderEmail !== undefined) {
let data58 = data51.leaderEmail
if (typeof data58 === 'string') {
if (func4(data58) > 100) {
const err186 = {
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err186]
} else {
vErrors.push(err186)
}

}
if (func4(data58) < 1) {
const err187 = {
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err187]
} else {
vErrors.push(err187)
}

}
if (!formats0.test(data58)) {
const err188 = {
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"}
if (vErrors === null) {
vErrors = [err188]
} else {
vErrors.push(err188)
}

}
if (!await serverAndClientFunctions.doesEmailExist(data58)) {
const err189 = {
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/doesEmailExist',
keyword: 'doesEmailExist',
params: {},
 message: "Email_does_not_exist"}
if (vErrors === null) {
vErrors = [err189]
} else {
vErrors.push(err189)
}

}
} else {
const err190 = {
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/type',
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
if (data51.initiatedByFollower !== undefined) {
if (typeof data51.initiatedByFollower !== 'boolean') {
const err191 = {
instancePath: instancePath + '/followerRequest/initiatedByFollower',
schemaPath: '#/properties/followerRequest/properties/initiatedByFollower/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
if (vErrors === null) {
vErrors = [err191]
} else {
vErrors.push(err191)
}

}
}
if (data51.lastModified !== undefined) {
let data60 = data51.lastModified
if (!(typeof data60 == 'number' && isFinite(data60))) {
const err192 = {
instancePath: instancePath + '/followerRequest/lastModified',
schemaPath: '#/properties/followerRequest/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
if (vErrors === null) {
vErrors = [err192]
} else {
vErrors.push(err192)
}

}
}
if (data51.version !== undefined) {
let data61 = data51.version
if (
!(
typeof data61 == 'number' &&
!(data61 % 1) &&
!isNaN(data61) &&
isFinite(data61)
)
) {
const err193 = {
instancePath: instancePath + '/followerRequest/version',
schemaPath: '#/properties/followerRequest/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err193]
} else {
vErrors.push(err193)
}

}
if (typeof data61 == 'number' && isFinite(data61)) {
if (data61 < 0 || isNaN(data61)) {
const err194 = {
instancePath: instancePath + '/followerRequest/version',
schemaPath: '#/properties/followerRequest/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err194]
} else {
vErrors.push(err194)
}

}
}
}
if (data51.status !== undefined) {
let data62 = data51.status
if (
!(
typeof data62 == 'number' &&
!(data62 % 1) &&
!isNaN(data62) &&
isFinite(data62)
)
) {
const err195 = {
instancePath: instancePath + '/followerRequest/status',
schemaPath: '#/properties/followerRequest/properties/status/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err195]
} else {
vErrors.push(err195)
}

}
if (typeof data62 == 'number' && isFinite(data62)) {
if (data62 > 2 || isNaN(data62)) {
const err196 = {
instancePath: instancePath + '/followerRequest/status',
schemaPath: '#/properties/followerRequest/properties/status/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 2 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err196]
} else {
vErrors.push(err196)
}

}
if (data62 < 0 || isNaN(data62)) {
const err197 = {
instancePath: instancePath + '/followerRequest/status',
schemaPath: '#/properties/followerRequest/properties/status/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err197]
} else {
vErrors.push(err197)
}

}
}
}
if (data51.groups !== undefined) {
let data63 = data51.groups
if (typeof data63 === 'string') {
if (func4(data63) > 8000) {
const err198 = {
instancePath: instancePath + '/followerRequest/groups',
schemaPath: '#/properties/followerRequest/properties/groups/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"}
if (vErrors === null) {
vErrors = [err198]
} else {
vErrors.push(err198)
}

}
} else {
const err199 = {
instancePath: instancePath + '/followerRequest/groups',
schemaPath: '#/properties/followerRequest/properties/groups/type',
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
if (data51.points !== undefined) {
let data64 = data51.points
if (
!(
typeof data64 == 'number' &&
!(data64 % 1) &&
!isNaN(data64) &&
isFinite(data64)
)
) {
const err200 = {
instancePath: instancePath + '/followerRequest/points',
schemaPath: '#/properties/followerRequest/properties/points/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err200]
} else {
vErrors.push(err200)
}

}
if (typeof data64 == 'number' && isFinite(data64)) {
if (data64 < 0 || isNaN(data64)) {
const err201 = {
instancePath: instancePath + '/followerRequest/points',
schemaPath: '#/properties/followerRequest/properties/points/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err201]
} else {
vErrors.push(err201)
}

}
}
}
} else {
const err202 = {
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err202]
} else {
vErrors.push(err202)
}

}
}
if (data.followerDatabase !== undefined) {
let data65 = data.followerDatabase
if (data65 && typeof data65 == 'object' && !Array.isArray(data65)) {
if (data65.followerRequestId === undefined) {
const err203 = {
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/required',
keyword: 'required',
params: { missingProperty: 'followerRequestId' },
message: "must have required property '" + 'followerRequestId' + "'"
}
if (vErrors === null) {
vErrors = [err203]
} else {
vErrors.push(err203)
}

}
if (data65.id === undefined) {
const err204 = {
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err204]
} else {
vErrors.push(err204)
}

}
if (data65.databaseId === undefined) {
const err205 = {
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/required',
keyword: 'required',
params: { missingProperty: 'databaseId' },
message: "must have required property '" + 'databaseId' + "'"
}
if (vErrors === null) {
vErrors = [err205]
} else {
vErrors.push(err205)
}

}
if (data65.lastModified === undefined) {
const err206 = {
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err206]
} else {
vErrors.push(err206)
}

}
if (data65.version === undefined) {
const err207 = {
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/required',
keyword: 'required',
params: { missingProperty: 'version' },
message: "must have required property '" + 'version' + "'"
}
if (vErrors === null) {
vErrors = [err207]
} else {
vErrors.push(err207)
}

}
if (data65.followerRequestId !== undefined) {
let data66 = data65.followerRequestId
if (typeof data66 === 'string') {
if (!formats2.test(data66)) {
const err208 = {
instancePath: instancePath + '/followerDatabase/followerRequestId',
schemaPath: '#/properties/followerDatabase/properties/followerRequestId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err208]
} else {
vErrors.push(err208)
}

}
} else {
const err209 = {
instancePath: instancePath + '/followerDatabase/followerRequestId',
schemaPath: '#/properties/followerDatabase/properties/followerRequestId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err209]
} else {
vErrors.push(err209)
}

}
}
if (data65.id !== undefined) {
let data67 = data65.id
if (typeof data67 === 'string') {
if (!formats2.test(data67)) {
const err210 = {
instancePath: instancePath + '/followerDatabase/id',
schemaPath: '#/properties/followerDatabase/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err210]
} else {
vErrors.push(err210)
}

}
} else {
const err211 = {
instancePath: instancePath + '/followerDatabase/id',
schemaPath: '#/properties/followerDatabase/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err211]
} else {
vErrors.push(err211)
}

}
}
if (data65.databaseId !== undefined) {
let data68 = data65.databaseId
if (typeof data68 === 'string') {
if (!formats2.test(data68)) {
const err212 = {
instancePath: instancePath + '/followerDatabase/databaseId',
schemaPath: '#/properties/followerDatabase/properties/databaseId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err212]
} else {
vErrors.push(err212)
}

}
} else {
const err213 = {
instancePath: instancePath + '/followerDatabase/databaseId',
schemaPath: '#/properties/followerDatabase/properties/databaseId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err213]
} else {
vErrors.push(err213)
}

}
}
if (data65.lastModified !== undefined) {
let data69 = data65.lastModified
if (!(typeof data69 == 'number' && isFinite(data69))) {
const err214 = {
instancePath: instancePath + '/followerDatabase/lastModified',
schemaPath: '#/properties/followerDatabase/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
if (vErrors === null) {
vErrors = [err214]
} else {
vErrors.push(err214)
}

}
}
if (data65.version !== undefined) {
let data70 = data65.version
if (
!(
typeof data70 == 'number' &&
!(data70 % 1) &&
!isNaN(data70) &&
isFinite(data70)
)
) {
const err215 = {
instancePath: instancePath + '/followerDatabase/version',
schemaPath: '#/properties/followerDatabase/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err215]
} else {
vErrors.push(err215)
}

}
if (typeof data70 == 'number' && isFinite(data70)) {
if (data70 < 0 || isNaN(data70)) {
const err216 = {
instancePath: instancePath + '/followerDatabase/version',
schemaPath: '#/properties/followerDatabase/properties/version/minimum',
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
} else {
const err217 = {
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err217]
} else {
vErrors.push(err217)
}

}
}
if (data.router !== undefined) {
let data71 = data.router
if (data71 && typeof data71 == 'object' && !Array.isArray(data71)) {
if (data71.id === undefined) {
const err218 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err218]
} else {
vErrors.push(err218)
}

}
if (data71.appId === undefined) {
const err219 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'appId' },
message: "must have required property '" + 'appId' + "'"
}
if (vErrors === null) {
vErrors = [err219]
} else {
vErrors.push(err219)
}

}
if (data71.routerMac === undefined) {
const err220 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'routerMac' },
message: "must have required property '" + 'routerMac' + "'"
}
if (vErrors === null) {
vErrors = [err220]
} else {
vErrors.push(err220)
}

}
if (data71.ipAddress === undefined) {
const err221 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'ipAddress' },
message: "must have required property '" + 'ipAddress' + "'"
}
if (vErrors === null) {
vErrors = [err221]
} else {
vErrors.push(err221)
}

}
if (data71.mondayTimesAndDurations === undefined) {
const err222 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'mondayTimesAndDurations' },
message: "must have required property '" + 'mondayTimesAndDurations' + "'"
}
if (vErrors === null) {
vErrors = [err222]
} else {
vErrors.push(err222)
}

}
if (data71.tuesdayTimesAndDurations === undefined) {
const err223 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'tuesdayTimesAndDurations' },
message: "must have required property '" + 'tuesdayTimesAndDurations' + "'"
}
if (vErrors === null) {
vErrors = [err223]
} else {
vErrors.push(err223)
}

}
if (data71.wednesdayTimesAndDurations === undefined) {
const err224 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'wednesdayTimesAndDurations' },
message: "must have required property '" + 'wednesdayTimesAndDurations' +
"'"
}
if (vErrors === null) {
vErrors = [err224]
} else {
vErrors.push(err224)
}

}
if (data71.thursdayTimesAndDurations === undefined) {
const err225 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'thursdayTimesAndDurations' },
message: "must have required property '" + 'thursdayTimesAndDurations' +
"'"
}
if (vErrors === null) {
vErrors = [err225]
} else {
vErrors.push(err225)
}

}
if (data71.fridayTimesAndDurations === undefined) {
const err226 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'fridayTimesAndDurations' },
message: "must have required property '" + 'fridayTimesAndDurations' + "'"
}
if (vErrors === null) {
vErrors = [err226]
} else {
vErrors.push(err226)
}

}
if (data71.saturdayTimesAndDurations === undefined) {
const err227 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'saturdayTimesAndDurations' },
message: "must have required property '" + 'saturdayTimesAndDurations' +
"'"
}
if (vErrors === null) {
vErrors = [err227]
} else {
vErrors.push(err227)
}

}
if (data71.sundayTimesAndDurations === undefined) {
const err228 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'sundayTimesAndDurations' },
message: "must have required property '" + 'sundayTimesAndDurations' + "'"
}
if (vErrors === null) {
vErrors = [err228]
} else {
vErrors.push(err228)
}

}
if (data71.version === undefined) {
const err229 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'version' },
message: "must have required property '" + 'version' + "'"
}
if (vErrors === null) {
vErrors = [err229]
} else {
vErrors.push(err229)
}

}
if (data71.lastModified === undefined) {
const err230 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err230]
} else {
vErrors.push(err230)
}

}
if (data71.status === undefined) {
const err231 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: 'status' },
message: "must have required property '" + 'status' + "'"
}
if (vErrors === null) {
vErrors = [err231]
} else {
vErrors.push(err231)
}

}
if (data71.id !== undefined) {
let data72 = data71.id
if (typeof data72 === 'string') {
if (!formats2.test(data72)) {
const err232 = {
instancePath: instancePath + '/router/id',
schemaPath: '#/properties/router/properties/id/format',
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
instancePath: instancePath + '/router/id',
schemaPath: '#/properties/router/properties/id/type',
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
if (data71.appId !== undefined) {
let data73 = data71.appId
if (typeof data73 === 'string') {
if (!formats2.test(data73)) {
const err234 = {
instancePath: instancePath + '/router/appId',
schemaPath: '#/properties/router/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err234]
} else {
vErrors.push(err234)
}

}
} else {
const err235 = {
instancePath: instancePath + '/router/appId',
schemaPath: '#/properties/router/properties/appId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err235]
} else {
vErrors.push(err235)
}

}
}
if (data71.routerMac !== undefined) {
let data74 = data71.routerMac
if (typeof data74 === 'string') {
if (!pattern1.test(data74)) {
const err236 = {
instancePath: instancePath + '/router/routerMac',
schemaPath: '#/properties/router/properties/routerMac/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$'},
 message: "Must_be_a_valid_MAC_address"}
if (vErrors === null) {
vErrors = [err236]
} else {
vErrors.push(err236)
}

}
if (!formats94(data74)) {
const err237 = {
instancePath: instancePath + '/router/routerMac',
schemaPath: '#/properties/router/properties/routerMac/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_MAC_address"}
if (vErrors === null) {
vErrors = [err237]
} else {
vErrors.push(err237)
}

}
} else {
const err238 = {
instancePath: instancePath + '/router/routerMac',
schemaPath: '#/properties/router/properties/routerMac/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err238]
} else {
vErrors.push(err238)
}

}
}
if (data71.ipAddress !== undefined) {
let data75 = data71.ipAddress
if (typeof data75 === 'string') {
if (!formats96.test(data75)) {
const err239 = {
instancePath: instancePath + '/router/ipAddress',
schemaPath: '#/properties/router/properties/ipAddress/format',
keyword: 'format',
params: { format: 'ipv4' },
 message: "Must_be_a_valid_IP_address"}
if (vErrors === null) {
vErrors = [err239]
} else {
vErrors.push(err239)
}

}
} else {
const err240 = {
instancePath: instancePath + '/router/ipAddress',
schemaPath: '#/properties/router/properties/ipAddress/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err240]
} else {
vErrors.push(err240)
}

}
}
if (data71.mondayTimesAndDurations !== undefined) {
let data76 = data71.mondayTimesAndDurations
if (typeof data76 === 'string') {
if (!pattern2.test(data76)) {
const err241 = {
instancePath: instancePath + '/router/mondayTimesAndDurations',
schemaPath: '#/properties/router/properties/mondayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err241]
} else {
vErrors.push(err241)
}

}
if (!formats94(data76)) {
const err242 = {
instancePath: instancePath + '/router/mondayTimesAndDurations',
schemaPath: '#/properties/router/properties/mondayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err242]
} else {
vErrors.push(err242)
}

}
} else {
const err243 = {
instancePath: instancePath + '/router/mondayTimesAndDurations',
schemaPath: '#/properties/router/properties/mondayTimesAndDurations/type',
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
if (data71.tuesdayTimesAndDurations !== undefined) {
let data77 = data71.tuesdayTimesAndDurations
if (typeof data77 === 'string') {
if (!pattern2.test(data77)) {
const err244 = {
instancePath: instancePath + '/router/tuesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/tuesdayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err244]
} else {
vErrors.push(err244)
}

}
if (!formats94(data77)) {
const err245 = {
instancePath: instancePath + '/router/tuesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/tuesdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err245]
} else {
vErrors.push(err245)
}

}
} else {
const err246 = {
instancePath: instancePath + '/router/tuesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/tuesdayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err246]
} else {
vErrors.push(err246)
}

}
}
if (data71.wednesdayTimesAndDurations !== undefined) {
let data78 = data71.wednesdayTimesAndDurations
if (typeof data78 === 'string') {
if (!pattern2.test(data78)) {
const err247 = {
instancePath: instancePath + '/router/wednesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/wednesdayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err247]
} else {
vErrors.push(err247)
}

}
if (!formats94(data78)) {
const err248 = {
instancePath: instancePath + '/router/wednesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/wednesdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err248]
} else {
vErrors.push(err248)
}

}
} else {
const err249 = {
instancePath: instancePath + '/router/wednesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/wednesdayTimesAndDurations/type',
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
if (data71.thursdayTimesAndDurations !== undefined) {
let data79 = data71.thursdayTimesAndDurations
if (typeof data79 === 'string') {
if (!pattern2.test(data79)) {
const err250 = {
instancePath: instancePath + '/router/thursdayTimesAndDurations',
schemaPath: '#/properties/router/properties/thursdayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err250]
} else {
vErrors.push(err250)
}

}
if (!formats94(data79)) {
const err251 = {
instancePath: instancePath + '/router/thursdayTimesAndDurations',
schemaPath: '#/properties/router/properties/thursdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err251]
} else {
vErrors.push(err251)
}

}
} else {
const err252 = {
instancePath: instancePath + '/router/thursdayTimesAndDurations',
schemaPath: '#/properties/router/properties/thursdayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err252]
} else {
vErrors.push(err252)
}

}
}
if (data71.fridayTimesAndDurations !== undefined) {
let data80 = data71.fridayTimesAndDurations
if (typeof data80 === 'string') {
if (!pattern2.test(data80)) {
const err253 = {
instancePath: instancePath + '/router/fridayTimesAndDurations',
schemaPath: '#/properties/router/properties/fridayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err253]
} else {
vErrors.push(err253)
}

}
if (!formats94(data80)) {
const err254 = {
instancePath: instancePath + '/router/fridayTimesAndDurations',
schemaPath: '#/properties/router/properties/fridayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err254]
} else {
vErrors.push(err254)
}

}
} else {
const err255 = {
instancePath: instancePath + '/router/fridayTimesAndDurations',
schemaPath: '#/properties/router/properties/fridayTimesAndDurations/type',
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
if (data71.saturdayTimesAndDurations !== undefined) {
let data81 = data71.saturdayTimesAndDurations
if (typeof data81 === 'string') {
if (!pattern2.test(data81)) {
const err256 = {
instancePath: instancePath + '/router/saturdayTimesAndDurations',
schemaPath: '#/properties/router/properties/saturdayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err256]
} else {
vErrors.push(err256)
}

}
if (!formats94(data81)) {
const err257 = {
instancePath: instancePath + '/router/saturdayTimesAndDurations',
schemaPath: '#/properties/router/properties/saturdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err257]
} else {
vErrors.push(err257)
}

}
} else {
const err258 = {
instancePath: instancePath + '/router/saturdayTimesAndDurations',
schemaPath: '#/properties/router/properties/saturdayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err258]
} else {
vErrors.push(err258)
}

}
}
if (data71.sundayTimesAndDurations !== undefined) {
let data82 = data71.sundayTimesAndDurations
if (typeof data82 === 'string') {
if (!pattern2.test(data82)) {
const err259 = {
instancePath: instancePath + '/router/sundayTimesAndDurations',
schemaPath: '#/properties/router/properties/sundayTimesAndDurations/pattern',
keyword: 'pattern',
params: { pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err259]
} else {
vErrors.push(err259)
}

}
if (!formats94(data82)) {
const err260 = {
instancePath: instancePath + '/router/sundayTimesAndDurations',
schemaPath: '#/properties/router/properties/sundayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
if (vErrors === null) {
vErrors = [err260]
} else {
vErrors.push(err260)
}

}
} else {
const err261 = {
instancePath: instancePath + '/router/sundayTimesAndDurations',
schemaPath: '#/properties/router/properties/sundayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err261]
} else {
vErrors.push(err261)
}

}
}
if (data71.version !== undefined) {
let data83 = data71.version
if (
!(
typeof data83 == 'number' &&
!(data83 % 1) &&
!isNaN(data83) &&
isFinite(data83)
)
) {
const err262 = {
instancePath: instancePath + '/router/version',
schemaPath: '#/properties/router/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err262]
} else {
vErrors.push(err262)
}

}
if (typeof data83 == 'number' && isFinite(data83)) {
if (data83 < 0 || isNaN(data83)) {
const err263 = {
instancePath: instancePath + '/router/version',
schemaPath: '#/properties/router/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err263]
} else {
vErrors.push(err263)
}

}
}
}
if (data71.lastModified !== undefined) {
let data84 = data71.lastModified
if (!(typeof data84 == 'number' && isFinite(data84))) {
const err264 = {
instancePath: instancePath + '/router/lastModified',
schemaPath: '#/properties/router/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
if (vErrors === null) {
vErrors = [err264]
} else {
vErrors.push(err264)
}

}
}
if (data71.status !== undefined) {
let data85 = data71.status
if (
!(
typeof data85 == 'number' &&
!(data85 % 1) &&
!isNaN(data85) &&
isFinite(data85)
)
) {
const err265 = {
instancePath: instancePath + '/router/status',
schemaPath: '#/properties/router/properties/status/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err265]
} else {
vErrors.push(err265)
}

}
if (typeof data85 == 'number' && isFinite(data85)) {
if (data85 > 2 || isNaN(data85)) {
const err266 = {
instancePath: instancePath + '/router/status',
schemaPath: '#/properties/router/properties/status/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 2 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err266]
} else {
vErrors.push(err266)
}

}
}
}
} else {
const err267 = {
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err267]
} else {
vErrors.push(err267)
}

}
}
if (data.followerDatabaseCompletion !== undefined) {
let data86 = data.followerDatabaseCompletion
if (data86 && typeof data86 == 'object' && !Array.isArray(data86)) {
if (data86.id === undefined) {
const err268 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err268]
} else {
vErrors.push(err268)
}

}
if (data86.followerRequestId === undefined) {
const err269 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: 'followerRequestId' },
message: "must have required property '" + 'followerRequestId' + "'"
}
if (vErrors === null) {
vErrors = [err269]
} else {
vErrors.push(err269)
}

}
if (data86.description === undefined) {
const err270 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: 'description' },
message: "must have required property '" + 'description' + "'"
}
if (vErrors === null) {
vErrors = [err270]
} else {
vErrors.push(err270)
}

}
if (data86.itemId === undefined) {
const err271 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: 'itemId' },
message: "must have required property '" + 'itemId' + "'"
}
if (vErrors === null) {
vErrors = [err271]
} else {
vErrors.push(err271)
}

}
if (data86.parentItemId === undefined) {
const err272 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: 'parentItemId' },
message: "must have required property '" + 'parentItemId' + "'"
}
if (vErrors === null) {
vErrors = [err272]
} else {
vErrors.push(err272)
}

}
if (data86.itemLevel === undefined) {
const err273 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: 'itemLevel' },
message: "must have required property '" + 'itemLevel' + "'"
}
if (vErrors === null) {
vErrors = [err273]
} else {
vErrors.push(err273)
}

}
if (data86.lastModified === undefined) {
const err274 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err274]
} else {
vErrors.push(err274)
}

}
if (data86.version === undefined) {
const err275 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: 'version' },
message: "must have required property '" + 'version' + "'"
}
if (vErrors === null) {
vErrors = [err275]
} else {
vErrors.push(err275)
}

}
if (data86.id !== undefined) {
let data87 = data86.id
if (typeof data87 === 'string') {
if (!formats2.test(data87)) {
const err276 = {
instancePath: instancePath + '/followerDatabaseCompletion/id',
schemaPath: '#/properties/followerDatabaseCompletion/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err276]
} else {
vErrors.push(err276)
}

}
} else {
const err277 = {
instancePath: instancePath + '/followerDatabaseCompletion/id',
schemaPath: '#/properties/followerDatabaseCompletion/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err277]
} else {
vErrors.push(err277)
}

}
}
if (data86.followerRequestId !== undefined) {
let data88 = data86.followerRequestId
if (typeof data88 === 'string') {
if (!formats2.test(data88)) {
const err278 = {
instancePath: instancePath + '/followerDatabaseCompletion/followerRequestId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/followerRequestId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err278]
} else {
vErrors.push(err278)
}

}
} else {
const err279 = {
instancePath: instancePath + '/followerDatabaseCompletion/followerRequestId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/followerRequestId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err279]
} else {
vErrors.push(err279)
}

}
}
if (data86.description !== undefined) {
let data89 = data86.description
if (typeof data89 === 'string') {
if (func4(data89) > 1000) {
const err280 = {
instancePath: instancePath + '/followerDatabaseCompletion/description',
schemaPath: '#/properties/followerDatabaseCompletion/properties/description/maxLength',
keyword: 'maxLength',
params: { limit: 1000 },
 message: "Must_be_less_than_1000_characters"}
if (vErrors === null) {
vErrors = [err280]
} else {
vErrors.push(err280)
}

}
} else {
const err281 = {
instancePath: instancePath + '/followerDatabaseCompletion/description',
schemaPath: '#/properties/followerDatabaseCompletion/properties/description/type',
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
if (data86.itemId !== undefined) {
let data90 = data86.itemId
if (typeof data90 === 'string') {
if (!formats2.test(data90)) {
const err282 = {
instancePath: instancePath + '/followerDatabaseCompletion/itemId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err282]
} else {
vErrors.push(err282)
}

}
} else {
const err283 = {
instancePath: instancePath + '/followerDatabaseCompletion/itemId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err283]
} else {
vErrors.push(err283)
}

}
}
if (data86.parentItemId !== undefined) {
let data91 = data86.parentItemId
if (typeof data91 === 'string') {
if (!formats2.test(data91)) {
const err284 = {
instancePath: instancePath + '/followerDatabaseCompletion/parentItemId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/parentItemId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err284]
} else {
vErrors.push(err284)
}

}
} else {
const err285 = {
instancePath: instancePath + '/followerDatabaseCompletion/parentItemId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/parentItemId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err285]
} else {
vErrors.push(err285)
}

}
}
if (data86.itemLevel !== undefined) {
let data92 = data86.itemLevel
if (
!(
typeof data92 == 'number' &&
!(data92 % 1) &&
!isNaN(data92) &&
isFinite(data92)
)
) {
const err286 = {
instancePath: instancePath + '/followerDatabaseCompletion/itemLevel',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemLevel/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err286]
} else {
vErrors.push(err286)
}

}
if (typeof data92 == 'number' && isFinite(data92)) {
if (data92 > 8 || isNaN(data92)) {
const err287 = {
instancePath: instancePath + '/followerDatabaseCompletion/itemLevel',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemLevel/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 8 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err287]
} else {
vErrors.push(err287)
}

}
if (data92 < 0 || isNaN(data92)) {
const err288 = {
instancePath: instancePath + '/followerDatabaseCompletion/itemLevel',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemLevel/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err288]
} else {
vErrors.push(err288)
}

}
}
}
if (data86.lastModified !== undefined) {
let data93 = data86.lastModified
if (!(typeof data93 == 'number' && isFinite(data93))) {
const err289 = {
instancePath: instancePath + '/followerDatabaseCompletion/lastModified',
schemaPath: '#/properties/followerDatabaseCompletion/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
if (vErrors === null) {
vErrors = [err289]
} else {
vErrors.push(err289)
}

}
}
if (data86.version !== undefined) {
let data94 = data86.version
if (
!(
typeof data94 == 'number' &&
!(data94 % 1) &&
!isNaN(data94) &&
isFinite(data94)
)
) {
const err290 = {
instancePath: instancePath + '/followerDatabaseCompletion/version',
schemaPath: '#/properties/followerDatabaseCompletion/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err290]
} else {
vErrors.push(err290)
}

}
if (typeof data94 == 'number' && isFinite(data94)) {
if (data94 < 0 || isNaN(data94)) {
const err291 = {
instancePath: instancePath + '/followerDatabaseCompletion/version',
schemaPath: '#/properties/followerDatabaseCompletion/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err291]
} else {
vErrors.push(err291)
}

}
}
}
} else {
const err292 = {
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err292]
} else {
vErrors.push(err292)
}

}
}
if (data.media !== undefined) {
let data95 = data.media
if (data95 && typeof data95 == 'object' && !Array.isArray(data95)) {
if (data95.id === undefined) {
const err293 = {
instancePath: instancePath + '/media',
schemaPath: '#/properties/media/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err293]
} else {
vErrors.push(err293)
}

}
if (data95.size === undefined) {
const err294 = {
instancePath: instancePath + '/media',
schemaPath: '#/properties/media/required',
keyword: 'required',
params: { missingProperty: 'size' },
message: "must have required property '" + 'size' + "'"
}
if (vErrors === null) {
vErrors = [err294]
} else {
vErrors.push(err294)
}

}
if (data95.data === undefined) {
const err295 = {
instancePath: instancePath + '/media',
schemaPath: '#/properties/media/required',
keyword: 'required',
params: { missingProperty: 'data' },
message: "must have required property '" + 'data' + "'"
}
if (vErrors === null) {
vErrors = [err295]
} else {
vErrors.push(err295)
}

}
if (data95.appId === undefined) {
const err296 = {
instancePath: instancePath + '/media',
schemaPath: '#/properties/media/required',
keyword: 'required',
params: { missingProperty: 'appId' },
message: "must have required property '" + 'appId' + "'"
}
if (vErrors === null) {
vErrors = [err296]
} else {
vErrors.push(err296)
}

}
if (data95.lastModified === undefined) {
const err297 = {
instancePath: instancePath + '/media',
schemaPath: '#/properties/media/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err297]
} else {
vErrors.push(err297)
}

}
if (data95.id !== undefined) {
let data96 = data95.id
if (typeof data96 === 'string') {
if (!formats2.test(data96)) {
const err298 = {
instancePath: instancePath + '/media/id',
schemaPath: '#/properties/media/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err298]
} else {
vErrors.push(err298)
}

}
} else {
const err299 = {
instancePath: instancePath + '/media/id',
schemaPath: '#/properties/media/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err299]
} else {
vErrors.push(err299)
}

}
}
if (data95.size !== undefined) {
let data97 = data95.size
if (
!(
typeof data97 == 'number' &&
!(data97 % 1) &&
!isNaN(data97) &&
isFinite(data97)
)
) {
const err300 = {
instancePath: instancePath + '/media/size',
schemaPath: '#/properties/media/properties/size/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err300]
} else {
vErrors.push(err300)
}

}
if (typeof data97 == 'number' && isFinite(data97)) {
if (data97 < 0 || isNaN(data97)) {
const err301 = {
instancePath: instancePath + '/media/size',
schemaPath: '#/properties/media/properties/size/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err301]
} else {
vErrors.push(err301)
}

}
}
}
if (data95.data !== undefined) {
let data98 = data95.data
if (typeof data98 === 'string') {
if (func4(data98) > 8000) {
const err302 = {
instancePath: instancePath + '/media/data',
schemaPath: '#/properties/media/properties/data/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"}
if (vErrors === null) {
vErrors = [err302]
} else {
vErrors.push(err302)
}

}
} else {
const err303 = {
instancePath: instancePath + '/media/data',
schemaPath: '#/properties/media/properties/data/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err303]
} else {
vErrors.push(err303)
}

}
}
if (data95.appId !== undefined) {
let data99 = data95.appId
if (typeof data99 === 'string') {
if (!formats2.test(data99)) {
const err304 = {
instancePath: instancePath + '/media/appId',
schemaPath: '#/properties/media/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err304]
} else {
vErrors.push(err304)
}

}
} else {
const err305 = {
instancePath: instancePath + '/media/appId',
schemaPath: '#/properties/media/properties/appId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err305]
} else {
vErrors.push(err305)
}

}
}
if (data95.lastModified !== undefined) {
let data100 = data95.lastModified
if (!(typeof data100 == 'number' && isFinite(data100))) {
const err306 = {
instancePath: instancePath + '/media/lastModified',
schemaPath: '#/properties/media/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
if (vErrors === null) {
vErrors = [err306]
} else {
vErrors.push(err306)
}

}
}
} else {
const err307 = {
instancePath: instancePath + '/media',
schemaPath: '#/properties/media/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err307]
} else {
vErrors.push(err307)
}

}
}
if (data.deletion !== undefined) {
let data101 = data.deletion
if (data101 && typeof data101 == 'object' && !Array.isArray(data101)) {
if (data101.id === undefined) {
const err308 = {
instancePath: instancePath + '/deletion',
schemaPath: '#/properties/deletion/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err308]
} else {
vErrors.push(err308)
}

}
if (data101.level === undefined) {
const err309 = {
instancePath: instancePath + '/deletion',
schemaPath: '#/properties/deletion/required',
keyword: 'required',
params: { missingProperty: 'level' },
message: "must have required property '" + 'level' + "'"
}
if (vErrors === null) {
vErrors = [err309]
} else {
vErrors.push(err309)
}

}
if (data101.id !== undefined) {
let data102 = data101.id
if (typeof data102 === 'string') {
if (!formats2.test(data102)) {
const err310 = {
instancePath: instancePath + '/deletion/id',
schemaPath: '#/properties/deletion/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err310]
} else {
vErrors.push(err310)
}

}
} else {
const err311 = {
instancePath: instancePath + '/deletion/id',
schemaPath: '#/properties/deletion/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err311]
} else {
vErrors.push(err311)
}

}
}
if (data101.level !== undefined) {
let data103 = data101.level
if (
!(
typeof data103 == 'number' &&
!(data103 % 1) &&
!isNaN(data103) &&
isFinite(data103)
)
) {
const err312 = {
instancePath: instancePath + '/deletion/level',
schemaPath: '#/properties/deletion/properties/level/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err312]
} else {
vErrors.push(err312)
}

}
if (typeof data103 == 'number' && isFinite(data103)) {
if (data103 > 8 || isNaN(data103)) {
const err313 = {
instancePath: instancePath + '/deletion/level',
schemaPath: '#/properties/deletion/properties/level/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 8 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err313]
} else {
vErrors.push(err313)
}

}
if (data103 < 0 || isNaN(data103)) {
const err314 = {
instancePath: instancePath + '/deletion/level',
schemaPath: '#/properties/deletion/properties/level/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err314]
} else {
vErrors.push(err314)
}

}
}
}
} else {
const err315 = {
instancePath: instancePath + '/deletion',
schemaPath: '#/properties/deletion/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err315]
} else {
vErrors.push(err315)
}

}
}
} else {
const err316 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err316]
} else {
vErrors.push(err316)
}

}
return vErrors
}
