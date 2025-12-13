
  import type { Table } from "dexie";
  
  
  import { awesum } from "@/awesum";
  import type { ServerModificationInterface } from "../../../server/serverInterfaces/ServerModificationInterface";
  
  export class ClientModification implements ServerModificationInterface {
      constructor(other?:Partial<ServerModificationInterface>|null, table?: Table) {
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
  }
  