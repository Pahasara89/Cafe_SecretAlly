const router = require("express").Router();
const multer = require('multer');
const path = require('path');
const alert = require('alert');
const Mongoose = require('mongoose');
let Payment_Details = require("../models/Payment_Details");

//image upload
const storage = multer.diskStorage ({
    destination : (req, file, cb) => {
        cb(null, 'backend/uploads');
    },

    filename : (req,file,cb) => {
        cb(null, Date.now() + file.originalname)
    }
    
});

const upload = multer({
    storage:storage,
    
}).single('image')


router.post('/add_Payment', upload, async(req,res)=>{

    const newPayment_Details = new Payment_Details({

        Pay_ID: req.body,

        BanK_Oner_Name: req.body.BanK_Oner_Name,
        Pay_date: req.body.Pay_date,

        BanKName: req.body.BanKName,
        Card_No: req.body.Card_No,
        Expiry: req.body.Expiry,
        Cvv: req.file.Cvv,

        Strees_Address: req.body.Strees_Address,
        City: req.body.City,
        State: req.body.State,
        Zip_Code: req.body.Zip_Code,

        Order_ID: req.body.Order_ID,
        Totle_price: req.body.Totle_price,
        
    })

    const totalNumberOfPaymentInDb = await Payment_Details.countDocuments()

    // convert number to string, so we can concatenate 0s easily...
    
        let numberToString = totalNumberOfPaymentInDb.toString()
    
    
    
        // If length of number string is less than 5 then add leading 0s in nuberToString
    
        if(numberToString.length < 5){
    
            for (let i = numberToString.length; i < 5; i++){
    
                numberToString = '0' + numberToString
    
            }
    
        }
    
        newPayment_Details.Pay_ID = `PAY${numberToString}`

    newPayment_Details.save().then(()=>{
        alert('Payment successfully');
        res.redirect('http://localhost:3000/add_Payment');

    }).catch((err)=>{
        alert('Payment Failed');
        res.redirect('http://localhost:3000/add_Payment');
        console.log(err);
    })

})



router.route("/view_Payment").get((req,res)=>{
    Payment_Details.find().then((Payment_Details)=>{
        res.json(Payment_Details)
    }).catch((err)=>{
        console.log(err)
    })
})


/*
router.route("/update_Payment_Details/:ID").put(async(req,res)=>{
    let Pay_ID = req.body.ID;
    const {productName} = req.body;
    const {category} = req.body;
    const {price} = req.body;
    const {quantity} = req.body;
    const {size} = req.body;

    const Update = {
        productName,
        category,
        price,
        quantity,
        size,
    }

    const update = await Product.findByIdAndUpdate(productId, Update).then(()=>{
        res.status(200).send({status: "Price updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating price", error: err.message});
    })
})
*/



/*

router.route("/update/quantity/:ID").put(async(req,res)=>{
    let productId = req.params.ID;
    const {quantity} = req.body;

    const Update = {
        quantity,
    }

    const update = await Product.findByIdAndUpdate(productId, Update).then(()=>{
        res.status(200).send({status: "Price updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating price", error: err.message});
    })
})
*/

router.route("/delete/:id").delete(async(req,res)=>{
    const id = req.params.id;

    await Payment_Details.findByIdAndRemove(id).exec().then(()=>{
        res.status(200).send({status: "Payment Details deleted"})
        
    }).catch((err)=>{
        res.status(500).send({status: "Error with deleting Payment Details", error: err.message});
    })
})

module.exports = router;
    


