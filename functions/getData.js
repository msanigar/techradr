const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_NAME}.qicfd.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;

exports.handler = async function (event, context) {
  const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
  const db = client.db();

  try {
    const scores = await db.collection('scores').find().toArray();
    client.close();
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(scores),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: 'Please try again later.',
    };
  }
};
