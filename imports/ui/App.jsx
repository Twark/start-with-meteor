import React from 'react';
import { ContactForm } from './contactForm';
import { ContactList } from './ContactList';

export const App = () => (
  <div>
    <h1>Meteor Wallet - Galaxy</h1>
    <ContactForm/>
    <ContactList />
  </div>
);
