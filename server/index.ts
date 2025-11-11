
//@bun


import { Kysely, PostgresDialect,HandleEmptyInListsPlugin,type HandleEmptyInListsOptions,pushValueIntoList } from 'kysely';
import { type AwesumApp, type AwesumFollowerRequest,type AwesumFollowerDatabase, type DB, type AwesumFollowerDatabaseCompletion, type AwesumDatabaseUnit, type AwesumDatabaseItem, type AwesumRouter, type AwesumDatabase, type AwesumDnsEntry } from './db/db';
import { Pool } from 'pg';

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
import  express from "express";
import cookieSession from "cookie-session";
import  passport from "passport";
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
import { followerRequestStatus, ItemLevel, ServerMessageType } from "./typebox";
import type { ServerUpdateRouterTimesAndDurationsRequestInterface } from "./serverInterfaces/ServerUpdateRouterTimesAndDurationsRequestInterface";
import type { ServerUpdateRouterStatusRequestInterface } from "./serverInterfaces/ServerUpdateRouterStatusRequestInterface";

//add websocket server using websocket.js
import ws from "ws";
const WebSocketServer = ws.Server
import { isNameGloballyUnique } from "./serverAndClientFunctions";
import type { Database, DatabaseItem, DatabaseUnit, ServerSyncRequestInterface } from "./serverInterfaces/ServerSyncRequestInterface";
import { getEmailFromAppId, getAppIdFromEmail, doesEmailExist } from "./serverFunctions";
import type { ServerDatabaseInterface } from "./serverInterfaces/ServerDatabaseInterface";

import type { ServerSyncResponseInterface } from "./serverInterfaces/ServerSyncResponseInterface";
import type { ServerPushAppResponseInterface } from "./serverInterfaces/ServerPushAppResponseInterface";
import { validateAddFollowerRequest } from "./javascriptValidations/addFollowerRequest";
import type { ServerDnsEntryInterface } from "./serverInterfaces/ServerDnsEntryInterface";



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

const socketConnections = new Map<string, WebSocket[]>();

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


app.use(cookieSession({
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
}));



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
import type { ErrorObject } from 'ajv';
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
      eb(eb.fn('lower', ['a.email']),'=',email.toLowerCase()))
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

    const syncRequestArray = req.body as ServerSyncRequestInterface[];
    const syncResponseArray: ServerSyncResponseInterface[] = [];

    let foundFollowerRequests: { [key: string]:AwesumFollowerRequest } = {};

    let foundLeaderAppId = await getAppIdFromEmail(userEmail);
    if (!foundLeaderAppId) {

      var clientApps = syncRequestArray.filter(item => item.app 
        && item.app.email == userEmail);
      var clientApp = clientApps.length > 0 ? clientApps[0].app : null;
      if (clientApp) {

        var validationErrors = await validateApp(clientApp);
        if (validationErrors.length > 0) {
          syncResponseArray.push({ message: { id: clientApp.id, level: ItemLevel.app, message: "App not found" }})
          res.status(500).json(syncResponseArray);
          return;
        }
        else {
          //await models.APP.create(clientApp);
          await db.insertInto('awesum.App').values(clientApp as AwesumApp).execute();
          foundLeaderAppId = clientApp.id;
        }
      }
      else {
        res.status(200).json(syncResponseArray);
        return;
      }
    }


    // Helper functions
    const populateFoundFollowers = async () => {
      // const followers = await models.FOLLOWER_REQUEST.findAll({
      //   where: {
      //     [Op.or]: [
      //       { leaderAppId: foundLeaderAppId },
      //       { followerAppId: foundLeaderAppId },
      //     ],
      //   }
      // });
    const followersQuery = await db.selectFrom('awesum.FollowerRequest as fr')
      .where(({ eb }) => 
        eb('leaderAppId','=',foundLeaderAppId).or
        ('followerAppId','=',foundLeaderAppId))
      .selectAll()

      function interpolateQuery(query: any): string {
        let sql = query.sql
        query.parameters.forEach((param: any, index: number) => {
          const paramStr = typeof param === 'string' ? `'${param}'` : String(param)
          const placeholder = `$${index + 1}`
          sql = sql.replace(placeholder, paramStr)
        })
        return sql
      }

      const compiled = followersQuery.compile()
const sqlWithParams = interpolateQuery(compiled)

console.log(sqlWithParams) // Logs SQL with embedded parameters

      const followers = await followersQuery.execute();

console.log("1")

      foundFollowerRequests = {};
      followers.forEach((follower) => {
        foundFollowerRequests[follower.id] = follower;
      });
    };

    // Process server items to send to client
    await populateFoundFollowers();

    if (syncRequestArray.length == 1 && syncRequestArray[0].followerRequest) {

      let followerRequest = syncRequestArray[0].followerRequest;
      if (followerRequest.leaderAppId != foundLeaderAppId) {
        res.status(400).json({
          error: req.t!(resources.Unknown_leader_app.key),
        });
        return;
      }

      var validationErrors = await validateFollowerRequest(followerRequest);
      if (validationErrors.length == 0) {
        // var foundFollower = await models.APP.findOne({ where: 
        //   { email: followerRequest.followerEmail } });
        const foundFollower = await db.selectFrom('awesum.App as a')
        .where(({ eb }) => 
          eb('email','=',followerRequest.followerEmail))
        .selectAll()
        .executeTakeFirst();

        if (foundFollower) {
          followerRequest.followerAppId = foundFollower.id;
          followerRequest.followerName = foundFollower.name;
          //await models.FOLLOWER_REQUEST.create(followerRequest);
          await db.insertInto('awesum.FollowerRequest').values(followerRequest as AwesumFollowerRequest).execute();
          syncResponseArray.push({ followerRequest: followerRequest })
          console.log("Sending message to follower:", followerRequest.followerEmail);
          const wses = socketConnections.get(followerRequest.followerEmail);
          if (wses) {
            for (const ws of wses) {
              if (!(ws as any).macAddress) {
                ws.send(JSON.stringify({ type: ServerMessageType.addFollowerRequest, data: followerRequest }));
              }
            }
          }
        }
        else {
          syncResponseArray.push({ message: { id: followerRequest.id, level: ItemLevel.followerRequest, message: "App not found" }})
        }
      }
      else {
        for (const element of validationErrors) {
          syncResponseArray.push({ message: { id: followerRequest.id, level: ItemLevel.followerRequest, message: element.message! }})
        }
      }
    }
    if (syncRequestArray.length == 1 && syncRequestArray[0].followerDatabase) {
      var followerDatabase = syncRequestArray[0].followerDatabase;
      var followerRequest = foundFollowerRequests[followerDatabase.followerRequestId];
      if (followerRequest.leaderAppId != foundLeaderAppId) {
        syncResponseArray.push({ message: { id: followerDatabase.id, level: ItemLevel.followerDatabase, message: "Follower request rejected" }})
        res.status(200).json(syncResponseArray);
        return;
      }
      if (followerRequest.followerAppId != foundLeaderAppId) {
        //await models.FOLLOWER_DATABASE.create(followerDatabase);
        await db.insertInto('awesum.FollowerDatabase').values(followerDatabase as AwesumFollowerDatabase).execute();
        var followerEmail = foundFollowerRequests[followerDatabase.followerRequestId].followerEmail;
        const wses = socketConnections.get(followerEmail);
        if (wses) {
          for (const ws of wses) {
            if (!(ws as any).macAddress) {
              ws.send(JSON.stringify({ type: "Assignment Added", data: followerDatabase }));
            }
          }
        }
        res.status(200).json(syncResponseArray);
        return;
      }
    }


    const requestItems: { [key: string]: ServerSyncRequestInterface } = {};
    syncRequestArray.forEach((item) => {
      requestItems[item.app?.id || item.database?.id || item.databaseUnit?.id || item.databaseItem?.id || item.followerRequest?.id || item.router?.id || item.followerDatabase?.id || item.media?.id || ""] = item;
    });

    // Helper collections

    let foundFollowerCompletions: { [key: string]: AwesumFollowerDatabaseCompletion } = {};
    let foundFollowerDatabases: { [key: string]: AwesumFollowerDatabase } = {};
    let followerLeaderAppIds: Set<string> = new Set();
    let followerRequestIds: Set<string> = new Set();
    let followerDatabaseIds: Set<string> = new Set();

    let foundApps: { [key: string]: AwesumApp } = {};
    let foundDatabaseUnit: { [key: string]: AwesumDatabaseUnit } = {};
    let foundDatabaseItem: { [key: string]: AwesumDatabaseItem } = {};
    let foundRouters: { [key: string]: AwesumRouter } = {};
    let foundDatabases: { [key: string]: AwesumDatabase } = {};
    let foundDatabaseIds: Set<string> = new Set();


    const populateFoundFollowerCompletions = async () => {
      // const followerCompletions = await models.FOLLOWER_DATABASE_COMPLETION.findAll({
      //   where: {
      //     followerRequestId: { [Op.in]: Array.from(Object.keys(foundFollowerRequests)) },
      //   },
      // });
      const followerCompletions = await db.selectFrom('awesum.FollowerDatabaseCompletion as fdc')
      .where(({ eb }) => 
        eb('followerRequestId','in',Array.from(Object.keys(foundFollowerRequests))))
      .selectAll()
      .execute();
      foundFollowerCompletions = {};
      followerCompletions.forEach((completion) => {
        foundFollowerCompletions[completion.id] = completion;
      });
    };

    const populateFoundFollowerDatabases = async () => {
      // const followerDatabases = await models.FOLLOWER_DATABASE.findAll({
      //   where: {
      //     followerRequestId: { [Op.in]: Array.from(Object.keys(foundFollowerRequests)) },
      //   },
      // });
      const followerDatabases = await db.selectFrom('awesum.FollowerDatabase as fd')
      .where(({ eb }) => 
        eb('followerRequestId','in',Array.from(Object.keys(foundFollowerRequests))))
      .selectAll()
      .execute();
      foundFollowerDatabases = {};
      followerDatabases.forEach((database) => {
        foundFollowerDatabases[database.id] = database;
      });
    };

    const populateFollowerLeaderAppIds = async () => {
      if (Object.keys(foundFollowerRequests).length > 0) {
        followerLeaderAppIds = new Set();
        Object.values(foundFollowerRequests)
          .filter((f) =>
            f.status !== followerRequestStatus.Rejected &&
            f.followerAppId === foundLeaderAppId
          )
          .forEach((f) => followerLeaderAppIds.add(f.leaderAppId));
      }
    };

    const populateFollowerDatabaseIds = async () => {
      if (foundFollowerRequests) {
        followerRequestIds = new Set();
        Object.values(foundFollowerRequests)
          .filter((f) =>
            f.status !== followerRequestStatus.Rejected &&
            f.followerAppId === foundLeaderAppId
          )
          .forEach((f) => followerRequestIds.add(f.id));

        // const followerDatabases = await models.FOLLOWER_DATABASE.findAll({
        //   where: {
        //     followerRequestId: { [Op.in]: Array.from(followerRequestIds) },
        //   },
        // });
        const followerDatabases = await db.selectFrom('awesum.FollowerDatabase as fd')
        .where(({ eb }) => 
          eb('followerRequestId','in',Array.from(followerRequestIds)))
        .selectAll()
        .execute();

        followerDatabases.forEach((database) => {
          followerDatabaseIds.add(database.databaseId);
        });
      }
    };

    const populateFoundDatabases = async () => {
      // const databases = await models.DATABASE.findAll({
      //   where: {
      //     [Op.or]: [
      //       { appId: foundLeaderAppId },
      //       { id: { [Op.in]: Array.from(followerDatabaseIds) } },
      //     ],
      //   },
      // });
      const databases = await db.selectFrom('awesum.Database as d')
      .where(({ eb, or }) => 
        eb('appId','=',foundLeaderAppId).or(
        'id','in',Array.from(followerDatabaseIds)))
      .selectAll()
      .execute();
      foundDatabases = {};
      foundDatabaseIds = new Set();

      databases.forEach((database) => {
        foundDatabases[database.id] = database;
        foundDatabaseIds.add(database.id);
      });
    };

    if (Object.keys(foundFollowerRequests).length > 0) {
      for (const [key, follower] of Object.entries(foundFollowerRequests)) {
        const requestFollower = requestItems[key] && requestItems[key].followerRequest
          ? requestItems[key].followerRequest
          : null;

        if (
          !requestFollower ||
          requestFollower.lastModified < follower.lastModified ||
          requestFollower.version < follower.version
        ) {
          // Server has a follower that the client does not have,
          // or the server follower is newer than the client follower

          if (!requestFollower && follower.leaderAppId === foundLeaderAppId
          ) {
            await db.deleteFrom('awesum.FollowerRequest').where('id','=',follower.id).execute();
          } else {
            syncResponseArray.push({
              followerRequest: follower,
            });
          }
        }
      }
    }

    await populateFoundFollowerCompletions();
    await populateFoundFollowerDatabases();

    if (foundFollowerCompletions) {
      for (
        const [key, completion] of Object.entries(foundFollowerCompletions)
      ) {
        const requestFollowerCompletion = requestItems[key]

        if (!requestFollowerCompletion) {
          // Server has a followerDatabaseCompletion that the client does not have
          syncResponseArray.push({
            followerDatabaseCompletion: completion,
          });
        }
      }
    }

    await populateFollowerLeaderAppIds();

    // const apps = await models.APP.findAll({
    //   where: {
    //     [Op.or]: [
    //       { id: foundLeaderAppId },
    //       { id: { [Op.in]: Array.from(followerLeaderAppIds) } },
    //     ],
    //   },
    // });
    const apps = await db.selectFrom('awesum.App as a')
    .where(({ eb, or }) => 
      eb('id','=',foundLeaderAppId).or(
      'id','in',Array.from(followerLeaderAppIds)))
    .selectAll()
    .execute();

    foundApps = {};
    apps.forEach((app) => {
      foundApps[app.id] = app;
    });

    for (const [key, app] of Object.entries(foundApps)) {
      const requestApp = requestItems[key] && requestItems[key].app
        ? requestItems[key].app
        : null;

      if (
        !requestApp ||
        requestApp.lastModified < app.lastModified ||
        requestApp.version < app.version
      ) {
        // Server has an app that the client does not have,
        // or the server app is newer than the client app
        syncResponseArray.push({
          app: app,
        });
      }
    }

    await populateFollowerDatabaseIds();
    await populateFoundDatabases();

    if (foundDatabases) {
      for (const [key, database] of Object.entries(foundDatabases)) {
        const requestDatabase = requestItems[key] && requestItems[key].database
          ? requestItems[key].database
          : null;

        if (
          !requestDatabase ||
          requestDatabase.lastModified < database.lastModified ||
          requestDatabase.version < database.version
        ) {
          // Server has a database that the client does not have,
          // or the server database is newer than the client database

          if (!requestDatabase && database.appId === foundLeaderAppId) {
            await db.deleteFrom('awesum.Database').where('id','=',database.id).execute();
          } else {
            syncResponseArray.push({
              database: database,
            });
          }
        }
      }
    }





    // Find and process database units
    // const databaseUnits = await models.DATABASE_UNIT.findAll({
    //   where: {
    //     [Op.or]: [
    //       { databaseId: { [Op.in]: Array.from(foundDatabaseIds) } },
    //       { databaseId: { [Op.in]: Array.from(followerRequestIds) } },
    //     ],
    //   },
    // });
    const databaseUnits = await db.selectFrom('awesum.DatabaseUnit as du')
    .where(({ eb, or }) => 
      eb('databaseId','in',Array.from(foundDatabaseIds)).or(
      'databaseId','in',Array.from(followerRequestIds)))
    .selectAll()
    .execute();
    foundDatabaseUnit = {};
    databaseUnits.forEach((unit) => {
      foundDatabaseUnit[unit.id] = unit;
    });

    for (const [key, databaseUnit] of Object.entries(foundDatabaseUnit)) {
      const requestDatabaseUnit =
        requestItems[key] && requestItems[key].databaseUnit
          ? requestItems[key].databaseUnit
          : null;

      if (
        !requestDatabaseUnit ||
        requestDatabaseUnit.lastModified < databaseUnit.lastModified ||
        requestDatabaseUnit.version < databaseUnit.version
      ) {
        if (!requestDatabaseUnit && databaseUnit.appId === foundLeaderAppId) {
          await db.deleteFrom('awesum.DatabaseUnit').where('id','=',databaseUnit.id).execute();
        } else {
          syncResponseArray.push({
            databaseUnit: databaseUnit,
          });
        }
      }
    }

    // Find and process database items
    // const databaseItems = await models.DATABASE_ITEM.findAll({
    //   where: {
    //     [Op.or]: [
    //       { databaseId: { [Op.in]: Array.from(foundDatabaseIds) } },
    //       { databaseId: { [Op.in]: Array.from(followerRequestIds) } },
    //     ],
    //   },
    // });
    const databaseItems = await db.selectFrom('awesum.DatabaseItem as di')
    .where(({ eb, or }) => 
      eb('databaseId','in',Array.from(foundDatabaseIds)).or(
      'databaseId','in',Array.from(followerRequestIds)))
    .selectAll()
    .execute();

    foundDatabaseItem = {};
    databaseItems.forEach((item) => {
      foundDatabaseItem[item.id] = item;
    });

    for (const [key, databaseItem] of Object.entries(foundDatabaseItem)) {
      const requestDatabaseItem =
        requestItems[key] && requestItems[key].databaseItem
          ? requestItems[key].databaseItem
          : null;

      if (
        !requestDatabaseItem ||
        requestDatabaseItem.lastModified < databaseItem.lastModified ||
        requestDatabaseItem.version < databaseItem.version
      ) {
        if (!requestDatabaseItem && databaseItem.appId === foundLeaderAppId) {
          await db.deleteFrom('awesum.DatabaseItem').where('id','=',databaseItem.id).execute();
        } else {
          syncResponseArray.push({
            databaseItem: databaseItem,
          });
        }
      }
    }

      // const routers = await models.ROUTER.findAll({
      //   where: {
      //     appId: { [Op.in]: [foundLeaderAppId, ...Array.from(followerLeaderAppIds)] },
      //   },
      // });
      const routers = await db.selectFrom('awesum.Router as r')
      .where(({ eb }) => 
        eb('appId','in',[foundLeaderAppId, ...Array.from(followerLeaderAppIds)]))
      .selectAll()
      .execute();

    foundRouters = {};
    routers.forEach((router) => {
      foundRouters[router.id] = router;
    });

    for (const [key, router] of Object.entries(foundRouters)) {
      const requestRouter = requestItems[key] && requestItems[key].router
        ? requestItems[key].router
        : null;

      if (
        !requestRouter ||
        requestRouter.lastModified < router.lastModified ||
        requestRouter.version < router.version
      ) {
        if (!requestRouter && router.appId === foundLeaderAppId) {
          await db.deleteFrom('awesum.Router').where('id','=',router.id).execute();
        } else {
          syncResponseArray.push({
            router: router,
          });
        }
      }
    }

    var databaseIdsToDelete = new Set<string>();

    // Process client items to update server
    for (const item of syncRequestArray) {
      // Process App
      if (item.app) {
        const app = foundApps[item.app.id];

        if (!app && item.app.id == foundLeaderAppId) {
          //app is not found, so we need to create it

          if (item.app.email != userEmail || item.app.authenticationType != (req as any).user.provider) {
            syncResponseArray.push({ message: { id: item.app.id, level: ItemLevel.app, message: "App not found" }})
          }
          else {
            var validationErrors = await validateApp(app);
            if (validationErrors.length > 0) {
              syncResponseArray.push({ message: { id: item.app.id, level: ItemLevel.app, message: "App not found" }})
            }
            else {
              await db.insertInto('awesum.App').values(app as AwesumApp).execute();
            }
          }
        }
        else if (!app) {
          syncResponseArray.push({
            deletion: {
              level: ItemLevel.app,
              id: item.app.id,
            },
          });
        }
        if (app && (app.lastModified < item.app.lastModified ||
          app.version < item.app.version)) {
          if (!app) {
            res.status(400).json(res.locals.t("AppSyncOffRails"));
            return;
          } else {
            Object.assign(app, item.app);
            await db.updateTable('awesum.App').set(app as AwesumApp).where('id','=',app.id).execute();
          }
        }
      }

      // Process Database
      if (item.database) {
        const database = foundDatabases ? foundDatabases[item.database.id] : null;

        if (
          !database ||
          database.lastModified < item.database.lastModified ||
          database.version < item.database.version
        ) {
          if (!database && item.database.appId == foundLeaderAppId) {
            await db.insertInto('awesum.Database').values(item.database as AwesumDatabase).execute();
          }
          else if (!database) {
            databaseIdsToDelete.add(item.database.id);
            syncResponseArray.push({
              deletion: {
                level: ItemLevel.database,
                id: item.database.id,
              },
            });
          }
          else {
            Object.assign(database, item.database);
            await db.updateTable('awesum.Database').set(database as AwesumDatabase).where('id','=',database.id).execute();
          }
        }
      }



      // Process DatabaseUnit
      if (item.databaseUnit) {
        let databaseUnit = foundDatabaseUnit[item.databaseUnit.id] as ServerDatabaseUnitInterface;

        if (
          !databaseUnit ||
          (databaseUnit &&
            (databaseUnit.lastModified < item.databaseUnit.lastModified ||
              databaseUnit.version < item.databaseUnit.version))
        ) {
          if (!databaseUnit && !databaseIdsToDelete.has(item.databaseUnit.databaseId)) {
            await db.insertInto('awesum.DatabaseUnit').values(item.databaseUnit as AwesumDatabaseUnit).execute();
          } else if (!databaseUnit) {
            syncResponseArray.push({
              deletion: {
                level: ItemLevel.databaseUnit,
                id: item.databaseUnit.id,
              },
            });
          }
          else {
            Object.assign(databaseUnit, item.databaseUnit);
            await db.updateTable('awesum.DatabaseUnit').set(databaseUnit as AwesumDatabaseUnit).where('id','=',databaseUnit.id).execute();
          }
        }
      }

      // Process DatabaseItem
      if (item.databaseItem) {
        const databaseItem = foundDatabaseItem[item.databaseItem.id];

        if (
          !databaseItem ||
          (databaseItem &&
            (databaseItem.lastModified < item.databaseItem.lastModified ||
              databaseItem.version < item.databaseItem.version))
        ) {
          if (!databaseItem && !databaseIdsToDelete.has(item.databaseItem.databaseId)) {
            await db.insertInto('awesum.DatabaseItem').values(item.databaseItem as AwesumDatabaseItem).execute();
          } else if (!databaseItem) {
            syncResponseArray.push({
              deletion: {
                level: ItemLevel.databaseItem,
                id: item.databaseItem.id,
              },
            });
          }
          else {
            Object.assign(databaseItem, item.databaseItem);
            await db.updateTable('awesum.DatabaseItem').set(databaseItem as AwesumDatabaseItem).where('id','=',databaseItem.id).execute();
          }
        }
      }

      // Process Router
      if (item.router) {
        const router = foundRouters[item.router.id];
        if (
          !router ||
          (router &&
            (router.lastModified < item.router.lastModified ||
              router.version < item.router.version))
        ) {
          if (!router) {
            await db.insertInto('awesum.Router').values(item.router as AwesumRouter).execute();
            if (!routerMacToEmailMap.has(item.router.routerMac)) {
              routerMacToEmailMap.set(item.router.routerMac, userEmail);
            }
          } else {
            Object.assign(router, item.router);
            await db.updateTable('awesum.Router').set(router as AwesumRouter).where('id','=',router.id).execute();
          }
        }
      }

      // Process FollowerDatabaseCompletion
      if (item.followerDatabaseCompletion) {
        console.log("Processing FollowerDatabaseCompletion");
        await db.insertInto('awesum.FollowerDatabaseCompletion').values(item.followerDatabaseCompletion as AwesumFollowerDatabaseCompletion).execute();

        console.log(foundDatabaseUnit)
        console.log(item.followerDatabaseCompletion.itemId)
        var foundUnit = foundDatabaseUnit[item.followerDatabaseCompletion.itemId];
        if (foundUnit && foundUnit.router) {
          console.log("Found Unit");
          var router = foundRouters[foundUnit.router];
          console.log(foundRouters);
          console.log(foundUnit.router);
          console.log(router);
          if (router) {
            console.log("Router found");
            var email = await getEmailFromAppId(router.appId);
            if (email) {
              console.log("Email found");
              console.log(email);
              console.log(socketConnections);
              var wses1 = socketConnections.get(email);
              if (wses1) {
                for (const ws of wses1) {
                  console.log((ws as any).macAddress)
                  console.log(router.routerMac)
                  if ((ws as any).macAddress == router.routerMac.toLocaleUpperCase()) {
                    console.log("Sending updateRouterStatusRequest");
                    ws.send(JSON.stringify({
                      type: "updateRouterStatusRequest",
                      status: "enabled",
                      remainingTime: foundUnit.routerTimeImmediate ? 0 : foundUnit.routerTime,
                      remainingImmediateTime: foundUnit.routerTimeImmediate ? foundUnit.routerTime : 0,
                      startTime: 0,
                      duration: 0
                    } as ServerUpdateRouterStatusRequestInterface));
                  }
                }
              }
            }
          }
        }

        var leaderEmail = foundFollowerRequests[item.followerDatabaseCompletion.followerRequestId].leaderEmail;
        const wses = socketConnections.get(leaderEmail);
        if (wses) {
          for (const ws of wses) {
            if (!(ws as any).macAddress) {
              ws.send(JSON.stringify({ type: syncRequestType, data: item.followerDatabaseCompletion }));
            }
          }
        }

      }

      /* // Process FollowerDatabase
      //I can't think if a time where this is needed
      if (item.followerDatabase) {
        
      } */
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

// Routes
app.get(
  "/api/resetAllServerData",
  async (req: express.Request, res: express.Response) => {

    var returnValue: ServerResetAllServerDataResponseInterface = {
      appFound: false,
      appDeleted: false,
    };

    if (!(req as any).user) {
      res.status(401).json({
        error: req.t!(resources.Authentication_Is_Required.key),
      });
      return;
    }

    const userEmail = (req as any).user.emails[0];

    const foundLeaderAppId = await getAppIdFromEmail(userEmail);
    if (!foundLeaderAppId) {
      returnValue.appFound = false;
      returnValue.appDeleted = false;
      res.json(returnValue);
      return;
    }

    //get all followerRequests where followerAppId is the foundLeaderAppId or leaderAppId is the foundLeaderAppId
    // const followerRequests = await models.FOLLOWER_REQUEST.findAll({
    //   where: {
    //     [Op.or]: [
    //       { followerAppId: foundLeaderAppId },
    //       { leaderAppId: foundLeaderAppId },
    //     ],
    //   },
    // });
    const followerRequests = await db.selectFrom('awesum.FollowerRequest as fr')
    .where(({ eb, or }) => 
      eb('followerAppId','=',foundLeaderAppId).or
      ('leaderAppId','=',foundLeaderAppId))
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
      .where(({ eb }) => 
        eb('followerRequestId','=',followerRequest.id))
      .selectAll()
      .execute();

      for (const followerDatabase of followerDatabases) {
        await db.deleteFrom('awesum.FollowerDatabase').where('id','=',followerDatabase.id).execute();
      }

      // const followerDatabaseCompletions = await models.FOLLOWER_DATABASE_COMPLETION.findAll({
      //   where: {
      //     followerRequestId: followerRequest.id,
      //   },
      // });
      const followerDatabaseCompletions = await db.selectFrom('awesum.FollowerDatabaseCompletion as fdc')
      .where(({ eb }) => 
        eb('followerRequestId','=',followerRequest.id))
      .selectAll()
      .execute();

      for (const followerDatabaseCompletion of followerDatabaseCompletions) {
        await db.deleteFrom('awesum.FollowerDatabaseCompletion').where('id','=',followerDatabaseCompletion.id).execute();
      }

      

      await db.deleteFrom('awesum.FollowerRequest').where('id','=',followerRequest.id).execute();
    }

    // models.DATABASE.destroy({
    //   where: {
    //     appId: foundLeaderAppId,
    //   },
    // });
    await db.deleteFrom('awesum.Database').where('appId','=',foundLeaderAppId).execute();


    // const routers = await models.ROUTER.findAll({
    //   where: {
    //     appId: foundLeaderAppId,
    //   },
    // });
    const routers = await db.selectFrom('awesum.Router as r')
    .where(({ eb }) => 
      eb('appId','=',foundLeaderAppId))
    .selectAll()
    .execute();

    for (const router of routers) {
      // const dnsEntries = await models.DNS_ENTRY.findAll({
      //   where: {
      //     routerId: router.id,
      //   },
      // });
      const dnsEntries = await db.selectFrom('awesum.DnsEntry as de')
      .where(({ eb }) => 
        eb('routerId','=',router.id))
      .selectAll()
      .execute();

      for (const dnsEntry of dnsEntries) {
        await db.deleteFrom('awesum.DnsEntry').where('id','=',dnsEntry.id).execute();
      }

      routerMacToEmailMap.delete(router.routerMac);
      await db.deleteFrom('awesum.Router').where('id','=',router.id).execute();
    }



    // models.DATABASE_UNIT.destroy({
    //   where: {
    //     appId: foundLeaderAppId,
    //   },
    // });
    await db.deleteFrom('awesum.DatabaseUnit').where('appId','=',foundLeaderAppId).execute();

    // models.DATABASE_ITEM.destroy({
    //   where: {
    //     appId: foundLeaderAppId,
    //   },
    // });
    await db.deleteFrom('awesum.DatabaseItem').where('appId','=',foundLeaderAppId).execute();

    // models.MEDIA.destroy({
    //   where: {
    //     appId: foundLeaderAppId,
    //   },
    // });
    await db.deleteFrom('awesum.Media').where('appId','=',foundLeaderAppId).execute();

    // models.APP.destroy({
    //   where: {
    //     id: foundLeaderAppId,
    //   },
    // });
    await db.deleteFrom('awesum.App').where('id','=',foundLeaderAppId).execute();

    res.json({
      message: "Data deleted successfully",
    });

    return;
  },
);



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
    var isUnique = await isNameGloballyUnique((req as any).user.emails[0],uniquename);
    if (isUnique) {
      res.json(true);
    } else {
      res.status(400).json({
        error: req.t!(resources.Unique_name_already_exists.key),
      });
    }
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
const wss = new WebSocketServer({ server });

/* // Create a plain WebSocket server for troubleshooting SSL issues
const plainWss = new WebSocketServer({ port: 8080 });

plainWss.on('upgrade', function (request, socket, head) {
  socket.on('error', onSocketError);

  socket.on('message'),function(){
    var v = 0
  }

  console.log('Plain WebSocket: Parsing session from request...');

  console.log('Plain WebSocket: Session is parsed!');

  socket.removeListener('error', onSocketError);

  plainWss.handleUpgrade(request, socket, head, function (ws) {
    plainWss.emit('connection', ws, request);
  });
}); */

wss.on('upgrade', function (request, socket, head) {
  socket.on('error', onSocketError);

  console.log('Parsing session from request...');

  console.log('Session is parsed!');

  socket.removeListener('error', onSocketError);

  wss.handleUpgrade(request, socket, head, function (ws) {
    wss.emit('connection', ws, request);
  });
});

//handle incoming connections
wss.on("connection", async (ws: WebSocket, req: express.Request) => {
  await handleWebSocketConnection(ws, req, "Secure");
});

/* // Handle plain WebSocket connections for troubleshooting
plainWss.on("connection", (ws: WebSocket, req: express.Request) =fgtttttttttttttttttn,length;p5> {
  handleWebSocketConnection(ws, req, "Plain");
}); */

async function handleWebSocketConnection(ws: WebSocket, req: express.Request, connectionType: string) {
  try {
    //get ip address
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    console.log(`${connectionType} WebSocket - IP address:`, ip);

    //get cookie with the name session
    const sessionCookie = req.headers["cookie"]?.split("; ").find(cookie => cookie.startsWith("session="));
    if (!sessionCookie) {
      console.log(`${connectionType} WebSocket - No session cookie found, closing connection`);
      ws.close();
      return;
    }
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
            eb.fn('upper', ['r.routerMac']),'=',userBase64Decoded)
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
    else {
      const userJson = JSON.parse(userBase64Decoded);
      const user = userJson.passport.user;
      const userEmail = user.emails[0];
      (ws as any).email = userEmail;
      if (!socketConnections.has(userEmail)) {
        socketConnections.set(userEmail, []);
      }
      socketConnections.get(userEmail)!.push(ws);
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
