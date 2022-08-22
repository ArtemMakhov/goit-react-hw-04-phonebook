import PropTypes from "prop-types";
import { ContactListItem } from "../ContactItem/ContactItem";
import { List } from "./ContactList.styled";

export const ContactList = ({ contacts, onDeleteButton }) => {
    return (
        <List>
            {contacts.map(({ name, id, number }) => {
                return (
                    <ContactListItem
                        key={id}
                        name={name}
                        number={number}
                        onDeleteButton={onDeleteButton}
                        id={id}
                    />
                )
            })};
        </List>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteButton: PropTypes.func.isRequired,
};