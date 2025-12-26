
  import type { Table } from "dexie";
  
  
  import { awesum } from "@/awesum";
  import type { ServerFollowerRequestInterface } from "../../../server/serverInterfaces/ServerFollowerRequestInterface";
  
  export class ClientFollowerRequest implements ServerFollowerRequestInterface {
      constructor(other?:Partial<ServerFollowerRequestInterface>|null, table?: Table) {
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
     
  
    private _leaderAppId: string = "";
    public get leaderAppId():string { return this._leaderAppId; }
    public set leaderAppId(v:string) {if(this._leaderAppId != v){this.version++;this.lastModified=new Date().getTime();this._leaderAppId=v;awesum.setTablePropertyValueById(this.id, 'leaderAppId',v,this.table)}}
    private _followerAppId: string = "";
    public get followerAppId():string { return this._followerAppId; }
    public set followerAppId(v:string) {if(this._followerAppId != v){this.version++;this.lastModified=new Date().getTime();this._followerAppId=v;awesum.setTablePropertyValueById(this.id, 'followerAppId',v,this.table)}}
    private _id: string = "";
    public get id():string { return this._id; }
    public set id(v:string) {if(this._id != v){this._id=v;}}
    private _followerName: string = "";
    public get followerName():string { return this._followerName; }
    public set followerName(v:string) {if(this._followerName != v){this.version++;this.lastModified=new Date().getTime();this._followerName=v;awesum.setTablePropertyValueById(this.id, 'followerName',v,this.table)}}
    private _leaderName: string = "";
    public get leaderName():string { return this._leaderName; }
    public set leaderName(v:string) {if(this._leaderName != v){this.version++;this.lastModified=new Date().getTime();this._leaderName=v;awesum.setTablePropertyValueById(this.id, 'leaderName',v,this.table)}}
    private _followerEmail: string = "";
    public get followerEmail():string { return this._followerEmail; }
    public set followerEmail(v:string) {if(this._followerEmail != v){this.version++;this.lastModified=new Date().getTime();this._followerEmail=v;awesum.setTablePropertyValueById(this.id, 'followerEmail',v,this.table)}}
    private _leaderEmail: string = "";
    public get leaderEmail():string { return this._leaderEmail; }
    public set leaderEmail(v:string) {if(this._leaderEmail != v){this.version++;this.lastModified=new Date().getTime();this._leaderEmail=v;awesum.setTablePropertyValueById(this.id, 'leaderEmail',v,this.table)}}
    private _initiatedByFollower: boolean = false;
    public get initiatedByFollower():boolean { return this._initiatedByFollower; }
    public set initiatedByFollower(v:boolean) {if(this._initiatedByFollower != v){this.version++;this.lastModified=new Date().getTime();this._initiatedByFollower=v;awesum.setTablePropertyValueById(this.id, 'initiatedByFollower',v,this.table)}}
    private _lastModified: number = 0;
    public get lastModified():number { return this._lastModified; }
    public set lastModified(v:number) {if(this._lastModified != v){this._lastModified=v;}}
    private _touched: boolean = false;
    public get touched():boolean { return this._touched; }
    public set touched(v:boolean) {if(this._touched != v){this._touched=v;}}
    private _version: number = 0;
    public get version():number { return this._version; }
    public set version(v:number) {if(this._version != v){this._version=v;}}
    private _status: number = 0;
    public get status():number { return this._status; }
    public set status(v:number) {if(this._status != v){this.version++;this.lastModified=new Date().getTime();this._status=v;awesum.setTablePropertyValueById(this.id, 'status',v,this.table)}}
    private _groups: string = "";
    public get groups():string { return this._groups; }
    public set groups(v:string) {if(this._groups != v){this.version++;this.lastModified=new Date().getTime();this._groups=v;awesum.setTablePropertyValueById(this.id, 'groups',v,this.table)}}
    private _points: number = 0;
    public get points():number { return this._points; }
    public set points(v:number) {if(this._points != v){this.version++;this.lastModified=new Date().getTime();this._points=v;awesum.setTablePropertyValueById(this.id, 'points',v,this.table)}}
    private _completionLastModified: number = 0;
    public get completionLastModified():number { return this._completionLastModified; }
    public set completionLastModified(v:number) {if(this._completionLastModified != v){this.version++;this.lastModified=new Date().getTime();this._completionLastModified=v;awesum.setTablePropertyValueById(this.id, 'completionLastModified',v,this.table)}}
  }
  