import { ContactsCollection } from '../db/models/contacts.js';

export const getAllStudents = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getStudentById = async (studentId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};
