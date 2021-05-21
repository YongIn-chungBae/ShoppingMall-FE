
function fnSbm1(){


    var uId = document.getElementById("id");
    var uIdVal = uId.value;
    uIdVal = uIdVal.trim();

    var uPw = document.getElementById("password");
    var uPwVal = uPw.value;
    uPwVal= uPwVal.trim();


    if (uIdVal == ""){
        alert("아이디를 기입해주세요.");
        uId.focus();
    } else if (uPwVal == "") {
        alert("비밀번호를 기입해주세요.");
    }
    
    const id = document.getElementById("id").value;
    const password = document.getElementById("password").value;

    var data = {
        "id": id,
        "password": password
    };

    $.ajax({
        type: "POST",
        crossOrigin : true,
        dataType : "json",
        contentType: 'application/json',
        url : "http://01a7cd245d63.ngrok.io/sign-in",
        data: JSON.stringify(data)
        ,
    
    success : function(param_data) {

        if (param_data == true){
            const data = param_data["data"];
            const idx_data = [];

        //idx_data = data["idx"]
        location.href = "메인.html";

        } else if (param_data == false){
            alert("사용자 정보가 없습니다.");
        }
    },

    error: function(response){
        alert("에러나요오"+response[0])
    }
    })

}



/*function fnSbm1() {
    var joinFrm = document.getElementById("joinFrm");

    이름, 아이디, 비밀번호,
          이메일, 14세 이상 체크, 전체동의   

    var uId = document.getElementById("uId");
    var uIdVal = uId.value;
    uIdVal = uIdVal.trim();

    var uPw = document.getElementById("uPw");
    var uPwVal = uPw.value;
    uPwVal= uPwVal.trim();


    if (uIdVal == "") {
        alert("아이디를 기입해주세요.");
        uId.focus();
    } else if (uPwVal == "") {
        alert("비밀번호를 기입해주세요.");
        


    }
}*/