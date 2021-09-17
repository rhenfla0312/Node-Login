"use strict";

// 모듈
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// 환경변수
// dotenv - os 상관없이 동일하게 환경변수 등록 & 가져올 수 있다
// config 메서드를 실행시키면 .env라는 모듈이 자동적으로 .env에 등록되어있는 변수들을 node.js에서 접근할 수 있도록 process.env등록을 한다
const dotenv = require("dotenv");
dotenv.config();

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