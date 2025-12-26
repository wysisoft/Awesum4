export type followerRequest = {
  leaderAppId: string
  followerAppId: string
  id: string
  followerName: string
  leaderName: string
  followerEmail: string
  leaderEmail: string
  initiatedByFollower: boolean
  lastModified: number
  touched: boolean
  version: number
  status: number
  groups: string
  points: number
  completionLastModified: number
}
