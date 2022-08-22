import PropTypes from 'prop-types';
import { Component } from 'react';
import { Form, Label, Input, Btn } from './ContactForm.styled';


export class ContactForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]:value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
        });
    };


    render() {
        const { name, number } = this.state;
        const { handleSubmit, handleChange } = this;
        
        return (
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Label>
                    <span>Name</span>
                    <Input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </Label>
                <Label>
                    <span>Number</span>
                    <Input
                        onChange={handleChange}
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Label>
                <Btn type='submit'>Add contact</Btn>
            </Form>
        );
    }
}