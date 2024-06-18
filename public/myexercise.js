const header = document.querySelector(".calendar h3");
const dates = document.querySelector(".dates");
const navs = document.querySelectorAll("#prev, #next");

const months = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

// function renderCalendar() {
//   const start = new Date(year, month, 1).getDay();
//   const endDate = new Date(year, month + 1, 0).getDate();
//   const end = new Date(year, month, endDate).getDay();
//   const endDatePrev = new Date(year, month, 0).getDate();

//   let datesHtml = "";

//   for (let i = start; i > 0; i--) {
//     datesHtml += `<li class="inactive">${endDatePrev - i + 1}</li>`;
//   }

//   for (let i = 1; i <= endDate; i++) {
//     let className =
//       i === date.getDate() &&
//       month === new Date().getMonth() &&
//       year === new Date().getFullYear()
//         ? ' class="today"'
//         : "";
//     datesHtml += `<li${className}>${i}</li>`;
//   }

//   for (let i = end; i < 6; i++) {
//     datesHtml += `<li class="inactive">${i - end + 1}</li>`;
//   }

//   dates.innerHTML = datesHtml;
//   header.textContent = `${year}.${months[month]}`;
// }

// // 수정: 날짜 업데이트 로직 변경
// navs.forEach((nav) => {
//     nav.addEventListener("click", (e) => {
//       const btnId = e.target.id;
//       if (btnId === "prev") {
//         month = month === 0 ? 11 : month - 1;
//         if (month === 11) year--;
//       } else if (btnId === "next") {
//         month = month === 11 ? 0 : month + 1;
//         if (month === 0) year++;
//       }
//       renderCalendar();
//     });
//   });
  

// renderCalendar();


function renderCalendar() {
    const start = new Date(year, month, 1).getDay();
    const endDate = new Date(year, month + 1, 0).getDate();
    const end = new Date(year, month, endDate).getDay();
    const endDatePrev = new Date(year, month, 0).getDate();
  
    let datesHtml = "";
  
    for (let i = start; i > 0; i--) {
      datesHtml += `<li class="inactive">${endDatePrev - i + 1}</li>`;
    }
  
    for (let i = 1; i <= endDate; i++) {
      let className =
        i === date.getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear()
          ? 'today'
          : "";
      datesHtml += `<li class="${className}">${i}</li>`;
    }
  
    for (let i = end; i < 6; i++) {
      datesHtml += `<li class="inactive">${i - end + 1}</li>`;
    }
  
    dates.innerHTML = datesHtml;
    header.textContent = `${year}.${months[month]}`;
  
    addDateClickEvent();
  }
  
  function addDateClickEvent() {
    document.querySelectorAll('.dates li').forEach(li => {
      li.onclick = function() {  // Use onclick here to ensure that previous handlers are overwritten
        document.querySelectorAll('.dates li').forEach(elm => {
          elm.classList.remove('selected');
        });
        this.classList.add('selected');
      };
    });
  }
  
  navs.forEach(nav => {
    nav.addEventListener('click', e => {
      const btnId = e.target.id;
      if (btnId === "prev") {
        month = month === 0 ? 11 : month - 1;
        if (month === 11) {
          year--;
        }
      } else if (btnId === "next") {
        month = month === 11 ? 0 : month + 1;
        if (month === 0) {
          year++;
        }
      }
      renderCalendar();
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    renderCalendar();
  });
  








// check

// document.addEventListener('DOMContentLoaded', function() {
//     const vectorImage = document.querySelector('.vector-28');
//     vectorCreateImage.style.display = 'none'; // 초기에는 이미지를 숨깁니다.

//     ['rectangle-62', 'rectangle-64', 'rectangle-66', 'rectangle-68'].forEach(id => {
//         const div = document.getElementById(id);
//         if (div) {
//             div.addEventListener('click', function() {
//                 console.log(id + ' 클릭됨'); // 클릭 로깅
//                 vectorImage.style.display = 'block'; // 이미지를 보여줌
//             });
//         } else {
//             console.log(id + ' 요소를 찾을 수 없음'); // 요소 미발견 로깅
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const checkMarkImageUrl = '/check.png'; // 웹 서버 루트에서 public 폴더로 접근

    const ids = ['rectangle-62', 'rectangle-64', 'rectangle-66', 'rectangle-68'];

    ids.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', function() {
                const existingImage = this.querySelector('img');
                if (existingImage) {
                    // 이미지가 이미 존재하면 제거
                    this.removeChild(existingImage);
                } else {
                    // 이미지가 없으면 추가
                    const img = document.createElement('img');
                    img.src = checkMarkImageUrl;
                    img.style.position = 'absolute';
                    img.style.width = '100%'; // 이미지 크기 조정
                    img.style.height = '100%';
                    img.style.top = '0';
                    img.style.left = '0';
                    this.appendChild(img);
                }
            });
        }
    });
});


  