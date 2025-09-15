// index.js — export with expected name
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from Lambda 1' })
  };
};