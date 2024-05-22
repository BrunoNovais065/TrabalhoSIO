var express = require('express');
var router = express.Router();
var GraphController = require('../controllers/getGraphsController');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/directory1', GraphController.getGraphsdiagram1);

router.post('/directory2', GraphController.getGraphsdiagram2);

router.post('/directory3', GraphController.getGraphsdiagram3);

router.post('/directory4', GraphController.getGraphsdiagram4);

router.post('/directory5', GraphController.getGraphsdiagram5);

router.post('/directory6', GraphController.getGraphsdiagram6);

module.exports = router;
