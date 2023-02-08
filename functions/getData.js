const { createClient } = require('@astrajs/collections');

exports.handler = async function (event, context) {
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });

  const radrCollection = astraClient
    .namespace(process.env.ASTRA_DB_NAMESPACE)
    .collection('techScoresByUser');

  try {
    const result = await radrCollection.find();
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
