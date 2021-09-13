'use strict'

class UserStorage {
// 서버 쪽 데이터
    // 이 데이터들은 데이터베이스를 이용할거다
    static #users = {
        id: ["yym1623", "youngmin", "hihi"],
        passwd: ["xldjf0312", "123456", "12345"],
        nams: ["영민", "앙민", "잉민"],
    };
// 은닉화 하고 메서드로 전달해야 한다
    // UserStorage 데이터베이스에 접근해서 데이터를 반환해준다
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;