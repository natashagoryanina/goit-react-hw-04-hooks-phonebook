import React, { useState, useEffect } from 'react';
import ContactsForm from './contactsForm/ContactsForm';
import ContactsList from './contactsList/ContactsList';
import Filter from './filter/Filter';
import GlobalStyles from '../styles/globalStyles';

const App = () => {
    const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? []);
    const [filter, setFilter] = useState('');
 
    useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(contacts));
        
    }, [contacts]);

    const addContact = (contact) => {
        const isCopy = contacts.some((item) => 
               item.name.toLowerCase() === contact.name.toLowerCase()
            );
        if(isCopy) {
            alert(`${contact.name} is already in contacts.`);
            return;
        }
        setContacts((prev) => [...prev, contact]);
    };

    const removeContactById = (id) => {
        setContacts((prev) => [...prev.filter(contact => contact.id !== id)]);
    };

    const onFilterChange = (e) => {
        const {value} = e.target;
        setFilter(`${value}`);
    };

    const contactsFilter = () => {
        return contacts.filter(contact => 
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    const visibleContacts = contactsFilter();

    return (
        <main>
            <GlobalStyles></GlobalStyles>
            <h1>Phonebook</h1>
            <ContactsForm addContact={addContact}/>
            <Filter 
                value={filter} 
                onChange={onFilterChange}
            />
            <h2>Contacts</h2>
            <ContactsList 
                contacts={visibleContacts} 
                removeContactById={removeContactById}
            />
        </main>

    );
};

export default App;
