import { useState, useEffect } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Box } from "./Box";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export const App  = () => {
  const [contacts, setContacts] = useState(()=> JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');


  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const id = nanoid();
    const contactItem = { id, name, number }
    
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts(prevState => [...prevState, contactItem]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const normalizedValue = filter.toLowerCase().trim();
  
  const filteredContactList = () => contacts.filter(contact => contact.name.toLowerCase().includes(normalizedValue));


  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p="16px"
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        {contacts.length > 0 ? (
          <ContactList contacts={filteredContactList()} onDeleteButton={deleteContact} />
        ) : (<p>Contact list is empty</p>)
      }
        <GlobalStyle/>
      </Box>
    );
}
