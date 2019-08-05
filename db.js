const MongoClient = require("mongodb").MongoClient;

const state = {
  db: null
};

exports.connect = function(url, done) {
  if (state.db) {
    return done();
  }

  MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    if (err) {
      return done(err);
    }
    state.db = client.db("wallet_collection").collection("wallet");

    done();
  });
};

exports.get = function() {
  return state.db;
};
