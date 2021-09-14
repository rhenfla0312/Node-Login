'use strict'

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    passwd = document.querySelector("#passwd"),
    confirmPasswd = document.querySelector("#confirm-passwd"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    const req = {
        id: id.value,
        name: name.value,
        passwd: passwd.value,
        confirmPasswd: confirmPasswd.value,
    };
    
    // 이론 - 프론트를 먼저 개발할 순 있지만 일반적으론 백엔드의 api가 먼저 만들어진 상태에서 한다
    fetch("/register register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // button이 눌리면 해당하는 데이터들을 이 body에 담아서 전달한다
        body: JSON.stringify(req)
    })
        // 서버로부터 응답이 오면 json 메서드를 호출해서, 서버에 응답이 다 받아지는 순간 promise객체를 반환한다
        // promise객체를 반환했으니까 두번째 then으로 접근이 가능하다, 거기서 res로 접근을 한다
        .then((res) => res.json())
        .then((res) => {
            // 접근을 하여 res response가 seccess를 받아와서 true면 login페이지로 이동한다
            if (res.success) {
                location.href = "/login";
            } else {
                // false면 response에 msg proparte를 alert으로 띄운다
                alert(res.msg);
            }
        }).catch((err) => {
            console.error(new Error("회원가입 중 에러 발생"));
        });
}