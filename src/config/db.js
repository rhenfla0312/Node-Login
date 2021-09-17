const mysql = require("mysql");

const db = mysql.createConnection({
    // 데이터베이스의 설정들을 기록한다
    host: "naver-login.c6lvewfjqicw.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "xldjf0312",
    database: "naver_login",
});

// 연결 요청
db.connect();

module.exports = db;