const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ' users'
    },
    name: {
        type: String,
        requrie: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String
    },
    type: {
        type: String,
        default: 'peronsal'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('contact', ContactSchema);