const mongoose = require('mongoose');
const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
    },
    ratings: {
        type: String,
    },
    address: {
        type: String,
    },
    image: {
        type: String,
    }
});
module.exports = Item = mongoose.model('item', ItemSchema);