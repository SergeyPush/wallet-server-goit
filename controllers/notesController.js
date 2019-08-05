const Notes = require("../models/notesModel");

exports.all = function(req, res) {
  Notes.all((err, docs) => {
    if (err) {
      console.log(err);
      res.status(500);
    }
    res.send(docs);
  });
};

exports.insert = function(req, res) {
  const item = {
    ...req.body
  };
  Notes.create(item, function(err, result) {
    if (err) {
      return res.sendStatus(500);
    }
    res.send(item);
  });
};

exports.findById = function(req, res) {
  const id = req.params.id;
  Notes.findById(id, function(err, result) {
    if (err) {
      return res.sendStatus(500);
    }
    res.send(result);
  });
};

exports.update = function(req, res) {
  Notes.update(req.params.id, { $set: { ...req.body } }, function(err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};

exports.delete = function(req, res) {
  Notes.delete(req.params.id, function(err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};
