const mongoose = require('mongoose');

const badges = new mongoose.Schema ({
    name: {type: String, required: true},
    description: {type: String},
    emoji: {type: String}
    // roleId: (? Maybe.) {type: String},
});

const users = new mongoose.Schema ({
    userId: {type: String, required: true},
    serverId: {type: String, required: true},

    pointBalance: {type: Number, default: 0},
    currencyBalance: {type: Number, default: 0},
    rank: {type: String},
    badgeBalance: [badges]
});

// const ranks = new mongoose.Schema ({
    // rankName: {type: String, required: true},
    // rankNameAbbrv: {type: String, required: true},
    // roleId: (? Maybe.) {type: String},
    // pointValue: {type: Number}
//});

module.exports = mongoose.model('User', users);