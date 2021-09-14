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
}

// 이 컨트롤러는 UserStorage에 접근하지 않는다.
const process = {
    login: (req, res) => {
        // User라는 class를 인스턴스화 할 때 클라이언트가 전달한 req(데이터)를 넣어서 인스턴스화 하게된다
        const user = new User(req.body);
        // user.login을 하면 어떠한 response를 받는다
        const response = user.login();
        // Users.js에서 던진 return값을 response가 반환값으로 받는다
        return res.json(response);

        // response로 받은 걸 클라이언트한테 json의 형태로 응답해준다
        //return res.json(response);
    },
};

module.exports = {
    output,
    process
}

