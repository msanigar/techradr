var co = require('co');
var mongoose = require('mongoose');

let conn = null;

const uri = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_NAME}.qicfd.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;

exports.handler = function (event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;

  run()
    .then((res) => {
      callback(null, res);
    })
    .catch((error) => callback(error));
};

function run() {
  return co(function* () {
    if (conn == null) {
      conn = yield mongoose.createConnection(uri, {
        bufferCommands: false,
        bufferMaxEntries: 0,
      });
      conn.model(
        'scores',
        new mongoose.Schema({
          userid: String,
          string: String,
        })
      );
    }

    const M = conn.model('scores');

    const doc = yield M.find();
    const response = {
      statusCode: 200,
      body: JSON.stringify(doc),
    };
    return response;
  });
}
