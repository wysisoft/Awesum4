'use strict'
const schema23 = {
$id: 'resetAllServerDataResponse',
type: 'object',
properties: {
appFound: { type: 'boolean' },
appDeleted: { type: 'boolean' }
},
required: ['appFound', 'appDeleted']
}
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerResetAllServerDataResponseInterface } from '../serverInterfaces/ServerResetAllServerDataResponseInterface'
export async function validateResetAllServerDataResponse(
data:ServerResetAllServerDataResponseInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="resetAllServerDataResponse" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
let missing0
if (
(data.appFound === undefined && (missing0 = 'appFound')) ||
(data.appDeleted === undefined && (missing0 = 'appDeleted'))
) {errors.push(
{
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: missing0 },
 message: "Required"}
);
} else {
if (data.appFound !== undefined) {
const _errs1 = errors
if (typeof data.appFound !== 'boolean') {errors.push(
{
instancePath: instancePath + '/appFound',
schemaPath: '#/properties/appFound/type',
keyword: 'type',
params: { type: 'boolean' },
message: 'must be boolean'
}
);
}
var valid0 = _errs1 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.appDeleted !== undefined) {
const _errs3 = errors
if (typeof data.appDeleted !== 'boolean') {errors.push(
{
instancePath: instancePath + '/appDeleted',
schemaPath: '#/properties/appDeleted/type',
keyword: 'type',
params: { type: 'boolean' },
message: 'must be boolean'
}
);
}
var valid0 = _errs3 === errors
} else {
var valid0 = true
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
