const express = require ('express');
const app = express();

const cors = require ('cors');

app.use(cors())

app.use(express.json());
const MongoClient = require ('mongodb').MongoClient;
const createRouter = require ('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
        const db = client.db('carbonData');
        const transportCollection = db.collection('transport');
        const dietCollection = db.collection('diet');
        const transportCollection = createRouter(transportCollection);
        const dietCollection = createRouter(dietCollection);
        })

        app.use('/api/transport', transportRouter)
        app.use('/api/diet',dietRouter)
    
    .catch(console.error)

    app.listen(5000, function(){
        console.log(`Server running on port ${this.address().port}`)

    })
