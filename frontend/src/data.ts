export type Contact = {
  id: string
  name: string
  email: string
  phone: string
  address: string
  photo: string
  title: string
}

export type ContactData = {
  totalElements: number
  content: Contact[]
}
