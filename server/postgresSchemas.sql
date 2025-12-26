
  drop schema if exists awesum cascade; 
  create schema awesum;DROP TABLE IF EXISTS awesum."App";
    CREATE TABLE awesum."App" (
  "email" VARCHAR(100) NOT NULL,
  "name" VARCHAR(100) NOT NULL,
  "uniqueName" VARCHAR(100) NOT NULL,
  "version" BIGINT NOT NULL,
  "touched" BOOLEAN NOT NULL,
  "lastModified" BIGINT NOT NULL,
  "homePageImageType" BIGINT NOT NULL,
  "homePageImage" UUID NOT NULL,
  "authenticationType" VARCHAR(100) NOT NULL,
  "lang" VARCHAR(100) NOT NULL,
  "enableNarrator" BOOLEAN NOT NULL,
  "groups" VARCHAR(8000) NOT NULL,
  "id" UUID PRIMARY KEY NOT NULL,
  "lastSync" BIGINT NOT NULL
);

DROP TABLE IF EXISTS awesum."Deletion";
    CREATE TABLE awesum."Deletion" (
  "id" UUID PRIMARY KEY NOT NULL,
  "databaseId" UUID NOT NULL,
  "level" BIGINT NOT NULL,
  "lastModified" BIGINT NOT NULL
);

DROP TABLE IF EXISTS awesum."Modification";
    CREATE TABLE awesum."Modification" (
  "id" UUID PRIMARY KEY NOT NULL
);

DROP TABLE IF EXISTS awesum."Addition";
    CREATE TABLE awesum."Addition" (
  "id" UUID PRIMARY KEY NOT NULL
);

DROP TABLE IF EXISTS awesum."Internal";
    CREATE TABLE awesum."Internal" (
  "id" UUID PRIMARY KEY NOT NULL,
  "lastModified" BIGINT NOT NULL
);

DROP TABLE IF EXISTS awesum."Database";
    CREATE TABLE awesum."Database" (
  "name" VARCHAR(100) NOT NULL,
  "lastModified" BIGINT NOT NULL,
  "version" BIGINT NOT NULL,
  "appId" UUID NOT NULL,
  "id" UUID PRIMARY KEY NOT NULL,
  "order" BIGINT NOT NULL,
  "homePageIconType" BIGINT NOT NULL,
  "homePageIcon" UUID NOT NULL,
  "touched" BOOLEAN NOT NULL,
  "unitLastModified" BIGINT NOT NULL,
  "itemLastModified" BIGINT NOT NULL,
  "mediaLastModified" BIGINT NOT NULL
);

DROP TABLE IF EXISTS awesum."DatabaseUnit";
    CREATE TABLE awesum."DatabaseUnit" (
  "name" VARCHAR(100) NOT NULL,
  "order" BIGINT NOT NULL,
  "lastModified" BIGINT NOT NULL,
  "touched" BOOLEAN NOT NULL,
  "version" BIGINT NOT NULL,
  "id" UUID PRIMARY KEY NOT NULL,
  "appId" UUID NOT NULL,
  "databaseId" UUID NOT NULL,
  "successVideoType" BIGINT NOT NULL,
  "successVideoUrl" VARCHAR(100) NOT NULL,
  "successAnimations" VARCHAR(100) NOT NULL,
  "successSound" UUID NOT NULL,
  "successSoundType" BIGINT NOT NULL,
  "homePageImageType" BIGINT NOT NULL,
  "homePageImage" UUID NOT NULL,
  "router" UUID NOT NULL,
  "routerTime" BIGINT NOT NULL,
  "routerTimeImmediate" BOOLEAN NOT NULL,
  "points" BIGINT NOT NULL
);

DROP TABLE IF EXISTS awesum."DatabaseItem";
    CREATE TABLE awesum."DatabaseItem" (
  "itemType" BIGINT NOT NULL,
  "order" BIGINT NOT NULL,
  "unitId" UUID NOT NULL,
  "appId" UUID NOT NULL,
  "lastModified" BIGINT NOT NULL,
  "touched" BOOLEAN NOT NULL,
  "version" BIGINT NOT NULL,
  "databaseId" UUID NOT NULL,
  "id" UUID PRIMARY KEY NOT NULL,
  "dataText" VARCHAR(8000) NOT NULL,
  "data" TEXT NULL
);

DROP TABLE IF EXISTS awesum."FollowerDatabase";
    CREATE TABLE awesum."FollowerDatabase" (
  "followerRequestId" UUID NOT NULL,
  "id" UUID PRIMARY KEY NOT NULL,
  "databaseId" UUID NOT NULL,
  "lastModified" BIGINT NOT NULL,
  "touched" BOOLEAN NOT NULL,
  "version" BIGINT NOT NULL
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
  "lastModified" BIGINT NOT NULL,
  "touched" BOOLEAN NOT NULL,
  "version" BIGINT NOT NULL,
  "status" BIGINT NOT NULL,
  "groups" VARCHAR(8000) NOT NULL,
  "points" BIGINT NOT NULL,
  "completionLastModified" BIGINT NOT NULL
);

DROP TABLE IF EXISTS awesum."Media";
    CREATE TABLE awesum."Media" (
  "id" UUID PRIMARY KEY NOT NULL,
  "size" BIGINT NOT NULL,
  "data" VARCHAR(8000) NOT NULL,
  "appId" UUID NOT NULL,
  "touched" BOOLEAN NOT NULL
);

DROP TABLE IF EXISTS awesum."FollowerDatabaseCompletion";
    CREATE TABLE awesum."FollowerDatabaseCompletion" (
  "id" UUID PRIMARY KEY NOT NULL,
  "followerRequestId" UUID NOT NULL,
  "itemId" UUID NOT NULL,
  "parentItemId" UUID NOT NULL,
  "itemLevel" BIGINT NOT NULL,
  "lastModified" BIGINT NOT NULL
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
  "version" BIGINT NOT NULL,
  "lastModified" BIGINT NOT NULL,
  "touched" BOOLEAN NOT NULL,
  "status" BIGINT NOT NULL
);

DROP TABLE IF EXISTS awesum."DnsEntry";
    CREATE TABLE awesum."DnsEntry" (
  "timestamp" BIGINT NOT NULL,
  "domain" VARCHAR NOT NULL,
  "routerId" UUID NOT NULL,
  "id" UUID PRIMARY KEY NOT NULL
);

