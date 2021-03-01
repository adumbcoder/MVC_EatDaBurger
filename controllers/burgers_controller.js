const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', (req,res) => {
    burger.all((data) => {
        const hbsObject = {
            burger: data,
        };
        res.render('index', (hbsObject));
    });
});

router.post ('/api/burgers', (req, res) => {
    burger.create(req.body.burger_name, (result) => {
        res.json({id: result.id});
    });
});

router.put('/api/burgers/:id', (req, res) => {
    //store the burgers id in a variable
    const burgerId = req.body.id;
    burger.update(burgerId, (result) => {
        res.json({id: result.id});
    });
});


module.exports = router;
