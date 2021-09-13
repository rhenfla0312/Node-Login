'use strict'

// render - 경로지정
// send - 출력


const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
}

// 서버 쪽 데이터
const users = {
    id: ["yym1623", "youngmin", "hihi"],
    passwd: ["xldjf0312", "123456", "12345"],
};

const process = {
    login: (req, res) => {
        // 프론트엔드에서 전달한 요청 데이터를 담아두는 변수
        const id = req.body.id,
            passwd = req.body.passwd;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id); 
            if (users.passwd[idx] === passwd) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    }
}

module.exports = {
    output,
    process
}

