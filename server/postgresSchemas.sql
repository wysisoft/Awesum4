
  drop schema if exists awesum cascade; 
  create schema awesum;DROP TABLE IF EXISTS awesum."App";
    CREATE TABLE awesum."App" (
  "email" VARCHAR(100) NOT NULL,
  "name" VARCHAR(100) NOT NULL,
  "uniqueName" VARCHAR(100) NOT NULL,
  "version" INTEGER NOT NULL,
  "lastModified" NUMERIC NOT NULL,
  "homePageImageType" INTEGER NOT NULL,
  "homePageImage" UUID NOT NULL,
  "authenticationType" VARCHAR(100) NOT NULL,
  "lang" VARCHAR(100) NOT NULL,
  "enableNarrator" BOOLEAN NOT NULL,
  "groups" VARCHAR(8000) NOT NULL,
  "id" UUID PRIMARY KEY NOT NULL,
  "lastSync" NUMERIC NOT NULL
);

DROP TABLE IF EXISTS awesum."Database";
    CREATE TABLE awesum."Database" (
  "name" VARCHAR(100) NOT NULL,
  "lastModified" NUMERIC NOT NULL,
  "version" INTEGER NOT NULL,
  "appId" UUID NOT NULL,
  "id" UUID PRIMARY KEY NOT NULL,
  "order" INTEGER NOT NULL,
  "homePageIconType" INTEGER NOT NULL,
  "homePageIcon" UUID NOT NULL
);

DROP TABLE IF EXISTS awesum."DatabaseUnit";
    CREATE TABLE awesum."DatabaseUnit" (
  "name" VARCHAR(100) NOT NULL,
  "order" INTEGER NOT NULL,
  "lastModified" NUMERIC NOT NULL,
  "touched" BOOLEAN NOT NULL,
  "version" INTEGER NOT NULL,
  "id" UUID PRIMARY KEY NOT NULL,
  "appId" UUID NOT NULL,
  "databaseId" UUID NOT NULL,
  "successVideoType" INTEGER NOT NULL,
  "successVideoUrl" VARCHAR(100) NOT NULL,
  "successAnimations" VARCHAR(100) NOT NULL,
  "successSound" UUID NOT NULL,
  "successSoundType" INTEGER NOT NULL,
  "homePageImageType" INTEGER NOT NULL,
  "homePageImage" UUID NOT NULL,
  "router" UUID NOT NULL,
  "routerTime" NUMERIC NOT NULL,
  "routerTimeImmediate" BOOLEAN NOT NULL,
  "points" INTEGER NOT NULL
);

DROP TABLE IF EXISTS awesum."DatabaseItem";
    CREATE TABLE awesum."DatabaseItem" (
  "itemType" INTEGER NOT NULL,
  "order" INTEGER NOT NULL,
  "unitId" UUID NOT NULL,
  "appId" UUID NOT NULL,
  "lastModified" NUMERIC NOT NULL,
  "touched" BOOLEAN NOT NULL,
  "version" INTEGER NOT NULL,
  "databaseId" UUID NOT NULL,
  "id" UUID PRIMARY KEY NOT NULL,
  "dataText" VARCHAR(8000) NOT NULL,
  "data" TEXT NOT NULL
);

DROP TABLE IF EXISTS awesum."FollowerDatabase";
    CREATE TABLE awesum."FollowerDatabase" (
  "followerRequestId" UUID NOT NULL,
  "id" UUID PRIMARY KEY NOT NULL,
  "databaseId" UUID NOT NULL,
  "lastModified" NUMERIC NOT NULL,
  "touched" BOOLEAN NOT NULL,
  "version" INTEGER NOT NULL
);

DROP TABLE IF EXISTS awesum."FollowerRequest";
    CREATE TABLE awesum."FollowerRequest" (
  "leaderAppId" UUID NOT NULL,
  "followerAppId" UUID NOT NULL,
  "id" UUID PRIMARY KEY NOT NULL,
  "followerName" VARCHAR(100) NOT NULL,
  "leaderName" VARCHAR(100) NOT NULL,
  "followerEmail" VARCHAR(100) NOT NULL,
  "leaderEmail" VARCHAR(100) NOT NULL,
  "initiatedByFollower" BOOLEAN NOT NULL,
  "lastModified" NUMERIC NOT NULL,
  "touched" BOOLEAN NOT NULL,
  "version" INTEGER NOT NULL,
  "status" INTEGER NOT NULL,
  "groups" VARCHAR(8000) NOT NULL,
  "points" INTEGER NOT NULL
);

DROP TABLE IF EXISTS awesum."Media";
    CREATE TABLE awesum."Media" (
  "id" UUID PRIMARY KEY NOT NULL,
  "size" INTEGER NOT NULL,
  "data" VARCHAR(8000) NOT NULL,
  "appId" UUID NOT NULL,
  "lastModified" NUMERIC NOT NULL,
  "touched" BOOLEAN NOT NULL
);

DROP TABLE IF EXISTS awesum."FollowerDatabaseCompletion";
    CREATE TABLE awesum."FollowerDatabaseCompletion" (
  "id" UUID PRIMARY KEY NOT NULL,
  "followerRequestId" UUID NOT NULL,
  "description" VARCHAR(1000) NOT NULL,
  "itemId" UUID NOT NULL,
  "parentItemId" UUID NOT NULL,
  "itemLevel" INTEGER NOT NULL,
  "lastModified" NUMERIC NOT NULL,
  "touched" BOOLEAN NOT NULL,
  "version" INTEGER NOT NULL
);

DROP TABLE IF EXISTS awesum."Router";
    CREATE TABLE awesum."Router" (
  "id" UUID PRIMARY KEY NOT NULL,
  "appId" UUID NOT NULL,
  "routerMac" VARCHAR NOT NULL,
  "ipAddress" VARCHAR NOT NULL,
  "mondayTimesAndDurations" VARCHAR NOT NULL,
  "tuesdayTimesAndDurations" VARCHAR NOT NULL,
  "wednesdayTimesAndDurations" VARCHAR NOT NULL,
  "thursdayTimesAndDurations" VARCHAR NOT NULL,
  "fridayTimesAndDurations" VARCHAR NOT NULL,
  "saturdayTimesAndDurations" VARCHAR NOT NULL,
  "sundayTimesAndDurations" VARCHAR NOT NULL,
  "version" INTEGER NOT NULL,
  "lastModified" NUMERIC NOT NULL,
  "touched" BOOLEAN NOT NULL,
  "status" INTEGER NOT NULL
);

DROP TABLE IF EXISTS awesum."DnsEntry";
    CREATE TABLE awesum."DnsEntry" (
  "timestamp" NUMERIC NOT NULL,
  "domain" VARCHAR NOT NULL,
  "routerId" UUID NOT NULL,
  "id" UUID PRIMARY KEY NOT NULL
);

