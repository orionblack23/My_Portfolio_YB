const mongoose = require ('mongoose');

const blogSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    category: String,
    title: { type: String, require: true},
    description: { type: String, require: true},
    content: { type: String, require: true},
    authorSitation: String,
    author: { type: String, require: true},
    conclusion: String
});

module.exports = mongoose.model('Product', blogSchema);