const router = require("express").Router();
const { response } = require("express");
const { create } = require("../models/Customer");
let Customer = require("../models/Customer");


router.route("/add").post((req,res)=>{

    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const complaint = req.body.complaint;

    const newCustomer = new Customer({

        first_name,
        last_name,
        email,
        complaint
    })

    newCustomer.save().then(()=>{
        res.json("Complaint Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Customer.find().then((Customer)=>{
        res.json(Customer)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res)=>{

    let userId = req.params.id;
    const {first_name,last_name,email,complaint}=req.body;

    const updateCustomer = {
        first_name,
        last_name,
        email,
        complaint
    }

    const update = await Customer.findByIdAndUpdate(userId,updateCustomer).then(()=>{
        res.status(200).send({status: "Complaint Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data",customer:update});
    })  
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await Customer.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "Complaint deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete complaint",error: err.message});
    })
})
router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;  
    const user = await Customer.findById(userId).then((customer)=>{
        res.status(200).send({status: "User fetched",customer:customer})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error: err.message});
    })
})

module.exports = router;