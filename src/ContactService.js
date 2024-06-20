

const STORAGE_KEY = 'contacts';

const ContactService = {
  getContacts() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  },

  saveContacts(contacts) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }
};

export default ContactService;
