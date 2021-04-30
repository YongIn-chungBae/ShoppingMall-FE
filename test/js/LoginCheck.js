function fnSbm1() {
    var joinFrm = document.getElementById("joinFrm");

    /* 이름, 아이디, 비밀번호,
          이메일, 14세 이상 체크, 전체동의   */

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
}