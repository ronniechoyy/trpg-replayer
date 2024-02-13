//
//
// Important
//
//
//Use this to get the ass_otken
//https://api.imgur.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE
//https://api.imgur.com/oauth2/authorize?client_id=6444c2d6f59cf09&response_type=token
// Description: imgur api
//
//
//
//

const imgur_data = {
  client_id: '6444c2d6f59cf09',
  client_secret: 'b4a459be6ea22997499976c48056cafe63d29b21',
  access_token: 'e55d887f08efcb07b6e53e01c57f60f75e8bbf55',
  expires_in: '315360000',
  token_type: 'bearer',
  refresh_token: 'f4be7965ec8515d3a5f5aa4fc282672bba696950',
  account_username: 'ronniechoyy',
  account_id: '150574996',
}

//20240214
////https://api.imgur.com/oauth2/authorize?client_id=e42c06a968ed664&response_type=token
const imgur_data2 = {
  Client_ID: 'e42c06a968ed664',
  Client_secret: 'd12b2e3906344e0ee3edac8937d2d6629cb26154',
  access_token: '43b66880e3639dd6c9edc8ea22377b49b3264b68', 
  expires_in: '315360000',
  token_type: 'bearer',
  refresh_token: 'fb62450a5a031d1305a10ba310943b5ec2bb6294',
  account_username: 'ronniechoyy',
  account_id: '150574996'
}

const ass_otken = '43b66880e3639dd6c9edc8ea22377b49b3264b68';
//https://apidocs.imgur.com/#c85c9dfc-7487-4de2-9ecd-66f727cf3139
//image
//A binary file, base64 data, or a URL for an image. (up to 10MB)
//video
//A binary file (up to 200MB)


const formdata = new FormData();
formdata.append("image", "iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAABhUlEQVR42u3TAREAAAQEsJdcdApI4LYOq2Q6wKkEAUFAEBAEBAFBQBAQBAQBQQBBQBAQBAQBQUAQEAQEAUFAEEFAEBAEBAFBQBAQBAQBQUAQQBAQBAQBQUAQEAQEAUFAEBAEEAQEAUFAEBAEBAFBQBAQBBAEBAFBQBAQBAQBQUAQEAQEAQQBQUAQEAQEAUFAEBAEBAEEAUFAEBAEBAFBQBAQBAQBQQBBQBAQBAQBQUAQEAQEAUFAEEFAEBAEBAFBQBAQBAQBQUAQQBAQBAQBQUAQEAQEAUFAEBBEEBAEBAFBQBAQBAQBQUAQEAQQBAQBQUAQEAQEAUFAEBAEBAEEAUFAEBAEBAFBQBAQBAQBBAFBQBAQBAQBQUAQEAQEAUEAQUAQEAQEAUFAEBAEBAFBAEFAEBAEBAFBQBAQBAQBQUAQQBAQBAQBQUAQEAQEAUFAEBBEEBAEBAFBQBAQBAQBQUAQEAQQBAQBQUAQEAQEAUFAEBAEBBEEBAFBQBAQBAQBQUAQ+GgB9H4rSGXIg/kAAAAASUVORK5CYII=");



async function upload_imgur() {
  console.log('hahaha')
  const upload_imgur = await fetch('https://api.imgur.com/3/image', {
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${ass_otken}`,
    },
    body: formdata
  })

  const res_json = await upload_imgur.json();
  console.log('res_json', res_json)
}

async function refreshAccessToken() {
  const response = await fetch('https://api.imgur.com/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      client_id: imgur_data2.Client_ID,
      client_secret: imgur_data2.Client_secret,
      grant_type: 'refresh_token',
      refresh_token: imgur_data2.refresh_token,
    })
  });

  const data = await response.json();

  const newAccessToken = data.access_token;
  const newRefreshToken = data.refresh_token;

  console.log('New Access Token:', newAccessToken);
  console.log('New Refresh Token:', newRefreshToken);

  // Update the tokens in your application
  imgur_data2.access_token = newAccessToken;
  imgur_data2.refresh_token = newRefreshToken;
}

export default {upload_imgur, refreshAccessToken}
