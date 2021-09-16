'use strict'

// users.json(table)에 접근을 해서 해당 데이터를 읽어올려면 파일시스템을 불러와야 한다
const fs = require("fs").promises;

class UserStorage {
    // 서버 쪽 데이터
    // 이 데이터들은 데이터베이스를 이용할거다
    // 주의 - 원래 로컬에 저장할땐 이렇게하지 않고 파일 안에다가 저장한다

    // praiviet한 변수나 메서드는 최상단에 위치
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);  
        // idx값은 User.js에 넘겨둔 id이다, 설정한 id의 index를 구해서 넣는다
        const idx = users.id.indexOf(id);
        // users의 key값들만 리스트로 만든다 => [id, passwd, name]
        const usersKeys = Object.keys(users);
        // 리스트로 만든 값을 여기에 넣어서 배열애 reduce메서드를 넣어 돌린다, newUser라는 object에 key값이 순차적으로 들어간다
        const userInfo = usersKeys.reduce((newUser, info) => { // 순차적이라 처음엔 id
        // key값은 id값 = 값으로는 users의 key값의 idx값, idx - index에 해당하는 값들을 다 넣어준다
            newUser[info] = users[info][idx];
            return newUser;
        // {} - 초기값 오브젝트
        }, {});
        // 이렇게해서 userInfo라는 값이 만들어진다
        return userInfo;
    }

    
// 은닉화 하고 메서드로 전달해야 한다
    // UserStorage 데이터베이스에 접근해서 데이터를 반환해준다
    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        // 위에있는 users의 정보를 받아온다
        // const users = this.#users;

        // read file로 읽어오면 16진수로 표기된다
        return fs.readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);
    }


    // 클라이언트에서 데이터를 전달을 하면 users object안에 해당 데이터들이 저장이 되야 한다
    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.passwd.push(userInfo.passwd);
        return { success: true };    
    }
}

module.exports = UserStorage;