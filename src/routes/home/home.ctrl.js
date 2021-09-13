'use strict'

// render - 경로지정
// send - 출력

const UserStorage = require("../../models/UserStorage");


const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
}


const process = {
    login: (req, res) => {
        // 프론트엔드에서 전달한 요청 데이터를 담아두는 변수
        const id = req.body.id,
            passwd = req.body.passwd;
        
        const users = UserStorage.getUsers("id", "passwd");

        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id); 
            if (users.passwd[idx] === passwd) {
                response.success =  true;
                return res.json(response);
            }
        }
        response.success =  false;
        response.msg = "로그인에 실패하셨습니다"
        return res.json(response);
    },
};

module.exports = {
    output,
    process
}

