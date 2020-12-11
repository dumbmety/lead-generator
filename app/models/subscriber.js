const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps');

const subscriberSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

subscriberSchema.plugin(timestamps);

module.exports = mongoose.model('Subscriber', subscriberSchema);
