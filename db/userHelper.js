const User = require('../models/User');

async function getOrCreateUser(userId, serverId) {
    let user = await User.findOne({userId, serverId});
    
    if (!user) {
        user = new User({userId, serverId});
        await user.save();
    }
    return user;
};

module.exports = {
    getOrCreateUser
}