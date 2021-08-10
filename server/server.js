const express = require ('express');
const app = express();

const cors = require ('cors');

app.use(cors())

app.use(express.json());
const MongoClient = require ('mongodb').MongoClient;
const createRouter = require ('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
        const db = client.db('co2Data');
        const carbonCollection = db.collection('carbon');
        const carbonRouter = createRouter(carbonCollection);
        app.use('/api/carbon', carbonRouter)
    })

    
    .catch(console.error)

    app.listen(5000, function(){
        console.log(`Server running on port ${this.address().port}`)

    })
