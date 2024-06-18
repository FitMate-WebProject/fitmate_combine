document.addEventListener('DOMContentLoaded', function() {
    // 로그인 버튼
    const loginButton2 = document.getElementById('loginBtn2');
    loginButton2.addEventListener('click', function() {
        window.location.href = '/login'; // 로그인 페이지로 이동
    });

    // 회원가입 버튼
    const loginButton1 = document.getElementById('loginBtn1');
    loginButton1.addEventListener('click', function() {
        window.location.href = '/join'; // 회원가입 페이지로 이동
    });

    // 네비게이션 링크 클릭 시 모달 띄우기
    const navLinks = document.querySelectorAll('.nav-link');
    const modal = document.getElementById('loginModal');
    const closeModal = document.querySelector('.close');
    const modalLoginButton = document.getElementById('modalLoginBtn');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // 링크 기본 동작 막기
            modal.style.display = 'block'; // 모달 표시
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none'; // 모달 닫기
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none'; // 모달 닫기
        }
    });

    modalLoginButton.addEventListener('click', function() {
        window.location.href = '/login'; // 모달 내 로그인 버튼 클릭 시 로그인 페이지로 이동
    });
});

