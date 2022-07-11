var crudModel = require('../models/crud-models');

module.exports = {
  userForm: function (req, res) {
    res.render('crud-form')
  },
  createData: function (req, res) {
    var inputData = req.body;
    crudModel.createData(inputData, function (data) {
      res.render('crud-form');
      console.log(" record was created");
    });
  },
  fetchData: function (req, res) {

    crudModel.fetchData(function (data) {
      res.render('crud-list', { userData: data });
    })
  },
  editData: function (req, res) {
    var editId = req.params.id;
    crudModel.editData(editId, function (data) {
      res.render('crud-form', { userData: data });
    })
  },
  updateData: function (req, res) {
    var inputData = req.body;
    var editId = req.params.id;
    crudModel.updateData(inputData, editId, function (data) {
      res.redirect('/data-list');
      console.log(" record was updated");
    });
  },
  deleteData: function (req, res) {

    var deleteId = req.params.id;
    crudModel.deleteData(deleteId, function (data) {
      res.redirect('/data-list');
      console.log(" record was deleted");
    });
  }
}