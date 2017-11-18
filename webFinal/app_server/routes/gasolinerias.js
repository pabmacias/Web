var express = require('express');
var router = express.Router();
var gasolineriasController = require('../controllers/gasolineriasController');

/* GET gasolinerias page. */
router.get('/',gasolineriasController.getAll);

router.post('/insert', gasolineriasController.insert);

module.exports = router;
