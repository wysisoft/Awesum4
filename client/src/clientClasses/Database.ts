
  import type { Table } from "dexie";
  
  
  import { awesum } from "@/awesum";
  import type { ServerDatabaseInterface } from "../../../server/serverInterfaces/ServerDatabaseInterface";
  
  export class ClientDatabase implements ServerDatabaseInterface {
      constructor(other?:Partial<ServerDatabaseInterface>|null, table?: Table) {
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
    private _lastModified: number = 0;
    public get lastModified():number { return this._lastModified; }
    public set lastModified(v:number) {if(this._lastModified != v){this._lastModified=v;}}
    private _version: number = 0;
    public get version():number { return this._version; }
    public set version(v:number) {if(this._version != v){this._version=v;}}
    private _appId: string = "";
    public get appId():string { return this._appId; }
    public set appId(v:string) {if(this._appId != v){this.version++;this.lastModified=new Date().getTime();this._appId=v;awesum.setTablePropertyValueById(this.id, 'appId',v,this.table)}}
    private _id: string = "";
    public get id():string { return this._id; }
    public set id(v:string) {if(this._id != v){this._id=v;}}
    private _order: number = 0;
    public get order():number { return this._order; }
    public set order(v:number) {if(this._order != v){this.version++;this.lastModified=new Date().getTime();this._order=v;awesum.setTablePropertyValueById(this.id, 'order',v,this.table)}}
    private _homePageIconType: number = 0;
    public get homePageIconType():number { return this._homePageIconType; }
    public set homePageIconType(v:number) {if(this._homePageIconType != v){this.version++;this.lastModified=new Date().getTime();this._homePageIconType=v;awesum.setTablePropertyValueById(this.id, 'homePageIconType',v,this.table)}}
    private _homePageIcon: string = "";
    public get homePageIcon():string { return this._homePageIcon; }
    public set homePageIcon(v:string) {if(this._homePageIcon != v){this.version++;this.lastModified=new Date().getTime();this._homePageIcon=v;awesum.setTablePropertyValueById(this.id, 'homePageIcon',v,this.table)}}
    private _touched: boolean = false;
    public get touched():boolean { return this._touched; }
    public set touched(v:boolean) {if(this._touched != v){this._touched=v;}}
  }
  