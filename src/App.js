import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import ContactService from './ContactService';

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {

    const storedContacts = ContactService.getContacts();
    setContacts(storedContacts);
  }, []);

  const handleAddContact = (name, phone) => {
  
    const newContact = { name, phone };
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    ContactService.saveContacts(updatedContacts);
  };

  const handleDeleteContact = (index) => {
   
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
    ContactService.saveContacts(updatedContacts);
  };

  return (
    <div className="container">
      <h1>Imenik</h1>
      <ContactForm onAddContact={handleAddContact} />
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;