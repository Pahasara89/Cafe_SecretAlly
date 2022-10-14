const express = require('express');
//const { default: Product } = require('../../src/components/Product');
const router = express.Router();
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
router.post("/insertCart", (req, res) => {

  //save data got from the client into the carts collection in the DB
  const cart = new Cart(req.body)

      cart.save((err) => {
          if(err) return res.status(400).json({ success: false, err})
          return res.status(200).json({ success: true})
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


module.exports = router;