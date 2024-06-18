document.addEventListener('DOMContentLoaded', function() {
    var signup = document.getElementById('signup');
    if (signup) {
        signup.addEventListener('click', function() {
            window.location.href = '/join';
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {

    // 로그인 폼 선택
    const loginForm = document.querySelector(".form-signin");
  
    // 로그인 버튼에 이벤트 리스너 추가
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // 폼 제출 방지
  
      // 입력 필드의 값 가져오기
      const loginID = document.getElementById("loginID").value;
      const loginPassword = document.getElementById("loginPassword").value;
  
      // 기본 유효성 검사
      if (loginID === "" || loginPassword === "") {
        alert("아이디와 비밀번호를 입력하세요.");
        return;
      }
  
      // 로그인 과정 (예시)
      if (loginID === "std" && loginPassword === "0000") {

        // 로그인 성공 후 페이지 리디렉션
        setTimeout(() => {
          window.location.href = "homepage.html"; // 타겟 페이지로 변경
        }, 1000);
      }
      else {
        alert("아이디 또는 비밀번호가 잘못되었습니다.");
        
        // 입력 필드 비우기
        document.getElementById("loginID").value = "";
        document.getElementById("loginPassword").value = "";
      }
    });
  });