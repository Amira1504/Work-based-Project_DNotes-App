export default {
  MAX_ATTACHMENT_SIZE: 5000000,

  s3: {
    REGION: "eu-west-2",
    BUCKET: "uploads-notes.app"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://q2p7xe66g7.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_eh93AdzE1",
    APP_CLIENT_ID: "7j02bbh8e1ln8sj4vde7rjmtta",
    IDENTITY_POOL_ID: "us-east-2:59dc81ed-e610-4040-ae81-67e7bf231dfa"
  }
};
