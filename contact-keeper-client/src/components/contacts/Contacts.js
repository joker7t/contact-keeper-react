import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { getContacts } from '../../actions/contactAction';
import { setIsLoading } from '../../actions/controlAction';
import { connect } from 'react-redux';
import axios from 'axios';
import Loader from '../layouts/Loader';
import ContactItem from './ContactItem';

const Contacts = ({ isLoading, contacts, setIsLoading, getContacts }) => {

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const loadedContacts = await axios.get('/api/contacts');

                // getContacts(loadedContacts);
            } catch (error) {
                console.log(error);
            }
            setIsLoading(false);
        }

        fetchContacts();

        //eslint-disable-next-line
    }, []);

    const showContacts = () => (
        contacts.map((contact, i) =>
            <ContactItem key={i} contact={contact} />
        )
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
    setIsLoading: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    isLoading: state.control.isLoading,
    contacts: state.contact.contacts
});

export default connect(mapStateToProps, { getContacts, setIsLoading })(Contacts);