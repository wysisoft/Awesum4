import Dexie, { type Table, type Transaction } from "dexie";
import { awesum } from "./awesum";
import type { ServerAppInterface } from "../../server/serverInterfaces/ServerAppInterface";
import { I18nGlobal } from "./i18nGlobal";
import { resources } from "./resources/Resources";
import type { ServerDatabaseInterface } from "../../server/serverInterfaces/ServerDatabaseInterface";
import type { ServerDatabaseItemInterface } from "../../server/serverInterfaces/ServerDatabaseItemInterface";
import type { ServerDatabaseUnitInterface } from "../../server/serverInterfaces/ServerDatabaseUnitInterface";
import type { ServerFollowerRequestInterface } from "../../server/serverInterfaces/ServerFollowerRequestInterface";
import type { ServerFollowerDatabaseInterface } from "../../server/serverInterfaces/ServerFollowerDatabaseInterface";
import type { ServerMediaInterface } from "../../server/serverInterfaces/ServerMediaInterface";
import type { ServerFollowerDatabaseCompletionInterface } from "../../server/serverInterfaces/ServerFollowerDatabaseCompletionInterface";
import { ClientApp } from "./clientClasses/App";
import { ClientDatabase } from "./clientClasses/Database";
import { ClientDatabaseItem } from "./clientClasses/DatabaseItem";
import { ClientDatabaseUnit } from "./clientClasses/DatabaseUnit";
import { ClientFollowerDatabase } from "./clientClasses/FollowerDatabase";
import type { ServerRouterInterface } from "../../server/serverInterfaces/ServerRouterInterface";
import { ClientRouter } from "./clientClasses/Router";
import { followerRequestStatus, itemType, successVideoType, imageType, audioType, ItemLevel } from "../../server/typebox";
import { constants } from "../../server/constants";
import { v7 as uuid } from 'uuid';
import type { ServerSpellingDatabaseItemInterface } from "../../server/serverInterfaces/ServerSpellingDatabaseItemInterface";
import type { ServerSpellingDatabaseItemDataInterface } from "../../server/serverInterfaces/ServerSpellingDatabaseItemDataInterface";
import type { ServerDeletionInterface } from "../../server/serverInterfaces/ServerDeletionInterface";
import type { ServerInternalInterface } from "../../server/serverInterfaces/ServerInternalInterface";
import type { ServerAdditionInterface } from "../../server/serverInterfaces/ServerAdditionInterface";
import { ClientFollowerRequest } from "./clientClasses/FollowerRequest";
export class AwesumDexieDB extends Dexie {

    internal!: Table<ServerInternalInterface, string>;
    deletions!: Table<ServerDeletionInterface, string>;
    additions!: Table<ServerAdditionInterface, string>;
    serverApps!: Table<ServerAppInterface, string>;
    serverDatabases!: Table<ServerDatabaseInterface, string>;
    serverDatabaseUnits!: Table<ServerDatabaseUnitInterface, string>;
    serverDatabaseItems!: Table<ServerDatabaseItemInterface, string>;
    serverFollowerRequests!: Table<ServerFollowerRequestInterface, string>;
    serverFollowerDatabases!: Table<ServerFollowerDatabaseInterface, string>;
    serverMedia!: Table<ServerMediaInterface, string>;
    serverFollowerDatabaseCompletions!: Table<ServerFollowerDatabaseCompletionInterface, string>;
    serverRouters!: Table<ServerRouterInterface, string>;
    static async persist() {
        return await navigator.storage && navigator.storage.persist &&
            navigator.storage.persist();
    }

    static async isStoragePersisted() {
        return await navigator.storage && navigator.storage.persisted &&
            navigator.storage.persisted();
    }

    public static async CreateAsync() {
        this.isStoragePersisted().then(async (isPersisted) => {
            if (isPersisted) {
                console.log(":) Storage is successfully persisted.");
            } else {
                console.log(":( Storage is not persisted.");
                console.log("Trying to persist..:");
                if (await this.persist()) {
                    console.log(
                        ":) We successfully turned the storage to be persisted.",
                    );
                } else {
                    console.log(":( Failed to make storage persisted");
                }
            }
        });

        const returnValue = new AwesumDexieDB();

        await returnValue.on("populate", async function (trans) {


            trans.table('internal').put({
                id: uuid(),
                lastModified: new Date().getTime(),
            });

            if (awesum.serverEmail == '') {
                var followerRequestId = uuid();
                trans.table('serverFollowerRequests').put({
                    leaderAppId: awesum.publicAppId,
                    followerAppId: awesum.publicAppId,
                    id: followerRequestId,
                    followerName: 'Public App',
                    leaderName: 'Public App',
                    followerEmail: 'public@awesum.app',
                    leaderEmail: 'public@awesum.app',
                    initiatedByFollower: false,

                    lastModified: new Date().getTime(),
                    version: 0,
                    status: followerRequestStatus.Approved,
                    groups: '',
                    points: 0,
                } as ServerFollowerRequestInterface)



                trans.table('serverApps').put({
                    email: awesum.publicAppEmail,
                    name: 'Public App',
                    uniqueName: 'public',
                    version: 0,

                    lastModified: new Date().getTime(),
                    homePageImageType: imageType.WebAddress,
                    homePageImage: awesum.defaultAppBackgroundGuid,
                    authenticationType: "Google",
                    lang: 'en',
                    enableNarrator: false,
                    groups: '',
                    id: awesum.publicAppId,
                } as ServerAppInterface)

                var dbId = uuid();
                trans.table('serverDatabases').put({
                    id: dbId,
                    appId: awesum.publicAppId,
                    lastModified: new Date().getTime(),
                    version: 0,
                    size: 0,
                    name: 'Public Database',
                    order: 0,
                    homePageIconType: imageType.WebAddress,
                    homePageIcon: awesum.defaultDatabaseBackgroundGuid,
                    touched: false,
                    unitVersion: 0,
                    unitLastModified: 0,
                    itemVersion: 0,
                    itemLastModified: 0,
                    completionVersion: 0,
                    completionLastModified: 0,
                    mediaVersion: 0,
                    mediaLastModified: 0,
                } as ServerDatabaseInterface)


                trans.table('serverFollowerDatabases').put({
                    followerRequestId: followerRequestId,
                    id: uuid(),
                    databaseId: dbId,

                    lastModified: new Date().getTime(),
                    version: 0,
                } as ServerFollowerDatabaseInterface)

                var dbUnitId = uuid();
                trans.table('serverDatabaseUnits').put({
                    name: 'Unit 1',
                    order: 0,

                    lastModified: 0,
                    version: 0,
                    id: dbUnitId,
                    appId: awesum.publicAppId,
                    databaseId: dbId,
                    successVideoType: successVideoType.YouTube,
                    successVideoUrl: awesum.defaultYouTubeVideoUrl,
                    successAnimations: '',
                    successSound: awesum.defaultSuccessSoundGuid,
                    successSoundType: audioType.WebAddress,
                    homePageImageType: imageType.WebAddress,
                    homePageImage: awesum.defaultAppBackgroundGuid,
                    router: constants.emptyGuid,
                    routerTime: 0,
                    routerTimeImmediate: false,
                    points: 0,

                } as ServerDatabaseUnitInterface)

                trans.table('serverDatabaseItems').put({
                    id: uuid(),
                    unitId: dbUnitId,
                    order: 1,
                    databaseId: dbId,
                    lastModified: new Date().getTime(),
                    version: 0,
                    appId: awesum.publicAppId,

                    dataText: "",
                    data: {
                        letters: 'w,o,r\no,r,d\nr,d,e\nd,e,l',
                        image: awesum.emptyImageGuid,
                        sound: awesum.ttsGuid,
                        text: 'word',
                        imageType: imageType.WebAddress,
                        visualHint: 'Visual Hint',
                        audioType: audioType.TTS,
                        successSound: awesum.defaultSuccessSoundGuid,
                        successSoundType: audioType.WebAddress,
                        successImage: awesum.defaultSuccessImageGuid,
                        successImageType: imageType.WebAddress,
                        successAnimations: "Fireworks,Balloons,Confetti",
                        successImageTime: 3000,
                    } as ServerSpellingDatabaseItemDataInterface,
                    itemType: itemType.spelling,

                } as ServerSpellingDatabaseItemInterface)

                trans.table('serverDatabaseItems').put({
                    id: uuid(),
                    unitId: dbUnitId,
                    order: 2,
                    databaseId: dbId,
                    lastModified: new Date().getTime(),
                    version: 0,
                    appId: awesum.publicAppId,

                    dataText: "",
                    data: {
                        letters: '',
                        image: awesum.emptyImageGuid,
                        sound: awesum.ttsGuid,
                        text: 'nerd',
                        imageType: imageType.WebAddress,
                        visualHint: 'Visual Hint',
                        audioType: audioType.TTS,
                        successSound: awesum.defaultSuccessSoundGuid,
                        successSoundType: audioType.WebAddress,
                        successImage: awesum.defaultSuccessImageGuid,
                        successImageType: imageType.WebAddress,
                        successAnimations: "Fireworks,Balloons,Confetti",
                        successImageTime: 3000,
                    } as ServerSpellingDatabaseItemDataInterface,
                    itemType: itemType.spelling,

                })

                trans.table('serverDatabaseItems').put({
                    id: uuid(),
                    unitId: dbUnitId,
                    order: 3,
                    databaseId: dbId,
                    lastModified: new Date().getTime(),
                    version: 0,
                    appId: awesum.publicAppId,

                    dataText: "",
                    data: {
                        letters: '',
                        image: awesum.emptyImageGuid,
                        sound: awesum.ttsGuid,
                        text: 'worm',
                        imageType: imageType.WebAddress,
                        visualHint: 'Visual Hint',
                        audioType: audioType.TTS,
                        successSound: awesum.defaultSuccessSoundGuid,
                        successSoundType: audioType.WebAddress,
                        successImage: awesum.defaultSuccessImageGuid,
                        successImageType: imageType.WebAddress,
                        successAnimations: "Fireworks,Balloons,Confetti",
                        successImageTime: 3000,
                    } as ServerSpellingDatabaseItemDataInterface,
                    itemType: itemType.spelling,

                } as ServerSpellingDatabaseItemInterface)


                dbUnitId = uuid();
                trans.table('serverDatabaseUnits').put({
                    name: 'Unit 2',
                    order: 1,

                    lastModified: 0,
                    version: 0,
                    id: dbUnitId,
                    appId: awesum.publicAppId,
                    databaseId: dbId,
                    successVideoType: successVideoType.YouTube,
                    successVideoUrl: awesum.defaultYouTubeVideoUrl,
                    successAnimations: '',
                    successSound: awesum.defaultSuccessSoundGuid,
                    successSoundType: audioType.WebAddress,
                    homePageImageType: imageType.WebAddress,
                    homePageImage: awesum.defaultAppBackgroundGuid,
                    router: constants.emptyGuid,
                    routerTime: 0,
                    routerTimeImmediate: false,
                    points: 0,
                } as ServerDatabaseUnitInterface)

                trans.table('serverDatabaseItems').put({

                    id: uuid(),
                    unitId: dbUnitId,
                    order: 1,
                    databaseId: dbId,
                    lastModified: new Date().getTime(),
                    version: 0,
                    appId: awesum.publicAppId,

                    dataText: "",
                    data: {

                        leftDigraphs: 'c,b,s,h,r',
                        rightDigraphs: 'an,at',
                        text: 'cat',
                        image: awesum.emptyImageGuid,
                        sound: awesum.ttsGuid,
                        imageType: imageType.WebAddress,
                        visualHint: 'Visual Hint',
                        audioType: audioType.TTS,
                        successSound: awesum.defaultSuccessSoundGuid,
                        successSoundType: audioType.WebAddress,
                        successImage: awesum.defaultSuccessImageGuid,
                        successImageType: imageType.WebAddress,
                        successAnimations: "Fireworks,Balloons,Confetti",
                        successImageTime: 3000,
                    },
                    itemType: itemType.oneByTwoDigraphs,

                })

                trans.table('serverDatabaseItems').put({

                    id: uuid(),
                    unitId: dbUnitId,
                    order: 2,
                    databaseId: dbId,
                    lastModified: new Date().getTime(),
                    version: 0,
                    appId: awesum.publicAppId,

                    dataText: "",
                    data: {
                        leftDigraphs: 'c,b,s,h,r,m',
                        rightDigraphs: 'an,at',
                        text: 'mat',
                        image: awesum.emptyImageGuid,
                        sound: awesum.ttsGuid,
                        imageType: imageType.WebAddress,
                        visualHint: 'Visual Hint',
                        audioType: audioType.TTS,
                        successSound: awesum.defaultSuccessSoundGuid,
                        successSoundType: audioType.WebAddress,
                        successImage: awesum.defaultSuccessImageGuid,
                        successImageType: imageType.WebAddress,
                        successAnimations: "Fireworks,Balloons,Confetti",
                        successImageTime: 3000,
                    },
                    itemType: itemType.oneByTwoDigraphs,

                })

                trans.table('serverDatabaseItems').put({

                    id: uuid(),
                    unitId: dbUnitId,
                    order: 3,
                    databaseId: dbId,
                    lastModified: new Date().getTime(),
                    version: 0,
                    appId: awesum.publicAppId,

                    dataText: "",
                    data: {

                        leftDigraphs: 'c,b,s,h,r',
                        rightDigraphs: 'an,at',
                        text: 'rat',
                        image: awesum.emptyImageGuid,
                        sound: awesum.ttsGuid,
                        imageType: imageType.WebAddress,
                        visualHint: 'Visual Hint',
                        audioType: audioType.TTS,
                        successSound: awesum.defaultSuccessSoundGuid,
                        successSoundType: audioType.WebAddress,
                        successImage: awesum.defaultSuccessImageGuid,
                        successImageType: imageType.WebAddress,
                        successAnimations: "Fireworks,Balloons,Confetti",
                        successImageTime: 3000,
                    },
                    itemType: itemType.oneByTwoDigraphs,

                })











                dbUnitId = uuid();
                trans.table('serverDatabaseUnits').put({
                    name: 'Unit 3',
                    order: 1,

                    lastModified: 0,
                    version: 0,
                    id: dbUnitId,
                    appId: awesum.publicAppId,
                    databaseId: dbId,
                    successVideoType: successVideoType.YouTube,
                    successVideoUrl: awesum.defaultYouTubeVideoUrl,
                    successAnimations: '',
                    successSound: awesum.defaultSuccessSoundGuid,
                    successSoundType: audioType.WebAddress,
                    homePageImageType: imageType.WebAddress,
                    homePageImage: awesum.defaultAppBackgroundGuid,
                    router: constants.emptyGuid,
                    routerTime: 0,
                    routerTimeImmediate: false,
                    points: 0,
                } as ServerDatabaseUnitInterface)

                trans.table('serverDatabaseItems').put({

                    id: uuid(),
                    unitId: dbUnitId,
                    order: 1,
                    databaseId: dbId,
                    lastModified: new Date().getTime(),
                    version: 0,
                    appId: awesum.publicAppId,

                    dataText: "",
                    data: {

                        firstNumber: 2,
                        secondNumber: 3,
                        options: '6,12,18,24,30,36,42,48,54,60',
                        sound: awesum.ttsGuid,
                        audioType: audioType.TTS,
                        successSound: awesum.defaultSuccessSoundGuid,
                        successSoundType: audioType.WebAddress,
                        successImage: awesum.defaultSuccessImageGuid,
                        successImageType: imageType.WebAddress,
                        successAnimations: "Fireworks,Balloons,Confetti",
                        successImageTime: 3000,
                    },
                    itemType: itemType.oneByOneMultiplication,

                })

                trans.table('serverDatabaseItems').put({

                    id: uuid(),
                    unitId: dbUnitId,
                    order: 2,
                    databaseId: dbId,
                    lastModified: new Date().getTime(),
                    version: 0,
                    appId: awesum.publicAppId,

                    dataText: "",
                    data: {

                        firstNumber: 3,
                        secondNumber: 4,
                        options: '6,12,18,24,30,36,42,48,54,60',
                        sound: awesum.ttsGuid,
                        audioType: audioType.TTS,
                        successSound: awesum.defaultSuccessSoundGuid,
                        successSoundType: audioType.WebAddress,
                        successImage: awesum.defaultSuccessImageGuid,
                        successImageType: imageType.WebAddress,
                        successAnimations: "Fireworks,Balloons,Confetti",
                        successImageTime: 3000,
                    },
                    itemType: itemType.oneByOneMultiplication,

                })













                dbUnitId = uuid();
                trans.table('serverDatabaseUnits').put({
                    name: 'Unit 4',
                    order: 1,

                    lastModified: 0,
                    version: 0,
                    id: dbUnitId,
                    appId: awesum.publicAppId,
                    databaseId: dbId,
                    successVideoType: successVideoType.YouTube,
                    successVideoUrl: awesum.defaultYouTubeVideoUrl,
                    successAnimations: '',
                    successSound: awesum.defaultSuccessSoundGuid,
                    successSoundType: audioType.WebAddress,
                    homePageImageType: imageType.WebAddress,
                    homePageImage: awesum.defaultAppBackgroundGuid,
                    router: constants.emptyGuid,
                    routerTime: 0,
                    routerTimeImmediate: false,
                    points: 0,
                } as ServerDatabaseUnitInterface)

                trans.table('serverDatabaseItems').put({

                    id: uuid(),
                    unitId: dbUnitId,
                    order: 1,
                    databaseId: dbId,
                    lastModified: new Date().getTime(),
                    version: 0,
                    appId: awesum.publicAppId,

                    dataText: "",
                    data: {

                        firstNumber: 2,
                        secondNumber: 3,
                        options: '1,2,3,4,5,6,7,8',
                        sound: awesum.ttsGuid,
                        audioType: audioType.TTS,
                        successSound: awesum.defaultSuccessSoundGuid,
                        successSoundType: audioType.WebAddress,
                        successImage: awesum.defaultSuccessImageGuid,
                        successImageType: imageType.WebAddress,
                        successAnimations: "Fireworks,Balloons,Confetti",
                        successImageTime: 3000,
                    },
                    itemType: itemType.oneByOneAddition,

                })

                trans.table('serverDatabaseItems').put({

                    id: uuid(),
                    unitId: dbUnitId,
                    order: 2,
                    databaseId: dbId,
                    lastModified: new Date().getTime(),
                    version: 0,
                    appId: awesum.publicAppId,

                    dataText: "",
                    data: {

                        firstNumber: 3,
                        secondNumber: 4,
                        options: '1,2,3,4,5,6,7,8',
                        sound: awesum.ttsGuid,
                        audioType: audioType.TTS,
                        successSound: awesum.defaultSuccessSoundGuid,
                        successSoundType: audioType.WebAddress,
                        successImage: awesum.defaultSuccessImageGuid,
                        successImageType: imageType.WebAddress,
                        successAnimations: "Fireworks,Balloons,Confetti",
                        successImageTime: 3000,
                    },
                    itemType: itemType.oneByOneAddition,

                })

            }







            var url = '/defaultAppBackground' + awesum.appVersion + '.webp';
            trans.table('serverMedia').put({
                appId: awesum.publicAppId,
                data: url,
                id: awesum.defaultAppBackgroundGuid,
                size: url.length,
                version: 0,
                touched: false,
            } as ServerMediaInterface)

            var url = '/defaultDatabaseBackground' + awesum.appVersion + '.webp';
            trans.table('serverMedia').put({
                appId: awesum.publicAppId,
                data: url,
                id: awesum.defaultDatabaseBackgroundGuid,
                size: url.length,
                version: 0,
                touched: false,
            } as ServerMediaInterface)

            var url = '/successSound' + awesum.appVersion + '.mp3';
            trans.table('serverMedia').put({
                appId: awesum.publicAppId,
                data: url,
                id: awesum.defaultSuccessSoundGuid,
                size: url.length,
                version: 0,
                touched: false,
            } as ServerMediaInterface)

            var url = '/successVideo' + awesum.appVersion + '.mp4';
            trans.table('serverMedia').put({
                appId: awesum.publicAppId,
                data: url,
                id: awesum.defaultSuccessVideoGuid,
                size: url.length,
                version: 0,
                touched: false,
            } as ServerMediaInterface)

            var url = '/successImage' + awesum.appVersion + '.webp';
            trans.table('serverMedia').put({
                appId: awesum.publicAppId,
                data: url,
                id: awesum.defaultSuccessImageGuid,
                size: url.length,
                version: 0,
                touched: false,
            } as ServerMediaInterface)

            var url = '/EmptyImage' + awesum.appVersion + '.jpg';
            trans.table('serverMedia').put({
                data: url,
                id: awesum.emptyImageGuid,
            } as ServerMediaInterface)

            trans.table('serverMedia').put({
                data: 'TTS',
                id: awesum.ttsGuid,
            } as ServerMediaInterface)


        });
        await returnValue.open();

        return returnValue;
    }

    constructor() {
        super("awesum_" + awesum.serverEmail);

        const origAdd = this.Table.prototype.add;
        const origPut = this.Table.prototype.put;
        const origDelete = this.Table.prototype.delete;

        const origBulkPut = this.Table.prototype.bulkPut;

        this.Table.prototype.add = function (...args) {
            const db = this.db;
            const tableName = this.name;

            // If already inside a transaction → don't wrap
            if (Dexie.currentTransaction &&
                Dexie.currentTransaction.storeNames.includes('additions') &&
                Dexie.currentTransaction.storeNames.includes('serverDatabases')
            ) {
                return origAdd.apply(this, args);
            }

            // Start a widened transaction
            return db.transaction('rw', [tableName, 'additions', 'serverDatabases'], () =>
                origAdd.apply(this, args)
            );
        };

        this.Table.prototype.put = function (...args) {
            const db = this.db;
            const tableName = this.name;

            if (Dexie.currentTransaction &&
                Dexie.currentTransaction.storeNames.includes('additions') &&
                Dexie.currentTransaction.storeNames.includes('serverDatabases')
            ) {
                return origPut.apply(this, args);
            }

            return db.transaction('rw', [tableName, 'additions', 'serverDatabases'], () =>
                origPut.apply(this, args)
            );
        };

        this.Table.prototype.delete = function (...args) {
            const db = this.db;
            const tableName = this.name;

            if (Dexie.currentTransaction &&
                Dexie.currentTransaction.storeNames.includes('deletions') &&
                Dexie.currentTransaction.storeNames.includes('serverDatabases') &&
                Dexie.currentTransaction.storeNames.includes('additions')
            ) {
                return origDelete.apply(this, args);
            }

            return db.transaction('rw', [tableName, 'deletions', 'serverDatabases', 'additions'], () =>
                origDelete.apply(this, args)
            );
        };

        this.Table.prototype.bulkPut = function (...args: any[]) {
            const db = this.db;
            const tableName = this.name;

            if (Dexie.currentTransaction &&
                Dexie.currentTransaction.storeNames.includes('additions') &&
                Dexie.currentTransaction.storeNames.includes('serverDatabases')
            ) {
                return origBulkPut.apply(this, args as any);
            }

            return db.transaction('rw', [tableName, 'additions', 'serverDatabases'], () =>
                origBulkPut.apply(this, args as any)
            );
        };
        this.version(1).stores({
            internal: "id",
            deletions: "id",
            additions: "id",
            serverDatabases: "id,appId,touched",
            serverFollowerRequests: "id,touched,followerAppId,leaderAppId",
            serverFollowerDatabases: "id,databaseId,touched,followerRequestId",
            serverFollowerDatabaseCompletions:
                "id,databaseId,touched,itemId,parentItemId,followerRequestId,lastModified,itemLevel",
            serverApps: "id,email,touched",
            serverMedia: "id,appId,touched,order",
            serverDatabaseItems: "id,databaseId,unitId,touched,appId",
            serverDatabaseUnits: "id,databaseId,touched,appId",
            serverRouters: "id,appId",
        }).upgrade((tx) => {


        });

        this.serverApps.hook("reading", (obj) => {
            return new ClientApp(obj, this.serverApps);
        });

        this.serverDatabases.hook("reading", (obj) => {
            return new ClientDatabase(obj, this.serverDatabases);
        });


        this.serverDatabaseUnits.hook("reading", (obj) => {
            return new ClientDatabaseUnit(obj, this.serverDatabaseUnits);
        });

        this.serverDatabaseItems.hook("reading", (obj) => {
            return new ClientDatabaseItem(obj, this.serverDatabaseItems);
        });

        this.serverFollowerDatabases.hook("reading", (obj) => {
            return new ClientFollowerDatabase(obj, this.serverFollowerDatabases);
        });

        this.serverFollowerRequests.hook("reading", (obj) => {
            return new ClientFollowerRequest(obj, this.serverFollowerRequests);
        });

        this.serverRouters.hook("reading", (obj) => {
            return new ClientRouter(obj, this.serverRouters);
        });



        // Attach hooks for all tables:



        Object.values(this.tables).forEach(table => {
            if (table.name == "additions" || table.name == "deletions") {
                return;
            }
            if (table.name.startsWith("server")) {
                table.hook("creating", async (primKey, obj, transaction: Transaction) => {
                    if (table.name == "serverApps" ||
                        table.name == "serverFollowerRequests" ||
                        primKey.startsWith("00000000-0000-0000-0000")) {
                        return;
                    }


                    var promise = this.additions.add({ id: primKey });
                    (promise as any).apply = () => { }
                    awesum.dexiePromises.push(promise as any);
                    awesum.updatesToSync.push(primKey);

                    if (table.name == "serverDatabaseItems"
                    ) {
                        var p1 = awesum.AwesumDexieDB.serverDatabases.update(
                            obj.databaseId,
                            {
                                itemLastModified: obj.lastModified,
                                touched: true
                            }
                        );
                        (p1 as any).apply = () => { }
                        awesum.dexiePromises.push(p1 as any);
                    }
                    else if (table.name == "serverDatabaseUnits"
                    ) {
                        var p1 = awesum.AwesumDexieDB.serverDatabases.update(
                            obj.databaseId,
                            {
                                unitLastModified: obj.lastModified,
                                touched: true
                            }
                        );
                        (p1 as any).apply = () => { }
                        awesum.dexiePromises.push(p1 as any);
                    }
                });
                table.hook("deleting", async (primKey, obj, transaction) => {

                    var deletion = {} as ServerDeletionInterface;
                    deletion.id = obj.id;
                    deletion.lastModified = new Date().getTime();

                    deletion.level = table.name == "serverDatabases" ? ItemLevel.database
                        : table.name == "serverDatabaseUnits" ? ItemLevel.databaseUnit
                            : table.name == "serverDatabaseItems" ? ItemLevel.databaseItem
                                : table.name == "serverFollowerDatabases" ? ItemLevel.followerDatabase
                                    : table.name == "serverFollowerDatabaseCompletions" ? ItemLevel.followerDatabaseCompletion
                                        : table.name == "serverFollowerRequests" ? ItemLevel.followerRequest
                                            : table.name == "serverMedia" ? ItemLevel.media
                                                : table.name == "serverRouters" ? ItemLevel.router : 0;

                    deletion.databaseId = table.name == "serverDatabases" ? obj.id :
                        table.name == "serverDatabaseUnits" ? obj.databaseId :
                            table.name == "serverDatabaseItems" ? obj.databaseId : undefined;

                    var promise = this.additions.delete(obj.id);
                    (promise as any).apply = () => { }
                    awesum.dexiePromises.push(promise as any);
                    var promise1 = this.deletions.add(deletion);
                    (promise1 as any).apply = () => { }
                    awesum.dexiePromises.push(promise1 as any);
                    awesum.updatesToSync.push(obj.id);
                });
            }
        });
    }
}
