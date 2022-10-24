const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Payment_DetailsSchema = new Schema({

    ID: {
        type : String,
    },
    userId: {
        type:String,
        
    },


    productName : {
        type : String,
        required : true,
    },

/*----------------------------------------*/

    
   
    
    
 /*----------------------------------------*/   
    
    
    quantity : {
        type: String,
        required: true
    },
    discount : {
        type: String,
        required: true
    },

/*----------------------------------------*/
    product_id : {
        type: String,
        required: true
    },
    price : {
        type : Number,
        required : true
    },
    
    /*image : {
        type : String,
        required : true,
        unique : true
    }*/
    

    
})

const Payment_Details = mongoose.model("Payment_Details",Payment_DetailsSchema);

module.exports = Payment_Details;