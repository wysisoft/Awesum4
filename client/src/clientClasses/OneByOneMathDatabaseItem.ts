
  import type { Table } from "dexie";
  
  
  import { awesum } from "@/awesum";
  import type { ServerOneByOneMathDatabaseItemInterface } from "../../../server/serverInterfaces/ServerOneByOneMathDatabaseItemInterface";
  
  export class ClientOneByOneMathDatabaseItem implements ServerOneByOneMathDatabaseItemInterface {
      constructor(other?:Partial<ServerOneByOneMathDatabaseItemInterface>|null, table?: Table) {
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
     
  
    private _data: any = null;
    public get data():any { return this._data; }
    public set data(v:any) {if(this._data != v){this.version++;this.lastModified=new Date().getTime();this._data=v;awesum.setTablePropertyValueById(this.id, 'data',v,this.table)}}
    private _itemType: number = 0;
    public get itemType():number { return this._itemType; }
    public set itemType(v:number) {if(this._itemType != v){this.version++;this.lastModified=new Date().getTime();this._itemType=v;awesum.setTablePropertyValueById(this.id, 'itemType',v,this.table)}}
    private _order: number = 0;
    public get order():number { return this._order; }
    public set order(v:number) {if(this._order != v){this.version++;this.lastModified=new Date().getTime();this._order=v;awesum.setTablePropertyValueById(this.id, 'order',v,this.table)}}
    private _unitId: string = "";
    public get unitId():string { return this._unitId; }
    public set unitId(v:string) {if(this._unitId != v){this.version++;this.lastModified=new Date().getTime();this._unitId=v;awesum.setTablePropertyValueById(this.id, 'unitId',v,this.table)}}
    private _appId: string = "";
    public get appId():string { return this._appId; }
    public set appId(v:string) {if(this._appId != v){this.version++;this.lastModified=new Date().getTime();this._appId=v;awesum.setTablePropertyValueById(this.id, 'appId',v,this.table)}}
    private _lastModified: number = 0;
    public get lastModified():number { return this._lastModified; }
    public set lastModified(v:number) {if(this._lastModified != v){this._lastModified=v;awesum.setTablePropertyValueById(this.id, 'lastModified',v,this.table)}}
    private _touched: boolean = false;
    public get touched():boolean { return this._touched; }
    public set touched(v:boolean) {if(this._touched != v){this.version++;this.lastModified=new Date().getTime();this._touched=v;awesum.setTablePropertyValueById(this.id, 'touched',v,this.table)}}
    private _version: number = 0;
    public get version():number { return this._version; }
    public set version(v:number) {if(this._version != v){this._version=v;awesum.setTablePropertyValueById(this.id, 'version',v,this.table)}}
    private _databaseId: string = "";
    public get databaseId():string { return this._databaseId; }
    public set databaseId(v:string) {if(this._databaseId != v){this.version++;this.lastModified=new Date().getTime();this._databaseId=v;awesum.setTablePropertyValueById(this.id, 'databaseId',v,this.table)}}
    private _id: string = "";
    public get id():string { return this._id; }
    public set id(v:string) {if(this._id != v){this._id=v;awesum.setTablePropertyValueById(this.id, 'id',v,this.table)}}
    private _dataText: string = "";
    public get dataText():string { return this._dataText; }
    public set dataText(v:string) {if(this._dataText != v){this.version++;this.lastModified=new Date().getTime();this._dataText=v;awesum.setTablePropertyValueById(this.id, 'dataText',v,this.table)}}
  }
  