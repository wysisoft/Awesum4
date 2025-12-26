
  import type { Table } from "dexie";
  
  
  import { awesum } from "@/awesum";
  import type { ServerFollowerDatabaseInterface } from "../../../server/serverInterfaces/ServerFollowerDatabaseInterface";
  
  export class ClientFollowerDatabase implements ServerFollowerDatabaseInterface {
      constructor(other?:Partial<ServerFollowerDatabaseInterface>|null, table?: Table) {
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
     
  
    private _followerRequestId: string = "";
    public get followerRequestId():string { return this._followerRequestId; }
    public set followerRequestId(v:string) {if(this._followerRequestId != v){this.version++;this.lastModified=new Date().getTime();this._followerRequestId=v;awesum.setTablePropertyValueById(this.id, 'followerRequestId',v,this.table)}}
    private _id: string = "";
    public get id():string { return this._id; }
    public set id(v:string) {if(this._id != v){this._id=v;}}
    private _databaseId: string = "";
    public get databaseId():string { return this._databaseId; }
    public set databaseId(v:string) {if(this._databaseId != v){this.version++;this.lastModified=new Date().getTime();this._databaseId=v;awesum.setTablePropertyValueById(this.id, 'databaseId',v,this.table)}}
    private _lastModified: number = 0;
    public get lastModified():number { return this._lastModified; }
    public set lastModified(v:number) {if(this._lastModified != v){this._lastModified=v;}}
    private _touched: boolean = false;
    public get touched():boolean { return this._touched; }
    public set touched(v:boolean) {if(this._touched != v){this._touched=v;}}
    private _version: number = 0;
    public get version():number { return this._version; }
    public set version(v:number) {if(this._version != v){this._version=v;}}
  }
  