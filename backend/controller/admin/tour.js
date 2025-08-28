const dbconnection = require('../../connection/connection');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

exports.displayTours = async (req, resp) => {
    try {
        const db = await dbconnection();
        const collection = db.collection('tour');

        const page = parseInt(req.query._page) || 1;
        const limit = 10;
        const skip = (page - 1) * limit;

        const data = await collection.find().skip(skip).limit(limit).toArray();
        resp.status(200).json(data);
    } catch (error) {
        console.error("Error in displayTours:", error);
        resp.status(500).json({ message: "Failed to fetch tours", error: error.message });
    }
};
exports.insertTours = [
    upload.single('image'),
    async (req, res) => {
        try {
            const db = await dbconnection();
            const collection = db.collection('tour');

            const data = {
                title: req.body.title,
                image: req.file ? req.file.filename : null,
                startingplace: req.body.startingplace,
                endingplace: req.body.endingplace,
                startingdate: new Date(req.body.startingdate),
                endingdate: new Date(req.body.endingdate),
                km: parseInt(req.body.km),
                price: parseFloat(req.body.price),
                places: JSON.parse(req.body.places),
                nightpoints: JSON.parse(req.body.nightpoints),
            };

            const result = await collection.insertOne(data);
            res.status(200).send(result);

        } catch (err) {
            console.error("Backend error:", err);
            res.status(500).json({ message: "Server Error", error: err.message });
        }
    }
];

exports.deleteTours = async (req, resp) => {
    const db = await dbconnection();
    const collection = db.collection('tour');

    const { deletetitle } = req.body;
    const result = await collection.deleteOne({ title: deletetitle });

    if (result.deletedCount > 0) {
        resp.json({ success: true, message: "Tour deleted successfully" });
    } else {
        resp.json({ success: false, message: "Tour not found" });
    }

}

exports.updateTours = async (req, resp) => {
    const db = await dbconnection();
    const collection = db.collection('tour');


    const { currentTitle, newTitle, startingPlace, endingPlace, startingDate, endingDate, estimatedKm, tourPrice, currentPlace, currentPoint, newPlace, newPoint } = req.body;

    const result = await collection.updateOne(
        {
            title: currentTitle,
            "places.place": currentPlace,
            "nightpoints.point": currentPoint

        },
        {
            $set: {
                title: newTitle,
                startingplace: startingPlace,
                endingplace: endingPlace,
                startingdate: startingDate,
                endingdate: endingDate,
                km: estimatedKm,
                price: tourPrice,
                "places.$.place": newPlace,
                "nightpoints.$.point": newPoint

            }
        }
    );
    if (result.modifiedCount > 0) {
        resp.json({ success: true, message: "Tour update successfully" });
    } else {
        resp.json({ success: false, message: "Tour not found" });
    }
}


exports.allorders = async (req, res) => {

    let db = await dbconnection();
    const collection = db.collection('orders');
    const { tourId, tourTitle, username, passengers, totalPrice, razorpayPaymentId, razorpayOrderId, totalPassenger } = req.body;

    const data = {
        tourId: tourId,
        tourName: tourTitle,
        username: username,
        passengers: passengers,
        totalPassenger: totalPassenger,
        totalamount: totalPrice,
        PaymentId: razorpayPaymentId,
        OrderId: razorpayOrderId,
    }
    const result = await collection.insertOne(data);
    res.status(200).send(result);

}

exports.displayusers = async (req, resp) => {
    let db = await dbconnection();
    let collection = db.collection('users');
    const data = await collection.find().toArray();
    resp.send(data);
}


exports.displayorders = async (req, resp) => {
    let db = await dbconnection();
    let collection = db.collection('orders');
    const data = await collection.find().toArray();
    resp.send(data);
}

exports.getUserOrders = async (req, res) => {
    try {
        const db = await dbconnection();
        const collection = db.collection('orders');

        const { username } = req.params;

        if (!username) {
            return res.status(400).json({ success: false, message: "Username is required" });
        }

        const orders = await collection.find({ username }).toArray();

        if (orders.length === 0) {
            return res.status(404).json({ success: false, message: "No orders found for this user" });
        }

        res.status(200).json({ success: true, orders });
    } catch (err) {
        console.error("Error fetching user orders:", err);
        res.status(500).json({ success: false, message: "Server Error", error: err.message });
    }
};
