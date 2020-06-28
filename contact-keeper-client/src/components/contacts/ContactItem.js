import React from 'react';

const ContactItem = ({ contact }) => {
    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {contact.name}
            </h3>
        </div>
    );
}

export default ContactItem;
