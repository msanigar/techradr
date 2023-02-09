exports.handler = async function (event, context) {
  try {
    return {
      statusCode: 200,
      body: 'success',
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
