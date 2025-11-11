
  import type { Table } from "dexie";
  
    import type { ClientDatabaseItem } from "./DatabaseItem";
    
  
  import { awesum } from "@/awesum";
  import type { ServerSpellingDatabaseItemDataInterface } from "../../../server/serverInterfaces/ServerSpellingDatabaseItemDataInterface";
  
  export class ClientSpellingDatabaseItemData implements ServerSpellingDatabaseItemDataInterface {
      constructor(other?:Partial<ServerSpellingDatabaseItemDataInterface>|null, table?: Table) {
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
  
    private _letters: string = "";
    public get letters():string { return this._letters; }
    public set letters(v:string) {if(this._letters != v){this.parent.version++;this.parent.lastModified=new Date().getTime();this._letters=v;awesum.setTablePropertyValueById(this.parent.id, 'data.letters',v,this.parent.table)}}
    private _image: string = "";
    public get image():string { return this._image; }
    public set image(v:string) {if(this._image != v){this.parent.version++;this.parent.lastModified=new Date().getTime();this._image=v;awesum.setTablePropertyValueById(this.parent.id, 'data.image',v,this.parent.table)}}
    private _sound: string = "";
    public get sound():string { return this._sound; }
    public set sound(v:string) {if(this._sound != v){this.parent.version++;this.parent.lastModified=new Date().getTime();this._sound=v;awesum.setTablePropertyValueById(this.parent.id, 'data.sound',v,this.parent.table)}}
    private _text: string = "";
    public get text():string { return this._text; }
    public set text(v:string) {if(this._text != v){this.parent.version++;this.parent.lastModified=new Date().getTime();this._text=v;awesum.setTablePropertyValueById(this.parent.id, 'data.text',v,this.parent.table)}}
    private _imageType: number = 0;
    public get imageType():number { return this._imageType; }
    public set imageType(v:number) {if(this._imageType != v){this.parent.version++;this.parent.lastModified=new Date().getTime();this._imageType=v;awesum.setTablePropertyValueById(this.parent.id, 'data.imageType',v,this.parent.table)}}
    private _visualHint: string = "";
    public get visualHint():string { return this._visualHint; }
    public set visualHint(v:string) {if(this._visualHint != v){this.parent.version++;this.parent.lastModified=new Date().getTime();this._visualHint=v;awesum.setTablePropertyValueById(this.parent.id, 'data.visualHint',v,this.parent.table)}}
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
  