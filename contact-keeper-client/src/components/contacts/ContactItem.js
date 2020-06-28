import React from 'react';

const ContactItem = ({ contact }) => {
    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {contact.name} <span className={'badge ' + contact.type === 'professional' ? 'badge-success' : 'badge-primary'}>{contact.type}</span>
            </h3>
        </div>
    );
}

export default ContactItem;
