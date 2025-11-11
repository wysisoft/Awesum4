
  import type { Table } from "dexie";
  
    import type { ClientDatabaseItem } from "./DatabaseItem";
    
  
  import { awesum } from "@/awesum";
  import type { ServerOneByOneMathDatabaseItemDataInterface } from "../../../server/serverInterfaces/ServerOneByOneMathDatabaseItemDataInterface";
  
  export class ClientOneByOneMathDatabaseItemData implements ServerOneByOneMathDatabaseItemDataInterface {
      constructor(other?:Partial<ServerOneByOneMathDatabaseItemDataInterface>|null, table?: Table) {
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
     parent!:ClientDatabaseItem;
  
    private _firstNumber: number = 0;
    public get firstNumber():number { return this._firstNumber; }
    public set firstNumber(v:number) {if(this._firstNumber != v){this.parent.version++;this.parent.lastModified=new Date().getTime();this._firstNumber=v;awesum.setTablePropertyValueById(this.parent.id, 'data.firstNumber',v,this.parent.table)}}
    private _secondNumber: number = 0;
    public get secondNumber():number { return this._secondNumber; }
    public set secondNumber(v:number) {if(this._secondNumber != v){this.parent.version++;this.parent.lastModified=new Date().getTime();this._secondNumber=v;awesum.setTablePropertyValueById(this.parent.id, 'data.secondNumber',v,this.parent.table)}}
    private _options: string = "";
    public get options():string { return this._options; }
    public set options(v:string) {if(this._options != v){this.parent.version++;this.parent.lastModified=new Date().getTime();this._options=v;awesum.setTablePropertyValueById(this.parent.id, 'data.options',v,this.parent.table)}}
    private _sound: string = "";
    public get sound():string { return this._sound; }
    public set sound(v:string) {if(this._sound != v){this.parent.version++;this.parent.lastModified=new Date().getTime();this._sound=v;awesum.setTablePropertyValueById(this.parent.id, 'data.sound',v,this.parent.table)}}
    private _audioType: number = 0;
    public get audioType():number { return this._audioType; }
    public set audioType(v:number) {if(this._audioType != v){this.parent.version++;this.parent.lastModified=new Date().getTime();this._audioType=v;awesum.setTablePropertyValueById(this.parent.id, 'data.audioType',v,this.parent.table)}}
    private _successSound: string = "";
    public get successSound():string { return this._successSound; }
    public set successSound(v:string) {if(this._successSound != v){this.parent.version++;this.parent.lastModified=new Date().getTime();this._successSound=v;awesum.setTablePropertyValueById(this.parent.id, 'data.successSound',v,this.parent.table)}}
    private _successSoundType: number = 0;
    public get successSoundType():number { return this._successSoundType; }
    public set successSoundType(v:number) {if(this._successSoundType != v){this.parent.version++;this.parent.lastModified=new Date().getTime();this._successSoundType=v;awesum.setTablePropertyValueById(this.parent.id, 'data.successSoundType',v,this.parent.table)}}
    private _successImage: string = "";
    public get successImage():string { return this._successImage; }
    public set successImage(v:string) {if(this._successImage != v){this.parent.version++;this.parent.lastModified=new Date().getTime();this._successImage=v;awesum.setTablePropertyValueById(this.parent.id, 'data.successImage',v,this.parent.table)}}
    private _successImageType: number = 0;
    public get successImageType():number { return this._successImageType; }
    public set successImageType(v:number) {if(this._successImageType != v){this.parent.version++;this.parent.lastModified=new Date().getTime();this._successImageType=v;awesum.setTablePropertyValueById(this.parent.id, 'data.successImageType',v,this.parent.table)}}
    private _successAnimations: string = "";
    public get successAnimations():string { return this._successAnimations; }
    public set successAnimations(v:string) {if(this._successAnimations != v){this.parent.version++;this.parent.lastModified=new Date().getTime();this._successAnimations=v;awesum.setTablePropertyValueById(this.parent.id, 'data.successAnimations',v,this.parent.table)}}
    private _successImageTime: number = 0;
    public get successImageTime():number { return this._successImageTime; }
    public set successImageTime(v:number) {if(this._successImageTime != v){this.parent.version++;this.parent.lastModified=new Date().getTime();this._successImageTime=v;awesum.setTablePropertyValueById(this.parent.id, 'data.successImageTime',v,this.parent.table)}}
  }
  