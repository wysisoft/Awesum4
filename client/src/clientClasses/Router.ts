
  import type { Table } from "dexie";
  
  
  import { awesum } from "@/awesum";
  import type { ServerRouterInterface } from "../../../server/serverInterfaces/ServerRouterInterface";
  
  export class ClientRouter implements ServerRouterInterface {
      constructor(other?:Partial<ServerRouterInterface>|null, table?: Table) {
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
    public set id(v:string) {if(this._id != v){this._id=v;}}
    private _appId: string = "";
    public get appId():string { return this._appId; }
    public set appId(v:string) {if(this._appId != v){this.version++;this.lastModified=new Date().getTime();this._appId=v;awesum.setTablePropertyValueById(this.id, 'appId',v,this.table)}}
    private _routerMac: string = "";
    public get routerMac():string { return this._routerMac; }
    public set routerMac(v:string) {if(this._routerMac != v){this.version++;this.lastModified=new Date().getTime();this._routerMac=v;awesum.setTablePropertyValueById(this.id, 'routerMac',v,this.table)}}
    private _ipAddress: string = "";
    public get ipAddress():string { return this._ipAddress; }
    public set ipAddress(v:string) {if(this._ipAddress != v){this.version++;this.lastModified=new Date().getTime();this._ipAddress=v;awesum.setTablePropertyValueById(this.id, 'ipAddress',v,this.table)}}
    private _mondayTimesAndDurations: string = "";
    public get mondayTimesAndDurations():string { return this._mondayTimesAndDurations; }
    public set mondayTimesAndDurations(v:string) {if(this._mondayTimesAndDurations != v){this.version++;this.lastModified=new Date().getTime();this._mondayTimesAndDurations=v;awesum.setTablePropertyValueById(this.id, 'mondayTimesAndDurations',v,this.table)}}
    private _tuesdayTimesAndDurations: string = "";
    public get tuesdayTimesAndDurations():string { return this._tuesdayTimesAndDurations; }
    public set tuesdayTimesAndDurations(v:string) {if(this._tuesdayTimesAndDurations != v){this.version++;this.lastModified=new Date().getTime();this._tuesdayTimesAndDurations=v;awesum.setTablePropertyValueById(this.id, 'tuesdayTimesAndDurations',v,this.table)}}
    private _wednesdayTimesAndDurations: string = "";
    public get wednesdayTimesAndDurations():string { return this._wednesdayTimesAndDurations; }
    public set wednesdayTimesAndDurations(v:string) {if(this._wednesdayTimesAndDurations != v){this.version++;this.lastModified=new Date().getTime();this._wednesdayTimesAndDurations=v;awesum.setTablePropertyValueById(this.id, 'wednesdayTimesAndDurations',v,this.table)}}
    private _thursdayTimesAndDurations: string = "";
    public get thursdayTimesAndDurations():string { return this._thursdayTimesAndDurations; }
    public set thursdayTimesAndDurations(v:string) {if(this._thursdayTimesAndDurations != v){this.version++;this.lastModified=new Date().getTime();this._thursdayTimesAndDurations=v;awesum.setTablePropertyValueById(this.id, 'thursdayTimesAndDurations',v,this.table)}}
    private _fridayTimesAndDurations: string = "";
    public get fridayTimesAndDurations():string { return this._fridayTimesAndDurations; }
    public set fridayTimesAndDurations(v:string) {if(this._fridayTimesAndDurations != v){this.version++;this.lastModified=new Date().getTime();this._fridayTimesAndDurations=v;awesum.setTablePropertyValueById(this.id, 'fridayTimesAndDurations',v,this.table)}}
    private _saturdayTimesAndDurations: string = "";
    public get saturdayTimesAndDurations():string { return this._saturdayTimesAndDurations; }
    public set saturdayTimesAndDurations(v:string) {if(this._saturdayTimesAndDurations != v){this.version++;this.lastModified=new Date().getTime();this._saturdayTimesAndDurations=v;awesum.setTablePropertyValueById(this.id, 'saturdayTimesAndDurations',v,this.table)}}
    private _sundayTimesAndDurations: string = "";
    public get sundayTimesAndDurations():string { return this._sundayTimesAndDurations; }
    public set sundayTimesAndDurations(v:string) {if(this._sundayTimesAndDurations != v){this.version++;this.lastModified=new Date().getTime();this._sundayTimesAndDurations=v;awesum.setTablePropertyValueById(this.id, 'sundayTimesAndDurations',v,this.table)}}
    private _version: number = 0;
    public get version():number { return this._version; }
    public set version(v:number) {if(this._version != v){this._version=v;}}
    private _lastModified: number = 0;
    public get lastModified():number { return this._lastModified; }
    public set lastModified(v:number) {if(this._lastModified != v){this._lastModified=v;}}
    private _touched: boolean = false;
    public get touched():boolean { return this._touched; }
    public set touched(v:boolean) {if(this._touched != v){this._touched=v;}}
    private _status: number = 0;
    public get status():number { return this._status; }
    public set status(v:number) {if(this._status != v){this.version++;this.lastModified=new Date().getTime();this._status=v;awesum.setTablePropertyValueById(this.id, 'status',v,this.table)}}
  }
  