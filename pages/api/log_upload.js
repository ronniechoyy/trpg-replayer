import fs from 'fs';
import {
  S3Client,
  ListBucketsCommand,
  ListObjectsV2Command,
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

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



async function uploadFile(bucketName, key, body) {
  const params = {
    Bucket: bucketName,
    Key: key,
    Body: body,
  };

  try {
    const response = await S3.send(new PutObjectCommand(params));
    console.log(`Successfully uploaded '${key}' to '${bucketName}'`);
    return response;
  } catch (error) {
    console.error(`Error uploading '${key}' to '${bucketName}': ${error}`);
  }
 
}

async function deleteObject(bucketName, key) {
  const params = {
    Bucket: bucketName,
    Key: key,
  };

  try {
    const response = await S3.send(new DeleteObjectCommand(params));
    console.log(`Successfully deleted '${key}' from '${bucketName}'`);
    return response;
  } catch (error) {
    console.error(`Error deleting '${key}': ${error}`);
  }
}

export default async function handler(req, res) {
  const { method, body } = req;
  const bucketName = 'roni-storage';
  const prefix = 'TRPG_logs/';
  const fileType = '.json'

  switch (method) {
    case 'GET':
      /*const r2_objects = await listObjects(bucketName);
      res.status(200).json({ stat: "Success", r2_objects });
      break;*/
      const objectKey = req.query.key; // Get the object key from the query parameters
      console.log('objectKey', objectKey);
      const command = new GetObjectCommand({
        Bucket: bucketName,
        Key: prefix + objectKey + fileType,
      });

      const signedUrl = await getSignedUrl(S3, command, { expiresIn: 3600 }); // Get a signed URL for the object

      res.status(200).json({ stat: "Success", url: signedUrl });
      break

    case 'POST':
      console.log('body', body);
      const body_json = JSON.parse(body);
      //console.log('body', body);
      const response = await uploadFile(bucketName, prefix + body_json.log_id + fileType, body);
      res.status(200).json({ message: 'File uploaded successfully', response });
      break;

    case 'PUT':
      const updatedFile = fs.createReadStream(body.filePath);
      const updatedResponse = await uploadFile(bucketName, body.log_id, updatedFile);
      res.status(200).json({ message: 'File updated successfully', updatedResponse });
      break;

    case 'DELETE':
      const deleteResponse = await deleteObject(bucketName, body.fileName);
      res.status(200).json({ message: 'File deleted successfully', deleteResponse });
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}