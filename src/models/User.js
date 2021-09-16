// 로그인이나 회원가입같은 기능을 한다

"use strict";

const { response } = require("express");
const { getUsers } = require("./UserStorage");
const UserStorage = require("./UserStorage");


// UserStorage에 접근해서 데이터를 가져온다
class User {
    constructor(body) {
        // 1. home.ctrl.js에서 인스턴스화한 user는 해당하는 body의 데이터를 계속 들고다닌다
        // 2. user가 login이라는 메서드를 호출하면 this.body에 저장된 데이터를 가져온다
        this.body = body;
    }
        // 2.1 여기에 가져온다
    login() {
        const client = this.body;
        // 내가 요청한 해당하는 id.pw만 가져오고 싶다?
        // id값을 던지면 UserStorage에서 id값에 해당하는 데이터를 object로 전달하는 메서드를 생성할거다
        // 2.2 가져온 body.id값(클라이언트가 입력한 id값)을 UserStorage에 get 메서드로 전달한다, id의 해당하는 정보를 이 class가 반환한다
        // 받아올땐 id, passwd만 받아온다
        const { id, passwd } = UserStorage.getUserInfo(client.id);

        // 1. 내가 전달한 id가 UserStorage에 있는지
        // 1.1 id가 존재하고
        if(id) {
            // 있으면 그 아이디와 클라이언트의 아이디가 같은지
            // 1.2 Storage의 id와 클라이언트의 id가 같고, passwd가 같으면 로그인을 허용한다
            if (id === client.id && passwd === client.passwd) {
                return { success: true };
            }
            // 1.3 다르면 비밀번호가 틀렸다라고 나온다
            return { success: false, msg: "비밀번호가 틀렸습니다."};
        }
        // 1.4 id도 존재하지 않으면 존재하지 않는다고 나온다고 반환하다
        return { success: false, msg: "존재하지 않는 아이디입니다."};
    }

    register() {
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }
}

module.exports = User;