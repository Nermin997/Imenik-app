

import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          {contact.name} - {contact.phone}
          <button onClick={() => onDeleteContact(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
