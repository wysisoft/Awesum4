export type updateRouterStatusRequest = {
  type: 'updateRouterStatusRequest'
  status: string
  remainingTime: number
  remainingImmediateTime: number
  startTime: number
  duration: number
}
