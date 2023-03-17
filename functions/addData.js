const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_NAME}.qicfd.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;

exports.handler = async function (event, context) {
  const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
  const db = client.db();

  try {
    const scores = await db.collection('scores');
    const eventData = JSON.parse(event.body);
    const getResults = await scores.findOne({ userid: eventData.userid });

    let result;

    if (getResults) {
      result = await scores.updateOne(
        { userid: eventData.userid },
        { $set: { scores: eventData.scores } }
      );
      console.log(`A document was updated for user: ${eventData.userid}}`);
    } else {
      result = await scores.insertOne(JSON.parse(event.body));
      console.log(
        `A document was inserted with the _id: ${result.insertedId} for user: ${eventData.userid}}`
      );
    }

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
