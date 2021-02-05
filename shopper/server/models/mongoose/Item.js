const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    sku: {type: Number, required: true, index: {
        unique: true
    }},
    name: {type: String, required: true},
    price: {type: Number, required: true}
}, {
    timestampe: true
});

module.exports = mongoose.model('Item', ItemSchema);