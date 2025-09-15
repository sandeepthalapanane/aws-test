// index.js — export with expected name
exports.handler = async (event, context) => {
  return {
    statusCode: 300,
    body: JSON.stringify({ message: 'Hello from Lambda 1' })
  };
};
