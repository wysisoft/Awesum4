
  import type { Table } from "dexie";
  
  
  import { awesum } from "@/awesum";
  import type { ServerMediaInterface } from "../../../server/serverInterfaces/ServerMediaInterface";
  
  export class ClientMedia implements ServerMediaInterface {
      constructor(other?:Partial<ServerMediaInterface>|null, table?: Table) {
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
    private _size: number = 0;
    public get size():number { return this._size; }
    public set size(v:number) {if(this._size != v){this._size=v;awesum.setTablePropertyValueById(this.id, 'size',v,this.table)}}
    private _data: string = "";
    public get data():string { return this._data; }
    public set data(v:string) {if(this._data != v){this._data=v;awesum.setTablePropertyValueById(this.id, 'data',v,this.table)}}
    private _appId: string = "";
    public get appId():string { return this._appId; }
    public set appId(v:string) {if(this._appId != v){this._appId=v;awesum.setTablePropertyValueById(this.id, 'appId',v,this.table)}}
    private _touched: boolean = false;
    public get touched():boolean { return this._touched; }
    public set touched(v:boolean) {if(this._touched != v){this._touched=v;awesum.setTablePropertyValueById(this.id, 'touched',v,this.table)}}
  }
  