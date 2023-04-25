const express = require('express');
const router = express.Router();
const Item = require('../../models/Item');
// const Item = require('../../models/Item');

// router.get('/', (req, res) => {res.send('testing get / item route')});
router.get('/', (req, res) => {
    Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(404).json({noitemsfound: 'No Items found'}));
});
// router.get('/:id', (req, res) => {res.send('testing get /:id route')});
router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(404).json({noitemfound: 'No Item found'}));
});
// router.post('/', (req, res) => {res.send('testing post / route')});
router.post('/', (req, res) => {
    Item.create(req.body)
    .then((item) => res.json({msg:'Item added successfully'}))
    .catch((err) => res.status(400).json({error: 'Unable to add this item'}));
});
// router.put('/:id', (req, res) => {res.send('testing put /:id route')});
router.put('/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body)
    .then((item) => res.json({msg: 'Updated successfully'}))
    .catch((err) =>
        res.status(400).json({error: 'Unable to update the database'}));
});

router.delete('/:id', (req, res) => {
    Item.findByIdAndRemove(req.params.id, req.body)
    .then((item) => res.json({mgs: 'Item entry deleted successfully'}))
    .catch((err) => res.status(404).json({error: 'No such item'}));
});

// router.post('/', (req, res) => {
//     Item.create(req.body)
//     .then((item) => res.json({msg:'Item added successfully'}))
//     .catch((err) => res.status(400).json({error: 'Unable to add this item'}));
// });

module.exports = router;