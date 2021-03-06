import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { getContacts } from '../../actions/contactAction';
import { setIsLoading } from '../../actions/controlAction';
import { connect } from 'react-redux';
import axios from 'axios';
import Loader from '../layouts/Loader';
import ContactItem from './ContactItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Contacts = ({ isLoading, contacts, setIsLoading, getContacts, filteredContacts }) => {
    const [contactItems, setContactItems] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                setIsLoading(true);
                const loadedContacts = await axios.get('/api/contacts');
                getContacts(loadedContacts.data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.log(error);
            }
        }

        fetchContacts();

        //eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (filteredContacts) {
            setContactItems(filteredContacts);
        } else {
            setContactItems(contacts);
        }
    }, [contacts, filteredContacts]);

    const showContacts = () => (
        <TransitionGroup>
            {contactItems.map((contactItem, i) =>
                <CSSTransition key={i} timeout={500} classNames='item'>
                    <ContactItem contact={contactItem} />
                </CSSTransition>
            )}
        </TransitionGroup>
    );

    return (
        <div>
            {isLoading ? <Loader /> :
                <div>
                    {showContacts()}
                </div>
            }
        </div>
    );
}

Contacts.propTypes = {
    getContacts: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    setIsLoading: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    isLoading: state.control.isLoading,
    contacts: state.contact.contacts,
    filteredContacts: state.contact.filteredContacts
});

export default connect(mapStateToProps, { getContacts, setIsLoading })(Contacts);