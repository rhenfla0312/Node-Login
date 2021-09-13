"use strict";

const express = require("express");
const router = express.Router();


const ctrl = require("./home.ctrl");

// routing 
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

// 외부에서 사용할 수 있도록 내보낸다
module.exports = router;

