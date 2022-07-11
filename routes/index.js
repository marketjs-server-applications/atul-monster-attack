var express = require('express');
var router = express.Router();
var userController = require('../controllers/crud-controller');

/* GET users listing. */

router.get('/', userController.userForm);
router.post('/create', userController.createData);
router.get('/data-list', userController.fetchData);
router.get('/edit/:id', userController.editData);
router.post('/edit/:id', userController.updateData);
router.get('/delete/:id', userController.deleteData);

module.exports = router; 