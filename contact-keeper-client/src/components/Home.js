import React from 'react';
import Contacts from './contacts/Contacts';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <div className='grid-2'>
                <div>
                    {
                        //contact form
                    }
                </div>
                <Contacts />
            </div>
        </Container>
    );
}

export default Home;