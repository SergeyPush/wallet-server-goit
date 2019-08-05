const ObjectID = require("mongodb").ObjectID;
const db = require("../db");

exports.all = function(cb) {
  db.get()
    .find()
    .toArray(function(err, docs) {
      if (err) console.log(err);
      cb(err, docs);
    });
};

exports.create = function(item, cb) {
  db.get().insertOne(item, function(err, result) {
    cb(err, result);
  });
};

exports.findById = function(id, cb) {
  db.get().findOne({ _id: ObjectID(id) }, function(err, result) {
    cb(err, result);
  });
};

exports.update = function(id, newData, cb) {
  db.get().updateOne({ _id: ObjectID(id) }, newData, function(err, result) {
    cb(err, result);
  });
};

exports.delete = function(id, cb) {
  db.get().deleteOne({ _id: ObjectID(id) }, function(err, result) {
    cb(err, result);
  });
};
