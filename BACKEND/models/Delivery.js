const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deliverySchema = new Schema({

    deliveryId: {
        type: String,
    },

    customerName : {
        type : String,
        required: true
    },
    orderID : {
        type : String,
        required: true
    },
    customerContactNumber : {
        type: Number,
        required: true
    },
    deliveryAddress : {
        type: String,
        required: true
    },
    noofOrders : {
        type: Number,
        required: true
    },
    driverName : {
        type: String,
        required: true
    },
    driverContactNumber : {
        type: String,
        required: true
    },
    deliveryDate : {
        type: Date,
        required: true
    }
})

const Delivery = mongoose.model("Delivery", deliverySchema);

module.exports = Delivery;

