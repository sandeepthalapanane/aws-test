// CommonJS syntax (for AWS Lambda default support)
exports.lambdaHandler = async (event, context) => {
  return {
    statusCode: 400,
    body: JSON.stringify({ message: 'Hello from Lambda 1' })
  };
};