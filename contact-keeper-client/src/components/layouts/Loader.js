import React from 'react';
import { Spinner } from "react-bootstrap";

const Loader = () => {
    return (
        <div className="main-spinner-container">
            <Spinner animation="border" className="main-spinner" />
        </div>
    );
};

export default Loader;
