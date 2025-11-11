export type syncRequest = {
  app?: {
    email: string
    name: string
    uniqueName: string
    version: number
    lastModified: number
    homePageImageType: number
    homePageImage: string
    authenticationType: string
    lang: string
    enableNarrator: boolean
    groups: string
    id: string
  }
  database?: {
    name: string
    lastModified: number
    version: number
    appId: string
    id: string
    order: number
    homePageIconType: number
    homePageIcon: string
  }
  databaseUnit?: {
    name: string
    order: number
    lastModified: number
    version: number
    id: string
    appId: string
    databaseId: string
    successVideoType: number
    successVideoUrl: string
    successAnimations: string
    successSound: string
    successSoundType: number
    homePageImageType: number
    homePageImage: string
    router: string
    routerTime: number
    routerTimeImmediate: boolean
    points: number
  }
  databaseItem?: {
    itemType: number
    order: number
    unitId: string
    appId: string
    lastModified: number
    version: number
    databaseId: string
    id: string
    dataText: string
    data: any
  }
  followerRequest?: {
    leaderAppId: string
    followerAppId: string
    id: string
    followerName: string
    leaderName: string
    followerEmail: string
    leaderEmail: string
    initiatedByFollower: boolean
    lastModified: number
    version: number
    status: number
    groups: string
    points: number
  }
  followerDatabase?: {
    followerRequestId: string
    id: string
    databaseId: string
    lastModified: number
    version: number
  }
  router?: {
    id: string
    appId: string
    routerMac: string
    ipAddress: string
    mondayTimesAndDurations: string
    tuesdayTimesAndDurations: string
    wednesdayTimesAndDurations: string
    thursdayTimesAndDurations: string
    fridayTimesAndDurations: string
    saturdayTimesAndDurations: string
    sundayTimesAndDurations: string
    version: number
    lastModified: number
    status: number
  }
  followerDatabaseCompletion?: {
    id: string
    followerRequestId: string
    description: string
    itemId: string
    parentItemId: string
    itemLevel: number
    lastModified: number
    version: number
  }
  media?: {
    id: string
    size: number
    data: string
    appId: string
    lastModified: number
  }
  deletion?: {
    id: string
    level: number
  }
}
