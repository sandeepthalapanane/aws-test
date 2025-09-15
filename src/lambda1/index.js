// lambda1/index.js
export async function lambdaHandler(event, context) {
return {
  statusCode: 400,
  body: JSON.stringify({ message: 'Hello from Lambda 1' })
};
}
