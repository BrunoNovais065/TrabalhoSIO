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

//router para paginas da diretory 4


//router para paginas da diretory 5
router.get('/directory5/Electroteck', GraphController.getGraphsdiagram5Electroteck);
router.get('/directory5/Portugal/Electrotech', GraphController.getGraphsdiagram5PortugalElectrotech);
router.get('/directory5/Spain/Electrotech', GraphController.getGraphsdiagram5SpainElectrotech);
router.get('/directory5/Q1/Electrotech', GraphController.getGraphsdiagram5Q1Electrotech);
router.get('/directory5/Q2/Electrotech', GraphController.getGraphsdiagram5Q2Electrotech);
router.get('/directory5/Q3/Electrotech', GraphController.getGraphsdiagram5Q3Electrotech);
router.get('/directory5/Q4/Electrotech', GraphController.getGraphsdiagram5Q4Electrotech);
router.get('/directory5/January/Electrotech', GraphController.getGraphsdiagram5JanuaryElectrotech);
router.get('/directory5/February/Electrotech', GraphController.getGraphsdiagram5FebruaryElectrotech);
router.get('/directory5/March/Electrotech', GraphController.getGraphsdiagram5MarchElectrotech);
router.get('/directory5/April/Electrotech', GraphController.getGraphsdiagram5AprilElectrotech);
router.get('/directory5/May/Electrotech', GraphController.getGraphsdiagram5MayElectrotech);
router.get('/directory5/June/Electrotech', GraphController.getGraphsdiagram5JuneElectrotech);
router.get('/directory5/July/Electrotech', GraphController.getGraphsdiagram5JulyElectrotech);
router.get('/directory5/August/Electrotech', GraphController.getGraphsdiagram5AugustElectrotech);
router.get('/directory5/September/Electrotech', GraphController.getGraphsdiagram5SeptemberElectrotech);
router.get('/directory5/October/Electrotech', GraphController.getGraphsdiagram5OctoberElectrotech);
router.get('/directory5/November/Electrotech', GraphController.getGraphsdiagram5NovemberElectrotech);
router.get('/directory5/December/Electrotech', GraphController.getGraphsdiagram5DecemberElectrotech);

router.get('/directory5/KrackenTech', GraphController.getGraphsdiagram5KrackenTech);
router.get('/directory5/Portugal/KrackenTech', GraphController.getGraphsdiagram5PortugalKrackenTech);
router.get('/directory5/Q1/KrackenTech', GraphController.getGraphsdiagram5Q1KrackenTech);
router.get('/directory5/Q2/KrackenTech', GraphController.getGraphsdiagram5Q2KrackenTech);
router.get('/directory5/Q3/KrackenTech', GraphController.getGraphsdiagram5Q3KrackenTech);
router.get('/directory5/Q4/KrackenTech', GraphController.getGraphsdiagram5Q4KrackenTech);
router.get('/directory5/January/KrackenTech', GraphController.getGraphsdiagram5JanuaryKrackenTech);
router.get('/directory5/February/KrackenTech', GraphController.getGraphsdiagram5FebruaryKrackenTech);
router.get('/directory5/March/KrackenTech', GraphController.getGraphsdiagram5MarchKrackenTech);
router.get('/directory5/April/KrackenTech', GraphController.getGraphsdiagram5AprilKrackenTech);
router.get('/directory5/May/KrackenTech', GraphController.getGraphsdiagram5MayKrackenTech);
router.get('/directory5/June/KrackenTech', GraphController.getGraphsdiagram5JuneKrackenTech);
router.get('/directory5/July/KrackenTech', GraphController.getGraphsdiagram5JulyKrackenTech);
router.get('/directory5/August/KrackenTech', GraphController.getGraphsdiagram5AugustKrackenTech);
router.get('/directory5/September/KrackenTech', GraphController.getGraphsdiagram5SeptemberKrackenTech);
router.get('/directory5/October/KrackenTech', GraphController.getGraphsdiagram5OctoberKrackenTech);
router.get('/directory5/November/KrackenTech', GraphController.getGraphsdiagram5NovemberKrackenTech);
router.get('/directory5/December/KrackenTech', GraphController.getGraphsdiagram5DecemberKrackenTech);



router.post('/directory1', GraphController.getGraphsdiagram1);

router.post('/directory2', GraphController.getGraphsdiagram2);

router.post('/directory3', GraphController.getGraphsdiagram3);

router.post('/directory4', GraphController.getGraphsdiagram4);

router.post('/directory5', GraphController.getGraphsdiagram5);

router.post('/directory6', GraphController.getGraphsdiagram6);


module.exports = router;
