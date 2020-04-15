const express = require('express');

const db = require('../data/db-config');

const router = express.Router();

//retrieve list of cars
router.get('/', (req, res) => {
    db('cars')
    .then(car => {
      res.json(car); 
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to get cars' });
    });
});


//find cars by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    db('cars').where({ id }).first()
    .then(car => {
      res.json(car);
    }) 
    .catch (err => {
      res.status(500).json({ message: 'Failed to get specific car' });
    });
  });


  //add a car
    router.post('/', (req, res) => {
        const CD = req.body;
        db('cars').insert(CD)
        .then(ID => {
            db('cars').where({ id: ID[0] })
            .then(newCar => {
                res.status(201).json(newCar);
            });
        })
            .catch (err => {
            console.log('Error, could not add car', err);
            res.status(500).json({ message: "Failed to add new data" });
    });
});

  //delete car by id
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db('cars')
        .where({id})
        .del()
        .then((car) => {
            if(car){ res.status(200).json({message: "The car was deleted succesfully"})
            } else {
                res.status(404).json({message: "The car was not found", })
            }
        })
        .catch((err) =>
            res.status(500).json({ message: "Error, failed to delete car ", err })
        );
  });

  //edit car
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    db('cars')
        .where({id})
        .update(changes)
        .then((car) => {
            if(car){ res.status(200).json(changes)
            } else {
                res.status(404).json({message: "The car was not found" })
          }
      })
      .catch((err) =>
      res.status(500).json({ message: "Error, failed to update the car ", err })
      );
});

module.exports = router;