'use strict'
const schema41 = {
$id: 'displayNameFromEmailResponse',
type: 'object',
properties: { name: { type: 'string' } },
required: ['name']
}
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerDisplayNameFromEmailResponseInterface } from '../serverInterfaces/ServerDisplayNameFromEmailResponseInterface'
export async function validateDisplayNameFromEmailResponse(
data:ServerDisplayNameFromEmailResponseInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="displayNameFromEmailResponse" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
let missing0
if (data.name === undefined && (missing0 = 'name')) {errors.push(
{
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: missing0 },
 message: "Required"
}
);
} else {
if (data.name !== undefined) {
if (typeof data.name !== 'string') {errors.push(
{
instancePath: instancePath + '/name',
schemaPath: '#/properties/name/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
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
