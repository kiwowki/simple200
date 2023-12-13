```js
//..................................................................................................................................................................
//....SSSSSSSSSSS....EEEEEEEEEEEEE........OOOOOOOOOOO.......HHHHHH........HHHHHH.HHYYYY.......YYYYYYY.EEEEEEEEEEEEE.......OOOOOOOOOOO........NNNNNNN........NNNNNN..
//...SSSSSSSSSSSSS...EEEEEEEEEEEEE......OOOOOOOOOOOOOO......HHHHHH........HHHHHH.HHYYYYY......YYYYYY..EEEEEEEEEEEEE......OOOOOOOOOOOOOO......NNNNNNNN.......NNNNNN..
//..SSSSSSSSSSSSSS...EEEEEEEEEEEEE.....OOOOOOOOOOOOOOOO.....HHHHHH........HHHHHH..HYYYYY.....YYYYYYY..EEEEEEEEEEEEE....OOOOOOOOOOOOOOOOO.....NNNNNNNN.......NNNNNN..
//.SSSSSSSSSSSSSSS...EEEEEEEEEEEEE....OOOOOOOOOOOOOOOOOO....HHHHHH........HHHHHH..HYYYYYY....YYYYYY...EEEEEEEEEEEEE....OOOOOOOOOOOOOOOOOO....NNNNNNNNN......NNNNNN..
//.SSSSSSSS..SSSSS...EEEEE...........OOOOOOOOOO.OOOOOOOOO...HHHHHH........HHHHHH...YYYYYY...YYYYYYY...EEEEE...........OOOOOOOOO.OOOOOOOOO....NNNNNNNNN......NNNNNN..
//.SSSSSS.......SS...EEEEE...........OOOOOOO......OOOOOOO...HHHHHH........HHHHHH...YYYYYYY..YYYYYY....EEEEE..........OOOOOOOO.....OOOOOOOO...NNNNNNNNNN.....NNNNNN..
//.SSSSSS............EEEEE..........EOOOOOO........OOOOOOO..HHHHHH........HHHHHH....YYYYYY.YYYYYYY....EEEEE..........OOOOOOO.......OOOOOOO...NNNNNNNNNNN....NNNNNN..
//.SSSSSSS...........EEEEE..........EOOOOOO.........OOOOOO..HHHHHH........HHHHHH....YYYYYYYYYYYYY.....EEEEE..........OOOOOO.........OOOOOO...NNNNNNNNNNN....NNNNNN..
//.SSSSSSSSS.........EEEEE..........EOOOOO..........OOOOOO..HHHHHH........HHHHHH.....YYYYYYYYYYYY.....EEEEE.........EOOOOOO.........OOOOOOO..NNNNNNNNNNNN...NNNNNN..
//..SSSSSSSSSSS......EEEEEEEEEEEEE..EOOOOO..........OOOOOO..HHHHHHHHHHHHHHHHHHHH.....YYYYYYYYYYY......EEEEEEEEEEEEE.EOOOOO...........OOOOOO..NNNNNNNNNNNNN..NNNNNN..
//...SSSSSSSSSSS.....EEEEEEEEEEEEE..EOOOOO..........OOOOOO..HHHHHHHHHHHHHHHHHHHH......YYYYYYYYYY......EEEEEEEEEEEEE.EOOOOO...........OOOOOO..NNNNNN.NNNNNN..NNNNNN..
//....SSSSSSSSSSS....EEEEEEEEEEEEE..EOOOOO..........OOOOOO..HHHHHHHHHHHHHHHHHHHH......YYYYYYYYY.......EEEEEEEEEEEEE.EOOOOO...........OOOOOO..NNNNNN..NNNNNN.NNNNNN..
//......SSSSSSSSSS...EEEEEEEEEEEEE..EOOOOO..........OOOOOO..HHHHHHHHHHHHHHHHHHHH.......YYYYYYY........EEEEEEEEEEEEE.EOOOOO...........OOOOOO..NNNNNN..NNNNNN.NNNNNN..
//........SSSSSSSS...EEEEE..........EOOOOO..........OOOOOO..HHHHHH........HHHHHH.......YYYYYYY........EEEEE.........EOOOOOO.........OOOOOOO..NNNNNN...NNNNNNNNNNNN..
//..........SSSSSSS..EEEEE..........EOOOOOO.........OOOOOO..HHHHHH........HHHHHH........YYYYY.........EEEEE..........OOOOOO.........OOOOOO...NNNNNN....NNNNNNNNNNN..
//.S.........SSSSSS..EEEEE..........EOOOOOO........OOOOOOO..HHHHHH........HHHHHH........YYYYY.........EEEEE..........OOOOOOO.......OOOOOOO...NNNNNN....NNNNNNNNNNN..
//.SSS......SSSSSSS..EEEEE...........OOOOOOO......OOOOOOO...HHHHHH........HHHHHH........YYYYY.........EEEEE..........OOOOOOOO.....OOOOOOOO...NNNNNN.....NNNNNNNNNN..
//.SSSSSS.SSSSSSSS...EEEEE...........OOOOOOOOO.OOOOOOOOOO...HHHHHH........HHHHHH........YYYYY.........EEEEE...........OOOOOOOOO.OOOOOOOOO....NNNNNN.....NNNNNNNNNN..
//.SSSSSSSSSSSSSSS...EEEEEEEEEEEEEE...OOOOOOOOOOOOOOOOOO....HHHHHH........HHHHHH........YYYYY.........EEEEEEEEEEEEEE..OOOOOOOOOOOOOOOOOOO....NNNNNN......NNNNNNNNN..
//.SSSSSSSSSSSSSSS...EEEEEEEEEEEEEE....OOOOOOOOOOOOOOOO.....HHHHHH........HHHHHH........YYYYY.........EEEEEEEEEEEEEE...OOOOOOOOOOOOOOOOO.....NNNNNN.......NNNNNNNN..
//.SSSSSSSSSSSSSS....EEEEEEEEEEEEEE.....OOOOOOOOOOOOOO......HHHHHH........HHHHHH........YYYYY.........EEEEEEEEEEEEEE....OOOOOOOOOOOOOOO......NNNNNN.......NNNNNNNN..
//...SSSSSSSSSS......EEEEEEEEEEEEEE.......OOOOOOOOOO........HHHHHH........HHHHHH........YYYYY.........EEEEEEEEEEEEEE......OOOOOOOOOOO........NNNNNN........NNNNNNN..
//..................................................................................................................................................................
```

1~4, 8~9: client
5~7: server

node.js는 php와 달리 보안 문제 해결이 필요하다.

서버의 내용을 클라이언트에 보내는 게 rest풀..api..?

서버 클라이언트 따로 따로 하는 방법 = SSR(예: NEXT.js)
클라이언트만 하고 서버는 FTP로 하는 방법 = ASR?(예: REACT?)

# client

npx create-react-app .  
npm install sass   
npm install react-bootstrap bootstrap  
npm install react-router-dom   
   
npm install axios  
npm install http-proxy-middleware  
(src폴더에 setupProxy.js 추가)   
   
npm i @emotion/css   
npm i @emotion/react   
npm i @emotion/styled @emotion/react   
   
npm install firebase   
   
npm install react-redux   
npm install @reduxjs/toolkit   

### 제작과정

[firebase 문서 바로가기](https://firebase.google.com/docs/auth/web/start?hl=ko&authuser=0)

[redux](https://ko.redux.js.org/introduction/getting-started)
- php의 session같이 부모자식관계가 아니더라도 확인할 수 있는 전역변수같은 어쩌구

# NPM
`npm install react-redux`
`npm install @reduxjs/toolkit`

.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.

# server

(npm init;)  
npm init -y;  
npm install express --save;  
npm install mongodb;  
npm install nodemon --save;

npm install path --save;  
npm install mongoose --save;

npm install multer --save;

npm install --save aws-sdk@2.348.0
npm install multer-s3 --save;

(package.json파일에

```js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
```

로 변경하기
)

#### [express js](https://expressjs.com/ko/guide/routing.html)

- 가상의 서버컴퓨터를 만들어 줌.
- Express를 임시로 설치하고 종속 항목 목록에 추가하지 않으려면, 다음과 같이 --save 옵션을 생략하십시오.  
  express가 있어야 listen, get 사용 가능.

## 제작 과정(server의 index.js)

1. 서버에 home 페이지와 express 페이지 만들기(express 프레임워크 사용)

2. 서버에 home 페이지와 모든페이지 설정하기(파일 경로 설정을 위해 path 모듈 사용)

<details>

```js
const express = require("express");
const path = require("path");

const app = express();
const port = 5050;

// 추가(정적 파일(예: 이미지, 스타일시트, 스크립트)을 제공하기 위해 Express에 정적 미들웨어를 추가)
app.use(express.static(path.join(__dirname, "../client/build")));

app.listen(port, () => {
  console.log("listening --> " + port);
});

// 변경
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// 모든 페이지 설정
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
```

</details>

- path 모듈 설치 후 작업(client의 build폴더와 연동)
- client에서 npm run build 후 server폴더 npm start 하고 연동 (포트넘버 5050)확인하기

3. MongoDB 모듈 추가하고, 서버 시작 시 MongoDB 연결 설정

<details>

```js
const mongoose = require('mongoose');

app.listen(port, () => {
    // 추가, 변경
    mongoose
        .connect(
            'mongodb+srv://wolves941110:'비밀번호 입력'@cluster0.jfxqrps.mongodb.net/reactBlog?retryWrites=true&w=majority'
        )
        .then(() => {
            console.log("running -->" + port);
            console.log("connecting --> mongDB......");
        })
        .catch((err) => {
            console.log(err)
        })
})
```

</details>
   
- 추가된 부분은 서버가 시작될 때 MongoDB와의 연결을 수립하는 부분입니다. 이것은 주로 서버가 시작되면 데이터베이스와의 연결을 설정하고, 서버에서 데이터베이스를 사용할 수 있도록 하는 관례적인 방법입니다.

- index.js에 몽구스.js 적용(get 위에)

- code: 8000 에러 -> 비밀번호 오류

- listening --> 5050  
  connecting MongoDB...  
  나오면 잘 적용된 것.

#### [MongoDB 바로가기](https://www.mongodb.com/ko-kr)

<details>
<summary>MongoDB 주소 찾기</summary>
무료로 시작하기 --> 계정 생성 or 등록 --> 데이터베이스 create or 만들어진 데이터베이스 connect --> Connect to your application Drivers 선택 --> Add your connection string into your application code에서 code 복사   
</details>
   
   
#### [mongoose js 바로가기](https://mongoosejs.com/)

몽구스는 몽고DB와 Express.js 웹 애플리케이션 프레임워크 간 연결을 생성하는 자바스크립트 객체 지향 프로그래밍 라이브러리이다.

[expressjs](https://expressjs.com/ko/guide/routing.html)

- express.Router
  express.Router 클래스를 사용하면 모듈식 마운팅 가능한 핸들러를 작성할 수 있습니다. Router 인스턴스는 완전한 미들웨어이자 라우팅 시스템이며, 따라서 “미니 앱(mini-app)”이라고 불리는 경우가 많습니다.

9898. multer 미들웨어를 사용해서 이미지 파일 업로드를 처리

<details>

```js
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "image/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage }).single("file");

router.post("/image/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ success: false });
    } else {
      res.status(200).json({ success: true, filePath: res.req.file.path });
    }
  });
});
```

</details>

[multer](https://github.com/expressjs/multer/blob/master/doc/README-ko.md)

- 멀터(Multer)는 Node.js에서 파일 업로드를 처리하기 위한 미들웨어.
  Express 프레임워크와 특히 파일 업로드를 처리해야 하는 경우에 매우 유용합니다. 멀터를 사용하면 클라이언트에서 서버로 전송된 파일을 쉽게 처리하고 저장할 수 있습니다.
- Router의 post.js 맨 밑에 삽입.

[네이버 클라우드 시작하기](https://guide.ncloud-docs.com/docs/objectstorage-start)

- Object Storage 이용 신청
  네이버 클라우드 플랫폼의 콘솔에서 Object Storage 이용을 신청하는 방법은 다음과 같습니다.

네이버 클라우드 플랫폼 콘솔에 접속해 주십시오.
Services > Storage > Object Storage 메뉴를 차례대로 클릭해 주십시오.
[이용 신청] 버튼을 클릭해 주십시오.
이용 신청 팝업 창이 나타나면 [적용] 버튼을 클릭해 주십시오.
정상적으로 이용 신청이 완료되면 [이용 신청] 버튼이 [상품 이용 중] 버튼으로 바뀝니다.

[시작하기](https://guide.ncloud-docs.com/docs/objectstorage-start)

-

[Javascript용 AWS SDK, 파일 업로드](https://guide.ncloud-docs.com/docs/storage-storage-8-4)

- AWS S3에서 제공하는 Javascript용 SDK를 이용해 네이버 클라우드 플랫폼의 Object Storage를 사용하는 예제입니다.

[Javascript용 AWS SDK](https://guide.ncloud-docs.com/docs/storage-storage-8-4)

1. 서버 util > upload.js

```js
const AWS = require("aws-sdk");
const fs = require("fs");
const endpoint = new AWS.Endpoint("https://kr.object.ncloudstorage.com");
const region = "kr-standard";
const access_key = "ACCESS_KEY";
const secret_key = "SECRET_KEY";

const S3 = new AWS.S3({
  endpoint: endpoint,
  region: region,
  credentials: {
    accessKeyId: access_key,
    secretAccessKey: secret_key,
  },
});
```

// 서버 작업?
"multer": "^1.4.5-lts.1",

// 서버에서 올릴 때
"multer-s3": "^3.0.1",

2. 서버 util > upload.js
   
[multer-s3 적용하기 Usage](https://www.npmjs.com/package/multer-s3)

```js
const AWS = require('aws-sdk');
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");

const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com');
const region = 'kr-standard';
const access_key = '마이페이지 -> 인증키 관리 -> Access Key ID';
const secret_key = '마이페이지 -> 인증키 관리 -> secret Key';


const S3 = new AWS.S3({
    endpoint: endpoint,
    region: region,
    credentials: {
        accessKeyId: access_key,
        secretAccessKey: secret_key
    }
});

function setUpload(bucket) {
    const upload = multer({
        storage: multerS3({
            s3: S3,
            bucket: bucket,
            acl: "public-read-write",
            key: function (req, file, cb) {
                let extenstion = path.extname(file.originalname)
                cb(null, Date.now().toString() + extenstion);
            }
        })
    }).single("file")
    return upload
}

module.exports = setUpload;

```

[multer 적용 후 이미지 업로드 시 504 or 500 오류](https://stackoverflow.com/questions/72431773/multers3-is-giving-this-client-send-is-not-a-function-error)
- multer 버전 호환 오류. 
`npm uninstall multer-s3` 로 기존 multer 삭제 후
`npm i multer-s3@2.10.0` 로 새로 설치하기
   
   
- github 연동(repository생성 후 실행)
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/kiwowki/simple100.git
git push -u origin main
   
   
- .gitignore 설정(루트에)
server/node_modules
server/package-lock.json
client/node_modules
client/package-lock.json


