const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    productName: {
        type: String
    },

    price:{
        type: Number
    },
    product_id:{
      type: Number
    },

    discount: {
        type: String
    },
    quantity:{
      type:Number
    },

    userId:{
      type: String
    }

})

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;