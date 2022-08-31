import { GlobalStyle } from "./GlobalStyle";
import { Component } from "react";
import { Box } from "./Box";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };


  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const id = nanoid();
    const contactItem = {
      id, name, number,
    };
    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({ contacts: [...contacts, contactItem], }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps,prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));  
    }
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredContactList = () => {
    const { filter, contacts } = this.state;
    const normalizedValue = filter.toLowerCase().trim();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedValue));
  };

  deleteContact = e => {
    const contactId = e.currentTarget.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const {addContact, changeFilter, deleteContact} = this;
  
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
          <ContactList contacts={this.filteredContactList()} onDeleteButton={deleteContact} />
        ) : (<p>Contact list is empty</p>)
      }
        <GlobalStyle/>
      </Box>
    );
}
}