const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_NAME}.qicfd.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;

exports.handler = async function (event, context) {
  const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
  const db = client.db();

  // need the check logic here
  // if document with userid exists, edit that document
  // rather than inserting a new document

  console.log(event.body);

  try {
    const scores = await db.collection('scores');
    const result = await scores.insertOne(JSON.parse(event.body));
    console.log(`A document was inserted with the _id: ${result.insertedId}`);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(result),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: 'Please try again later.',
    };
  } finally {
    await client.close();
  }
};
