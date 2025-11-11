
  import type { Table } from "dexie";
  
  
  import { awesum } from "@/awesum";
  import type { ServerAppInterface } from "../../../server/serverInterfaces/ServerAppInterface";
  
  export class ClientApp implements ServerAppInterface {
      constructor(other?:Partial<ServerAppInterface>|null, table?: Table) {
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
     
  
    private _email: string = "";
    public get email():string { return this._email; }
    public set email(v:string) {if(this._email != v){this.version++;this.lastModified=new Date().getTime();this._email=v;awesum.setTablePropertyValueById(this.id, 'email',v,this.table)}}
    private _name: string = "";
    public get name():string { return this._name; }
    public set name(v:string) {if(this._name != v){this.version++;this.lastModified=new Date().getTime();this._name=v;awesum.setTablePropertyValueById(this.id, 'name',v,this.table)}}
    private _uniqueName: string = "";
    public get uniqueName():string { return this._uniqueName; }
    public set uniqueName(v:string) {if(this._uniqueName != v){this.version++;this.lastModified=new Date().getTime();this._uniqueName=v;awesum.setTablePropertyValueById(this.id, 'uniqueName',v,this.table)}}
    private _version: number = 0;
    public get version():number { return this._version; }
    public set version(v:number) {if(this._version != v){this._version=v;awesum.setTablePropertyValueById(this.id, 'version',v,this.table)}}
    private _lastModified: number = 0;
    public get lastModified():number { return this._lastModified; }
    public set lastModified(v:number) {if(this._lastModified != v){this._lastModified=v;awesum.setTablePropertyValueById(this.id, 'lastModified',v,this.table)}}
    private _homePageImageType: number = 0;
    public get homePageImageType():number { return this._homePageImageType; }
    public set homePageImageType(v:number) {if(this._homePageImageType != v){this.version++;this.lastModified=new Date().getTime();this._homePageImageType=v;awesum.setTablePropertyValueById(this.id, 'homePageImageType',v,this.table)}}
    private _homePageImage: string = "";
    public get homePageImage():string { return this._homePageImage; }
    public set homePageImage(v:string) {if(this._homePageImage != v){this.version++;this.lastModified=new Date().getTime();this._homePageImage=v;awesum.setTablePropertyValueById(this.id, 'homePageImage',v,this.table)}}
    private _authenticationType: string = "";
    public get authenticationType():string { return this._authenticationType; }
    public set authenticationType(v:string) {if(this._authenticationType != v){this.version++;this.lastModified=new Date().getTime();this._authenticationType=v;awesum.setTablePropertyValueById(this.id, 'authenticationType',v,this.table)}}
    private _lang: string = "";
    public get lang():string { return this._lang; }
    public set lang(v:string) {if(this._lang != v){this.version++;this.lastModified=new Date().getTime();this._lang=v;awesum.setTablePropertyValueById(this.id, 'lang',v,this.table)}}
    private _enableNarrator: boolean = false;
    public get enableNarrator():boolean { return this._enableNarrator; }
    public set enableNarrator(v:boolean) {if(this._enableNarrator != v){this.version++;this.lastModified=new Date().getTime();this._enableNarrator=v;awesum.setTablePropertyValueById(this.id, 'enableNarrator',v,this.table)}}
    private _groups: string = "";
    public get groups():string { return this._groups; }
    public set groups(v:string) {if(this._groups != v){this.version++;this.lastModified=new Date().getTime();this._groups=v;awesum.setTablePropertyValueById(this.id, 'groups',v,this.table)}}
    private _id: string = "";
    public get id():string { return this._id; }
    public set id(v:string) {if(this._id != v){this._id=v;awesum.setTablePropertyValueById(this.id, 'id',v,this.table)}}
    private _lastSync: number = 0;
    public get lastSync():number { return this._lastSync; }
    public set lastSync(v:number) {if(this._lastSync != v){this.version++;this.lastModified=new Date().getTime();this._lastSync=v;awesum.setTablePropertyValueById(this.id, 'lastSync',v,this.table)}}
  }
  