const express = require('express');
const ObjectID = require('mongodb').ObjectId;

const createRouter = function(collection) {

  const router = express.Router();

  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });

  router.post('/', (req, res) => {
    const newData = req.body;
    collection
    .insertOne(newData)
    .then((result) =>{
        newData['_id'] = result['insertedId']
        res.json(newData)
    })
    .catch( (err) => {
        console.error(err)
        error.status(500)
        res.json ({ status:500 , error: err});
  });
});

  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    delete updatedData._id

    collection
    .updateOne({_id: ObjectID(id)}, {$set: updatedData})
    .then(result => {
      res.json(result);
    })
    .catch( (err) => {
      console.error(err)
      error.status(500)
      res.json ({ status:500 , error: err});
    });
  }); 

  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection
    .deleteOne({ _id: ObjectID(id) })
    .then(result => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  }); 

  



  


  return router;
};


module.exports = createRouter;