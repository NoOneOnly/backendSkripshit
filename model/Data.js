const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    companyname: {
        type: String,
        required: true
    },
    managementname: {
        type: String,
        required: true
    },
    baseFile: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Data', dataSchema);