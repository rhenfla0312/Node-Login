"use strict";

// 모듈
const express = require("express");
const app = express();

const bodyParser = require("body-parser");

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
// 해석할 엔진 종류 정의
app.set("view engine", "ejs");


// html -> js (node) - 정적경로로 추가한다
app.use(express.static(`${__dirname}/src/public`));

// url을 통해서 전달받은 데이터들이 한글,공백이 추가도면 인식이 안되는 부분을 해결한다
app.use(express.urlencoded({ extended : true }));
app.use(express.json());



// app -> www.js
module.exports = app;

// use - 미들 웨어를 등록해주는 메서드
app.use("/", home);