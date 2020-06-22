const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const { check, validationResult } = require('express-validator');
const config = require('config');

const User = require('../models/User');
const Contact = require('../models/Contact');

// @route   POST api/contacts
// @desc    get all user contacts
// @access  PRIVATE
try {
    router.get('/', auth, async (req, res) => {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });

        res.json(contacts);
    });
} catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
}

// @route   POST api/contacts
// @desc    add contact
// @access  PRIVATE
router.post('/', auth, (req, res) => {
    res.send('add contact');
});

// @route   PUT api/contacts/:id
// @desc    update a contact
// @access  PRIVATE
router.put('/:id', (req, res) => {
    res.send('update a contact');
});

// @route   DELETE api/contacts
// @desc    delete a contact
// @access  PRIVATE
router.delete('/:id', (req, res) => {
    res.send('delete a contact');
});

module.exports = router;