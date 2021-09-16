'use strict'

// render - 경로지정
// send - 출력

const User = require("../../models/User");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },

    login: (req, res) => {
        res.render("home/login");
    },

    register: (req, res) => {
        res.render("home/register");
    }
}

// 이 컨트롤러는 UserStorage에 접근하지 않는다.
const process = {
    login: async (req, res) => {
        // User라는 class를 인스턴스화 할 때 클라이언트가 전달한 req(데이터)를 넣어서 인스턴스화 하게된다
        const user = new User(req.body);
        // user.login을 하면 어떠한 response를 받는다
        const response = await user.login();
        // Users.js에서 던진 return값을 response가 반환값으로 받는다

        // response를 json객체로 만들어서 클라이언트에게 던져준다
        return res.json(response);

        // response로 받은 걸 클라이언트한테 json의 형태로 응답해준다
        //return res.json(response);
    },

    register: async (req, res) => {
        const user = new User(req.body);
        // register의 반환값을 받아서
        const response = await user.register();
        // json메서드를 통해서 클라이언트로 응답해준다(서버 재가동 X)
        return res.json(response);
    }
};

module.exports = {
    output,
    process
} 