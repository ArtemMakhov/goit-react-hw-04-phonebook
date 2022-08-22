import { GlobalStyle } from "./GlobalStyle";
import { Component } from "react";
import { Box } from "./Box";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";


export class App extends Component {

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

  render() {
    return (
      <Box>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <GlobalStyle/>
      </Box>
    );
}
}