import React from 'react';
import PropTypes from 'prop-types';
import ContactsListItemContainer from './ContactsListItemStyled';

const ContactsListItem = ({contact, removeContactById}) => {
    const remove = () => removeContactById(contact.id);
    return (
        <ContactsListItemContainer>
            <span>{contact.name}: {contact.number}</span>
            <button className="deleteBtn" type="button" onClick={remove}>Delete</button>
        </ContactsListItemContainer>
    );
};

ContactsListItem.propTypes = {
    contact: PropTypes.object,
    removeContactById: PropTypes.func
};

export default ContactsListItem;