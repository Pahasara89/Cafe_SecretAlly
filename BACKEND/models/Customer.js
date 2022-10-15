const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({

    first_name :{
        type : String,
        required: true
    },
    last_name :{
        type : String,
        required: true
    },
    email :{
        type: String,
        required: true
    },
    complaint :{
        type: String,
        required: true
    }

})

const Customer = mongoose.model("Complaint",customerSchema);

module.exports = Customer;