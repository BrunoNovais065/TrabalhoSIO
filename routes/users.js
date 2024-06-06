var express = require('express');
var router = express.Router();
var GraphController = require('../controllers/getGraphsController');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,year: '2023'});
});

router.get('/otheryear2023', function(req, res, next) {
  res.render('index', { title: 'Express' ,year: '2023'});
});
router.get('/otheryear2024', function(req, res, next) {
  res.render('yearNotWork', { title: 'Express' ,year: '2024'});
});
router.get('/otheryear2022', function(req, res, next) {
  res.render('yearNotWork', { title: 'Express' ,year: '2022'});
});
router.get('/otheryear2021', function(req, res, next) {
  res.render('yearNotWork', { title: 'Express' ,year: '2021'});
});
router.get('/otheryear2020', function(req, res, next) {
  res.render('yearNotWork', { title: 'Express' ,year: '2020'});
});

//router para paginas da diretory 5
router.get('/directory5/ElectroTech', GraphController.getGraphsdiagram5);

router.post('/directory1', GraphController.getGraphsdiagram1);

router.post('/directory2', GraphController.getGraphsdiagram2);

router.post('/directory3', GraphController.getGraphsdiagram3);

router.post('/directory4', GraphController.getGraphsdiagram4);

router.post('/directory5', GraphController.getGraphsdiagram5);

router.post('/directory6', GraphController.getGraphsdiagram6);


module.exports = router;
