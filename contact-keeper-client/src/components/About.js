import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <h1>About this app</h1>
            <p className='my-1'>
                This is a Full-stack React app for contact keeper.
            </p>
            <p className='bg-dark p'>
                <strong>Author: Toan Nguyen</strong>
            </p>
        </Container>
    );
}

export default About;
