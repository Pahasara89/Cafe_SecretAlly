const router = require("express").Router();
const multer = require('multer');
const path = require('path');
const alert = require('alert');
const Mongoose = require('mongoose');
const express = require('express');
//const { default: Product } = reqconst router = express.Router();
const {Cart} = require("../models/Cart");

//get method to fetch data from products
// router.get('/display/:id', function(req,res){
//   Product.find({_id: req.params.id})
//   .exec(function(err, products){
//       if(err) {
//           console.log('error')
//       }else {
//           res.json(products);
//       }
//   });
// });

//post method to save data in cart
router.post("/insertCart", async (req, res) => {

  //save data got from the client into the carts collection in the DB
 
  const newCart = new Cart({

    userId: req.body.userId,

    productName: req.body.productName,
    price: req.body.price,

    product_id: req.body.product_id,
    discount: req.body.discount,
    quantity: req.body.quantity,
    
    
})

// const totalNumberOfuserInDb = await Cart.countDocuments()

// convert number to string, so we can concatenate 0s easily...

    // let numberToString = totalNumberOfuserInDb.toString()



    // // If length of number string is less than 5 then add leading 0s in nuberToString

    // if(numberToString.length < 5){

    //     for (let i = numberToString.length; i < 5; i++){

    //         numberToString = '0' + numberToString

    //     }

    

    //newCart.userId = ORD$`{numberToString}`

    newCart.save().then(()=>{
    alert('Payment successfully');
    //res.redirect('http://localhost:3000/add_Payment');
    return res.status(200).json({msg:"success"})

}).catch((err)=>{
    alert('Failed');
    //res.redirect('http://localhost:3000/add_Payment');
    return res.status(400).json({msg:"error"})
    console.log(err);
})
});


//get method to fetch data from cart
router.get('/:userId', function(req,res){
  Cart.find({userId: req.params.userId})
  .exec(function(err, carts){
      if(err) {
          console.log('error')
      }else {
          res.json(carts);
      }
  });
});

//delete from database
router.delete('/delete/:cartId',function (req,res){
  Cart.deleteOne({_id: req.params.cartId},function(err,Cart){
    if(err)
    res.json(err);
    else
    res.json("Successfully Deleted");
  });
});

// Defined edit route
router.get('/edit/:userId', function (req, res) {
  let id = req.params.userId;
  Cart.findById(id, function (err, cart){
      res.json(cart);
  });
});

  //update method
  router.put('/update/:cartId', function (req, res) {
    Cart.findById(req.params.cartId, function(err, cart) {
    if (!cart)
      res.status(404).send("data is not found");
    else {
        cart.quantity = req.body.quantity;

        cart.save().then(cart => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
  });

  router.route("/all").get((req,res)=>{
    User.find().then((users)=>{
        res.json(users)
    }).catch((err)=>{
        console.log(err)
    })
  });


module.exports = router;