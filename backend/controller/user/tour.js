const dbconnection = require('../../connection/connection');


exports.displayTours = async (req, resp) => {
    let db = await dbconnection();
    let collection = db.collection('tour');

    const data = await collection.find().toArray();
    resp.send(data);
};


exports.getTourById = async (req, resp) => {
    try {
        const { title } = req.params;

        let db = await dbconnection();
        let collection = db.collection('tour');

        const tour = await collection.findOne({ title });


        resp.json(tour);
    } catch (err) {
        console.error(err);
        resp.status(500).json({ error: 'Internal server error' });
    }
};
