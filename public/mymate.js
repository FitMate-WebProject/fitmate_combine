document.addEventListener('DOMContentLoaded', function() {
    var mates = document.querySelectorAll('.mate'); // '.mate'는 메이트 이름이 있는 모든 요소의 클래스명입니다.
    var div4 = document.getElementById('div4'); // 이동할 요소

    mates.forEach(function(mate) {
        mate.addEventListener('click', function() {
            var newYPosition = this.offsetTop + this.offsetHeight; // 클릭된 요소 바로 아래 위치로 설정
            div4.style.position = 'absolute'; // 절대 위치 사용
            div4.style.top = newYPosition + 'px'; // 새 위치 적용
        });
    });
});
