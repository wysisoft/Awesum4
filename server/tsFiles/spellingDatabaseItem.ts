export type spellingDatabaseItem = {
  data: {
    letters: string
    image: string
    sound: string
    text: string
    imageType: number
    visualHint: string
    audioType: number
    successSound: string
    successSoundType: number
    successImage: string
    successImageType: number
    successAnimations: string
    successImageTime: number
  }
  itemType: number
  order: number
  unitId: string
  appId: string
  lastModified: number
  version: number
  databaseId: string
  id: string
  dataText: string
}
