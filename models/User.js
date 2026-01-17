const mongoose = require('mongoose');

const users = new mongoose.Schema ({
    userId: {type: String, required: true},
    serverId: {type: String, required: true},
});

// const ranks = new mongoose.Schema ({
    // rankName: {type: String, required: true},
    // rankNameAbbrv: {type: String, required: true},
    // roleId: (? Maybe.) {type: String},
    // pointValue: {type: Number}
//});

module.exports = mongoose.model('User', users);