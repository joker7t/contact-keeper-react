import React from 'react';
import Contacts from './contacts/Contacts';
import { Container } from 'react-bootstrap';
import ContactForm from './contacts/ContactForm';
import ContactFilter from './contacts/ContactFilter';

const Home = () => {
    return (
        <Container>
            <div className='grid-2'>
                <div>
                    <ContactForm />
                </div>
                <div>
                    <ContactFilter />
                    <Contacts />
                </div>
            </div>
        </Container>
    );
}

export default Home;