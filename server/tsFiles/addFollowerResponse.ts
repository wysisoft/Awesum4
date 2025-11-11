export type addFollowerResponse = {
  follower: {
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
}
