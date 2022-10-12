const router = require("express").Router();
let Delivery = require("../models/Delivery");

//add new deliveries
router.route("/addDelivery").post(async (req, res) => {
    const deliveryId = req.body;
    const customerName = req.body.customerName;
    const customerContactNumber = Number(req.body.customerContactNumber);
    const deliveryAddress = req.body.deliveryAddress;
    const orderCategory = req.body.orderCategory;
    const quantity = Number(req.body.quantity);
    const driverName = req.body.driverName;
    const driverContactNumber = req.body.driverContactNumber;
    const deliveryDate = req.body.deliveryDate;

    const newDelivery = new Delivery({
        deliveryId,
        customerName,
        customerContactNumber,
        deliveryAddress,
        orderCategory,
        quantity,
        driverName,
        driverContactNumber,
        deliveryDate
    })

    const totalNumberOfDeliveryInDb = await Delivery.countDocuments()

    // convert number to string, so we can concatenate 0s easily...

    let numberToString = totalNumberOfDeliveryInDb.toString()



    // If length of number string is less than 5 then add leading 0s in nuberToString

    if (numberToString.length < 5) {

        for (let i = numberToString.length; i < 5; i++) {

            numberToString = '0' + numberToString

        }

    }

    newDelivery.deliveryId = `DID${numberToString}`


    newDelivery.save().then(() => {
        res.json("Delivery Details Added Successfully")
    }).catch((err) => {
        console.log(err);
    })
})

//get all delivery details

router.route("/").get((req, res) => {
    Delivery.find().then((deliveries) => {
        res.json(deliveries)
    }).catch((err) => {
        console.log(err)
    })
})

//update delivery details

router.route("/updateDelivery/:ID").put(async (req, res) => {
    let deliveryId = req.body.ID;
    const { customerName, customerContactNumber, deliveryAddress, orderCategory, quantity, driverName, driverContactNumber, deliveryDate } = req.body;

    const updateDelivery = {
        customerName,
        customerContactNumber,
        deliveryAddress,
        orderCategory,
        quantity,
        driverName,
        driverContactNumber,
        deliveryDate
    }

    const update = await Delivery.findByIdAndUpdate(deliveryId, updateDelivery).then(() => {
        res.status(200).send({ status: "Delivery Details Updated" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with Updating Delivery Details", error: err.message });
    })
})

//delete delivery details

router.route("/deleteDelivery/:id").delete(async (req, res) => {
    let deliveryId = req.params.id;

    await Delivery.findByIdAndDelete(deliveryId).then(() => {
        res.status(200).send({ status: "Delivery Details Deleted" });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with Deleting Delivery Details", error: err.message });
    })
})

//get single delivery

router.route("/getDelivery/:id").get(async (req, res) => {
    let deliveryId = req.params.id;
    const order = await Delivery.findById(deliveryId).then((delivery) => {
        res.status(200).send({ status: "Delivery Details Fetched", delivery })
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({ status: "Error with getting Delivery Details", error: err.message });
    })
})

//search deliveries based on the delivery date

router.post("/search", async (req, res) => {
    try {
        Delivery.find({
            deliveryDate: {
                $gte: new Date(req.body.fromDate),
                $lt: new Date(req.body.toDate),
            },
        })
            .then((result) => {
                res.json(result);
            });
    } catch (error) {
        res.status(500).send({ message: error });
    }
});

module.exports = router;