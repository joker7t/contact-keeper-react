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
router.get('/', auth, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }

    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });

        res.json(contacts);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
});

// @route   POST api/contacts
// @desc    add contact
// @access  PRIVATE
router.post('/', [
    auth,
    [
        check('name', 'Name is required').not().isEmpty()
    ]
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;
    try {
        const newContact = new Contact({
            name,
            email,
            phone,
            type,
            user: req.user.id
        });

        const contact = await newContact.save();
        res.json(contact);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
});

// @route   PUT api/contacts/:id
// @desc    update a contact
// @access  PRIVATE
router.put('/:id', auth, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    //Build contact object
    const contactFields = {};
    if (name) contactFields.name = name;
    if (email) contactFields.email = email;
    if (phone) contactFields.phone = phone;
    if (type) contactFields.type = type;

    try {
        let contact = await Contact.findById(req.params.id);

        if (!contact) return res.status(404).json({ msg: 'Contact not found' });

        console.log(req.user.id);
        console.log(contact.user.toString());

        //Make sure user owns contact
        if (contact.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        contact = await Contact.findByIdAndUpdate(req.params.id, { $set: contactFields }, { new: true });

        res.json(contact);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
});

// @route   DELETE api/contacts
// @desc    delete a contact
// @access  PRIVATE
router.delete('/:id', auth, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }

    try {
        let contact = await Contact.findById(req.params.id);

        if (!contact) return res.status(404).json({ msg: 'Contact not found' });

        console.log(req.user.id);
        console.log(contact.user.toString());

        //Make sure user owns contact
        if (contact.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        await Contact.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Contact deleted' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;