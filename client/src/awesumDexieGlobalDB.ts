import { Dexie, type Table } from "dexie";
import { AwesumDexieGlobal } from "./awesumDexieGlobal";
import { awesum } from "./awesum";

export class AwesumDexieGlobalDB extends Dexie {
    global!: Table<AwesumDexieGlobal, number>;

    static async persist() {
        return await navigator.storage && navigator.storage.persist &&
            navigator.storage.persist();
    }

    static async isStoragePersisted() {
        return await navigator.storage && navigator.storage.persisted &&
            navigator.storage.persisted();
    }

    public static async CreateAsync() {
        this.isStoragePersisted().then(async (isPersisted) => {
            if (isPersisted) {
                console.log(":) Storage is successfully persisted.");
            } else {
                console.log(":( Storage is not persisted.");
                console.log("Trying to persist..:");
                if (await this.persist()) {
                    console.log(
                        ":) We successfully turned the storage to be persisted.",
                    );
                } else {
                    console.log(":( Failed to make storage persisted");
                }
            }
        });
        const returnValue = new AwesumDexieGlobalDB();
        
        await returnValue.on("populate", async function (trans) {
        
        });

        await returnValue.open();

        return returnValue;
    }
    constructor() {
        super("awesumGlobal");
        this.version(1).stores({
            global: "++id",
        }).upgrade((tx) => {
            
        });
    }
}
