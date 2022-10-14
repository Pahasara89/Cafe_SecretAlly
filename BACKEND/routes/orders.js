const router = require("express").Router();
let Order = require("../models/Order");

//add new orders
router.route("/addOrder").post(async (req, res) => {
    const orderID =  req.body.orderID;
    const customerName = req.body.customerName;
    const customerContactNumber = Number(req.body.customerContactNumber);
    const deliveryAddress = req.body.deliveryAddress;

    const newOrder = new Order({
        orderID,
        customerName,
        customerContactNumber,
        deliveryAddress,
    })

    const totalNumberOfOrderInDb = await Order.countDocuments()

    // convert number to string, so we can concatenate 0s easily...

    let numberToString = totalNumberOfOrderInDb.toString()



    // If length of number string is less than 5 then add leading 0s in nuberToString

    if (numberToString.length < 5) {

        for (let i = numberToString.length; i < 5; i++) {

            numberToString = '0' + numberToString

        }

    }

    newOrder.orderID = `ORD${numberToString}`


    newOrder.save().then(() => {
        res.json("Order Details Added Successfully")
    }).catch((err) => {
        console.log(err);
    })
})

//get all order details

router.route("/view").get((req, res) => {
    Order.find().then((orders) => {
        res.json(orders)
    }).catch((err) => {
        console.log(err)
    })
})

//update order details

router.route("/updateOrder/:ID").put(async (req, res) => {
    let orderID = req.body.ID;
    const { customerName, customerContactNumber, deliveryAddress} = req.body;

    const updateOrder = {
        customerName,
        customerContactNumber,
        deliveryAddress
    }

    const update = await Order.findByIdAndUpdate(orderID, updateOrder).then(() => {
        res.status(200).send({ status: "Order Details Updated" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with Updating Order Details", error: err.message });
    })
})

//delete order details

router.route("/deleteOrder/:id").delete(async (req, res) => {
    let orderID = req.params.id;

    await Order.findByIdAndDelete(orderID).then(() => {
        res.status(200).send({ status: "Order Details Deleted" });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with Deleting Order Details", error: err.message });
    })
})

//get single delivery

router.route("/getOrder/:id").get(async (req, res) => {
    let orderID = req.params.id;
    const item = await Order.findById(orderID).then((order) => {
        res.status(200).send({ status: "Order Details Fetched", order })
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({ status: "Error with getting Order Details", error: err.message });
    })
})

module.exports = router;