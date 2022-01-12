export interface Data {
  id: number
  name: string
  sex: string
  birthPlace: string
  dob: string | Date
  email: string
  groups: {
    name: string
    leaderName: string
    subject: string
    datetime: string | Date
    enrolled: number[]
  }
}
