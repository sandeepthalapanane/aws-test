// index.js — export with expected name
exports.lambdahandler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from Lambda 1' })
  };
};
