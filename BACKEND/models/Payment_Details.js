const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Payment_DetailsSchema = new Schema({

    ID: {
        type : String,
    },
    Pay_ID: {
        type:String,
        
    },


    BanK_Owner_Name : {
        type : String,
        required : true,
    },
    Pay_date : {
        type : Date,
        required : true
    },
/*----------------------------------------*/

    BanKName : {
        type : String,
        required : true,
    },
    Card_No : {
        type : Number,
        required : true,
        unique: true,
    },
    Expiry : {
        type : String,
        required : true
    },
    Cvv : {
        type: Number,
        required: true
    },
 /*----------------------------------------*/   
    
    Strees_Address : {
        type: String,
        required: true
    },
    City : {
        type: String,
        required: true
    },
    State : {
        type: String,
        required: true
    },
    Zip_Code : {
        type: String,
        required: true
    },

/*----------------------------------------*/
    Order_ID : {
        type: String,
        required: true
    },
    Totle_price : {
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