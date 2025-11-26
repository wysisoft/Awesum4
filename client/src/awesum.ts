import { reactive, shallowRef } from "vue";
import { getDefault } from "../../server/typebox";
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

//@ts-ignore
const appVersion = __APP_VERSION__;
export const awesum = reactive({
  toast: {} as ReturnType<typeof useToast>,
  touchedObjects: new Map<string, Set<string>>(),
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
  currentDatabaseCompletions: new Map<string, ServerFollowerDatabaseCompletionInterface>(),
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
    dontTouch: boolean = false,
  ) {
    if (table) {
      if (!dontTouch) {
        if (!this.touchedObjects.has(id)) {
          this.touchedObjects.set(id, new Set<string>());
        }
        this.touchedObjects.get(id)?.add(propName);
      }
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

      (dexiePromise as any).apply = function () { }; //missing from implementation, needed to add myself
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

    this.currentDatabaseCompletions = new Map();

    var followerRequest = await this.AwesumDexieDB.serverFollowerRequests.where('followerAppId').equals(this.ownerApp.id)
      .and((x) => x.leaderAppId == this.currentApp.id)
      .first();

    if (followerRequest) {
      var followerDatabase = await this.AwesumDexieDB.serverFollowerDatabases.where('followerRequestId').equals(followerRequest.id)
        .first();

      const items = await this.AwesumDexieDB.serverFollowerDatabaseCompletions
        .where('followerRequestId').equals(followerRequest.id)
        .toArray();

      for (const element of items) {
        this.currentDatabaseCompletions.set(element.itemId, element);
      }
    }
  },


  async refreshCurrentDatabaseUnits() {
    this.currentDatabaseUnits = await this.AwesumDexieDB.serverDatabaseUnits
      .where({ databaseId: this.currentDatabase.id })
      .sortBy("order");
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
    this.currentDatabaseItems = await this.AwesumDexieDB.serverDatabaseItems
      .where({ unitId: this.currentDatabaseUnit.id })
      .sortBy("order");
  },

  async refreshCurrentFollowerDatabases() {
    this.currentFollowerDatabases = await this.AwesumDexieDB.serverFollowerDatabases
      .where({ databaseId: this.currentDatabase.id }).toArray();
  },

  async refreshCurrentDatabases() {
    this.currentDatabases = await this.AwesumDexieDB.serverDatabases
      .where({ appId: this.currentApp.id })
      .sortBy("order");
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
      var defaultApp = getDefault(Value.Default(types.filter((x) => x.$id == "app")[0],{} )as ServerAppInterface);
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
    debugger;
    var syncRequests = new Array<ServerSyncRequestInterface>();
    if (awesum.ownerApp.touched) {
      var syncRequest = {} as ServerSyncRequestInterface;
      syncRequest.id = awesum.ownerApp.id;
      syncRequest.level = ItemLevel.app;
      syncRequest.action = syncAction.modify;
      syncRequest.values = {};
      var touchedProps = awesum.touchedObjects.get(awesum.ownerApp.id);
      if (touchedProps) {
        for (const touchedProp of touchedProps) {
          (syncRequest.values as any)[touchedProp] = (awesum.ownerApp as any)[touchedProp];
        }
      }
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
    for (const database of awesum.currentDatabases) {
      var syncRequest = {} as ServerSyncRequestInterface;
      syncRequest.id = database.id;
      syncRequest.level = ItemLevel.database;
      syncRequest.values = {};
      syncRequests.push(syncRequest);
      if (database.lastModified == 0) {
        syncRequest.action = syncAction.add;
        syncRequest.values = awesum.toPOJO(database);
        (syncRequest.values as ServerDatabaseInterface).lastModified = new Date().getTime();
      }
      else if (database.touched) {
        syncRequest.action = syncAction.modify;
        var touchedProps = awesum.touchedObjects.get(database.id);
        if (touchedProps) {
          for (const touchedProp of touchedProps) {
            (syncRequest.values as any)[touchedProp] = (database as any)[touchedProp];
          }
        }
      }
      else {
        syncRequest.action = syncAction.receiveChanges;
        syncRequest.values = {
          lastModified: database.lastModified,
          version: database.version,
        }
      }
    }
    for (const databaseUnit of awesum.currentDatabaseUnits) {
      var syncRequest = {} as ServerSyncRequestInterface;
      syncRequest.id = databaseUnit.id;
      syncRequest.level = ItemLevel.databaseUnit;
      syncRequest.values = {};
      syncRequests.push(syncRequest);
      if (databaseUnit.lastModified == 0) {
        syncRequest.action = syncAction.add;
        syncRequest.values = awesum.toPOJO(databaseUnit);
        (syncRequest.values as ServerDatabaseUnitInterface).lastModified = new Date().getTime();
      }
      else if (databaseUnit.touched) {
        var touchedProps = awesum.touchedObjects.get(databaseUnit.id);
        if (touchedProps) {
          for (const touchedProp of touchedProps) {
            (syncRequest.values as any)[touchedProp] = (databaseUnit as any)[touchedProp];
          }
        }
      }
      else {
        syncRequest.action = syncAction.receiveChanges;
        syncRequest.values = {
          lastModified: databaseUnit.lastModified,
          version: databaseUnit.version,
        }
      }
    }
    for (const databaseItem of awesum.currentDatabaseItems) {
      var syncRequest = {} as ServerSyncRequestInterface;
      syncRequest.id = databaseItem.id;
      syncRequest.level = ItemLevel.databaseItem;
      syncRequest.values = {};
      syncRequests.push(syncRequest);
      if (databaseItem.lastModified == 0) {
        syncRequest.action = syncAction.add;
        syncRequest.values = awesum.toPOJO(databaseItem);
        (syncRequest.values as ServerDatabaseItemInterface).lastModified = new Date().getTime();
      }
      else if (databaseItem.touched) {
        var touchedProps = awesum.touchedObjects.get(databaseItem.id);
        if (touchedProps) {
          for (const touchedProp of touchedProps) {
            for (const touchedProp of touchedProps) {
              (syncRequest.values as any)[touchedProp] = (databaseItem as any)[touchedProp];
            }
          }
        }
      }
      else {
        syncRequest.action = syncAction.receiveChanges;
        syncRequest.values = {
          lastModified: databaseItem.lastModified,
          version: databaseItem.version,
        }
      }
    }
    for (const followerRequest of awesum.followerRequests) {
      if(followerRequest.leaderAppId == awesum.ownerApp.id && followerRequest.followerAppId == awesum.ownerApp.id){
        continue;
      }
      var syncRequest = {} as ServerSyncRequestInterface;
      syncRequest.id = followerRequest.id;
      syncRequest.level = ItemLevel.followerRequest;
      syncRequest.values = {};
      syncRequests.push(syncRequest);
      if (followerRequest.lastModified == 0) {
        syncRequest.action = syncAction.add;
        syncRequest.values = awesum.toPOJO(followerRequest);
        (syncRequest.values as ServerFollowerRequestInterface).lastModified = new Date().getTime();
      }
      else if (followerRequest.touched) {
        var touchedProps = awesum.touchedObjects.get(followerRequest.id);
        if (touchedProps) {
          for (const touchedProp of touchedProps) {
                  (syncRequest.values as any)[touchedProp] = (followerRequest as any)[touchedProp];
          }
        }
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
  async processSyncResponse(syncResponse: ServerSyncResponseInterface[]): Promise<ServerSyncResponseInterface[]> {
    for (const item of syncResponse) {
      if (item.action == syncAction.add || item.action == syncAction.modify) {
        if (item.level == ItemLevel.app) {
          (item.values as ServerAppInterface).touched = false;
          this.touchedObjects.delete(item.id);
          await this.putOwnerAppInsideDatabase(item.values as ServerAppInterface);

          var ownFollowerRequest = awesum.followerRequests.find((x) => x.leaderAppId == this.ownerApp.id && x.followerAppId == this.ownerApp.id);
          if (!ownFollowerRequest) {
            var defaultFollowerRequest = getDefault(Value.Default(types.filter((x) => x.$id == "followerRequest")[0],{} )as ServerFollowerRequestInterface);
            defaultFollowerRequest.leaderAppId = awesum.ownerApp.id;
            defaultFollowerRequest.followerAppId = awesum.ownerApp.id;
            defaultFollowerRequest.followerName = awesum.ownerApp.name;
            defaultFollowerRequest.leaderName = awesum.ownerApp.name;
            defaultFollowerRequest.followerEmail = awesum.ownerApp.email;
            defaultFollowerRequest.leaderEmail = awesum.ownerApp.email;
            await awesum.AwesumDexieDB.serverFollowerRequests.put(defaultFollowerRequest);
            await awesum.refreshServerFollowerRequests();
          }
        }
        if (item.level == ItemLevel.database) {
          (item.values as ServerDatabaseInterface).touched = false;
          this.touchedObjects.delete(item.id);
          for(const key in item.values as Record<string, any>){
            this.setTablePropertyValueById(item.id, key, (item.values as Record<string, any>)[key], this.AwesumDexieDB.serverDatabases, true);
          }
          await this.refreshCurrentDatabases();
        }
      }
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
