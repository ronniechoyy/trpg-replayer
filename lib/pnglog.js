//172|ZVLCtePCPu0oTqX2WzyvpYUk4czOUGo3aiTJampO
//api
// https://www.pnglog.com/api/v1/upload

// Headers
// 字段	类型	说明

// *Content-Type	String	需要设置为 multipart/form-data
// 请求参数(Body)

// 字段	类型	说明
// *file	File	图片文件
// token	String	临时上传 Token
// permission	Integer	权限，1=公开，0=私有
// strategy_id	Integer	储存策略ID
// album_id	Integer	相册ID
// expired_at	String	图片过期时间(yyyy-MM-dd HH:mm:ss)

function base64ToBlob(base64, mimeType = '') {
  const byteCharacters = atob(base64);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: mimeType });
}

async function uploadImage() {
  const url = 'https://www.pnglog.com/api/v1/upload';
  const token = 'your_token_here'; // replace with your token
  const permission = 0; // 1 for public, 0 for private
  const strategy_id = 1; // replace with your strategy ID
  const album_id = 1; // replace with your album ID
  const expired_at = '2022-12-31 23:59:59'; // replace with your desired expiry date and time

  const formData = new FormData();
  //formData.append('file', fs.createReadStream('/path/to/your/image.png')); // replace with the path to your image file
  const imageBlob = base64ToBlob("iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAABhUlEQVR42u3TAREAAAQEsJdcdApI4LYOq2Q6wKkEAUFAEBAEBAFBQBAQBAQBQQBBQBAQBAQBQUAQEAQEAUFAEEFAEBAEBAFBQBAQBAQBQUAQQBAQBAQBQUAQEAQEAUFAEBAEEAQEAUFAEBAEBAFBQBAQBBAEBAFBQBAQBAQBQUAQEAQEAQQBQUAQEAQEAUFAEBAEBAEEAUFAEBAEBAFBQBAQBAQBQQBBQBAQBAQBQUAQEAQEAUFAEEFAEBAEBAFBQBAQBAQBQUAQQBAQBAQBQUAQEAQEAUFAEBBEEBAEBAFBQBAQBAQBQUAQEAQQBAQBQUAQEAQEAUFAEBAEBAEEAUFAEBAEBAFBQBAQBAQBBAFBQBAQBAQBQUAQEAQEAUEAQUAQEAQEAUFAEBAEBAFBAEFAEBAEBAFBQBAQBAQBQUAQQBAQBAQBQUAQEAQEAUFAEBBEEBAEBAFBQBAQBAQBQUAQEAQQBAQBQUAQEAQEAUFAEBAEBBEEBAFBQBAQBAQBQUAQ+GgB9H4rSGXIg/kAAAAASUVORK5CYII=", 'image/png');
  const imageFile = new File([imageBlob], "image.png", { type: 'image/png' });
  formData.append('image', imageFile);
  //formData.append('token', token);
  formData.append('permission', permission);
  //formData.append('strategy_id', strategy_id);
  //formData.append('album_id', album_id);
  //formData.append('expired_at', expired_at);

  try {
    const response = await fetch(url, {
      headers: {
        //'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer 172|ZVLCtePCPu0oTqX2WzyvpYUk4czOUGo3aiTJampO'
      },
      method: 'POST',
      body: formData,
      //mode: 'no-cors', // add this line
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('There was a problem with the fetch operation: ' + error.message);
  }
}

export default {uploadImage}