export type pushAppResponse = {
  app: {
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
}
