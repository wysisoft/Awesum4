import { Type, type Static, type TSchema } from "@sinclair/typebox";
import { v7 as uuidv7, validate } from 'uuid';
import { constants } from "./constants";
import { Value } from "@sinclair/typebox/value";


export enum audioType {
    WebAddress,
    Microphone,
    File,
    TTS,
    None
}

export enum syncAction {
    add,
    modify,
    delete,
    receiveChanges,
}

export enum syncResultType {
    added,
    modified,
    deleted,
    deleteNotFoundOnServer,
    failedValidation,
    versionAndLastModifiedMismatch,
    attemptToModifyPreviousVersion,
    noChange,
    error,
    redirectToLeader
}

export enum imageType {
    WebAddress,
    Camera,
    File,
    None
}

export enum itemType {
    spelling,
    oneByTwoDigraphs,
    oneByOneMultiplication,
    reading,
    writing,
    oneByOneAddition,
}


export const databaseItemProperties = {
    itemType: Type.Integer({
        minimum: 0,
        minimumMessage: "Must_be_greater_than_or_equal_to_0",
        typeMessage: "Must_be_an_integer",
        maximum: Math.max(
            ...Object.values(itemType).filter((value) =>
                typeof value === "number"
            ),
        ),
        maximumMessage: "Must_be_less_than_or_equal_to_maximum",
    }),
    order: Type.Integer({
        minimum: 0,
        minimumMessage: "Must_be_greater_than_or_equal_to_0",
        typeMessage: "Must_be_an_integer",
    }),
    unitId: Type.String({
        format: "uuid",
        formatMessage: "Must_be_a_valid_UUID",
    }),
    appId: Type.String({
        format: "uuid",
        formatMessage: "Must_be_a_valid_UUID",
    }),
    lastModified: Type.Integer({
        default: 0,
        typeMessage: "Must_be_a_number"
    }),
    touched: Type.Boolean({
        default: true,
        typeMessage: "Must_be_a_boolean",
    }),
    version: Type.Integer({
        minimum: 0,
        minimumMessage: "Must_be_greater_than_or_equal_to_0",
        typeMessage: "Must_be_an_integer",
    }),
    databaseId: Type.String({
        format: "uuid",
        formatMessage: "Must_be_a_valid_UUID",
    }),
    id: Type.String({
        format: "uuid",
        formatMessage: "Must_be_a_valid_UUID",
    }),
    dataText: Type.String({
        maxLength: 8000,
        maxLengthMessage: "Must_be_less_than_8000_characters",
    }),
};

export type ErrorObject<
    > = Static<ReturnType<typeof ErrorObject>>
export const ErrorObject = (

) =>
    Type.Object({
        keyword: Type.String(),
        instancePath: Type.String(),
        schemaPath: Type.String(),
        params: Type.Any(),
        propertyName: Type.Optional(Type.String()),
        message: Type.Optional(Type.String()),
        schema: Type.Optional(Type.String()),
        data: Type.Optional(Type.Unknown())
    })

export enum imageModeType {
    Image,
    VisualHint
}

export enum routerStatus {
    enabled,
    disabled,
    unknown
}

export enum ServerMessageType {
    addFollowerRequest = 1
}


export enum ItemLevel {
    app,
    database,
    databaseUnit,
    databaseItem,
    media,
    followerDatabaseCompletion,
    followerDatabase,
    followerRequest,
    router,
    addAssignmentRequest
}

export enum followerRequestStatus {
    Pending,
    Approved,
    Rejected,
}

export enum successVideoType {
    Giphy,
    YouTube,
    None,
}

var imageTypeEnum = Type.Enum(imageType);

export const types = [
    Type.Object(
        {
            email: Type.String({
                minLength: 5,
                minLengthMessage: "Required",
                maxLength: 100,
                maxLengthMessage: "Must_be_less_than_100_characters",
                format: "email",
                formatMessage: "Must_be_a_valid_email",
                transform: ['trim', 'toLowerCase']
            }),
            name: Type.String({
                minLength: 1,
                minLengthMessage: "Required",
                maxLength: 100,
                maxLengthMessage: "Must_be_less_than_100_characters",
                transform: ['trim', 'toLowerCase']
            }),
            uniqueName: Type.String({
                minLength: 1,
                minLengthMessage: "Required",
                maxLength: 100,
                maxLengthMessage: "Must_be_less_than_100_characters",
                pattern: "/^(?!API$|I$).+$/i",
                patternMessage: "Unique_name_contains_reserved_words",
                isNameGloballyUnique: true,
                isNameGloballyUniqueMessage: "Not_Globally_Unique",
                transform: ['trim', 'toLowerCase']
            }),
            version: Type.Integer({
                default: 0,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                typeMessage: "Must_be_an_integer",
            }),
            touched: Type.Boolean({
                default: false,
                typeMessage: "Must_be_a_boolean",
            }),

            lastModified: Type.Integer({
                default: new Date().getTime(),
                typeMessage: "Must_be_a_number",
            }),
            homePageImageType: Type.Integer({
                default: imageType.WebAddress,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                maximum: Math.max(
                    ...Object.values(imageType).filter((value) =>
                        typeof value === "number"
                    ),
                ),
                maximumMessage: "Must_be_less_than_or_equal_to_maximum",
                typeMessage: "Must_be_an_integer",
            }),
            homePageImage: Type.String({
                default: constants.defaultAppBackgroundGuid,
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            authenticationType: Type.String({
                minLength: 1,
                minLengthMessage: "Required",
                maxLength: 100,
                maxLengthMessage: "Must_be_less_than_100_characters",
                transform: ['trim', 'toLowerCase']
            }),
            lang: Type.String({
                default: "en-US",
                minLength: 1,
                minLengthMessage: "Required",
                maxLength: 100,
                maxLengthMessage: "Must_be_less_than_100_characters",
                transform: ['trim', 'toLowerCase']
            }),
            enableNarrator: Type.Boolean(
                {
                    default: false,
                    typeMessage: "Must_be_a_boolean",
                },
            ),
            groups: Type.String({
                default: "",
                maxLength: 8000,
                maxLengthMessage: "Must_be_less_than_8000_characters",
            }),
            id: Type.String({
                default: uuidv7(),
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
                minLength: 36,
                minLengthMessage: "Must_be_36_characters",
            }),
            lastSync: Type.Integer({
                default: 0,
                typeMessage: "Must_be_a_number",
            }),

        },
        { $id: "app" },
    ),
    Type.Object(
        {
            id: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            databaseId: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            level: Type.Integer({
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                typeMessage: "Must_be_an_integer",
                maximum: Math.max(
                    ...Object.values(ItemLevel).filter((value) =>
                        typeof value === "number"
                    ),
                ),
                maximumMessage: "Must_be_less_than_or_equal_to_maximum",
            }),
            lastModified: Type.Integer({
                default: 0,
                typeMessage: "Must_be_a_number"
            }),
           
        },
        { $id: "deletion" },
    ),
    Type.Object(
        {
            id: Type.String({
            })
        },
        { $id: "modification" },
    ),
    Type.Object(
        {
            id: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
        },
        { $id: "addition" },
    ),
    Type.Object(
        {
            id: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            lastModified: Type.Integer({
                default: 0,
                typeMessage: "Must_be_a_number"
            }),
        },
        { $id: "internal" },
    ),
    Type.Object(
        {
            name: Type.String({
                minLength: 1,
                minLengthMessage: "Required",
                maxLength: 100,
                maxLengthMessage: "Must_be_less_than_100_characters",
            }),

            lastModified: Type.Integer({
                default: 0,
                typeMessage: "Must_be_a_number"
            }),
            version: Type.Integer({
                default: 0,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                typeMessage: "Must_be_an_integer",
            }),
            appId: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            id: Type.String({
                default: uuidv7(),
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            order: Type.Integer({
                default: 0,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                typeMessage: "Must_be_an_integer",
            }),
            homePageIconType: Type.Integer({
                default: imageType.WebAddress,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                maximum: Math.max(
                    ...Object.values(imageType).filter((value) =>
                        typeof value === "number"
                    ),
                ),
                maximumMessage: "Must_be_less_than_or_equal_to_maximum",
                typeMessage: "Must_be_an_integer",
            }),
            homePageIcon: Type.String({
                default: constants.defaultDatabaseBackgroundGuid,
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            touched: Type.Boolean({
                default: true,
                typeMessage: "Must_be_a_boolean",
            }),
            
            unitLastModified: Type.Integer({
                default: 0,
                typeMessage: "Must_be_a_number",
            }),
            
            itemLastModified: Type.Integer({
                default: 0,
                typeMessage: "Must_be_a_number",
            }),
            
            mediaLastModified: Type.Integer({
                default: 0,
                typeMessage: "Must_be_a_number",
            })
        },
        { $id: "database" },
    ),

    Type.Object(
        {
            name: Type.String({
                minLength: 1,
                minLengthMessage: "Required",
                maxLength: 100,
                maxLengthMessage: "Must_be_less_than_100_characters",
            }),
            order: Type.Integer({
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                typeMessage: "Must_be_an_integer",
            }),

            lastModified: Type.Integer({
                default: 0,
                typeMessage: "Must_be_a_number"
            }),
            touched: Type.Boolean({
                default: true,
                typeMessage: "Must_be_a_boolean",
            }),

            version: Type.Integer({
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                typeMessage: "Must_be_an_integer",
            }),
            id: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            appId: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            databaseId: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            successVideoType: Type.Integer({
                default: successVideoType.None,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                maximum: Math.max(
                    ...Object.values(successVideoType).filter((value) =>
                        typeof value === "number"
                    ),
                ),
                maximumMessage: "Must_be_less_than_or_equal_to_maximum",
                typeMessage: "Must_be_an_integer",
            }),
            successVideoUrl: Type.String({
                maxLength: 100,
                maxLengthMessage: "Must_be_less_than_100_characters",
            }),
            successAnimations: Type.String({
                default: "Fireworks",
                maxLength: 100,
                maxLengthMessage: "Must_be_less_than_100_characters",
            }),
            successSound: Type.String({
                default: constants.defaultSuccessSoundGuid,
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            successSoundType: Type.Integer({
                default: audioType.File,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                maximum: Math.max(
                    ...Object.values(audioType).filter((value) =>
                        typeof value === "number"
                    ),
                ),
                maximumMessage: "Must_be_less_than_or_equal_to_maximum",
                typeMessage: "Must_be_an_integer",
            }),
            homePageImageType: Type.Integer({
                default: 0,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                maximum: Math.max(
                    ...Object.values(imageType).filter((value) =>
                        typeof value === "number"
                    ),
                ),
                maximumMessage: "Must_be_less_than_or_equal_to_maximum",
                typeMessage: "Must_be_an_integer",
            }),
            homePageImage: Type.String({
                default: constants.defaultDatabaseBackgroundGuid,
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            router: Type.String({
                default: constants.emptyGuid,
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            routerTime: Type.Integer({
                typeMessage: "Must_be_a_number",
            }),
            routerTimeImmediate: Type.Boolean({
                default: false,
                typeMessage: "Must_be_a_boolean",
            }),
            points: Type.Integer({
                default: 0,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                typeMessage: "Must_be_an_integer",
            }),
        },
        { $id: "databaseUnit" },
    ),
    Type.Object(
        {
            itemType: Type.Integer({
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                typeMessage: "Must_be_an_integer",
                maximum: Math.max(
                    ...Object.values(itemType).filter((value) =>
                        typeof value === "number"
                    ),
                ),
                maximumMessage: "Must_be_less_than_or_equal_to_maximum",
            }),
            order: Type.Integer({
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                typeMessage: "Must_be_an_integer",
            }),
            unitId: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            appId: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            lastModified: Type.Integer({
                default: 0,
                typeMessage: "Must_be_a_number"
            }),
            touched: Type.Boolean({
                default: true,
                typeMessage: "Must_be_a_boolean",
            }),
            version: Type.Integer({
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                typeMessage: "Must_be_an_integer",
            }),
            databaseId: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            id: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            dataText: Type.String({
                maxLength: 8000,
                maxLengthMessage: "Must_be_less_than_8000_characters",
            }),
            data: Type.Optional(Type.Any()),
        },
        { $id: "databaseItem" },
    ),
    Type.Object(
        {

            leftDigraphs: Type.String({
                maxLength: 364,
                maxLengthMessage: "Must_be_less_than_364_characters",
            }),
            rightDigraphs: Type.String({
                maxLength: 364,
                maxLengthMessage: "Must_be_less_than_364_characters",
            }),
            image: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            sound: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            text: Type.String({
                minLength: 1,
                minLengthMessage: "Required",
                maxLength: 14,
                maxLengthMessage: "Must_be_less_than_14_characters",
            }),
            imageType: Type.Integer({
                default: imageType.Camera,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                maximum: Math.max(
                    ...Object.values(imageType).filter((value) =>
                        typeof value === "number"
                    ),
                ),
                maximumMessage: "Must_be_less_than_or_equal_to_maximum",
                typeMessage: "Must_be_an_integer",
            }),
            visualHint: Type.String({
                default: "hint",
                minLength: 1,
                minLengthMessage: "Required",
                maxLength: 100,
                maxLengthMessage: "Must_be_less_than_100_characters",
            }),
            audioType: Type.Integer({
                default: audioType.File,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                maximum: Math.max(
                    ...Object.values(audioType).filter((value) =>
                        typeof value === "number"
                    ),
                ),
                maximumMessage: "Must_be_less_than_or_equal_to_maximum",
                typeMessage: "Must_be_an_integer",
            }),
            successSound: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            successSoundType: Type.Integer({
                default: audioType.File,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                maximum: Math.max(
                    ...Object.values(audioType).filter((value) =>
                        typeof value === "number"
                    ),
                ),
                maximumMessage: "Must_be_less_than_or_equal_to_maximum",
                typeMessage: "Must_be_an_integer",
            }),
            successImage: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            successImageType: Type.Integer({
                default: imageType.Camera,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                maximum: Math.max(
                    ...Object.values(imageType).filter((value) =>
                        typeof value === "number"
                    ),
                ),
                maximumMessage: "Must_be_less_than_or_equal_to_maximum",
                typeMessage: "Must_be_an_integer",
            }),
            successAnimations: Type.String({
                default: "Fireworks",
                maxLength: 100,
                maxLengthMessage: "Must_be_less_than_100_characters",
            }),
            successImageTime: Type.Integer({
                default: 3000,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                typeMessage: "Must_be_an_integer",
            })
        },
        { $id: "oneByTwoDigraphsDatabaseItemData" },
    ),
    Type.Object(
        {

            firstNumber: Type.Integer({
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                typeMessage: "Must_be_an_integer",
            }),
            secondNumber: Type.Integer({
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                typeMessage: "Must_be_an_integer",
            }),
            options: Type.String({
                maxLength: 364,
                maxLengthMessage: "Must_be_less_than_364_characters",
            }),
            sound: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            audioType: Type.Integer({
                default: audioType.File,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                maximum: Math.max(
                    ...Object.values(audioType).filter((value) =>
                        typeof value === "number"
                    ),
                ),
                maximumMessage: "Must_be_less_than_or_equal_to_maximum",
                typeMessage: "Must_be_an_integer",
            }),
            successSound: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            successSoundType: Type.Integer({
                default: audioType.File,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                maximum: Math.max(
                    ...Object.values(audioType).filter((value) =>
                        typeof value === "number"
                    ),
                ),
                maximumMessage: "Must_be_less_than_or_equal_to_maximum",
                typeMessage: "Must_be_an_integer",
            }),
            successImage: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            successImageType: Type.Integer({
                default: imageType.Camera,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                maximum: Math.max(
                    ...Object.values(imageType).filter((value) =>
                        typeof value === "number"
                    ),
                ),
                maximumMessage: "Must_be_less_than_or_equal_to_maximum",
                typeMessage: "Must_be_an_integer",
            }),
            successAnimations: Type.String({
                default: "Fireworks",
                maxLength: 100,
                maxLengthMessage: "Must_be_less_than_100_characters",
            }),
            successImageTime: Type.Integer({
                default: 3000,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                typeMessage: "Must_be_an_integer",
            })
        },
        { $id: "oneByOneMathDatabaseItemData" },
    ),
    Type.Object(
        {

            letters: Type.String({
                maxLength: 364,
                maxLengthMessage: "Must_be_less_than_364_characters",
            }),
            image: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            sound: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            text: Type.String({
                minLength: 1,
                minLengthMessage: "Required",
                maxLength: 14,
                maxLengthMessage: "Must_be_less_than_14_characters",
            }),
            imageType: Type.Integer({
                default: imageType.Camera,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                maximum: Math.max(
                    ...Object.values(imageType).filter((value) =>
                        typeof value === "number"
                    ),
                ),
                maximumMessage: "Must_be_less_than_or_equal_to_maximum",
                typeMessage: "Must_be_an_integer",
            }),
            visualHint: Type.String({
                default: "hint",
                minLength: 1,
                minLengthMessage: "Required",
                maxLength: 100,
                maxLengthMessage: "Must_be_less_than_100_characters",
            }),
            audioType: Type.Integer({
                default: audioType.File,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                maximum: Math.max(
                    ...Object.values(audioType).filter((value) =>
                        typeof value === "number"
                    ),
                ),
                maximumMessage: "Must_be_less_than_or_equal_to_maximum",
                typeMessage: "Must_be_an_integer",
            }),
            successSound: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            successSoundType: Type.Integer({
                default: audioType.File,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                maximum: Math.max(
                    ...Object.values(audioType).filter((value) =>
                        typeof value === "number"
                    ),
                ),
                maximumMessage: "Must_be_less_than_or_equal_to_maximum",
                typeMessage: "Must_be_an_integer",
            }),
            successImage: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            successImageType: Type.Integer({
                default: imageType.Camera,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                maximum: Math.max(
                    ...Object.values(imageType).filter((value) =>
                        typeof value === "number"
                    ),
                ),
                maximumMessage: "Must_be_less_than_or_equal_to_maximum",
                typeMessage: "Must_be_an_integer",
            }),
            successAnimations: Type.String({
                default: "Fireworks",
                maxLength: 100,
                maxLengthMessage: "Must_be_less_than_100_characters",
            }),
            successImageTime: Type.Integer({
                default: 3000,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                typeMessage: "Must_be_an_integer",
            })
        },
        { $id: "spellingDatabaseItemData" },
    ),
    Type.Object(
        {
            followerRequestId: Type.String({
                default: constants.emptyGuid,
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            id: Type.String({
                default: uuidv7(),
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            databaseId: Type.String({
                default: constants.emptyGuid,
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),

            lastModified: Type.Integer({
                default: 0,
                typeMessage: "Must_be_a_number"
            }),
            touched: Type.Boolean({
                default: true,
                typeMessage: "Must_be_a_boolean",
            }),
            version: Type.Integer({
                default: 0,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                typeMessage: "Must_be_an_integer",
            }),
            
        },
        { $id: "followerDatabase" },
    ),
    Type.Object(
        {
            group: Type.String({
                maxLength: 100,
                maxLengthMessage: "Must_be_less_than_100_characters",
                default: "",
            }),
            followerRequestId: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            databaseId: Type.String({
                minLength: 1,
                minLengthMessage: "Required",
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
        },
        { $id: "addAssignmentRequest" },
    ),
    Type.Object(
        {
            leaderAppId: Type.String({
                default: constants.emptyGuid,
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            followerAppId: Type.String({
                default: constants.emptyGuid,
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            id: Type.String({
                default: uuidv7(),
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            followerName: Type.String({
                minLength: 1,
                minLengthMessage: "Required",
                maxLength: 100,
                maxLengthMessage: "Must_be_less_than_100_characters",
                default: "Follower Name",
            }),
            leaderName: Type.String({
                minLength: 1,
                minLengthMessage: "Required",
                maxLength: 100,
                maxLengthMessage: "Must_be_less_than_100_characters",
                default: "Leader Name",
            }),
            followerEmail: Type.String({
                minLength: 1,
                minLengthMessage: "Required",
                maxLength: 100,
                maxLengthMessage: "Must_be_less_than_100_characters",
                format: "email",
                formatMessage: "Must_be_a_valid_email",
                doesEmailExist: true,
                doesEmailExistMessage: "Email_does_not_exist",
                default: "follower@example.com",
            }),
            leaderEmail: Type.String({
                minLength: 1,
                minLengthMessage: "Required",
                maxLength: 100,
                maxLengthMessage: "Must_be_less_than_100_characters",
                format: "email",
                formatMessage: "Must_be_a_valid_email",
                doesEmailExist: true,
                doesEmailExistMessage: "Email_does_not_exist",
                default: "leader@example.com",
            }),
            initiatedByFollower: Type.Boolean({
                default: false,
                typeMessage: "Must_be_a_boolean",
            }),

            lastModified: Type.Integer({
                default: 0,
                typeMessage: "Must_be_a_number"
            }),
            touched: Type.Boolean({
                default: true,
                typeMessage: "Must_be_a_boolean",
            }),
            version: Type.Integer({
                default: 0,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                typeMessage: "Must_be_an_integer",
            }),
            status: Type.Integer({
                default: followerRequestStatus.Pending,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                maximum: Math.max(
                    ...Object.values(followerRequestStatus).filter((value) => typeof value === "number"),
                ),
                maximumMessage: "Must_be_less_than_or_equal_to_maximum",
                typeMessage: "Must_be_an_integer",
            }),
            groups: Type.String({
                maxLength: 8000,
                maxLengthMessage: "Must_be_less_than_8000_characters",
                default: "",
            }),
            points: Type.Integer({
                default: 0,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                typeMessage: "Must_be_an_integer",
            }),
            completionLastModified: Type.Integer({
                default: 0,
                typeMessage: "Must_be_a_number",
            }),
        },
        { $id: "followerRequest" },
    ),
    Type.Object({
        sub: Type.String(),
        name: Type.String(),
        given_name: Type.String(),
        family_name: Type.String(),
        picture: Type.String(),
        email: Type.String(),
        provider: Type.String(),
        email_verified: Type.Boolean(),
        sessionId: Type.String(),
    }, { $id: "profileResponse" }),
    Type.Object({
        appFound: Type.Boolean(),
        appDeleted: Type.Boolean(),
    }, { $id: "resetAllServerDataResponse" }),
    Type.Object(
        {
            id: Type.String({
                default: uuidv7(),
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            size: Type.Integer({
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                typeMessage: "Must_be_an_integer",
            }),

            data: Type.String({
                maxLength: 8000,
                maxLengthMessage: "Must_be_less_than_8000_characters",
            }),

            appId: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            touched: Type.Boolean({
                default: true,
                typeMessage: "Must_be_a_boolean",
            }),

        },
        { $id: "media" },
    ),
    Type.Object(
        {
            id: Type.String({
                default: uuidv7(),
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            followerRequestId: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            itemId: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            parentItemId: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            itemLevel: Type.Integer({
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                maximum: Math.max(
                    ...Object.values(ItemLevel).filter((value) => typeof value === "number"),
                ),
                maximumMessage: "Must_be_less_than_or_equal_to_maximum",
                typeMessage: "Must_be_an_integer",
            }),
            lastModified: Type.Integer({
                default: 0,
                typeMessage: "Must_be_a_number"
            }),
        },
        { $id: "followerDatabaseCompletion" },
    ) as any,
    Type.Object(
        {
            groups: Type.String({
                minLength: 1,
                minLengthMessage: "Required",
                maxLength: 8000,
                maxLengthMessage: "Must_be_less_than_8000_characters",
            }),
            leaderAppId: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            followerEmail: Type.String({
                minLength: 1,
                minLengthMessage: "Required",
                maxLength: 100,
                maxLengthMessage: "Must_be_less_than_100_characters",
                format: "email",
                formatMessage: "Must_be_a_valid_email",
                doesEmailExist: true,
                doesEmailExistMessage: "Email_does_not_exist",
                emailIsNotUser: true,
                emailIsNotUserMessage: "Email_cannot_be_your_email",
            }),
            initiatedByFollower: Type.Boolean({ typeMessage: "Must_be_a_boolean" }),
        },
        { $id: "addFollowerRequest" },
    ),
    Type.Object(
        {
            id: Type.String({
                default: uuidv7(),
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            appId: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            routerMac: Type.String({
                default: "00:00:00:00:00:00",
                format: "regex",
                formatMessage: "Must_be_a_valid_MAC_address",
                pattern: "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$",
                patternMessage: "Must_be_a_valid_MAC_address",
                contentEncoding: "base64",
            }),
            ipAddress: Type.String({
                default: "0.0.0.0",
                format: "ipv4",
                formatMessage: "Must_be_a_valid_IP_address",
            }),
            mondayTimesAndDurations: Type.String({
                default: "06:30|60",
                format: "regex",
                formatMessage: "Must_be_a_valid_time_and_duration",
                pattern: "^([0-9]{2}:[0-9]{2})\\|([0-9]+)$",
                patternMessage: "Must_be_a_valid_time_and_duration",
            }),
            tuesdayTimesAndDurations: Type.String({
                default: "06:30|60",
                format: "regex",
                formatMessage: "Must_be_a_valid_time_and_duration",
                pattern: "^([0-9]{2}:[0-9]{2})\\|([0-9]+)$",
                patternMessage: "Must_be_a_valid_time_and_duration",
            }),
            wednesdayTimesAndDurations: Type.String({
                default: "06:30|60",
                format: "regex",
                formatMessage: "Must_be_a_valid_time_and_duration",
                pattern: "^([0-9]{2}:[0-9]{2})\\|([0-9]+)$",
                patternMessage: "Must_be_a_valid_time_and_duration",
            }),
            thursdayTimesAndDurations: Type.String({
                default: "06:30|60",
                format: "regex",
                formatMessage: "Must_be_a_valid_time_and_duration",
                pattern: "^([0-9]{2}:[0-9]{2})\\|([0-9]+)$",
                patternMessage: "Must_be_a_valid_time_and_duration",
            }),
            fridayTimesAndDurations: Type.String({
                default: "06:30|60",
                format: "regex",
                formatMessage: "Must_be_a_valid_time_and_duration",
                pattern: "^([0-9]{2}:[0-9]{2})\\|([0-9]+)$",
                patternMessage: "Must_be_a_valid_time_and_duration",
            }),
            saturdayTimesAndDurations: Type.String({
                default: "06:30|60",
                format: "regex",
                formatMessage: "Must_be_a_valid_time_and_duration",
                pattern: "^([0-9]{2}:[0-9]{2})\\|([0-9]+)$",
                patternMessage: "Must_be_a_valid_time_and_duration",
            }),
            sundayTimesAndDurations: Type.String({
                default: "06:30|60",
                format: "regex",
                formatMessage: "Must_be_a_valid_time_and_duration",
                pattern: "^([0-9]{2}:[0-9]{2})\\|([0-9]+)$",
                patternMessage: "Must_be_a_valid_time_and_duration",
            }),
            version: Type.Integer({
                default: 0,
                minimum: 0,
                minimumMessage: "Must_be_greater_than_or_equal_to_0",
                typeMessage: "Must_be_an_integer",
            }),

            lastModified: Type.Integer({
                default: 0,
                typeMessage: "Must_be_a_number",
            }),
            touched: Type.Boolean({
                default: true,
                typeMessage: "Must_be_a_boolean",
            }),
            status: Type.Integer({
                default: routerStatus.disabled,
                maximum: Math.max(
                    ...Object.values(routerStatus).filter((value) => typeof value === "number"),
                ),
                maximumMessage: "Must_be_less_than_or_equal_to_maximum",
                typeMessage: "Must_be_an_integer",
            }),
        },
        { $id: "router" },
    )
];

types.push(
    Type.Object(
        {
            data: types.filter((x) => x.$id == "spellingDatabaseItemData")[0],
            ...databaseItemProperties
        },
        { $id: "spellingDatabaseItem" },
    ),
    Type.Object(
        {
            data: types.filter((x) => x.$id == "oneByTwoDigraphsDatabaseItemData")[0],
            ...databaseItemProperties
        },
        { $id: "oneByTwoDigraphsDatabaseItem" },
    ),
    Type.Object(
        {
            data: types.filter((x) => x.$id == "oneByOneMathDatabaseItemData")[0],
            ...databaseItemProperties
        },
        { $id: "oneByOneMathDatabaseItem" },
    )
);

types.push(
    Type.Object(
        {
            app: types.filter((x) => x.$id == "app")[0],
            force: Type.Boolean(),
        },
        { $id: "pushAppRequest" },
    ) as any,
);

types.push(
    Type.Object(
        {
            app: types.filter((x) => x.$id == "app")[0],
        },
        { $id: "pushAppResponse" },
    ) as any,
);

types.push(
    Type.Object(
        {
            id:
                Type.String({
                    format: "uuid",
                    formatMessage: "Must_be_a_valid_UUID",
                }),

            level: Type.Optional(
                Type.Integer({
                    minimum: 0,
                    maximum: Math.max(
                        ...Object.values(ItemLevel).filter((value) => typeof value === "number"),
                    ),
                    maximumMessage: "Must_be_less_than_or_equal_to_maximum",
                    typeMessage: "Must_be_an_integer",
                }),
            ),
            values: Type.Optional(
                Type.Record(Type.String(), Type.Any())
            ),
            action: Type.Optional(
                Type.Integer({
                    minimum: 0,
                    maximum: Math.max(
                        ...Object.values(syncAction).filter((value) => typeof value === "number"),
                    ),
                    maximumMessage: "Must_be_less_than_or_equal_to_maximum",
                    typeMessage: "Must_be_an_integer",
                }),
            ),
            app: Type.Optional(
                types.filter((x) => x.$id == "app")[0],
            ),
            database: Type.Optional(
                types.filter((x) => x.$id == "database")[0],
            ),
            databaseUnit: Type.Optional(
                types.filter((x) => x.$id == "databaseUnit")[0],
            ),
            databaseItem: Type.Optional(
                types.filter((x) => x.$id == "databaseItem")[0],
            ),
            followerRequest: Type.Optional(
                types.filter((x) => x.$id == "followerRequest")[0],
            ),
            followerDatabase: Type.Optional(
                types.filter((x) => x.$id == "followerDatabase")[0],
            ),
            router: Type.Optional(
                types.filter((x) => x.$id == "router")[0],
            ),
            followerDatabaseCompletion: Type.Optional(
                types.filter((x) => x.$id == "followerDatabaseCompletion")[0],
            ),
            media: Type.Optional(
                types.filter((x) => x.$id == "media")[0],
            ),

        },
        { $id: "syncRequest" },
    ) as any,
);

types.push(
    Type.Object(
        {
            id:
                Type.String({
                    format: "uuid",
                    formatMessage: "Must_be_a_valid_UUID",
                }),

            level: Type.Optional(
                Type.Integer({
                    minimum: 0,
                    maximum: Math.max(
                        ...Object.values(ItemLevel).filter((value) => typeof value === "number"),
                    ),
                    maximumMessage: "Must_be_less_than_or_equal_to_maximum",
                    typeMessage: "Must_be_an_integer",
                }),
            ),
            values: Type.Optional(
                Type.Record(Type.String(), Type.Any())
            ),
            action: Type.Optional(
                Type.Integer({
                    minimum: 0,
                    maximum: Math.max(
                        ...Object.values(syncAction).filter((value) => typeof value === "number"),
                    ),
                    maximumMessage: "Must_be_less_than_or_equal_to_maximum",
                    typeMessage: "Must_be_an_integer",
                }),
            ),
            app: Type.Optional(
                types.filter((x) => x.$id == "app")[0],
            ),
            database: Type.Optional(
                types.filter((x) => x.$id == "database")[0],
            ),
            databaseUnit: Type.Optional(
                types.filter((x) => x.$id == "databaseUnit")[0],
            ),
            databaseItem: Type.Optional(
                types.filter((x) => x.$id == "databaseItem")[0],
            ),
            followerRequest: Type.Optional(
                types.filter((x) => x.$id == "followerRequest")[0],
            ),
            followerDatabase: Type.Optional(
                types.filter((x) => x.$id == "followerDatabase")[0],
            ),
            followerDatabaseCompletion: Type.Optional(
                types.filter((x) => x.$id == "followerDatabaseCompletion")[0],
            ),
            router: Type.Optional(
                types.filter((x) => x.$id == "router")[0],
            ),
            media: Type.Optional(
                types.filter((x) => x.$id == "media")[0],
            ),
            message: Type.Optional(Type.String()),
            result: Type.Optional(Type.Integer({
                minimum: 0,
                maximum: Math.max(
                    ...Object.values(syncResultType).filter((value) => typeof value === "number"),
                ),
                maximumMessage: "Must_be_less_than_or_equal_to_maximum",
                typeMessage: "Must_be_an_integer",
            })),
        },
        { $id: "syncResponse" },
    ) as any,
);

types.push(
    Type.Object(
        {
            followerRequestId: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
        },
        { $id: "unfollowFollowerRequest" },
    ) as any,
);

types.push(
    Type.Object(
        {
            follower: types.filter((x) => x.$id == "followerRequest")[0],
        },
        { $id: "addFollowerResponse" },
    ) as any,
);

types.push(
    Type.Object(
        {
            name: Type.String(),
        },
        { $id: "displayNameFromEmailResponse" },
    ) as any,
);

types.push(
    Type.Object(
        {
            status: Type.String(),
            remainingTime: Type.Integer(),
            remainingImmediateTime: Type.Integer(),
            startTime: Type.Integer(),
            duration: Type.Integer(),
        },
        { $id: "getRouterStatusResponse" },
    ) as any,
);

const defaultTimeAndDuration = "06:30|60";
const timeAndDurationPattern = "^([0-9]{2}:[0-9]{2})\\|([0-9]+)$";

types.push(
    Type.Object(
        {
            type: Type.Literal("updateRouterTimesAndDurationsRequest"),
            routerId: Type.String({
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            mondayTimesAndDurations: Type.String({
                default: defaultTimeAndDuration,
                format: "regex",
                formatMessage: "Must_be_a_valid_time_and_duration",
                pattern: timeAndDurationPattern,
                patternMessage: "Must_be_a_valid_time_and_duration",
            }),
            tuesdayTimesAndDurations: Type.String({
                default: defaultTimeAndDuration,
                format: "regex",
                formatMessage: "Must_be_a_valid_time_and_duration",
                pattern: timeAndDurationPattern,
                patternMessage: "Must_be_a_valid_time_and_duration",
            }),
            wednesdayTimesAndDurations: Type.String({
                default: defaultTimeAndDuration,
                format: "regex",
                formatMessage: "Must_be_a_valid_time_and_duration",
                pattern: timeAndDurationPattern,
                patternMessage: "Must_be_a_valid_time_and_duration",
            }),
            thursdayTimesAndDurations: Type.String({
                default: defaultTimeAndDuration,
                format: "regex",
                formatMessage: "Must_be_a_valid_time_and_duration",
                pattern: timeAndDurationPattern,
                patternMessage: "Must_be_a_valid_time_and_duration",
            }),
            fridayTimesAndDurations: Type.String({
                default: defaultTimeAndDuration,
                format: "regex",
                formatMessage: "Must_be_a_valid_time_and_duration",
                pattern: timeAndDurationPattern,
                patternMessage: "Must_be_a_valid_time_and_duration",
            }),
            saturdayTimesAndDurations: Type.String({
                default: defaultTimeAndDuration,
                format: "regex",
                formatMessage: "Must_be_a_valid_time_and_duration",
                pattern: timeAndDurationPattern,
                patternMessage: "Must_be_a_valid_time_and_duration",
            }),
            sundayTimesAndDurations: Type.String({
                default: defaultTimeAndDuration,
                format: "regex",
                formatMessage: "Must_be_a_valid_time_and_duration",
                pattern: timeAndDurationPattern,
                patternMessage: "Must_be_a_valid_time_and_duration",
            }),
        },
        { $id: "updateRouterTimesAndDurationsRequest" },
    ) as any
)
types.push(
    Type.Object(
        {
            type: Type.Literal("updateRouterStatusRequest"),
            status: Type.String(),
            remainingTime: Type.Integer(),
            remainingImmediateTime: Type.Integer(),
            startTime: Type.Integer(),
            duration: Type.Integer(),
        },
        { $id: "updateRouterStatusRequest" },
    ) as any,
);

types.push(
    Type.Object(
        {
            timestamp: Type.Integer(),
            domain: Type.String(),
            routerId: Type.String({
                default: uuidv7(),
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
            id: Type.String({
                default: uuidv7(),
                format: "uuid",
                formatMessage: "Must_be_a_valid_UUID",
            }),
        },
        { $id: "dnsEntry" },
    ) as any,
);


export function getDefault<T extends { id: string, lastModified: number }>(type: T): T {
    type.id = uuidv7();
    type.lastModified = Date.now();
    return type;
};