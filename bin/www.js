"use strict";

const app = require("../app")

// .env에서 설장한 procss.env 환경변수에서 접근가능, PORT변수를 인식해서 3000이 들어간다
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("서버 가동");
});