const mongoose = require('mongoose');

const tasks = new mongoose.Schema ({
    taskName: {type: String, required: true},
    taskPriority: {type: String, required: true},

    assigneeId: {type: String, required: true},
    assignedId: {type: String, required: true},

    taskDeadline: {type: String, required: true},
    taskProgress: {type: String, required: true}
})

module.exports = mongoose.model('Task', tasks);