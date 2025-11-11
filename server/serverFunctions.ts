import {type DB} from "./db/db";
import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';

const db = new Kysely<DB>({
    dialect: new PostgresDialect({
      pool: new Pool({
        connectionString: process.env.DATABASE_URL,
      }),
    }),
  });
  

export async function isNameGloballyUnique(email: string,uniqueName: string) {

    uniqueName = uniqueName.trim();
    // var app = await models.APP.findOne({
    //     where: { uniqueName: uniqueName },
    // });
    const app = await db.selectFrom('awesum.App as a')
    .where(({ eb }) => 
      eb('uniqueName','=',uniqueName))
    .selectAll()
    .executeTakeFirst();
    
    if (!app || email == app.email) {
        return true;
    }
    return false;
}

export async function getAppIdFromEmail(email: string) {
    // var app = await models.APP.findOne({
    //     where: { email: email },
    // });
    const app = await db.selectFrom('awesum.App as a')
    .where(({ eb }) => 
      eb('email','=',email))
    .selectAll()
    .executeTakeFirst();
    if (!app) {
        return null;
    }
    return app.id;
}

export async function getEmailFromAppId(appId: string) {
    // var app = await models.APP.findOne({
    //     where: { id: appId },
    // });
    const app = await db.selectFrom('awesum.App as a')
    .where(({ eb }) => 
      eb('id','=',appId))
    .selectAll()
    .executeTakeFirst();
    if (!app) {
        return null;
    }
    return app.email;
}

export async function doesEmailExist(email: string,awaesumUserName?:string) {
    // var app = await models.APP.findOne({
    //     where: { email: email },
    // });
    const app = await db.selectFrom('awesum.App as a')
    .where(({ eb }) => 
      eb('email','=',email))
    .selectAll()
    .executeTakeFirst();
    
    if (!app) {
        return false;
    }
    return true;
}

export async function emailIsNotUser(email: string,awaesumUserName?:string) {
    return email !== awaesumUserName;
}