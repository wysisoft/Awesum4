import { reactive, shallowRef } from "vue";
import { followerRequestStatus, getDefault } from "../../server/typebox";
import { AwesumDexieGlobalDB } from "./awesumDexieGlobalDB";
import { ClientApp } from "./clientClasses/App";
import type { AwesumDexieDB as AwesumDexieDB } from "./awesumDexieDB";
import type { Table } from "dexie";
import { SequentialTaskQueue } from "sequential-task-queue";
import router from "./router";
import type { ServerAppInterface } from "../../server/serverInterfaces/ServerAppInterface";
import type { ServerDatabaseInterface } from "../../server/serverInterfaces/ServerDatabaseInterface";
import type { ServerDatabaseUnitInterface } from "../../server/serverInterfaces/ServerDatabaseUnitInterface";
import type { ServerDatabaseItemInterface } from "../../server/serverInterfaces/ServerDatabaseItemInterface";
import type { ServerFollowerRequestInterface } from "../../server/serverInterfaces/ServerFollowerRequestInterface";
import { I18nGlobal } from "./i18nGlobal";
import { resources } from "./resources/Resources";
import { ClientDatabase } from "./clientClasses/Database";
import { ClientDatabaseUnit } from "./clientClasses/DatabaseUnit";
import { ClientDatabaseItem } from "./clientClasses/DatabaseItem";
import { Value } from "@sinclair/typebox/value";
import { itemType, types, imageType, audioType, ItemLevel, syncResultType, syncAction } from "../../server/typebox";
import type { ServerSyncRequestInterface } from "../../server/serverInterfaces/ServerSyncRequestInterface";
import type { ServerSyncResponseInterface } from "../../server/serverInterfaces/ServerSyncResponseInterface";
import { BreadcrumbItem } from "./breadcrumbItem";
import { constants } from "../../server/constants"
import type { ServerFollowerDatabaseInterface } from "../../server/serverInterfaces/ServerFollowerDatabaseInterface";
import { ClientFollowerDatabase } from "./clientClasses/FollowerDatabase";
import type { ServerFollowerDatabaseCompletionInterface } from "../../server/serverInterfaces/ServerFollowerDatabaseCompletionInterface";
import type { RouteLocationNormalized } from "vue-router";
import type { ServerRouterInterface } from "../../server/serverInterfaces/ServerRouterInterface";
import type { ServerSpellingDatabaseItemInterface } from "../../server/serverInterfaces/ServerSpellingDatabaseItemInterface";
import type { ServerOneByOneMathDatabaseItemInterface } from "../../server/serverInterfaces/ServerOneByOneMathDatabaseItemInterface";
import { useToast } from "vue-toastification";
import type { Server } from "http";
import type { ServerModificationInterface } from "../../server/serverInterfaces/ServerModificationInterface";
import type { AwesumDatabaseItem } from "../../server/db/db";

//@ts-ignore
const appVersion = __APP_VERSION__;
export const awesum = reactive({
  toast: {} as ReturnType<typeof useToast>,
  updatesToSync: new Array<string>(),


  debugText: "",
  appVersion: appVersion,
  mostRecentGroups: "",
  oldNameRedirects: new Map<string, string>(),
  defaultAppBackgroundGuid: constants.defaultAppBackgroundGuid,
  defaultDatabaseBackgroundGuid: constants.defaultDatabaseBackgroundGuid,
  emptyImageGuid: constants.emptyImageGuid,
  emptyImage: '/EmptyImage' + appVersion + '.jpg',
  ttsGuid: constants.ttsGuid,
  defaultSuccessSoundGuid: constants.defaultSuccessSoundGuid,
  defaultSuccessSound: '/SuccessSound' + appVersion + '.mp3',
  defaultSuccessImageGuid: constants.defaultSuccessImageGuid,
  defaultSuccessImage: '/SuccessImage' + appVersion + '.webp',
  defaultSuccessVideoGuid: constants.defaultSuccessVideoGuid,
  defaultSuccessVideo: '/SuccessVideo' + appVersion + '.mp4',
  defaultYouTubeVideoUrl: 'dQw4w9WgXcQ',
  emptyGuid: constants.emptyGuid,

  viewData: {},
  viewDataPath: "",

  publicAppId: constants.publicAppId,
  publicAppEmail: 'public@awesum.app',

  noInternet: false,
  refreshNumber: 0,
  AwesumDexieGlobalDB: {} as AwesumDexieGlobalDB,
  AwesumDexieDB: {} as AwesumDexieDB,
  router: router,
  serverEmail: "",
  authenticationType: "",
  dexiePromises: new SequentialTaskQueue(),
  breadcrumb: Array<BreadcrumbItem>(),
  ownerApp: {} as ClientApp,
  currentRouter: {} as ServerRouterInterface,
  currentApp: {} as ServerAppInterface,
  currentDatabase: {} as ServerDatabaseInterface,
  currentDatabases: Array<ServerDatabaseInterface>(),
  currentDatabaseUnits: Array<ServerDatabaseUnitInterface>(),
  currentDatabaseCompletions: new Set<string>(),
  currentDatabaseUnit: {} as ServerDatabaseUnitInterface,
  currentDatabaseItems: Array<ServerDatabaseItemInterface>(),
  currentDatabaseItem: {} as ServerDatabaseItemInterface,
  currentDatabaseItemTemp: {} as ServerDatabaseItemInterface,
  currentDatabaseItemAsyncData: shallowRef({} as any),
  currentFollowerDatabases: Array<ServerFollowerDatabaseInterface>(),
  apps: Array<ServerAppInterface>(),
  followerRequests: Array<ServerFollowerRequestInterface>(),
  currentAppRouters: Array<ServerRouterInterface>(),


  errorMessage: "",
  audio: new Audio("null"),
  getDynamicUrl(
    obj:
      ServerAppInterface
      | ServerDatabaseInterface
      | ServerFollowerDatabaseInterface
      | ServerDatabaseUnitInterface
      | ServerDatabaseItemInterface,
    route: RouteLocationNormalized
  ) {

    var hasThingAfterI = (route ? route : awesum.router.currentRoute).path.toLocaleLowerCase()
      .startsWith(
        ("/" + I18nGlobal.t(resources.i.key) + "/").toLocaleLowerCase(),
      );

    var returnValue = "";
    switch (true) {


      case obj instanceof ClientFollowerDatabase:
        returnValue = "IDontKnow"
        if (hasThingAfterI) {
          returnValue = "/" + I18nGlobal.t(resources.i.key) + "/" + I18nGlobal.t(resources.Settings.key) +

            returnValue;
        }
        break;
      case obj instanceof ClientApp:

        returnValue = "/" + encodeURIComponent(obj.uniqueName);
        if (hasThingAfterI) {
          returnValue = "/" + I18nGlobal.t(resources.i.key) + "/" + I18nGlobal.t(resources.Settings.key) +

            returnValue;
        }
        break;
      case obj instanceof ClientDatabase:
        returnValue = "/" + encodeURIComponent(awesum.currentApp.uniqueName) + "/" +
          encodeURIComponent(obj.name);
        if (hasThingAfterI) {
          returnValue = "/" + I18nGlobal.t(resources.i.key) + "/" + I18nGlobal.t(resources.Settings.key) +

            returnValue;
        }
        break;

      case obj instanceof ClientDatabaseUnit:
        returnValue = "/" + encodeURIComponent(awesum.currentApp.uniqueName) + "/" +
          encodeURIComponent(awesum.currentDatabase.name) + "/" +
          encodeURIComponent(obj.name);
        if (hasThingAfterI) {
          returnValue = "/" + I18nGlobal.t(resources.i.key) + "/" + I18nGlobal.t(resources.Settings.key) +

            returnValue;
        }
        break;
      case obj instanceof ClientDatabaseItem:
        returnValue = "/" + encodeURIComponent(awesum.currentApp.uniqueName) + "/" +
          encodeURIComponent(awesum.currentDatabase.name) + "/" +
          encodeURIComponent(awesum.currentDatabaseUnit.name) + "/" + obj.order;
        if (hasThingAfterI) {
          returnValue = "/" + I18nGlobal.t(resources.i.key) + "/" + I18nGlobal.t(resources.Settings.key) +

            returnValue;
        }
        break;
      default:
        break;
    }

    return returnValue;
  },


  setTablePropertyValueById(
    id: string,
    propName: string,
    value: any,
    table: Table,
    //dontTouch: boolean = false,
  ) {
    if (table) {
      console.log('updating ' + id + ' to ' + propName + ' with value ' + value);
      awesum.updatesToSync.push(id);
      // if (!dontTouch) {
      //   this.dexiePromises.push(this.AwesumDexieDB.modifications.put({
      //     id: id + "|" + propName
      //   }) as any);
      // }
      if (propName.includes(".")) {
        var dexiePromise = this.AwesumDexieDB.table(table.name).update(
          id,
          {
            [propName]: value
          }
        );
      }
      else {
        var updateProp = {} as any;
        updateProp[propName] = value;
        var dexiePromise = this.AwesumDexieDB.table(table.name).update(
          id,
          updateProp,
        );
      }
      (dexiePromise as any).apply = () => { }
      this.dexiePromises.push(dexiePromise as any);
    }
  },

  async refreshServerFollowerRequests() {
    this.followerRequests = await this.AwesumDexieDB.serverFollowerRequests.toCollection()
      .sortBy(
        "followerEmail",
      );
  },
  async refreshServerApps() {
    if (this.serverEmail) {
      this.apps = await this.AwesumDexieDB.serverApps.where('id').notEqual(this.publicAppId).sortBy(
        "order",
      ) as ServerAppInterface[];
    }
    else {
      this.apps = await this.AwesumDexieDB.serverApps.where('id').equals(this.publicAppId).toArray();
    }
  },

  async refreshCurrentDatabaseCompletions() {

    this.currentDatabaseCompletions = new Set<string>();

    var followerRequest = await this.AwesumDexieDB.serverFollowerRequests.where('followerAppId').equals(this.ownerApp.id)
      .and((x) => x.leaderAppId == this.currentApp.id)
      .first();

    if (followerRequest) {

      const items = await this.AwesumDexieDB.serverFollowerDatabaseCompletions
        .where('followerRequestId').equals(followerRequest.id)
        .toArray();

      for (const element of items) {
        this.currentDatabaseCompletions.add(element.itemId);

        if(element.itemLevel == ItemLevel.databaseUnit) {
          var itemsInUnit = await this.AwesumDexieDB.serverDatabaseItems.where('unitId').equals(element.itemId).toArray();
          for (const item of itemsInUnit) {
            this.currentDatabaseCompletions.add(item.id);
          }
        }
        if(element.itemLevel == ItemLevel.database) {
          var unitsInDatabase = await this.AwesumDexieDB.serverDatabaseUnits.where('databaseId').equals(element.itemId).toArray();
          for (const unit of unitsInDatabase) {
            this.currentDatabaseCompletions.add(unit.id);
          }
        }
      }
    }
  },


  async refreshCurrentDatabaseUnits() {
    if(this.currentDatabase && this.currentDatabase.id){
      this.currentDatabaseUnits = await this.AwesumDexieDB.serverDatabaseUnits
        .where({ databaseId: this.currentDatabase.id })
        .sortBy("order");
    }
    else {
      this.currentDatabaseUnits = [];
    }
  },

  /* async refreshGlobalMedia() {
    
  }, */
  isInstanceOfAny(obj: unknown, classList: Function[]): boolean {
    return classList.some(cls => obj instanceof (cls as any));
  },




  async cleanMedia() {
    var allMedia = await this.AwesumDexieDB.serverMedia.toArray();
    var allItems = await this.AwesumDexieDB.serverDatabaseItems.toArray();
    var allUnits = await this.AwesumDexieDB.serverDatabaseUnits.toArray();
    var allDatabases = await this.AwesumDexieDB.serverDatabases.toArray();
    var allApps = await this.AwesumDexieDB.serverApps.toArray();

    for (var media of allMedia) {
      var used = false;
      for (var app of allApps) {
        if (media.id == app.homePageImage) {
          used = true;
        }
      }

      for (var database of allDatabases) {
        if (media.id == database.homePageIcon) {
          used = true;
        }
      }






      for (var unit of allUnits) {
        if (media.id == unit.successSound ||
          media.id == unit.homePageImage
        ) {
          used = true;
        }
      }
      for (var item of allItems) {

        if ((item.itemType == itemType.spelling || item.itemType == itemType.oneByTwoDigraphs || item.itemType == itemType.oneByOneMultiplication || item.itemType == itemType.oneByOneAddition) && media.id == (item as ServerSpellingDatabaseItemInterface).data.successSound ||
          (item.itemType == itemType.spelling || item.itemType == itemType.oneByTwoDigraphs || item.itemType == itemType.oneByOneMultiplication || item.itemType == itemType.oneByOneAddition) && media.id == (item as ServerSpellingDatabaseItemInterface).data.successImage ||
          (item.itemType == itemType.spelling || item.itemType == itemType.oneByTwoDigraphs) && media.id == (item as ServerSpellingDatabaseItemInterface).data.image ||
          (item.itemType == itemType.spelling || item.itemType == itemType.oneByTwoDigraphs || item.itemType == itemType.oneByOneMultiplication || item.itemType == itemType.oneByOneAddition) && media.id == (item as ServerSpellingDatabaseItemInterface).data.sound
        ) {
          used = true;
        }
      }

      if (!used
        && media.id != this.ttsGuid
        && media.id != this.emptyImageGuid
        && media.id != this.defaultSuccessSoundGuid
        && media.id != this.defaultSuccessImageGuid
        && media.id != this.defaultSuccessVideoGuid
        && media.id != this.defaultAppBackgroundGuid
        && media.id != this.defaultDatabaseBackgroundGuid) {
        alert('deleting media ' + media.id);
        await this.AwesumDexieDB.serverMedia.delete(media.id);
      }
    }
  },

  async refreshCurrentDatabaseItems() {
    if(this.currentDatabaseUnit && this.currentDatabaseUnit.id){
    this.currentDatabaseItems = await this.AwesumDexieDB.serverDatabaseItems
        .where({ unitId: this.currentDatabaseUnit.id })
        .sortBy("order");
    }
    else {
      this.currentDatabaseItems = [];
    }
  },

  async refreshCurrentFollowerDatabases() {
    if(this.currentDatabase && this.currentDatabase.id){
      this.currentFollowerDatabases = await this.AwesumDexieDB.serverFollowerDatabases
        .where({ databaseId: this.currentDatabase.id }).toArray();
    }
    else {
      this.currentFollowerDatabases = [];
    }
  },

  async refreshCurrentDatabases() {
    if(this.currentApp && this.currentApp.id){
      this.currentDatabases = await this.AwesumDexieDB.serverDatabases
      .where({ appId: this.currentApp.id })
      .sortBy("order");
    }
    else {
      this.currentDatabases = [];
    }
  },

  async refreshCurrentAppRouters() {
    if (this.ownerApp) {
      this.currentAppRouters = await this.AwesumDexieDB.serverRouters
        .where({ appId: this.ownerApp.id })
        .toArray();
    }
    else {
      alert('no owner app');
    }
  },

  async getRouterStatus(macAddress: string) {
    try {
      const response = await fetch(
        window.location.origin + "/api/routerStatus?macAddress=" + encodeURIComponent(macAddress),
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
      );

      if (response.ok) {
        return await response.json();
      } else {
        return { status: "Error: " + response.status };
      }
    } catch (error) {
      return { status: "Error: " + error };
    }
  },

  async removeLeaderData(follower: ServerFollowerRequestInterface) {
    await Promise.all([
      this.AwesumDexieDB.serverDatabaseItems.where('appId').equals(follower.leaderAppId).delete(),
      this.AwesumDexieDB.serverDatabaseUnits.where('appId').equals(follower.leaderAppId).delete(),
      this.AwesumDexieDB.serverDatabases.where('appId').equals(follower.leaderAppId).delete(),
      this.AwesumDexieDB.serverFollowerDatabaseCompletions.where('appId').equals(follower.leaderAppId).delete(),
      this.AwesumDexieDB.serverApps.where('id').equals(follower.leaderAppId).delete(),
      this.AwesumDexieDB.serverFollowerRequests.delete(follower.id)
    ]);
  },

  async isNameGloballyUnique(
    val: string,
    request: any,
  ): Promise<boolean> {
    if (val) {
      var defaultApp = getDefault(Value.Default(types.filter((x) => x.$id == "app")[0], {}) as ServerAppInterface);
      defaultApp.uniqueName = val;


      var response = await fetch(
        window.location.origin + "/api/uniquename",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            defaultApp,
          ),
          credentials: "include",
        },
      );

      return response.ok;
    }
    return true;
  },
  async waitForDexie() {
    await this.dexiePromises.wait();
  },

  async putOwnerAppInsideDatabase(app: ServerAppInterface) {
    await this.AwesumDexieDB.serverApps.put(app);
    awesum.ownerApp = new ClientApp(app, this.AwesumDexieDB.serverApps);
    await awesum.refreshServerApps();
    await awesum.refreshServerFollowerRequests();
  },
  async getFullSyncRequests(): Promise<ServerSyncRequestInterface[]> {


    // var additions = await awesum.AwesumDexieDB.additions.toArray();
    // //convert to set by id
    // var additionsSet = new Set<string>();
    // for (const addition of additions) {
    //   additionsSet.add(addition.id);
    // }
    //wait for all dexie adding/deleting hooks to finish
    await awesum.waitForDexie();
    var syncRequests = new Array<ServerSyncRequestInterface>();
    if (awesum.ownerApp.touched) {
      var syncRequest = {} as ServerSyncRequestInterface;
      syncRequest.id = awesum.ownerApp.id;
      syncRequest.level = ItemLevel.app;
      syncRequest.action = syncAction.modify;
      syncRequest.values = awesum.toPOJO(awesum.ownerApp);
      syncRequests.push(syncRequest);
    }
    else {
      var syncRequest = {} as ServerSyncRequestInterface;
      syncRequest.id = awesum.ownerApp.id;
      syncRequest.level = ItemLevel.app;
      syncRequest.action = syncAction.receiveChanges;
      syncRequest.values = {
        lastModified: awesum.ownerApp.lastModified,
        version: awesum.ownerApp.version,
      }
      syncRequests.push(syncRequest);
    }

    for (const followerRequest of awesum.followerRequests) {
      if (followerRequest.leaderAppId == awesum.ownerApp.id && followerRequest.followerAppId == awesum.ownerApp.id) {
        continue;
      }
      var syncRequest = {} as ServerSyncRequestInterface;
      syncRequest.id = followerRequest.id;
      syncRequest.level = ItemLevel.followerRequest;
      syncRequest.values = {};
      syncRequests.push(syncRequest);
      // if (additionsSet.has(followerRequest.id)) {
      //   syncRequest.action = syncAction.add;
      //   syncRequest.values = awesum.toPOJO(followerRequest);

      // }
      // else 
      if (followerRequest.touched) {
        syncRequest.action = syncAction.modify;
        syncRequest.values = awesum.toPOJO(followerRequest);
      }
      else {
        syncRequest.action = syncAction.receiveChanges;
        syncRequest.values = {
          lastModified: followerRequest.lastModified,
          version: followerRequest.version,
        }
      }
    }

    var deletions = await awesum.AwesumDexieDB.deletions.toArray();
    for (const deletion of deletions) {
      var syncRequest = {} as ServerSyncRequestInterface;
      syncRequest.id = deletion.id;
      syncRequest.level = deletion.level;
      syncRequest.action = syncAction.delete;
      syncRequest.values = {
        lastModified: deletion.lastModified,
        
      }
      syncRequests.push(syncRequest);
    }
    var followerDatabases = await awesum.AwesumDexieDB.serverFollowerDatabases.toArray();
    for (const followerDatabase of followerDatabases) {
      var syncRequest = {} as ServerSyncRequestInterface;
      syncRequest.id = followerDatabase.id;
      syncRequest.level = ItemLevel.followerDatabase;
      syncRequest.action = syncAction.receiveChanges;
      syncRequests.push(syncRequest);
    }
    var serverMedia = await awesum.AwesumDexieDB.serverMedia.toArray();
    for (const media of serverMedia) {
      if (media.id == awesum.defaultSuccessSoundGuid
        || media.id == awesum.defaultSuccessImageGuid
        || media.id == awesum.defaultSuccessVideoGuid
        || media.id == awesum.defaultAppBackgroundGuid
        || media.id == awesum.defaultDatabaseBackgroundGuid
        || media.id == awesum.emptyImageGuid
        || media.id == awesum.ttsGuid) {
        continue;
      }
      var syncRequest = {} as ServerSyncRequestInterface;
      syncRequest.id = media.id;
      syncRequest.level = ItemLevel.media;
      syncRequest.values = {};
      syncRequests.push(syncRequest);
      if (media.touched) {
        syncRequest.action = syncAction.add;
        syncRequest.values = media;
      }
      else {
        syncRequest.action = syncAction.receiveChanges;
      }
    }
    return syncRequests;
  },
  toPOJO<T>(complexObj: T): T {
    const simpleObject = {} as any;
    Object.keys(complexObj as any).forEach((key) => {
      const value = (complexObj as any)[key];
      if (
        typeof value === "string" || typeof value === "number" ||
        typeof value === "boolean"
      ) {
        simpleObject[key.replace("_", "")] = value;
      }
      // Add any other simple type checks as needed
    });
    return simpleObject;
  },

  pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const result = {} as Pick<T, K>;
    for (const k of keys) result[k] = obj[k];
    return result;
  },


  async getDatabaseSyncRequests(databaseId: string): Promise<ServerSyncRequestInterface[]> {
    
    var additionsQuery = await awesum.AwesumDexieDB.additions.toArray();
    var additions = new Set<string>();
    for (const addition of additionsQuery) {
      additions.add(addition.id);
    }

    var syncRequests = new Array<ServerSyncRequestInterface>();
    var database = await awesum.AwesumDexieDB.serverDatabases.get(databaseId);
    if (!database) {
      throw new Error('Database not found');
    }

    var syncRequest = {} as ServerSyncRequestInterface;
    syncRequest.id = database.id;
    syncRequest.level = ItemLevel.database;
    syncRequests.push(syncRequest);
    if (additions.has(database.id)) {
      syncRequest.action = syncAction.add;
      syncRequest.values = awesum.toPOJO(database);
    }
    else if (database.touched) {
      syncRequest.action = syncAction.modify;
      syncRequest.values = awesum.toPOJO(database);
    }
    else {
      syncRequest.action = syncAction.receiveChanges;
      syncRequest.values = {
        lastModified: database.lastModified,
        version: database.version,
        unitLastModified: database.unitLastModified,
        itemLastModified: database.itemLastModified,
        mediaLastModified: database.mediaLastModified,
      }
    }
    syncRequests.push(syncRequest);
    var units = await awesum.AwesumDexieDB.serverDatabaseUnits.where('databaseId').equals(databaseId).toArray();
    for (const unit of units) {
      var syncRequest = {} as ServerSyncRequestInterface;
      syncRequest.id = unit.id;
      syncRequest.level = ItemLevel.databaseUnit;
      syncRequests.push(syncRequest);
      if (additions.has(unit.id)) {
        syncRequest.action = syncAction.add;
        syncRequest.values = awesum.toPOJO(unit);
      }
      else if (unit.touched) {
        syncRequest.action = syncAction.modify;
        syncRequest.values = awesum.toPOJO(unit);
      }
      else {
        syncRequest.action = syncAction.receiveChanges;
        syncRequest.values = {
          lastModified: unit.lastModified,
          version: unit.version,
        }
      }
      syncRequests.push(syncRequest);
    }
    var items = await awesum.AwesumDexieDB.serverDatabaseItems.where('databaseId').equals(databaseId).toArray();
    for (const item of items) {
      
      var syncRequest = {} as ServerSyncRequestInterface;
      syncRequest.id = item.id;
      syncRequest.level = ItemLevel.databaseItem;
      syncRequests.push(syncRequest);
      if (additions.has(item.id)) {
        syncRequest.action = syncAction.add;
        syncRequest.values = awesum.toPOJO(item);
        (syncRequest.values as AwesumDatabaseItem).dataText = JSON.stringify(awesum.toPOJO(item.data));
      }
      else if (item.touched) {
        syncRequest.action = syncAction.modify;
        syncRequest.values = awesum.toPOJO(item);
        (syncRequest.values as AwesumDatabaseItem).dataText = JSON.stringify(awesum.toPOJO(item.data));
      }
      else {
        syncRequest.action = syncAction.receiveChanges;
        syncRequest.values = {
          lastModified: item.lastModified,
          version: item.version,
        }
      }
      syncRequests.push(syncRequest);
    }
    return syncRequests;
  },

  async getAppSyncRequest(appId: string): Promise<ServerSyncRequestInterface> {
    var app = await awesum.AwesumDexieDB.serverApps.get(appId);
    if (!app) {
      throw new Error('App not found');
    }
    var syncRequest = {} as ServerSyncRequestInterface;
    syncRequest.id = app.id;
    syncRequest.level = ItemLevel.app;
    syncRequest.values = {};
    if (app.touched) {
      syncRequest.action = syncAction.modify;
      syncRequest.values = awesum.toPOJO(app);
    }
    else {
      syncRequest.action = syncAction.receiveChanges;
      syncRequest.values = {
        lastModified: app.lastModified,
        version: app.version,
      }
    }
    return syncRequest;
  },

  async processSyncResponse(syncResponse: ServerSyncResponseInterface[], redirectToErrorPage: boolean = true): Promise<ServerSyncResponseInterface[]> {
    var errorMessages = new Array<string>();
    for (const item of syncResponse) {
      if (item.result == syncResultType.failedValidation) {
        errorMessages.push(item.message || "");
      }
      if (item.result == syncResultType.added || item.result == syncResultType.modified
        || item.result == syncResultType.deleted) {

        //remove all items from updatesToSync with the same id
        awesum.updatesToSync = awesum.updatesToSync.filter((x) => x != item.id);

        await awesum.AwesumDexieDB.additions.delete(item.id);
        await awesum.AwesumDexieDB.deletions.delete(item.id);
        for (const table of awesum.AwesumDexieDB.tables) {
          const row = await table.get(item.id);
          if (row) {
            row.touched = false;
          }
        }
      }
      if (item.action == syncAction.add) {
        if (item.level == ItemLevel.app) {
          if (!awesum.ownerApp.id) {
            await awesum.putOwnerAppInsideDatabase(item.values as ServerAppInterface);


            var defaultFollowerRequest = getDefault(Value.Default(types.filter((x) => x.$id == "followerRequest")[0], {}) as ServerFollowerRequestInterface);
            defaultFollowerRequest.leaderAppId = awesum.ownerApp.id;
            defaultFollowerRequest.followerAppId = awesum.ownerApp.id;
            defaultFollowerRequest.followerName = awesum.ownerApp.name;
            defaultFollowerRequest.leaderName = awesum.ownerApp.name;
            defaultFollowerRequest.followerEmail = awesum.ownerApp.email;
            defaultFollowerRequest.leaderEmail = awesum.ownerApp.email;
            defaultFollowerRequest.status = followerRequestStatus.Approved;
            await awesum.AwesumDexieDB.serverFollowerRequests.put(defaultFollowerRequest);
            await awesum.refreshServerFollowerRequests();
          }
          else {
            await awesum.AwesumDexieDB.serverApps.put(item.values as ServerAppInterface);
            await awesum.refreshServerApps();
          }
        }
        if (item.level == ItemLevel.followerRequest) {
          console.log('adding follower request', item.values);
          await awesum.AwesumDexieDB.serverFollowerRequests.put(item.values as ServerFollowerRequestInterface);
          await awesum.refreshServerFollowerRequests();
        }


        if (item.level == ItemLevel.followerDatabase) {
          await awesum.AwesumDexieDB.serverFollowerDatabases.put(item.values as ServerFollowerDatabaseInterface);
          await awesum.refreshCurrentFollowerDatabases();
        }
        if (item.level == ItemLevel.database) {
          await awesum.AwesumDexieDB.serverDatabases.put(item.values as ServerDatabaseInterface);
          await awesum.refreshCurrentDatabases();
        }
        if (item.level == ItemLevel.databaseUnit) {
          await awesum.AwesumDexieDB.serverDatabaseUnits.put(item.values as ServerDatabaseUnitInterface);
          await awesum.refreshCurrentDatabaseUnits();
        }
        if (item.level == ItemLevel.databaseItem) {
          var itemValues = item.values as ServerDatabaseItemInterface;
          itemValues.data = JSON.parse(itemValues.dataText);
          await awesum.AwesumDexieDB.serverDatabaseItems.put(itemValues);
          await awesum.refreshCurrentDatabaseItems();
        }
      }
      if (item.action == syncAction.modify) {
        if (item.level == ItemLevel.followerRequest) {
          await awesum.AwesumDexieDB.serverFollowerRequests.put(item.values as ServerFollowerRequestInterface);
          await awesum.refreshServerFollowerRequests();
        }
      }
      // if (item.action == syncAction.add || item.action == syncAction.modify) {
      //   if (item.level == ItemLevel.app) {
      //     (item.values as ServerAppInterface).touched = false;
      //     this.touchedObjects.delete(item.id);
      //     this.addedObjects.delete(item.id);
      //     await this.putOwnerAppInsideDatabase(item.values as ServerAppInterface);

      //     var ownFollowerRequest = awesum.followerRequests.find((x) => x.leaderAppId == this.ownerApp.id && x.followerAppId == this.ownerApp.id);
      //     if (!ownFollowerRequest) {
      //       var defaultFollowerRequest = getDefault(Value.Default(types.filter((x) => x.$id == "followerRequest")[0],{} )as ServerFollowerRequestInterface);
      //       defaultFollowerRequest.leaderAppId = awesum.ownerApp.id;
      //       defaultFollowerRequest.followerAppId = awesum.ownerApp.id;
      //       defaultFollowerRequest.followerName = awesum.ownerApp.name;
      //       defaultFollowerRequest.leaderName = awesum.ownerApp.name;
      //       defaultFollowerRequest.followerEmail = awesum.ownerApp.email;
      //       defaultFollowerRequest.leaderEmail = awesum.ownerApp.email;
      //       await awesum.AwesumDexieDB.serverFollowerRequests.put(defaultFollowerRequest);
      //       await awesum.refreshServerFollowerRequests();
      //     }
      //   }
      //   if (item.level == ItemLevel.database) {
      //     (item.values as ServerDatabaseInterface).touched = false;
      //     this.touchedObjects.delete(item.id);
      //     this.addedObjects.delete(item.id);
      //     for(const key in item.values as Record<string, any>){
      //       this.setTablePropertyValueById(item.id, key, (item.values as Record<string, any>)[key], this.AwesumDexieDB.serverDatabases, true);
      //     }
      //     await this.refreshCurrentDatabases();
      //   }
      //   if (item.level == ItemLevel.databaseUnit) {
      //     (item.values as ServerDatabaseUnitInterface).touched = false;
      //     this.touchedObjects.delete(item.id);
      //     this.addedObjects.delete(item.id);
      //     for(const key in item.values as Record<string, any>){
      //       this.setTablePropertyValueById(item.id, key, (item.values as Record<string, any>)[key], this.AwesumDexieDB.serverDatabaseUnits, true);
      //     }
      //     await this.refreshCurrentDatabaseUnits();
      //   }
      // }
      //if (item.id) {
      //   if (item.level == ItemLevel.followerDatabase && item.action == syncAction.add && item.values) {
      //     await awesum.AwesumDexieDB.serverFollowerDatabases.put(item.values as ServerFollowerDatabaseInterface);
      //     await awesum.refreshCurrentFollowerDatabases();
      //     awesum.router.push({ path: awesum.getDynamicUrl(awesum.currentDatabase, awesum.router.currentRoute) });
      //   }
      //   if (item.level == ItemLevel.app && item.action == syncAction.add && item.values) {
      //     await this.putOwnerAppInsideDatabase(item.values as ServerAppInterface);
      //   }
      //   if (item.level == ItemLevel.app && item.action == syncAction.modify && item.values) {
      //     for (const key in item.values as Record<string, any>) {
      //       this.setTablePropertyValueById(item.id, key, (item.values as Record<string, any>)[key], this.AwesumDexieDB.serverApps, true);
      //     }
      //   }
      //   if (item.level == ItemLevel.followerRequest &&
      //     item.action == syncAction.modify && item.values) {
      //     for (const key in item.values as Record<string, any>) {
      //       this.setTablePropertyValueById(item.id, key, (item.values as Record<string, any>)[key], this.AwesumDexieDB.serverFollowerRequests, true);
      //     }
      //     this.toast.success('Hello, world! This is a toast message.');

      //   }
      // }
      // if (item.app && item.result == syncResultType.added) {
      //   await awesum.putOwnerAppInsideDatabase(item.app as ServerAppInterface);
      // }

      // if (item.id && item.level == ItemLevel.followerRequest && item.action == syncAction.add && item.values) {
      //   await awesum.AwesumDexieDB.serverFollowerRequests.put(item.values as ServerFollowerRequestInterface);
      //   await awesum.refreshServerFollowerRequests();

      //   awesum.router.push({ path: "/i/LeadersAndFollowers/Leader/" + encodeURI((item.values as ServerFollowerRequestInterface).leaderEmail) });
      // }


      // if (item.followerDatabase) {
      //   await awesum.AwesumDexieDB.serverFollowerDatabases.put(item.followerDatabase);
      //   await awesum.refreshCurrentFollowerDatabases();
      // }
      // if (item.app) {
      //   if (item.app.email == awesum.serverEmail) {
      //     await awesum.putOwnerAppInsideDatabase(item.app as ServerAppInterface);
      //   }
      //   else {
      //     await awesum.AwesumDexieDB.serverApps.put(item.app as ServerAppInterface);
      //     await awesum.refreshServerApps();
      //   }
      // }
      // if (item.database) {
      //   await awesum.AwesumDexieDB.serverDatabases.put(item.database);
      // }

      // if (item.databaseUnit) {
      //   await awesum.AwesumDexieDB.serverDatabaseUnits.put(item.databaseUnit);
      // }
      // if (item.databaseItem) {
      //   (item.databaseItem as any).data = JSON.parse(item.databaseItem.dataText);
      //   await awesum.AwesumDexieDB.serverDatabaseItems.put(item.databaseItem);
      // }
      // if (item.followerDatabaseCompletion) {
      //   await awesum.AwesumDexieDB.serverFollowerDatabaseCompletions.put(item.followerDatabaseCompletion);
      // }
    }
    if (redirectToErrorPage && errorMessages.length > 0) {
      this.errorMessage = errorMessages.join("\n");
      awesum.router.push({ name: I18nGlobal.t(resources.Error.key) });
      return new Array<ServerSyncResponseInterface>();
    }
    return syncResponse;
  },
  async sync(syncRequest: Array<ServerSyncRequestInterface>): Promise<ServerSyncResponseInterface[]> {
    var response = await fetch(window.location.origin + "/api/sync", {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(syncRequest),
      credentials: "include",
    }) as Response;

    if (response.status == 200) {

      var responseJson = await response.json() as ServerSyncResponseInterface[];
      await this.processSyncResponse(responseJson);
      return responseJson;
    }
    return new Array<ServerSyncResponseInterface>();
  },
  async refresh() {
    // // Load all the ids, types, lastModifieds, and versions for all tables into a single object to send to the server
    // var allData = Array<ServerSyncRequestInterface>();

    // var serverApps = await awesum.AwesumDexieDB.serverApps.where('id').notEqual(awesum.publicAppId).toArray();
    // for (const serverApp of serverApps) {
    //   allData.push({
    //     app: awesum.toPOJO(serverApp),
    //   });
    // }


    // var serverDatabases = await awesum.AwesumDexieDB.serverDatabases.where('appId').notEqual(awesum.publicAppId).toArray();
    // for (const serverDatabase of serverDatabases) {
    //   allData.push({
    //     database: awesum.toPOJO(serverDatabase),
    //   });
    // }


    // var serverDatabaseUnits = await awesum.AwesumDexieDB.serverDatabaseUnits.where('appId').notEqual(awesum.publicAppId).toArray();
    // for (const serverDatabaseUnit of serverDatabaseUnits) {
    //   allData.push({
    //     databaseUnit: awesum.toPOJO(serverDatabaseUnit),
    //   });
    // }

    // var serverDatabaseItems = await awesum.AwesumDexieDB.serverDatabaseItems
    //   .where('appId').notEqual(awesum.publicAppId).toArray();
    // for (const serverDatabaseItem of serverDatabaseItems) {
    //   var pojo = awesum.toPOJO(serverDatabaseItem);
    //   //copy all properties from serverDatabaseItem to pojo except parent
    //   var dataObj = {} as any;
    //   for (const key in (serverDatabaseItem as any).data) {
    //     if (key != "parent" && key != "table") {
    //       dataObj[key.substring(1)] = (serverDatabaseItem as any).data[key];
    //     }
    //   }
    //   pojo.dataText = JSON.stringify(dataObj);
    //   allData.push({
    //     databaseItem: pojo
    //   });
    // }

    // var serverFollowerRequests = await awesum.AwesumDexieDB.serverFollowerRequests.filter((x) => 
    //   x.leaderAppId != awesum.publicAppId && 
    // x.followerAppId != awesum.publicAppId && 
    // !(x.followerAppId == awesum.ownerApp.id && x.leaderAppId == awesum.ownerApp.id)).toArray();
    // for (const serverFollowerRequest of serverFollowerRequests) {
    //   allData.push({
    //     followerRequest: awesum.toPOJO(serverFollowerRequest),
    //   });
    // }

    // var serverRouters = await awesum.AwesumDexieDB.serverRouters.toArray();
    // for (const serverRouter of serverRouters) {
    //   allData.push({
    //     router: awesum.toPOJO(serverRouter),
    //   });
    // }

    // await this.sync(allData);

  },
  capitalizeFirstLetter(string: string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
  replaceAtFront(
    originalString: string,
    searchString: string,
    replaceString: string,
  ) {
    // Create a regular expression that matches the searchString only at the beginning of the originalString
    const regex = new RegExp("^" + searchString);

    // Replace searchString with replaceString only if it is found at the beginning of originalString
    return originalString.replace(regex, replaceString);
  },
  async playAudioOrSpeech(type: audioType, soundString: string) {
    this.pauseAudio();

    if (type == audioType.TTS) {
      this.playSpeech(soundString);
    } else {
      this.playAudio(soundString);
    }
  },
  async playAudio(audio: string) {
    this.audio.src = audio;
    await new Promise((res) => {
      this.audio.onended = res;
      this.audio.play();
    });
  },
  async playSpeech(text: string) {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.rate = 1;
    msg.pitch = 1;

    await new Promise((res) => {
      msg.onend = res;
      window.speechSynthesis.speak(msg);
    });
  },
  pauseAudio() {
    if (this.audio) {
      this.audio.pause();
    }
    window.speechSynthesis.cancel();
  },
  goToNextIncomplete() {
    //find all items with order greater than current order
    var nextIncompleteItems = this.currentDatabaseItems.filter((i) =>
      i.order > this.currentDatabaseItem.order &&
      !this.currentDatabaseCompletions.get(i.id)
    );
    if (nextIncompleteItems.length > 0) {
      this.goToItem(nextIncompleteItems[0].order);
    } else {
      //find items with order less than current order
      var previousIncompleteItems = this.currentDatabaseItems.filter((i) =>
        i.order < this.currentDatabaseItem.order &&
        !this.currentDatabaseCompletions.get(i.id)
      );
      if (previousIncompleteItems.length > 0) {
        this.goToItem(previousIncompleteItems[0].order);
      }
    }
  },
  canGoForward: function () {

    return this.currentDatabaseItem && this.currentDatabaseItem.order <
      this.currentDatabaseItems.length;
  },
  goForward: async function () {
    this.goToItem(this.currentDatabaseItem.order + 1);
  },
  canGoBack: function () {
    return this.currentDatabaseItem && this.currentDatabaseItem.order > 1;
  },
  goBack: async function () {
    this.goToItem(this.currentDatabaseItem.order - 1);
  },
  goToItem: async function (index: number) {
    var currentDatabaseItem = this.currentDatabaseItems[index - 1];
    awesum.router.push({
      path: "/" +
        encodeURIComponent(this.currentApp.uniqueName) + "/" +
        encodeURIComponent(this.currentDatabase.name) +
        "/" + encodeURIComponent(this.currentDatabaseUnit.name) + "/" +
        currentDatabaseItem.order,
    });

    var audioOrSpeech = '';
    if ((currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.audioType == audioType.TTS) {
      audioOrSpeech = (currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.text;
    }
    else {
      var audioOrSpeechMedia = await this.AwesumDexieDB.serverMedia.get((currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.sound);
      if (audioOrSpeechMedia) {
        audioOrSpeech = audioOrSpeechMedia.data;
      }
    }

    this.playAudioOrSpeech(
      (currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.audioType,
      audioOrSpeech
    );
  },
  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  async syncCompletion(completionData: ServerFollowerDatabaseCompletionInterface) {
    // Create a sync request with only the completion data
    var allData = Array<ServerSyncRequestInterface>();

    // // Add the completion data as a followerRequest (since the sync interface doesn't support followerDatabaseCompletion directly)
    // // We'll use the followerRequest field to send completion data
    // allData.push({
    //   followerRequest: {
    //     id: completionData.id,
    //     leaderAppId: completionData.followerRequestId, // Use followerRequestId as leaderAppId
    //     followerAppId: completionData.itemId, // Use itemId as followerAppId
    //     followerName: completionData.description || '',
    //     leaderName: completionData.itemLevel.toString(),
    //     followerEmail: completionData.parentItemId || '',
    //     leaderEmail: completionData.itemId,
    //     lastModified: completionData.lastModified,
    //     version: completionData.version,
    //     status: completionData.itemLevel,
    //     groups: '',
    //     points: 0
    //   }
    // });

    var response = await fetch(window.location.origin + "/api/sync", {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(allData),
      credentials: "include",
    }) as Response;

    if (response.status == 200) {
      var responseJson = await response.json() as ServerSyncResponseInterface[];
      if (!responseJson) {
        this.errorMessage = I18nGlobal.t(
          resources.InvalidResponse.key,
        );
        awesum.router.push({
          name: I18nGlobal.t(resources.Error.key),
        });
        return;
      }

      // Handle any response data if needed
      for (const item of responseJson) {
        if (item.followerRequest) {
          await awesum.AwesumDexieDB.serverFollowerRequests.put(item.followerRequest);
          await awesum.refreshServerFollowerRequests();
        }
        if (item.followerDatabase) {
          await awesum.AwesumDexieDB.serverFollowerDatabases.put(item.followerDatabase);
          await awesum.refreshCurrentFollowerDatabases();
        }
        if (item.app) {
          await awesum.putOwnerAppInsideDatabase(item.app as ServerAppInterface);
        }
        if (item.database) {
          await awesum.AwesumDexieDB.serverDatabases.put(item.database);
        }

        if (item.databaseUnit) {
          await awesum.AwesumDexieDB.serverDatabaseUnits.put(item.databaseUnit);
        }
        if (item.databaseItem) {
          await awesum.AwesumDexieDB.serverDatabaseItems.put(item.databaseItem);
        }
      }
    } else {
      console.error('Failed to sync completion:', response.status, response.statusText);
    }
  }
});
