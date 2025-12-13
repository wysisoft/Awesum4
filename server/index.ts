import { createClient } from "redis";

const pub = createClient();

const sub = createClient();


await pub.connect();
await sub.connect();

// Subscribe to channel
await sub.subscribe("ws-broadcast", (msg) => {
  var msgJson = JSON.parse(msg);

  if (socketConnections.has(msgJson.email)) {
    var wses = socketConnections.get(msgJson.email);
    if (wses) {
      for (var ws of wses) {
        if (ws.readyState === WebSocket.OPEN && !(ws as any).macAddress) {
          ws.send(msgJson.payload);
        }
      }
    }
  }
});

//@bun
import { getDefault, types } from './typebox';
import type { ServerAppInterface } from './serverInterfaces/ServerAppInterface';

import { Value } from '@sinclair/typebox/value'
import { ServerFollowerDatabaseInterface } from './serverInterfaces/ServerFollowerDatabaseInterface';
import { ServerFollowerRequestInterface } from './serverInterfaces/ServerFollowerRequestInterface';
import { Kysely, PostgresDialect, HandleEmptyInListsPlugin, type HandleEmptyInListsOptions, pushValueIntoList } from 'kysely';
import { type AwesumApp, type AwesumFollowerRequest, type AwesumFollowerDatabase, type DB, type AwesumFollowerDatabaseCompletion, type AwesumDatabaseUnit, type AwesumDatabaseItem, type AwesumRouter, type AwesumDatabase, type AwesumDnsEntry } from './db/db';
import { Pool } from 'pg';
import { constants } from "./constants"
import { validateDatabase } from './javascriptValidations/database';
import { validateDatabaseUnit } from './javascriptValidations/databaseUnit';
import { validateDatabaseItem } from './javascriptValidations/databaseItem';
import { validateFollowerDatabaseCompletion } from './javascriptValidations/followerDatabaseCompletion';

// Define a custom logger (you can use any logging library you prefer)
const logger = {
  log: (message: string) => console.log(message),  // Here we use console.log for simplicity
}

const db = new Kysely<DB>({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: process.env.DATABASE_URL,
    }),
  }),
  plugins: [
    new HandleEmptyInListsPlugin({
      strategy: pushValueIntoList('__kysely_no_values_were_provided__') // choose a unique value for not in. has to be something with zero chance being in the data.
    })
  ],
  log: (event) => {
    // Log the SQL query and parameters
    if (event.level === 'query') {
      logger.log(`🧱 SQL Query: ${event.query.sql}`)
      logger.log(`🧱 Query: ${event.query.query}`)
      logger.log(`🪄 Parameters: ${JSON.stringify(event.query.parameters)}`)
    }
    // Log the result after query execution
  },

});

import { google } from 'googleapis';
import { v7 as uuidv7, validate } from 'uuid';
import express from "express";
import cookieSession from "cookie-session";
import passport, { session } from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { resources } from "./../client/src/resources/Resources";
import { validateApp } from "./javascriptValidations/app";
import i18next from "i18next";
import Backend from "i18next-fs-backend";
import * as middleware from "i18next-http-middleware";
import type { ServerDatabaseUnitInterface } from "./serverInterfaces/ServerDatabaseUnitInterface";

import type { ServerResetAllServerDataResponseInterface } from "./serverInterfaces/ServerResetAllServerDataResponseInterface";
import { followerRequestStatus, ItemLevel, ServerMessageType, syncAction, syncResultType } from "./typebox";
import type { ServerUpdateRouterTimesAndDurationsRequestInterface } from "./serverInterfaces/ServerUpdateRouterTimesAndDurationsRequestInterface";
import type { ServerUpdateRouterStatusRequestInterface } from "./serverInterfaces/ServerUpdateRouterStatusRequestInterface";

//add websocket server using websocket.js
import ws from "ws";
const WebSocketServer = (ws as any).Server
import { isNameGloballyUnique } from "./serverAndClientFunctions";
import type { Database, DatabaseItem, DatabaseUnit, ServerSyncRequestInterface } from "./serverInterfaces/ServerSyncRequestInterface";
import { getEmailFromAppId, getAppIdFromEmail, doesEmailExist } from "./serverFunctions";
import type { ServerDatabaseInterface } from "./serverInterfaces/ServerDatabaseInterface";

import type { ServerSyncResponseInterface } from "./serverInterfaces/ServerSyncResponseInterface";
import type { ServerPushAppResponseInterface } from "./serverInterfaces/ServerPushAppResponseInterface";
import { validateAddFollowerRequest } from "./javascriptValidations/addFollowerRequest";
import type { ServerDnsEntryInterface } from "./serverInterfaces/ServerDnsEntryInterface";

await (async () => {
  const appEmailRows = await db.selectFrom('awesum.App as a')
    .select((eb) => [
      'a.email', 'a.id'
    ])
    .distinct()
    .execute();
  for (const row of appEmailRows) {
    await pub.set("appEmailsAndIds:" + row.email, row.id);
    await pub.sAdd("appIds", row.id);
  }
})();


const routerRows =
  await db.selectFrom('awesum.Router as r')
    .innerJoin('awesum.App as a', 'r.appId', 'a.id')
    .select((eb) => [
      'a.email',
      eb.fn('upper', ['r.routerMac']).as('routerMac'),
      'r.ipAddress',
      'r.id as routerId',
    ])
    .execute()

//all cached objects, these need to be maintained in memory and synced to the database

const socketConnections = new Map<string, WebSocket[]>();
//convert results to a map of routerMac to email, allowing for multiple emails per routerMac
const routerMacToEmailMap = new Map<string, { email: string, ipAddress: string, routerId: string }>();
for (const result of routerRows) {
  const routerMac = result.routerMac;
  const email = result.email;
  const ipAddress = result.ipAddress;
  const routerId = result.routerId;
  routerMacToEmailMap.set(routerMac as string, { email: email as string, ipAddress: ipAddress as string, routerId: routerId as string });
}











// Global error handlers
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

i18next
  .use(Backend).use(middleware.LanguageDetector).init({
    detection: {
      order: ["header"],
      lookupHeader: "accept-language",
    },
    preload: ["en-GB", "en-US"],
    backend: {
      loadPath: "C:/awesum2/bun/Resources/Resources.{{lng}}.json",
    },
  });

function onSocketError(err: any) {
  console.error(err);
}

var app = express();
app.set('trust proxy', true);



app.use(
  middleware.handle(i18next, {}),
);

// Configuration
const GOOGLE_CLIENT_ID =
  "270679439922-k1bkmqcja55a7rpq2v6732tenk62hshh.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
const JWT_SECRET = "your-jwt-secret-key";
const COOKIE_SECRET = "your-cookie-secret-key";








import e, { type Request, type Response, type NextFunction } from 'express';


// Type definitions
interface UserTokens {
  access_token: string;
  refresh_token: string | null;
  scope: string;
  token_type: string;
  expiry_date: number;
}

interface SessionUser {
  id: string;
  displayName: string;
  emails: string[];
  tokens: UserTokens;
  provider: string;
}

interface AuthenticatedRequest extends Request {
  user?: SessionUser;
}

interface AuthenticatedSession {
  passport: {
    user: SessionUser;
  };
}

const sessionParser = cookieSession({
  name: 'sid',
  // Remove the keys array to disable encryption
  // keys: [process.env.SESSION_SECRET!],
  // Cookie lifetime. Access tokens will rotate within this window anyway.
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  httpOnly: false, // Change to false so you can see it in browser dev tools
  sameSite: 'lax',
  secure: false, // Change to false for development (allows HTTP)
  // Add these options to make cookies more readable
  signed: false, // Disable signing/encryption
})

app.use(sessionParser);



// Session ID middleware - add session ID for new sessions
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  // Check if this is a new session (no session ID exists)
  if (!req.session || !(req.session as any).sessionId) {
    // Generate a new session ID using uuidv7
    (req.session as any).sessionId = uuidv7();
    console.log('New session created with ID:', (req.session as any).sessionId);
  }
  next();
});


// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user: Express.User, done: (err: any, user: SessionUser) => void) => {
  console.log('📤 Serializing user:', (user as SessionUser).id);
  return done(null, user as SessionUser);
});

passport.deserializeUser((obj: SessionUser, done: (err: any, user: SessionUser) => void) => {
  console.log('📥 Deserializing user:', obj.id);
  return done(null, obj);
});

/**
 * Google Strategy:
 * - request offline access to get a refresh_token
 * - store tokens + expiry in the session cookie
 */
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  callbackURL: process.env.GOOGLE_CALLBACK_URL!,
  passReqToCallback: true,
},
  async (req: Request, accessToken: string, refreshToken: string, params: any, profile: any, done: (err: any, user?: SessionUser) => void) => {
    try {
      console.log('🔑 Google OAuth callback received for user:', profile.id);
      console.log('📧 User email:', profile.emails?.[0]?.value);

      // params contains token info such as expires_in
      // Compute expiry time in ms since epoch
      const expiresAt = Date.now() + (params.expires_in || 0) * 1000;

      // Build the minimal session payload
      const sessionUser: SessionUser = {
        provider: "google",
        id: profile.id,
        displayName: profile.displayName,
        emails: (profile.emails || []).map((e: any) => e.value),
        tokens: {
          access_token: accessToken,
          refresh_token: refreshToken,
          scope: params.scope,
          token_type: params.token_type,
          expiry_date: expiresAt,
        }
      };

      console.log('✅ User session created successfully');
      return done(null, sessionUser);
    } catch (err) {
      console.error('❌ Error in Google OAuth callback:', err);
      return done(err);
    }
  }));

/**
 * Helper: make an OAuth2 client from tokens in the session
 */
function makeOAuthClient(tokens: UserTokens) {
  console.log('🔧 Creating OAuth2 client...');
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID!,
    process.env.GOOGLE_CLIENT_SECRET!,
    process.env.GOOGLE_CALLBACK_URL!
  );
  oauth2Client.setCredentials(tokens);
  return oauth2Client;
}

/**
 * Middleware: ensure logged in
 */
function requireAuth(req: Request, res: Response, next: NextFunction): void {
  const session = req.session as any;
  console.log('🔒 Auth check - Session:', !!session, 'Passport:', !!session?.passport, 'User:', !!session?.passport?.user);

  if (session && session.passport && session.passport.user && session.passport.user.tokens) {
    console.log('✅ User authenticated:', session.passport.user.id);
    return next();
  }
  console.log('❌ User not authenticated');
  if (req.path == "/api/profile") {
    res.json({
      provider: null,
      sessionId: null,
      email: null,
    });
    return;
  }
  else {
    res.status(401).json({ message: 'User not authenticated' });
    return;
  }
}

/**
 * Middleware: silently refresh access token if expiring/expired.
 * Runs after requireAuth.
 */
async function ensureFreshAccessToken(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const user = (req.session as any).passport.user;
    const tokens = user.tokens;

    const now = Date.now();
    const skewMs = 60 * 1000; // refresh 1 minute early to avoid edge races
    const needsRefresh = !tokens.expiry_date || (now + skewMs) >= tokens.expiry_date;

    console.log('🔄 Token refresh check - Current time:', new Date(now).toISOString());
    console.log('🔄 Token expiry:', tokens.expiry_date ? new Date(tokens.expiry_date).toISOString() : 'None');
    console.log('🔄 Needs refresh:', needsRefresh);

    // Only attempt refresh if we have a refresh_token
    if (needsRefresh && tokens.refresh_token) {
      console.log('🔄 Refreshing access token...');
      const oauth2Client = makeOAuthClient(tokens);
      const refreshed = await oauth2Client.refreshAccessToken(); // deprecated in new googleapis, but still works; alt below
      const newTokens = refreshed.credentials;

      // Merge & persist back into cookie-session
      user.tokens = {
        access_token: newTokens.access_token || tokens.access_token,
        refresh_token: newTokens.refresh_token || tokens.refresh_token, // may rotate or be absent
        scope: newTokens.scope || tokens.scope,
        token_type: newTokens.token_type || tokens.token_type,
        expiry_date: newTokens.expiry_date || (now + 3600 * 1000), // fallback 1h
      };
      (req.session as any).passport.user = user; // save back
      console.log('✅ Access token refreshed successfully');
    } else {
      console.log('✅ Access token is still valid');
    }
    next();
  } catch (err) {
    // If refresh fails (revoked, etc), force re-login
    console.error('❌ Token refresh failed:', (err as any)?.message || err);
    res.status(401).json({ message: 'Token refresh failed' });
  }
}



import type { ServerDisplayNameFromEmailResponseInterface } from './serverInterfaces/ServerDisplayNameFromEmailResponseInterface';
import { validateFollowerRequest } from './javascriptValidations/followerRequest';
import { validateFollowerDatabase } from './javascriptValidations/followerDatabase';
import { AsyncValidateFunction, ErrorObject, ValidationError } from 'ajv';
import { validateDnsEntry } from './javascriptValidations/dnsEntry';
console.log("Starting server...");


app.use(
  express.static(path.join(process.cwd(), "dist"), {
    maxAge: "100y",
    immutable: true,
    etag: false
  })
);


// Apply the proxy middleware to all routes except API routes
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (
      req.path.startsWith("/api/")
    ) {
      return next();
    }

    return res.sendFile(path.join(__dirname, "dist", "index.html"));
  },
);


console.log("Creating SSL options...");
const sslOptions = {
  //change to current directory
  key: fs.readFileSync(path.join(process.cwd(), "privkey.pem")),
  cert: fs.readFileSync(path.join(process.cwd(), "cert.pem")),
};

// Create HTTPS server
const server = http.createServer(app);


// Create HTTP server
const httpServer = http.createServer(app);

app.get("/api/doesEmailExist", async (req: express.Request, res: express.Response) => {
  const email = req.query.email as string;
  const exists = await doesEmailExist(email);
  res.status(exists ? 200 : 404).send();
});

app.get("/api/routerStatus", async (req: express.Request, res: express.Response) => {
  let macAddress = req.query.macAddress as string;
  if (macAddress) {
    macAddress = macAddress.toLocaleUpperCase();
    const router = routerMacToEmailMap.get(macAddress);
    if (router) {
      var wses = socketConnections.get(router.email);
      if (wses) {
        for (const ws of wses) {
          if ((ws as any).macAddress == macAddress) {

            const response = await sendAndAwaitResponse(ws, { type: "getRouterStatusRequest" }, (data) => data.type === "routerStatusResponse");
            res.status(200).json(response);
            return;
          }
        }
      }
      res.status(200).json({ status: "router found appears to be offline" });
    }
    res.status(404).json({ status: "no router with mac address " + macAddress + " found" });
  }
});

// Routes
app.get(
  "/api/login-google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    accessType: "offline",
    prompt: "consent"
  }),
);

// Routes
app.get(
  "/api/displayNameFromEmail",
  async (req: express.Request, res: express.Response) => {
    const email = req.query.appEmail as string;
    if (!email) {
      res.status(400).json({
        error: req.t!(resources.Invalid_email.key),
      });
      return;
    }


    const foundApp = await db.selectFrom('awesum.App as a')
      .where(({ eb }) =>
        eb(eb.fn('lower', ['a.email']), '=', email.toLowerCase()))
      .selectAll()
      .executeTakeFirst();


    if (!foundApp) {
      res.status(400).json({
        error: req.t!(resources.Unknown_app.key),
      });
      return;
    }

    res.json({ name: foundApp.name } as ServerDisplayNameFromEmailResponseInterface);
  },
);


app.get('/api/callback-google', (req: Request, res: Response, next: NextFunction) => {
  console.log('🔄 Google OAuth callback received');
  next();
},
  passport.authenticate("google", { failureRedirect: "/error" }),
  (req: express.Request, res: express.Response) => {
    res.redirect("/");
  },
);


app.use(requireAuth);
app.use(ensureFreshAccessToken);



function sendAndAwaitResponse(socket: WebSocket, message: any, matcher: (data: any) => boolean, timeoutMs = 5000) {
  return new Promise((resolve, reject) => {
    const requestId = uuidv7(); // Generate unique request ID
    const messageWithId = { ...message, requestId };

    const timeout = setTimeout(() => {
      socket.removeEventListener('message', onMessage);
      reject(new Error("Timed out waiting for response"));
    }, timeoutMs);

    function onMessage(event: MessageEvent) {
      let data;
      try {
        data = JSON.parse(event.data);
      } catch {
        return; // Ignore malformed messages
      }

      // Check if this response matches our request ID
      if (data.requestId === requestId && matcher(data)) {
        clearTimeout(timeout);
        socket.removeEventListener('message', onMessage);
        resolve(data);
      }
    }

    socket.addEventListener('message', onMessage);
    socket.send(JSON.stringify(messageWithId));
  });
}



app.post("/api/sync", express.json({ limit: '1mb' }), async (req: express.Request, res: express.Response) => {

  if (!(req as any).user) {
    res.status(401).json({
      error: req.t!(resources.Authentication_Is_Required.key),
    });
    return;
  }

  try {
    let syncRequestType = null;
    const userEmail = (req as any).user.emails[0];
    const userProvider = (req as any).user.provider;

    const syncRequestArray = req.body as ServerSyncRequestInterface[];
    const syncResponseArray: ServerSyncResponseInterface[] = [];

    let foundLeaderAppId = await getAppIdFromEmail(userEmail);

    var query = await db.selectFrom('awesum.FollowerRequest as fr')
      .where(({ eb }) =>
        eb('followerAppId', '=', foundLeaderAppId))
      .selectAll()

    var resultArray = await query.execute();
    const followerFollowerRequests: { [key: string]: AwesumFollowerRequest } = {}
    for (const followerFollowerRequest of resultArray) {
      followerFollowerRequests[followerFollowerRequest.id] = followerFollowerRequest;
    }

    var query = await db.selectFrom('awesum.FollowerRequest as fr')
      .where(({ eb }) =>
        eb('leaderAppId', '=', foundLeaderAppId))
      .selectAll()

    var resultArray = await query.execute();
    const leaderFollowerRequests: { [key: string]: AwesumFollowerRequest } = {}
    for (const followerFollowerRequest of resultArray) {
      leaderFollowerRequests[followerFollowerRequest.id] = followerFollowerRequest;
    }

    const requestFollowerRequests = {}

    for (const item of syncRequestArray) {

      if (item.level == ItemLevel.followerRequest) {
        requestFollowerRequests[item.id] = (item.values as AwesumFollowerRequest).lastModified;
      }

      if (item.action == syncAction.receiveChanges) {
        if (item.level == ItemLevel.followerRequest){
          var followerRequest = leaderFollowerRequests[item.id];
          if(!followerRequest){
            syncResponseArray.push({
              id: item.id,
              result: syncResultType.failedValidation,
              message: "Follower request not found"
            });
            continue;
          }
          if(followerRequest.lastModified > (item.values as AwesumFollowerRequest).lastModified 
          && followerRequest.version > (item.values as AwesumFollowerRequest).version){
            syncResponseArray.push({
              id: item.id,
              values: followerRequest,
              level: ItemLevel.followerRequest,
              action: syncAction.modify,
            });
            continue;
          }
        }
      }
      
      if (item.action == syncAction.modify) {

        if (item.level == ItemLevel.followerRequest) {
          var followerRequest = item.values as AwesumFollowerRequest;
          foundFollowerRequest = followerFollowerRequests[item.id];
          if
            ((followerRequest.status == followerRequestStatus.Approved 
            || followerRequest.status == followerRequestStatus.Rejected)
          && (foundFollowerRequest.followerAppId != foundLeaderAppId
        || foundFollowerRequest.followerEmail != userEmail)){
            syncResponseArray.push({
              id: item.id,
              result: syncResultType.failedValidation,
              message: "user is not follower"
            });
            continue;
          }

          foundFollowerRequest.status = followerRequest.status;
          foundFollowerRequest.lastModified = followerRequest.lastModified;
          foundFollowerRequest.version = followerRequest.version;

          var validationErrors = await validateFollowerRequest(foundFollowerRequest);
          if (validationErrors.length > 0) {
            for (const error of validationErrors) {
              syncResponseArray.push({
                id: item.id,
                result: syncResultType.failedValidation,
                message: error.message
              });
            }
          }
          else {            
            foundFollowerRequest.touched = false;
            await db
              .updateTable('awesum.FollowerRequest')
              .set(foundFollowerRequest as AwesumFollowerRequest)
              .where('id', '=', item.id)
              .execute();

            syncResponseArray.push({
              id: item.id,
              level: ItemLevel.followerRequest,
              result: syncResultType.modified,
            });
          }
        }
      }

      if (item.action == syncAction.add) {


        if (item.level == ItemLevel.app
        ) {

          var appEmail = (item.values as AwesumApp).email;
          //already have app with this email
          var appId = await pub.get("appEmailsAndIds:" + appEmail) as string;
          if (appId) {
            syncResponseArray.push({
              id: item.id,
              result: syncResultType.failedValidation,
              message: "App email must be unique: " + appEmail
            });
            continue;
          }

          //app id must be the same as the leader app id
          if (appId && appId != foundLeaderAppId) {
            syncResponseArray.push({
              id: item.id,
              result: syncResultType.failedValidation,
              message: "App id is already in use"
            });
            continue;
          }

          //app id must be the same as the leader app id
          if ((item.values as AwesumApp).email != userEmail) {
            syncResponseArray.push({
              id: item.id,
              result: syncResultType.failedValidation,
              message: "App email must be the same as the user email"
            });
            continue;
          }


          var appId = await pub.get("appIds:" + foundLeaderAppId) as string;

          if (appId) {
            //already have app with this id
            syncResponseArray.push({
              id: item.id,
              result: syncResultType.failedValidation,
              message: "App email must be unique"
            });
            res.status(200).send(syncResponseArray);
            return;

          }

          var defaultApp = getDefault(Value.Default(types.filter((x) => x.$id == "app")[0], {}) as ServerAppInterface);
          defaultApp.authenticationType = userProvider;

          for (const key in item.values as any) {
            defaultApp[key] = (item.values as any)[key];
          }

          var validationErrors = await validateApp(defaultApp);
          if (validationErrors.length > 0) {
            for (const error of validationErrors) {
              syncResponseArray.push({
                id: (item.values as AwesumApp).id,
                result: syncResultType.failedValidation,
                message: error.message
              });
            }
          }
          else {

            defaultApp.id = item.id;
            defaultApp.lastSync = new Date().getTime();
            await db.insertInto('awesum.App')
              .values(defaultApp as AwesumApp)
              .onConflict(oc =>
                oc.column('id').doUpdateSet(defaultApp as AwesumApp)
              )
              .execute();

            await pub.set("appEmailsAndIds:" + defaultApp.email, defaultApp.id);
            await pub.sAdd("appIds", defaultApp.id);

            syncResponseArray.push(
              {
                id: defaultApp.id,
                level: ItemLevel.app,
                action: syncAction.add,
                values: defaultApp
              });

            res.status(200).send(syncResponseArray);
            return;
          }
        }

        if (item.level == ItemLevel.followerRequest) {
          if ((item.values as AwesumFollowerRequest).leaderAppId != foundLeaderAppId) {
            syncResponseArray.push({
              id: item.id,
              result: syncResultType.failedValidation,
              message: "Follower request must be initiated by the leader"
            });
            continue;
          }

          var foundFollowerAppId = await pub.get("appEmailsAndIds:" + (item.values as AwesumFollowerRequest).followerEmail) as string;
          if (!foundFollowerAppId) {
            syncResponseArray.push({
              id: item.id,
              result: syncResultType.failedValidation,
              message: "Follower email not found"
            });
            continue;
          }

          var validationErrors = await validateFollowerRequest(item.values as AwesumFollowerRequest);
          if (validationErrors.length > 0) {
            for (const error of validationErrors) {
              syncResponseArray.push({
                id: item.id,
                result: syncResultType.failedValidation,
                message: error.message
              });
            }
          }
          else {

            item.values.touched = false;

            (item.values as AwesumFollowerRequest).followerAppId = foundFollowerAppId
            await db
              .insertInto('awesum.FollowerRequest')
              .values(item.values as AwesumFollowerRequest)
              .onConflict(oc =>
                oc.column('id').doUpdateSet(item.values as AwesumFollowerRequest)
              )
              .execute();

            syncResponseArray.push({
              id: item.id,
              level: ItemLevel.followerRequest,
              action: syncAction.add,
              values: item.values as AwesumFollowerRequest
            });
          }
        }



        if (item.level == ItemLevel.database) {

          if ((item.values as AwesumDatabase).appId != foundLeaderAppId) {
            syncResponseArray.push({
              id: item.id,
              result: syncResultType.failedValidation,
              message: "Database must be initiated by the leader"
            });
            continue;
          }

          var validationErrors = await validateDatabase(item.values as AwesumDatabase);
          if (validationErrors.length > 0) {
            for (const error of validationErrors) {
              syncResponseArray.push({
                id: item.id,
                result: syncResultType.failedValidation,
                message: error.message
              });
            }
          }
          else {

            await db
              .insertInto('awesum.Database')
              .values(item.values as AwesumDatabase)
              .onConflict(oc =>
                oc.column('id').doUpdateSet(item.values as AwesumDatabase)
              )
              .execute();

            syncResponseArray.push({
              id: item.id,
              level: ItemLevel.database,
              action: syncAction.modify,
              result: item.action == syncAction.add ? syncResultType.added : syncResultType.modified,
              values: {}
            });
          }
        }




        if (item.level == ItemLevel.databaseUnit) {

          if ((item.values as AwesumDatabaseUnit).appId != foundLeaderAppId) {
            syncResponseArray.push({
              id: item.id,
              result: syncResultType.failedValidation,
              message: "Database unit must be initiated by the leader"
            });
            continue;
          }

          var validationErrors = await validateDatabaseUnit(item.values as AwesumDatabaseUnit);
          if (validationErrors.length > 0) {
            for (const error of validationErrors) {
              syncResponseArray.push({
                id: item.id,
                result: syncResultType.failedValidation,
                message: error.message
              });
            }
          }
          else {

            await db
              .insertInto('awesum.DatabaseUnit')
              .values(item.values as AwesumDatabaseUnit)
              .onConflict(oc =>
                oc.column('id').doUpdateSet(item.values as AwesumDatabaseUnit)
              )
              .execute();

            syncResponseArray.push({
              id: item.id,
              level: ItemLevel.databaseUnit,
              action: syncAction.modify,
              result: item.action == syncAction.add ? syncResultType.added : syncResultType.modified,
              values: {}
            });
          }
        }



        if (item.level == ItemLevel.databaseItem) {

          if ((item.values as AwesumDatabaseItem).appId != foundLeaderAppId) {
            syncResponseArray.push({
              id: item.id,
              result: syncResultType.failedValidation,
              message: "Database item must be initiated by the leader"
            });
            continue;
          }

          var validationErrors = await validateDatabaseItem(item.values as AwesumDatabaseItem);
          if (validationErrors.length > 0) {
            for (const error of validationErrors) {
              syncResponseArray.push({
                id: item.id,
                result: syncResultType.failedValidation,
                message: error.message
              });
            }
          }
          else {

            await db
              .insertInto('awesum.DatabaseItem')
              .values(item.values as AwesumDatabaseItem)
              .onConflict(oc =>
                oc.column('id').doUpdateSet(item.values as AwesumDatabaseItem)
              )
              .execute();
          }
        }










        if (item.level == ItemLevel.followerDatabaseCompletion) {

          var foundFollowerRequest = foundFollowerRequests[(item.values as AwesumFollowerDatabaseCompletion).followerRequestId];
          if (!foundFollowerRequest) {
            syncResponseArray.push({
              id: item.id,
              result: syncResultType.failedValidation,
              message: "Follower request not found for follower database completion"
            });
            continue;
          }




          var validationErrors = await validateFollowerDatabaseCompletion(item.values as AwesumFollowerDatabaseCompletion);
          if (validationErrors.length > 0) {
            for (const error of validationErrors) {
              syncResponseArray.push({
                id: item.id,
                result: syncResultType.failedValidation,
                message: error.message
              });
            }
          }
          else {

            await db
              .insertInto('awesum.FollowerDatabaseCompletion')
              .values(item.values as AwesumFollowerDatabaseCompletion)
              .onConflict(oc =>
                oc.column('id').doUpdateSet(item.values as AwesumFollowerDatabaseCompletion)
              )
              .execute();
          }
        }

        if (item.level == ItemLevel.followerDatabase) {

          var foundFollowerRequest = await db.selectFrom('awesum.FollowerRequest as fr')
            .where(({ eb }) => eb('id', '=', (item.values as AwesumFollowerDatabase).followerRequestId)
              .and(eb('leaderAppId', '=', foundLeaderAppId)))
            .selectAll('fr')
            .executeTakeFirst();
          if (!foundFollowerRequest) {
            syncResponseArray.push({
              id: item.id,
              result: syncResultType.failedValidation,
              message: "Follower request not found"
            });
            continue;
          }

          var validationErrors = await validateFollowerDatabase(item.values as AwesumFollowerDatabase);
          if (validationErrors.length > 0) {
            for (const error of validationErrors) {
              syncResponseArray.push({
                id: item.id,
                result: syncResultType.failedValidation,
                message: error.message
              });
            }
          }
          else {

            await db
              .insertInto('awesum.FollowerDatabase')
              .values(item.values as AwesumFollowerDatabase)
              .onConflict(oc =>
                oc.column('id').doUpdateSet(item.values as AwesumFollowerDatabase)
              )
              .execute();
          }
        }


      }
      else if (item.action == syncAction.delete) {
        if (item.level == ItemLevel.app) {
          if (item.id != foundLeaderAppId) {
            syncResponseArray.push({
              id: item.id,
              result: syncResultType.failedValidation,
              message: "App must be the leader app"
            });
            continue;
          }

          await pub.del("appEmailsAndIds:" + userEmail);
          await pub.sRem("appIds", item.id);

          DeleteApp(item.id, syncResponseArray, res);
        }
        if (item.level == ItemLevel.databaseUnit) {
          if ((item.values as AwesumDatabaseUnit).appId != foundLeaderAppId) {
            syncResponseArray.push({
              id: item.id,
              result: syncResultType.failedValidation,
              message: "Database unit must be initiated by the leader"
            });
            continue;
          }
          await db.deleteFrom('awesum.DatabaseUnit').where('id', '=', item.id).execute();
        }
        else if (item.level == ItemLevel.databaseItem) {
          if ((item.values as AwesumDatabaseItem).appId != foundLeaderAppId) {
            syncResponseArray.push({
              id: item.id,
              result: syncResultType.failedValidation,
              message: "Database item must be initiated by the leader"
            });
            continue;
          }
          await db.deleteFrom('awesum.DatabaseItem').where('id', '=', item.id).execute();
        }
      }
      else if (item.action == syncAction.receiveChanges) {
        if (item.level == ItemLevel.database) {
          if (!followerDatabaseIds.has(item.id)) {
            syncResponseArray.push({
              id: item.id,
              result: syncResultType.failedValidation,
              message: "Database must be a follower database"
            });
            continue;
          }
          else {
            for (const followerDatabaseId of followerDatabaseIds) {
              if (followerDatabaseId == item.id) {

              }
            }
          }
        }
      }





      if (item.level == ItemLevel.app
        && item.action == syncAction.delete
        && foundApps[item.id]) {
        await DeleteApp(item.id, syncResponseArray, res);
      }

      if (item.level == ItemLevel.app
        && item.action == syncAction.receiveChanges
        && foundApps[item.id] && item.values) {
        var foundApp = foundApps[item.id];

        if (foundApp.lastModified <= (item.values as AwesumApp).lastModified
          && foundApp.version > (item.values as AwesumApp).version ||
          foundApp.lastModified > (item.values as AwesumApp).lastModified
          && foundApp.version <= (item.values as AwesumApp).version) {
          //off rails
        }

        if (foundApp.lastModified > (item.values as AwesumApp).lastModified
          && foundApp.version > (item.values as AwesumApp).version) {
          syncResponseArray.push({
            id: item.id,
            action: syncAction.modify,
            values: foundApp
          });
        }
      }

      if (item.level == ItemLevel.database && item.action == syncAction.add) {
        if (item.action == syncAction.add && item.values) {
          var defaultDatabase = getDefault(Value.Default(types.filter((x) => x.$id == "database")[0], {}) as ServerDatabaseInterface);
          for (const key in item.values as any) {
            defaultDatabase[key] = (item.values as any)[key];
          }
        }
      }



      // if (item.level == ItemLevel.followerRequest
      //   && item.action == syncAction.add
      //   && item.values
      // ) {

      //   var defaultFollowerRequest = getDefault(Value.Default(types.filter((x) => x.$id == "followerRequest")[0], {}) as ServerFollowerRequestInterface);
      //   for (const key in item.values as any) {
      //     defaultFollowerRequest[key] = (item.values as any)[key];
      //   }
      //   var validationErrors = await validateFollowerRequest(defaultFollowerRequest as ServerFollowerRequestInterface);
      //   if (validationErrors.length > 0) {
      //     for (const error of validationErrors) {
      //       syncResponseArray.push({
      //         id: defaultFollowerRequest.id,
      //         result: syncResultType.failedValidation,
      //         message: error.message
      //       });
      //     }
      //   }
      //   else {
      //     var followerEmail = defaultFollowerRequest.followerEmail;
      //     var followerAppId = await getAppIdFromEmail(followerEmail);
      //     if (!followerAppId) {
      //       syncResponseArray.push({
      //         id: defaultFollowerRequest.id,
      //         result: syncResultType.failedValidation,
      //         message: "Follower email not found"
      //       });
      //       continue;
      //     }
      //     defaultFollowerRequest.id = item.id;
      //     defaultFollowerRequest.followerAppId = followerAppId

      //     await db.insertInto('awesum.FollowerRequest').values(defaultFollowerRequest as AwesumFollowerRequest).execute();

      //     syncResponseArray.push({
      //       id: defaultFollowerRequest.id,
      //       level: ItemLevel.followerRequest,
      //       result: syncResultType.added,
      //       action: syncAction.add,
      //       values: defaultFollowerRequest
      //     });


      //     await pub.publish("ws-broadcast", JSON.stringify({
      //       email: defaultFollowerRequest.followerEmail,
      //       payload: syncRequestArray
      //     }));



      //   }
      //}


      // if (item.level == ItemLevel.followerRequest
      //   && item.action == syncAction.modify
      //   && foundFollowerRequests[item.id]
      //   && item.values
      // ) {
      //   const followerRequest = foundFollowerRequests[item.id];

      //   for (const key in item.values as any) {
      //     followerRequest[key] = (item.values as any)[key];
      //   }

      //   await db.updateTable('awesum.FollowerRequest').set(followerRequest as AwesumFollowerRequest).where('id', '=', followerRequest.id).execute();

      //   const wses = socketConnections.get(item.values['status'] == followerRequestStatus.Approved ? followerRequest.leaderEmail : followerRequest.followerEmail);
      //   if (wses) {
      //     for (const ws of wses) {
      //       if (!(ws as any).macAddress) {
      //         ws.send(JSON.stringify(syncRequestArray));
      //       }
      //     }
      //   }
      // }

      if (item.level == ItemLevel.followerDatabase && item.action == syncAction.add && item.values) {
        var defaultFollowerDatabase = getDefault(Value.Default(types.filter((x) => x.$id == "followerDatabase")[0], {}) as ServerFollowerDatabaseInterface);
        for (const key in item.values as any) {
          defaultFollowerDatabase[key] = (item.values as any)[key];
        }
        var validationErrors = await validateFollowerDatabase(defaultFollowerDatabase as ServerFollowerDatabaseInterface);
        if (validationErrors.length > 0) {
          for (const error of validationErrors) {
            syncResponseArray.push({
              id: item.id,
              result: syncResultType.failedValidation,
              message: error.message
            });
          }
        }

        var foundFollowerRequest = foundFollowerRequests[defaultFollowerDatabase.followerRequestId];
        if (!foundFollowerRequest) {
          syncResponseArray.push({
            id: defaultFollowerDatabase.id,
            result: syncResultType.failedValidation,
            message: "Follower request not found"
          });
          continue;
        }
        if (foundFollowerRequest.status != followerRequestStatus.Approved) {
          syncResponseArray.push({
            id: defaultFollowerDatabase.id,
            result: syncResultType.failedValidation,
            message: "Follower request not approved"
          });
          continue;
        }
        if (foundFollowerRequest.leaderAppId != foundLeaderAppId) {
          syncResponseArray.push({
            id: defaultFollowerDatabase.id,
            result: syncResultType.failedValidation,
            message: "Follower database must be initiated by the leader"
          });
          continue;
        }

        await db.insertInto('awesum.FollowerDatabase').values(defaultFollowerDatabase as AwesumFollowerDatabase).execute();
        syncResponseArray.push({
          id: defaultFollowerDatabase.id,
          result: syncResultType.added,
          action: syncAction.add,
          values: defaultFollowerDatabase
        });
      }






      //   // Process App
      //   if (item.app) {
      //     const app = foundApps[item.app.id];

      //     if (!app &&
      //       //don't think this is needed
      //       item.app.email == userEmail) {

      //       var validationErrors = await validateApp(item.app);
      //       if (validationErrors.length > 0) {
      //         for (const error of validationErrors) {
      //           syncResponseArray.push({
      //             id: item.app.id,
      //             result: syncResultType.failedValidation,
      //             message: error.message
      //           });
      //         }
      //       }
      //       else {
      //         item.app.lastSync = new Date().getTime();
      //         await db.insertInto('awesum.App').values(item.app as AwesumApp).execute();
      //         syncResponseArray.push(
      //           {
      //             app: item.app,
      //             result: syncResultType.added,
      //             action: syncAction.add,
      //           });
      //       }
      //     }
      //     else if (!app) {
      //       //do nothing here, up to client to delete app
      //     }
      //     if (app && (app.lastModified < item.app.lastModified ||
      //       app.version < item.app.version)) {
      //       item.app.lastSync = new Date().getTime();
      //       await db.updateTable('awesum.App').set(item.app as AwesumApp).where('id', '=', app.id).execute();
      //       syncResponseArray.push(
      //         {
      //           id: item.app.id,
      //           level: ItemLevel.app,
      //           action: syncAction.modify,
      //           values:
      //             {
      //               lastSync: new Date().getTime()
      //             } as Partial<AwesumApp>

      //         });
      //     }
      //   }

      //   // Process Database
      //   if (item.database) {
      //     const database = foundDatabases ? foundDatabases[item.database.id] : null;

      //     if (
      //       !database ||
      //       database.lastModified < item.database.lastModified ||
      //       database.version < item.database.version
      //     ) {
      //       if (!database && item.database.appId == foundLeaderAppId) {
      //         await db.insertInto('awesum.Database').values(item.database as AwesumDatabase).execute();
      //       }
      //       else if (!database) {
      //         databaseIdsToDelete.add(item.database.id);

      //         syncResponseArray.push({
      //           id: item.database.id,
      //         });
      //       }
      //       else {
      //         Object.assign(database, item.database);
      //         await db.updateTable('awesum.Database').set(database as AwesumDatabase).where('id', '=', database.id).execute();
      //       }
      //     }
      //   }



      //   // Process DatabaseUnit
      //   if (item.databaseUnit) {
      //     let databaseUnit = foundDatabaseUnit[item.databaseUnit.id] as ServerDatabaseUnitInterface;

      //     if (
      //       !databaseUnit ||
      //       (databaseUnit &&
      //         (databaseUnit.lastModified < item.databaseUnit.lastModified ||
      //           databaseUnit.version < item.databaseUnit.version))
      //     ) {
      //       if (!databaseUnit && !databaseIdsToDelete.has(item.databaseUnit.databaseId)) {
      //         await db.insertInto('awesum.DatabaseUnit').values(item.databaseUnit as AwesumDatabaseUnit).execute();
      //       } else if (!databaseUnit) {
      //         syncResponseArray.push({
      //           action: syncAction.delete,
      //           id: item.databaseUnit.id,
      //         });
      //       }
      //       else {
      //         Object.assign(databaseUnit, item.databaseUnit);
      //         await db.updateTable('awesum.DatabaseUnit').set(databaseUnit as AwesumDatabaseUnit).where('id', '=', databaseUnit.id).execute();
      //       }
      //     }
      //   }

      //   // Process DatabaseItem
      //   if (item.databaseItem) {
      //     const databaseItem = foundDatabaseItem[item.databaseItem.id];

      //     if (
      //       !databaseItem ||
      //       (databaseItem &&
      //         (databaseItem.lastModified < item.databaseItem.lastModified ||
      //           databaseItem.version < item.databaseItem.version))
      //     ) {
      //       if (!databaseItem && !databaseIdsToDelete.has(item.databaseItem.databaseId)) {
      //         await db.insertInto('awesum.DatabaseItem').values(item.databaseItem as AwesumDatabaseItem).execute();
      //       } else if (!databaseItem) {
      //         syncResponseArray.push({

      //           level: ItemLevel.databaseItem,
      //           action: syncAction.delete,
      //           id: item.databaseItem.id,

      //         });
      //       }
      //       else {
      //         Object.assign(databaseItem, item.databaseItem);
      //         await db.updateTable('awesum.DatabaseItem').set(databaseItem as AwesumDatabaseItem).where('id', '=', databaseItem.id).execute();
      //       }
      //     }
      //   }

      //   // Process Router
      //   if (item.router) {
      //     const router = foundRouters[item.router.id];
      //     if (
      //       !router ||
      //       (router &&
      //         (router.lastModified < item.router.lastModified ||
      //           router.version < item.router.version))
      //     ) {
      //       if (!router) {
      //         await db.insertInto('awesum.Router').values(item.router as AwesumRouter).execute();
      //         if (!routerMacToEmailMap.has(item.router.routerMac)) {
      //           routerMacToEmailMap.set(item.router.routerMac, userEmail);
      //         }
      //       } else {
      //         Object.assign(router, item.router);
      //         await db.updateTable('awesum.Router').set(router as AwesumRouter).where('id', '=', router.id).execute();
      //       }
      //     }
      //   }

      //   if (item.followerRequest) {
      //     const followerRequest = foundFollowerRequests[item.followerRequest.id];
      //     if (!followerRequest) {
      //       var validationErrors = await validateFollowerRequest(item.followerRequest);
      //       if (validationErrors.length > 0) {
      //         for (const error of validationErrors) {
      //           syncResponseArray.push({
      //             id: item.followerRequest.id,
      //             result: syncResultType.failedValidation,
      //             message: error.message
      //           });
      //         }
      //       }
      //       else {
      //         var followerAppId = await getAppIdFromEmail(item.followerRequest.followerEmail);
      //         if (!followerAppId) {
      //           syncResponseArray.push({
      //             id: item.followerRequest.id,
      //             result: syncResultType.failedValidation,
      //             message: "Follower email not found"
      //           });
      //           continue;
      //         }
      //         item.followerRequest.followerAppId = followerAppId;
      //         await db.insertInto('awesum.FollowerRequest').values(item.followerRequest as AwesumFollowerRequest).execute();

      //         const wses = socketConnections.get(item.followerRequest.followerEmail);
      //         if (wses) {
      //           for (const ws of wses) {
      //             if (!(ws as any).macAddress) {
      //               ws.send(JSON.stringify([{
      //                 followerRequest: item.followerRequest,
      //                 action: syncRequestArray.length == 1 ? syncAction.addAndRedirectToLeader : syncAction.add,
      //               } as ServerSyncResponseInterface
      //               ]));
      //             }
      //           }
      //         }

      //       }
      //     }
      //     else if (!followerRequest) {
      //       //no idea what to do here
      //     }
      //     if (followerRequest && (followerRequest.lastModified < item.followerRequest.lastModified ||
      //       followerRequest.version < item.followerRequest.version)) {

      //       await db.updateTable('awesum.FollowerRequest').set(item.followerRequest as AwesumFollowerRequest).where('id', '=', followerRequest.id).execute();


      //     }
      //   }

      //   // Process FollowerDatabaseCompletion
      //   if (item.followerDatabaseCompletion) {
      //     console.log("Processing FollowerDatabaseCompletion");
      //     await db.insertInto('awesum.FollowerDatabaseCompletion').values(item.followerDatabaseCompletion as AwesumFollowerDatabaseCompletion).execute();

      //     console.log(foundDatabaseUnit)
      //     console.log(item.followerDatabaseCompletion.itemId)
      //     var foundUnit = foundDatabaseUnit[item.followerDatabaseCompletion.itemId];
      //     if (foundUnit && foundUnit.router) {
      //       console.log("Found Unit");
      //       var router = foundRouters[foundUnit.router];
      //       console.log(foundRouters);
      //       console.log(foundUnit.router);
      //       console.log(router);
      //       if (router) {
      //         console.log("Router found");
      //         var email = await getEmailFromAppId(router.appId);
      //         if (email) {
      //           console.log("Email found");
      //           console.log(email);
      //           console.log(socketConnections);
      //           var wses1 = socketConnections.get(email);
      //           if (wses1) {
      //             for (const ws of wses1) {
      //               console.log((ws as any).macAddress)
      //               console.log(router.routerMac)
      //               if ((ws as any).macAddress == router.routerMac.toLocaleUpperCase()) {
      //                 console.log("Sending updateRouterStatusRequest");
      //                 ws.send(JSON.stringify({
      //                   type: "updateRouterStatusRequest",
      //                   status: "enabled",
      //                   remainingTime: foundUnit.routerTimeImmediate ? 0 : foundUnit.routerTime,
      //                   remainingImmediateTime: foundUnit.routerTimeImmediate ? foundUnit.routerTime : 0,
      //                   startTime: 0,
      //                   duration: 0
      //                 } as ServerUpdateRouterStatusRequestInterface));
      //               }
      //             }
      //           }
      //         }
      //       }
      //     }

      //     var leaderEmail = foundFollowerRequests[item.followerDatabaseCompletion.followerRequestId].leaderEmail;
      //     const wses = socketConnections.get(leaderEmail);
      //     if (wses) {
      //       for (const ws of wses) {
      //         if (!(ws as any).macAddress) {
      //           ws.send(JSON.stringify({ type: syncRequestType, data: item.followerDatabaseCompletion }));
      //         }
      //       }
      //     }

      //   }

      //   /* // Process FollowerDatabase
      //   //I can't think if a time where this is needed
      //   if (item.followerDatabase) {

      //   } */
    }

    for (const followerRequestId in followerFollowerRequests) {
      var leader = followerFollowerRequests[followerRequestId];
      var foundFollowerRequest = requestFollowerRequests[followerRequestId];
      if (!foundFollowerRequest) {
        syncResponseArray.push({
          id: followerRequestId,
          level: ItemLevel.followerRequest,
          action: syncAction.add,
          values: leader
        });

      }
      if (foundFollowerRequest && foundFollowerRequest.lastModified < leader.lastModified) {
        syncResponseArray.push({
          id: leader.id,
          action: syncAction.modify,
          values: leader
        });
      }
    }

    res.status(200).json(syncResponseArray);
    return;
  } catch (error) {
    console.error("Sync error:", error);
    res.status(500).json({
      message: "An error occurred during synchronization",
    });
    return;
  }
});



app.get("/api/profile", (req: express.Request, res: express.Response) => {
  if (!(req as any).user) {
    res.json({
      provider: null,
      sessionId: null,
      email: null,
    });
    return;
  }
  var user = (req as any).user;

  res.json({
    provider: user.provider,
    sessionId: (req as any).session.sessionId,
    email: user.emails[0],
  });
});

app.get(
  "/api/uniquename",
  async (req: express.Request, res: express.Response) => {
    if (!(req as any).user) {
      res.status(401).json({
        error: req.t!(resources.Authentication_Is_Required.key),
      });
    }
    var uniquename = req.query.uniqueName as string;
    var isUnique = await isNameGloballyUnique((req as any).user.emails[0], uniquename);
    if (isUnique) {
      res.json(true);
    } else {
      res.status(400).json({
        error: req.t!(resources.Unique_name_already_exists.key),
      });
    }
  },
);



app.get(
  "/api/appChecksum",
  async (req: express.Request, res: express.Response) => {
    if (!(req as any).user) {
      res.status(401).json({
        error: req.t!(resources.Authentication_Is_Required.key),
      });
      return;
    }

    var email = (req as any).user.emails[0];
    var appId = await getAppIdFromEmail(email);
    if (!appId) {
      res.status(400).json({
        error: "unknown user"
      });
      return;
    }
    // get followerRequests and joined followerDatabases where followerAppId is appId
    var followerRequests = await db.selectFrom('awesum.FollowerRequest as fr')
      .where(({ eb }) =>
        eb('followerAppId', '=', appId))

      .select((eb) => [

        'fr.id',
        'fr.version',
        'fr.lastModified',

      ])
      .execute();

    // Collect list of id, version, lastModified for both FollowerRequest and FollowerDatabase
    const result: { type: string, id: string, version: number, lastModified: number }[] = [];

    for (const followerRequest of followerRequests) {
      result.push({
        type: "FollowerRequest",
        id: followerRequest.id,
        version: followerRequest.version,
        lastModified: followerRequest.lastModified
      });

    }

    // get followerRequests and joined followerDatabases where followerAppId is appId
    var followerDatabases = await db.selectFrom('awesum.FollowerRequest as fr')
      .innerJoin('awesum.FollowerDatabase as fd', 'fd.followerRequestId', 'fr.id')
      .where(({ eb }) =>
        eb('followerAppId', '=', appId))
      .select((eb) => [
        'fd.id as fd_id',
        'fd.version as fd_version',
        'fd.lastModified as fd_lastModified',
      ])
      .execute();

    for (const followerDatabase of followerDatabases) {
      result.push({
        type: "FollowerDatabase",
        id: followerDatabase.fd_id,
        version: followerDatabase.fd_version,
        lastModified: followerDatabase.fd_lastModified
      });
    }

    var apps = await db.selectFrom('awesum.App as a')
      .innerJoin('awesum.FollowerRequest as fr', 'fr.leaderAppId', 'a.id')
      .where(({ eb }) =>
        eb('followerAppId', '=', appId))
      .select((eb) => [
        'a.id',
        'a.version',
        'a.lastModified',
      ])
      .execute();

    for (const app of apps) {
      result.push({
        type: "App",
        id: app.id,
        version: app.version,
        lastModified: app.lastModified
      });
    }



    var apps = await db.selectFrom('awesum.App as a')
      .innerJoin('awesum.FollowerRequest as fr', 'fr.followerAppId', 'a.id')
      .where(({ eb }) =>
        eb('leaderAppId', '=', appId))
      .select((eb) => [
        'a.id',
        'a.version',
        'a.lastModified',
      ])
      .execute();

    for (const app of apps) {
      result.push({
        type: "App",
        id: app.id,
        version: app.version,
        lastModified: app.lastModified
      });
    }

    res.json(result);

  },
);

app.get(
  "/api/databaseCompletionsChecksum",
  async (req: express.Request, res: express.Response) => {
    if (!(req as any).user) {
      res.status(401).json({
        error: req.t!(resources.Authentication_Is_Required.key),
      });
      return;
    }

    var mostRecentLastModified = req.query.mostRecentLastModified as string;

    var email = (req as any).user.emails[0];
    var appId = await getAppIdFromEmail(email);

    if (!appId) {
      res.status(400).json({
        error: "unknown user"
      });
      return;
    }

    var foundFollowerDatabaseCompletions = await db.selectFrom('awesum.FollowerDatabaseCompletion as fdc')
      .innerJoin('awesum.FollowerRequest as fr', 'fr.id', 'fdc.followerRequestId')
      .where(({ eb }) =>
        eb.and([eb('fr.leaderAppId', '=', appId).or('fr.followerAppId', '=', appId),
        eb('fdc.lastModified', '>=', parseInt(mostRecentLastModified))])
      )
      .selectAll('fdc')
      .execute();

    const result = [] as ServerSyncResponseInterface[];

    for (const followerDatabaseCompletion of foundFollowerDatabaseCompletions) {
      result.push(
        {
          id: followerDatabaseCompletion.id,
          values: followerDatabaseCompletion,
          action: syncAction.add,
          level: ItemLevel.followerDatabaseCompletion
        }
      );
    }

    res.json(result);
  },
);



// Logout route
app.get("/api/logout", (req: express.Request, res: express.Response) => {
  const wses = socketConnections.get((req.session as any).passport.user.emails[0]);
  if (wses) {
    for (const ws of wses) {
      if ((ws as any).sessionId == (req as any).session.sessionId) {
        ws.close();
      }
    }
  }
  console.log('Destroying session');
  (req as any).session = null;
  res.send({ result: 'OK', message: 'Session destroyed' });
});


//create a new websocket server
const wss = new WebSocketServer({ noServer: true });

// catch the upgrade event for only /ws
server.on("upgrade", (req, socket, head) => {
  if (req.url !== "/ws") {
    socket.destroy();
    return;
  }

  wss.handleUpgrade(req, socket, head, (ws) => {
    wss.emit("connection", ws, req);
  });


});

//handle incoming connections
wss.on("connection", async (ws: WebSocket, req: express.Request) => {
  sessionParser(req as Request, {} as any, async () => {



    var wsEmail = (req as any).session.passport.user.emails[0];

    try {
      //get ip address
      const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

      //get cookie with the name session
      const sessionCookie = req.headers["cookie"]?.split("; ").find(cookie => cookie.startsWith("mac="));
      if (sessionCookie) {

        const userBase64Encoded = sessionCookie.split("=")[1];
        let userBase64Decoded = Buffer.from(userBase64Encoded, 'base64').toString('utf8');
        //if userBase64Decoded is a mac address, then decode it
        if (userBase64Decoded.length === 17) {
          console.log(userBase64Decoded);
          userBase64Decoded = userBase64Decoded.toLocaleUpperCase();
          const email = routerMacToEmailMap.get(userBase64Decoded);
          (ws as any).email = email;
          if (email) {
            console.log(email);
            if (email.ipAddress === "0.0.0.0" || email.ipAddress === ip) {
              if (!socketConnections.has(email.email)) {
                socketConnections.set(email.email, []);
              }
              //close and splice any existing connections for this email and mac address
              const wses = socketConnections.get(email.email);
              if (wses) {
                for (const ws1 of wses) {
                  if ((ws1 as any).macAddress == userBase64Decoded) {
                    console.log("Closing connection for email: " + email.email + " and mac address: " + userBase64Decoded);
                    ws1.close();
                    wses.splice(wses.indexOf(ws1), 1);
                  }
                }
              }

              socketConnections.get(email.email)!.push(ws);
              (ws as any).macAddress = userBase64Decoded;

              // let router = await models.ROUTER.findOne({
              //   where: Sequelize.where(Sequelize.fn('upper', Sequelize.col('routerMac')), userBase64Decoded),
              // });
              const router = await db.selectFrom('awesum.Router as r')
                .where(({ eb }) =>
                  eb.fn('upper', ['r.routerMac']), '=', userBase64Decoded)
                .selectAll()
                .executeTakeFirst();
              if (router) {
                //wait 5 seconds
                await new Promise(resolve => setTimeout(resolve, 5000));
                console.log("Sending updateRouterTimesAndDurationsRequest");
                ws.send(JSON.stringify({
                  type: "updateRouterTimesAndDurationsRequest",
                  routerId: router.id,
                  mondayTimesAndDurations: router.mondayTimesAndDurations,
                  tuesdayTimesAndDurations: router.tuesdayTimesAndDurations,
                  wednesdayTimesAndDurations: router.wednesdayTimesAndDurations,
                  thursdayTimesAndDurations: router.thursdayTimesAndDurations,
                  fridayTimesAndDurations: router.fridayTimesAndDurations,
                  saturdayTimesAndDurations: router.saturdayTimesAndDurations,
                  sundayTimesAndDurations: router.sundayTimesAndDurations,
                } as ServerUpdateRouterTimesAndDurationsRequestInterface
                ));
              }
            }
          }
          else {
            ws.close();
            return;
          }
        }
      }
      else {
        (ws as any).email = wsEmail;
        if (!socketConnections.has(wsEmail)) {
          socketConnections.set(wsEmail, []);
        }
        socketConnections.get(wsEmail)!.push(ws);
      }

      ws.onerror = console.error;

      //handle incoming messages
      ws.onmessage = async (message: any) => {
        try {
          const data = JSON.parse(message.data);
          if (data.type === "clientConnected") {
            (ws as any).sessionId = data.sessionId;
          }
          else if (data.type == "createDnsEntriesRequest") {
            var requests = data.addDnsEntriesRequest as Array<ServerDnsEntryInterface>
            for (let r of requests) {
              r.id = uuidv7();
              var errors = validateDnsEntry(r) as unknown as Array<ErrorObject>;
              if (errors.length > 0) {
                return;
              }
            }
            await db.insertInto('awesum.DnsEntry').values(requests as AwesumDnsEntry[]).execute();
          }
          else if (data.type === "updateTimesAndDurationsResponse") {

          }
        } catch (error) {
          console.error("Error processing message:", error);
        }
      };

      ws.onclose = function () {
        //need a way to get the email from the ws
        const userEmail = (ws as any).email;
        if (userEmail) {
          const wses = socketConnections.get(userEmail);
          if (wses) {
            wses.splice(wses.indexOf(ws), 1);
            if (wses.length == 0) {
              socketConnections.delete(userEmail);
            }
          }
        }
      };
    } catch (error) {
      console.error("Error handling WebSocket connection:", error);
    }
  });
});

async function DeleteApp(foundLeaderAppId: string, syncResponseArray: ServerSyncResponseInterface[], res: express.Response<any, Record<string, any>>) {
  const followerRequests = await db.selectFrom('awesum.FollowerRequest as fr')
    .where(({ eb, or }) => eb('followerAppId', '=', foundLeaderAppId).or('leaderAppId', '=', foundLeaderAppId))
    .selectAll()
    .execute();

  for (const followerRequest of followerRequests) {
    //get all followerDatabases where followerRequestId is the followerRequest.id
    // const followerDatabases = await models.FOLLOWER_DATABASE.findAll({
    //   where: {
    //     followerRequestId: followerRequest.id,
    //   },
    // });
    const followerDatabases = await db.selectFrom('awesum.FollowerDatabase as fd')
      .where(({ eb }) => eb('followerRequestId', '=', followerRequest.id))
      .selectAll()
      .execute();

    for (const followerDatabase of followerDatabases) {
      await db.deleteFrom('awesum.FollowerDatabase').where('id', '=', followerDatabase.id).execute();
    }

    // const followerDatabaseCompletions = await models.FOLLOWER_DATABASE_COMPLETION.findAll({
    //   where: {
    //     followerRequestId: followerRequest.id,
    //   },
    // });
    const followerDatabaseCompletions = await db.selectFrom('awesum.FollowerDatabaseCompletion as fdc')
      .where(({ eb }) => eb('followerRequestId', '=', followerRequest.id))
      .selectAll()
      .execute();

    for (const followerDatabaseCompletion of followerDatabaseCompletions) {
      await db.deleteFrom('awesum.FollowerDatabaseCompletion').where('id', '=', followerDatabaseCompletion.id).execute();
    }

    await db.deleteFrom('awesum.FollowerRequest').where('id', '=', followerRequest.id).execute();
  }

  // models.DATABASE.destroy({
  //   where: {
  //     appId: foundLeaderAppId,
  //   },
  // });
  await db.deleteFrom('awesum.Database').where('appId', '=', foundLeaderAppId).execute();

  // const routers = await models.ROUTER.findAll({
  //   where: {
  //     appId: foundLeaderAppId,
  //   },
  // });
  const routers = await db.selectFrom('awesum.Router as r')
    .where(({ eb }) => eb('appId', '=', foundLeaderAppId))
    .selectAll()
    .execute();

  for (const router of routers) {
    // const dnsEntries = await models.DNS_ENTRY.findAll({
    //   where: {
    //     routerId: router.id,
    //   },
    // });
    const dnsEntries = await db.selectFrom('awesum.DnsEntry as de')
      .where(({ eb }) => eb('routerId', '=', router.id))
      .selectAll()
      .execute();

    for (const dnsEntry of dnsEntries) {
      await db.deleteFrom('awesum.DnsEntry').where('id', '=', dnsEntry.id).execute();
    }

    routerMacToEmailMap.delete(router.routerMac);
    await db.deleteFrom('awesum.Router').where('id', '=', router.id).execute();
  }

  // models.DATABASE_UNIT.destroy({
  //   where: {
  //     appId: foundLeaderAppId,
  //   },
  // });
  await db.deleteFrom('awesum.DatabaseUnit').where('appId', '=', foundLeaderAppId).execute();

  // models.DATABASE_ITEM.destroy({
  //   where: {
  //     appId: foundLeaderAppId,
  //   },
  // });
  await db.deleteFrom('awesum.DatabaseItem').where('appId', '=', foundLeaderAppId).execute();

  // models.MEDIA.destroy({
  //   where: {
  //     appId: foundLeaderAppId,
  //   },
  // });
  await db.deleteFrom('awesum.Media').where('appId', '=', foundLeaderAppId).execute();

  // models.APP.destroy({
  //   where: {
  //     id: foundLeaderAppId,
  //   },
  // });
  await db.deleteFrom('awesum.App').where('id', '=', foundLeaderAppId).execute();

  syncResponseArray.push({ id: foundLeaderAppId, result: syncResultType.deleted });
}



console.log(process.env.PORT);

// Start the server
server.listen(process.env.PORT!, () => {
  console.log(`SSL server running on port 8443`);
  console.log(`Plain WebSocket server running on port 8080 for troubleshooting`);
  console.log(`You can test WebSocket connections using:`);
  console.log(`  - Secure: wss://awesum.app:8443`);
  console.log(`  - Plain: ws://awesum.app:8080`);
});
