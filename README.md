# qc-api

#### API Quoted Chat Telegram Support Replit Host!

## Metode Request
##### Path Request Only Post!
```http
POST https://qc-api.rizzy.eu.org/generate
```

## Options
|  Body | Type |  Description |
| :------------ | :------------ | :------------ |
|  type | string | Output image type. May be: quote, image, null |
|  backgroundColor | string | Quote background color. Can be Hex, name or random for a random color |
|  messages | array | Array of messages |
| width | number | Maximum width |
| height | number | Maximum height |
| scale | number | Scale |

## Example Request POST Method
> Quoted Chat Without Media
```js
const axios = require('axios')
const fs = require('fs')

const text = "Hello World"
const username = "RizzyFuzz"
const avatar =  "https://telegra.ph/file/b10b6d0ab3ef16e126cf5.jpg"
const baseurl = "https://qc-api.rizzy.eu.org/generate"

const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#1b1429",
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": username,
        "photo": {
          "url": avatar
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};

const response = axios.post(baseurl, json, {
        headers: {
        'Content-Type': 'application/json'
}
}).then(res => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
       fs.writeFile('Quotly.png', buffer, (err) => {
      if (err) throw err;
    })
});
```
> Quoted Chat With Media
```js
const axios = require('axios')
const fs = require('fs')

const text = "Hello World"
const username = "RizzyFuzz"
const avatar =  "https://telegra.ph/file/b10b6d0ab3ef16e126cf5.jpg"
const mediaReply = "https://telegra.ph/file/c8d1dbcaafb17d933d306.jpg"
const baseurl = "https://qc-api.rizzy.eu.org/generate"

const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#1b1429",
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "media": {
        "url": mediaReply
      },
      "avatar": true,
      "from": {
        "id": 1,
        "name": username,
        "photo": {
          "url": avatar
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};

const response = axios.post(baseurl, json, {
        headers: {
        'Content-Type': 'application/json'
}
}).then(res => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
       fs.writeFile('Quotly.png', buffer, (err) => {
      if (err) throw err;
    })
});
```

### Response

![Quotly.png](assets/quoted-chat.png)
