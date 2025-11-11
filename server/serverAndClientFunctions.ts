import { isNameGloballyUnique as isNameGloballyUniqueClient } from "./clientFunctions";
import { doesEmailExist as doesEmailExistClient } from "./clientFunctions";
import { emailIsNotUser as emailIsNotUserClient } from "./clientFunctions";

export function isClient() {
    return typeof window !== "undefined";
}

export function isServer() {
    return typeof window === "undefined";
}

export function isBrowser() {
    return typeof window !== "undefined";
}

export async function isNameGloballyUnique(
    email: any,
    val: string
    
): Promise<boolean> {
    if (val) {
        if (isClient()) {
            return isNameGloballyUniqueClient(val);
        } else {
            return import("./serverFunctions").then(module => module.isNameGloballyUnique(email,val));
        }
    }
    return true;
}

export async function doesEmailExist(
    val: string,awaesumUserName?:string
): Promise<boolean> {
    if (val) {
        if (isClient()) {
            return doesEmailExistClient(val);
        } else {
            return import("./serverFunctions").then(module => module.doesEmailExist(val,awaesumUserName));
        }
    }
    return true;
}

export async function emailIsNotUser(
    val: string,awaesumUserName?:string
): Promise<boolean> {
    if (val) {
        if (isClient()) {
            return emailIsNotUserClient(val,awaesumUserName);
        } else {
            return import("./serverFunctions").then(module => module.emailIsNotUser(val,awaesumUserName));
        }
    }
    return true;
}   