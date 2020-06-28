import React from 'react';

const ContactItem = ({ contact }) => {
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
                <button className='btn btn-dark btn-sm'>Edit</button>
                <button className='btn btn-danger btn-sm'>Delete</button>
            </p>
        </div>
    );
}

export default ContactItem;
