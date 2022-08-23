import PropTypes from "prop-types";
import { ContactCard, Name, Number, Btn } from "./ContactItem.styled";

export const ContactListItem = ({ name, id, number, onDeleteButton }) => {
    return (
        <ContactCard>
            <Name>{name} - </Name>
            <Number>{number}</Number>
            <Btn type="button" id={id} onClick={onDeleteButton}>
                Delete
            </Btn>
        </ContactCard>
    )
};

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteButton: PropTypes.func.isRequired,
};