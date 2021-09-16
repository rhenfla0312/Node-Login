// 라우팅 화면
"use strict";

const express = require("express");
const router = express.Router();


const ctrl = require("./home.ctrl");

// routing - 서버 단에서 구현
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

// 외부에서 사용할 수 있도록 내보낸다
module.exports = router;