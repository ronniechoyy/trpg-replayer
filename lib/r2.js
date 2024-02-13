import {
  S3Client,
  ListBucketsCommand,
  ListObjectsV2Command,
} from "@aws-sdk/client-s3";

const s3_token = {
  token_value: 'JQgxoRprtOU0O6yvhHbyAVcsOHn-64B1iZ6FuxQL',
  Access_Key_ID: '45d6ced2cf5bea6c983f7d7c3ca98f63',
  Secret_Access_Key: 'b57ccbc231d24b9eed470d3e835f4dda470c2bbeff8786866d2ae9cf696c4c88',
  Use_jurisdiction_specific_endpoints_for_S3_clients: 'https://81d1c387ae574ede1de60640b395f109.r2.cloudflarestorage.com'
}

const S3 = new S3Client({
  region: "auto",
  endpoint: s3_token.Use_jurisdiction_specific_endpoints_for_S3_clients,
  credentials: {
    accessKeyId: s3_token.Access_Key_ID,
    secretAccessKey: s3_token.Secret_Access_Key,
  },
});

//Cant use in current API
async function listBuckets() {
  const response = await S3.send(new ListBucketsCommand({}));
  console.log(response);
}

async function listObjects(bucketName) {
  const response = await S3.send(new ListObjectsV2Command({ Bucket: bucketName }));
  console.log(response);
  return response;
}

async function uploadFile(bucketName, key, file) {
  const params = {
    Bucket: bucketName,
    Key: key,
    Body: file,
  };

  try {
    const response = await S3.send(new PutObjectCommand(params));
    console.log(`Successfully uploaded '${key}' to '${bucketName}'`);
    return response;
  } catch (error) {
    console.error(`Error uploading '${key}': ${error}`);
  }
}

export { listBuckets, listObjects, uploadFile };