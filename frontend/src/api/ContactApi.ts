import axios from 'axios'
import { Contact } from '../data'

const API_URL = 'http://localhost:8080/contacts'

export async function getContacts(page = 0, size = 10) {
  return await axios.get(`${API_URL}?page=${page}&size=${size}`)
}

export async function saveContact(contact: Contact) {
  return await axios.post(API_URL, contact)
}

export async function getContact(id: string) {
  return await axios.get(`${API_URL}/${id}`)
}

export async function updateContact(contact: Contact) {
  return await axios.post(API_URL, contact)
}

export async function deleteContact(id: string) {
  return await axios.delete(`${API_URL}/${id}`)
}
