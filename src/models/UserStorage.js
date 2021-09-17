'use strict'

// db module 불러오기
const db = require("../config/db");

class UserStorage {
    // 서버 쪽 데이터
    // 이 데이터들은 데이터베이스를 이용할거다
    // 주의 - 원래 로컬에 저장할땐 이렇게하지 않고 파일 안에다가 저장한다

// 로그인 페이지
// 데이터 베이스와 연결된 로그인 기능 구현 -> 데이터베이스에 접근 후 user정보를 반환해준다
    static getUserInfo(id) {
        // 성공하면 resolve, 실패하면 reject 실행, primise 자체를 return
        return new Promise((resolve, reject) =>  {

        
            // 데이터베이스에 query를 날린 후 테이블 조회
            // 로그인에 찍은 정보만 불러오기 위해 id = ?, [id]라는 변수를 만든다
            // 이렇게하면 내가 입력한 값에 대한 해당 정보만 불러와진다
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`); // 실패
                resolve(data[0]); // 성공
            });
        });
    }

// 회원가입 페이지
    // 클라이언트에서 데이터를 전달을 하면 users object안에 해당 데이터들이 저장이 되야 한다
    // 프론트가 데이터를 입력하고 회원가입을 누르면 해당 데이터가 userInfo에 들어오게 설정
    static async save(userInfo) {
        return new Promise((resolve, reject) =>  {
            // 저장하는걸로 설정
            const query = "INSERT INTO users(id, name, passwd) VALUES(?, ?, ?);";
            // 1. query 던지고, query문 안에 ?에 대입 될 변수들을 넣어준다, 3. 에러와 데이터를 받는다(저장하는거기 때문에 따로 받을게 없다)
            db.query(query, [userInfo.id, userInfo.name, userInfo.passwd], (err) => {
                // 에러가 있으면 reject로 에러를 던지고, 에러가 없으면  resolve로 objet를 던진다
                if (err) reject(`${err}`); // 실패, 문자열로 던진다
                resolve({ success: true }); // 성공
            });
        });
    }
}

module.exports = UserStorage; 