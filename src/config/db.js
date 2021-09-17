const mysql = require("mysql");

const db = mysql.createConnection({
    // 데이터베이스의 설정들을 기록한다
    // 환경변수로 불러온다
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    database: process.env.DB_DATABASE,
});

// 연결 요청
db.connect();

module.exports = db;