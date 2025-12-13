
  import type { Table } from "dexie";
  
  
  import { awesum } from "@/awesum";
  import type { ServerInternalInterface } from "../../../server/serverInterfaces/ServerInternalInterface";
  
  export class ClientInternal implements ServerInternalInterface {
      constructor(other?:Partial<ServerInternalInterface>|null, table?: Table) {
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
    private _lastModified: number = 0;
    public get lastModified():number { return this._lastModified; }
    public set lastModified(v:number) {if(this._lastModified != v){this._lastModified=v;}}
  }
  