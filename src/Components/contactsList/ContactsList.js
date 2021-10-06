import React from 'react';
import ContactsListItem from '../contactsListItem/ContactsListItem';
import PropTypes from 'prop-types';
import ContactsListContainer from './ContactsListStyled';

const ContactsList = ({contacts, removeContactById}) => {
    return (
        <ContactsListContainer>
            {contacts.map((contact)=> 
                <ContactsListItem contact={contact} removeContactById={removeContactById}/>
            )}
        </ContactsListContainer>
    );
};

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    removeContactById: PropTypes.func
};

export default ContactsList;

