import React from 'react';
import PropTypes from "prop-types";
import { deleteContact, setSelectedContact, clearSelectedContact, deleteFilterContact } from '../../actions/contactAction';
import { connect } from 'react-redux';
import axios from 'axios';

const ContactItem = ({ contact, deleteContact, setSelectedContact, clearSelectedContact, selectedContact, deleteFilterContact }) => {

    const onDelete = (id) => {
        axios.delete(`/api/contacts/${id}`);
        if (selectedContact && id === selectedContact._id) {
            clearSelectedContact();
        }
        deleteFilterContact(id);
        deleteContact(id);
    }

    const onEdit = (contact) => {
        setSelectedContact(contact);
    }

    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {contact.name} <span style={{ float: 'right' }} className={contact.type === 'professional' ? 'badge badge-success' : 'badge badge-primary'}>
                    {contact.type.charAt(0).toUpperCase() + contact.type.slice(1)}
                </span>
            </h3>
            <ul className='list'>
                {contact.email &&
                    <li>
                        <i className='fa fa-envelope-open'> {contact.email}</i>
                    </li>
                }
                {contact.phone &&
                    <li>
                        <i className='fa fa-phone'> {contact.phone}</i>
                    </li>
                }
            </ul>
            <p>
                <button className='btn btn-dark btn-sm' onClick={() => onEdit(contact)}>Edit</button>
                <button className='btn btn-danger btn-sm' onClick={() => onDelete(contact._id)}>Delete</button>
            </p>
        </div>
    );
}

ContactItem.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    setSelectedContact: PropTypes.func.isRequired,
    clearSelectedContact: PropTypes.func.isRequired,
    deleteFilterContact: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    selectedContact: state.contact.selectedContact
});

export default connect(mapStateToProps, { deleteContact, setSelectedContact, clearSelectedContact, deleteFilterContact })(ContactItem);
