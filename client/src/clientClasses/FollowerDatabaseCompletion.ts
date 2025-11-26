
  import type { Table } from "dexie";
  
  
  import { awesum } from "@/awesum";
  import type { ServerFollowerDatabaseCompletionInterface } from "../../../server/serverInterfaces/ServerFollowerDatabaseCompletionInterface";
  
  export class ClientFollowerDatabaseCompletion implements ServerFollowerDatabaseCompletionInterface {
      constructor(other?:Partial<ServerFollowerDatabaseCompletionInterface>|null, table?: Table) {
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
     
  
    private _id: string = "";
    public get id():string { return this._id; }
    public set id(v:string) {if(this._id != v){this._id=v;awesum.setTablePropertyValueById(this.id, 'id',v,this.table)}}
    private _followerRequestId: string = "";
    public get followerRequestId():string { return this._followerRequestId; }
    public set followerRequestId(v:string) {if(this._followerRequestId != v){this._followerRequestId=v;awesum.setTablePropertyValueById(this.id, 'followerRequestId',v,this.table)}}
    private _itemId: string = "";
    public get itemId():string { return this._itemId; }
    public set itemId(v:string) {if(this._itemId != v){this._itemId=v;awesum.setTablePropertyValueById(this.id, 'itemId',v,this.table)}}
    private _parentItemId: string = "";
    public get parentItemId():string { return this._parentItemId; }
    public set parentItemId(v:string) {if(this._parentItemId != v){this._parentItemId=v;awesum.setTablePropertyValueById(this.id, 'parentItemId',v,this.table)}}
    private _itemLevel: number = 0;
    public get itemLevel():number { return this._itemLevel; }
    public set itemLevel(v:number) {if(this._itemLevel != v){this._itemLevel=v;awesum.setTablePropertyValueById(this.id, 'itemLevel',v,this.table)}}
    private _lastModified: number = 0;
    public get lastModified():number { return this._lastModified; }
    public set lastModified(v:number) {if(this._lastModified != v){this._lastModified=v;awesum.setTablePropertyValueById(this.id, 'lastModified',v,this.table)}}
  }
  