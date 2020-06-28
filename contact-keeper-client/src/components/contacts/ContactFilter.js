import React, { useState } from 'react';
import PropTypes from "prop-types";
import { filterContacts, clearFilterContacts } from '../../actions/contactAction';
import { connect } from 'react-redux';

const ContactFilter = ({ filterContacts, clearFilterContacts }) => {
    const [filterKey, setFilterKey] = useState('');

    const onChange = (e) => {
        setFilterKey(e.target.value);

        if (e.target.value === '') {
            clearFilterContacts();
        } else {
            filterContacts(e.target.value);
        }
    }

    return (
        <div>
            <input type='text' name='filterKey' value={filterKey} onChange={onChange} placeholder='Input to filter contacts...' />
        </div>
    );
}

ContactFilter.propTypes = {
    filterContacts: PropTypes.func.isRequired,
    clearFilterContacts: PropTypes.func.isRequired
};

export default connect(null, { filterContacts, clearFilterContacts })(ContactFilter);
