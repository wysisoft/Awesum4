
  import type { Table } from "dexie";
  
  
  import { awesum } from "@/awesum";
  import type { ServerDatabaseUnitInterface } from "../../../server/serverInterfaces/ServerDatabaseUnitInterface";
  
  export class ClientDatabaseUnit implements ServerDatabaseUnitInterface {
      constructor(other?:Partial<ServerDatabaseUnitInterface>|null, table?: Table) {
          if (other) {
              (this as any)["id"] = (other as any)["id"];
               for (var i in other) {
                
                    if (i == "id") continue;
                    if(i.startsWith("_")) {
                        (this as any)[i] = (other as any)[i];
                    } else {
                        (this as any)["_"+i] = (other as any)[i];
                    }
               }
          }
          if (table) {
               this.table = table;
          }
     }
     //id = "00000000-0000-0000-0000-000000000000";
     table!: Table;
     
  
    private _name: string = "";
    public get name():string { return this._name; }
    public set name(v:string) {if(this._name != v){this.version++;this.lastModified=new Date().getTime();this._name=v;awesum.setTablePropertyValueById(this.id, 'name',v,this.table)}}
    private _order: number = 0;
    public get order():number { return this._order; }
    public set order(v:number) {if(this._order != v){this.version++;this.lastModified=new Date().getTime();this._order=v;awesum.setTablePropertyValueById(this.id, 'order',v,this.table)}}
    private _lastModified: number = 0;
    public get lastModified():number { return this._lastModified; }
    public set lastModified(v:number) {if(this._lastModified != v){this._lastModified=v;awesum.setTablePropertyValueById(this.id, 'lastModified',v,this.table)}}
    private _version: number = 0;
    public get version():number { return this._version; }
    public set version(v:number) {if(this._version != v){this._version=v;awesum.setTablePropertyValueById(this.id, 'version',v,this.table)}}
    private _id: string = "";
    public get id():string { return this._id; }
    public set id(v:string) {if(this._id != v){this._id=v;awesum.setTablePropertyValueById(this.id, 'id',v,this.table)}}
    private _appId: string = "";
    public get appId():string { return this._appId; }
    public set appId(v:string) {if(this._appId != v){this.version++;this.lastModified=new Date().getTime();this._appId=v;awesum.setTablePropertyValueById(this.id, 'appId',v,this.table)}}
    private _databaseId: string = "";
    public get databaseId():string { return this._databaseId; }
    public set databaseId(v:string) {if(this._databaseId != v){this.version++;this.lastModified=new Date().getTime();this._databaseId=v;awesum.setTablePropertyValueById(this.id, 'databaseId',v,this.table)}}
    private _successVideoType: number = 0;
    public get successVideoType():number { return this._successVideoType; }
    public set successVideoType(v:number) {if(this._successVideoType != v){this.version++;this.lastModified=new Date().getTime();this._successVideoType=v;awesum.setTablePropertyValueById(this.id, 'successVideoType',v,this.table)}}
    private _successVideoUrl: string = "";
    public get successVideoUrl():string { return this._successVideoUrl; }
    public set successVideoUrl(v:string) {if(this._successVideoUrl != v){this.version++;this.lastModified=new Date().getTime();this._successVideoUrl=v;awesum.setTablePropertyValueById(this.id, 'successVideoUrl',v,this.table)}}
    private _successAnimations: string = "";
    public get successAnimations():string { return this._successAnimations; }
    public set successAnimations(v:string) {if(this._successAnimations != v){this.version++;this.lastModified=new Date().getTime();this._successAnimations=v;awesum.setTablePropertyValueById(this.id, 'successAnimations',v,this.table)}}
    private _successSound: string = "";
    public get successSound():string { return this._successSound; }
    public set successSound(v:string) {if(this._successSound != v){this.version++;this.lastModified=new Date().getTime();this._successSound=v;awesum.setTablePropertyValueById(this.id, 'successSound',v,this.table)}}
    private _successSoundType: number = 0;
    public get successSoundType():number { return this._successSoundType; }
    public set successSoundType(v:number) {if(this._successSoundType != v){this.version++;this.lastModified=new Date().getTime();this._successSoundType=v;awesum.setTablePropertyValueById(this.id, 'successSoundType',v,this.table)}}
    private _homePageImageType: number = 0;
    public get homePageImageType():number { return this._homePageImageType; }
    public set homePageImageType(v:number) {if(this._homePageImageType != v){this.version++;this.lastModified=new Date().getTime();this._homePageImageType=v;awesum.setTablePropertyValueById(this.id, 'homePageImageType',v,this.table)}}
    private _homePageImage: string = "";
    public get homePageImage():string { return this._homePageImage; }
    public set homePageImage(v:string) {if(this._homePageImage != v){this.version++;this.lastModified=new Date().getTime();this._homePageImage=v;awesum.setTablePropertyValueById(this.id, 'homePageImage',v,this.table)}}
    private _router: string = "";
    public get router():string { return this._router; }
    public set router(v:string) {if(this._router != v){this.version++;this.lastModified=new Date().getTime();this._router=v;awesum.setTablePropertyValueById(this.id, 'router',v,this.table)}}
    private _routerTime: number = 0;
    public get routerTime():number { return this._routerTime; }
    public set routerTime(v:number) {if(this._routerTime != v){this.version++;this.lastModified=new Date().getTime();this._routerTime=v;awesum.setTablePropertyValueById(this.id, 'routerTime',v,this.table)}}
    private _routerTimeImmediate: boolean = false;
    public get routerTimeImmediate():boolean { return this._routerTimeImmediate; }
    public set routerTimeImmediate(v:boolean) {if(this._routerTimeImmediate != v){this.version++;this.lastModified=new Date().getTime();this._routerTimeImmediate=v;awesum.setTablePropertyValueById(this.id, 'routerTimeImmediate',v,this.table)}}
    private _points: number = 0;
    public get points():number { return this._points; }
    public set points(v:number) {if(this._points != v){this.version++;this.lastModified=new Date().getTime();this._points=v;awesum.setTablePropertyValueById(this.id, 'points',v,this.table)}}
  }
  