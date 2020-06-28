import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { addContact, clearSelectedContact, updateContact } from '../../actions/contactAction';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import axios from 'axios';

const ContactForm = ({ addContact, selectedContact, clearSelectedContact, updateContact }) => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    useEffect(() => {
        const loadContact = () => {
            try {
                if (selectedContact) {
                    setContact(selectedContact);
                } else {
                    setContact({
                        name: '',
                        email: '',
                        phone: '',
                        type: 'personal'
                    });
                }
            } catch (error) {
                console.log(error);
            }
        }

        loadContact();

    }, [selectedContact]);

    const onChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if (selectedContact) {
            onEditContact();
        } else {
            onAddContact();
        }
    }

    const onAddContact = async () => {
        contact._id = v4();

        // await axios.post();
        addContact(contact);
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        });
    }

    const onEditContact = async () => {
        // await axios.put();
        updateContact(contact);
    }

    const onClear = () => {
        clearSelectedContact();
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        });
    }

    const getTitle = () => selectedContact ? 'Edit Contact' : 'Add Contact';

    return (
        <form onSubmit={onSubmit}>
            <h2 className='text-primary'>{getTitle()}</h2>
            <input type='text' placeholder='Name' name='name' required value={contact.name} onChange={onChange} />
            <input type='email' placeholder='Email' name='email' value={contact.email} onChange={onChange} />
            <input type='text' placeholder='Phone' name='phone' value={contact.phone} onChange={onChange} />
            <h5>Contact Type</h5>
            <input type='radio' name='type' value='personal' checked={contact.type === 'personal'} onChange={onChange} /> Personal{' '}
            <input type='radio' name='type' value='professional' checked={contact.type === 'professional'} onChange={onChange} /> Professional
            <button type='submit' className='btn btn-primary btn-block'>{getTitle()}</button>
            {selectedContact && <button className='btn btn-block' onClick={onClear}>Clear</button>}
        </form>
    );
}

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
    clearSelectedContact: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    selectedContact: state.contact.selectedContact
});

export default connect(mapStateToProps, { addContact, clearSelectedContact, updateContact })(ContactForm);
