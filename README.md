# quote-api

[![wakatime](https://wakatime.com/badge/github/LyoSU/quote-api.svg)](https://wakatime.com/badge/github/LyoSU/quote-api)

API Quoted Chat Telegram Support Replit Host!

## Metode Request
##### Path Request Only Post!
```http
POST https://qc-chat.rizzy.eu.org/generate
```

Contoh permintaan JSON:
```json
{
  "type": "quote",
  "format": "png",
  "backgroundColor": "#1b1429",
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "chatId": 66478514,
      "avatar": true,
      "from": {
        "id": 66478514,
        "first_name": "RizzyFuzz",
        "last_name": "RizzyFuzz",
        "username": "RizzyFuzz",
        "language_code": "id",
        "title": "Yuri 💜 Ly",
        "photo": {
          "small_file_id": "AQADAgADCKoxG7Jh9gMACBbSEZguAAMCAAOyYfYDAATieVimvJOu7M43BQABHgQ",
          "small_file_unique_id": "AQADFtIRmC4AA843BQAB",
          "big_file_id": "AQADAgADCKoxG7Jh9gMACBbSEZguAAMDAAOyYfYDAATieVimvJOu7NA3BQABHgQ",
          "big_file_unique_id": "AQADFtIRmC4AA9A3BQAB"
        },
        "type": "private",
        "name": "Yuri 💜 Ly"
      },
      "text": "I love you 💜",
      "replyMessage": {}
    }
  ]
}
```

Request Media:
```json
{
  "type": "quote",
  "format": "png",
  "backgroundColor": "#1b1429",
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "media": [
        {
          "file_id": "CAACAgIAAxkBAAIyH2AAAUcJoPJqv4uOPabtiSR3judSnQACaQEAAiI3jgQe29BUaNTqrx4E",
          "file_size": 22811,
          "height": 512,
          "width": 512
        }
      ],
      "mediaType": "sticker",
      "chatId": 66478514,
      "avatar": true,
      "from": {
        "id": 66478514,
        "first_name": "Yuri 💜",
        "last_name": "Ly",
        "username": "LyoSU",
        "language_code": "ru",
        "title": "Yuri 💜 Ly",
        "photo": {
          "small_file_id": "AQADAgADCKoxG7Jh9gMACBbSEZguAAMCAAOyYfYDAATieVimvJOu7M43BQABHgQ",
          "small_file_unique_id": "AQADFtIRmC4AA843BQAB",
          "big_file_id": "AQADAgADCKoxG7Jh9gMACBbSEZguAAMDAAOyYfYDAATieVimvJOu7NA3BQABHgQ",
          "big_file_unique_id": "AQADFtIRmC4AA9A3BQAB"
        },
        "type": "private",
        "name": "Yuri 💜 Ly"
      },
      "replyMessage": {}
    }
  ]
}
```

Request
```json
{
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
        "url": "https://via.placeholder.com/1000"
      },
      "avatar": true,
      "from": {
        "id": 1,
        "name": "Mike",
        "photo": {
          "url": "https://via.placeholder.com/100"
        }
      },
      "text": "Hey",
      "replyMessage": {}
    }
  ]
}
```

Pilihan: | Bidang | Ketik | Deskripsi | | :----------- | :----------- | :----------- | | ketik | tali | Jenis gambar keluaran. Bisa berupa: kutipan, gambar, null | | latar belakangWarna | tali | Warna latar belakang kutipan. Bisa Hex, Nama atau Random untuk Warna Random | | pesan | susunan | Array pesan | | lebar | nomor | Lebar Maks | | tinggi | nomor | Tinggi Maks | | skala | nomor | Skala | 
Result:

```json
{
  "ok": true,
  "result": {
    "image": "base64 image",
    "type": "quote",
    "width": 512,
    "height": 359
  }
}

```

## Request With Axios
> JavaScript
```js
const axios = require('axios')
const fs = require('fs')

const text = "Hello World"
const username = "Alι_Aryαɴ"
const avatar = "https://telegra.ph/file/59952c903fdfb10b752b3.jpg"

const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#FFFFFF",
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
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(res => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
       fs.writeFile('Quotly.png', buffer, (err) => {
      if (err) throw err;
    })
});
```

> Python
```py
import requests
import base64

text = "Hello World"
username = "Alι_Aryαɴ" 
avatar = "https://telegra.ph/file/59952c903fdfb10b752b3.jpg"

json = {
  "type": "quote",
  "format": "webp",
  "backgroundColor": "#FFFFFF",
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": True,
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
}

response = requests.post('https://bot.lyo.su/quote/generate', json=json).json()
buffer = base64.b64decode(response['result']['image'].encode('utf-8'))
open('Quotly.png', 'wb').write(buffer)
print('Quotly.png')
```
### Response

![Quotly.png](assets/Quotly.png)
