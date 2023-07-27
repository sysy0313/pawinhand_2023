//1. 모바일 메뉴 숨기기
// 객체 = 모바일 메뉴 m_nav_open
// 객체.속성 style.display = 'none'
// ------------------------
//2. 햄버거 메뉴 m_nav 클릭 시 모바일 메뉴 보이기
// 객체 = 햄버거 메뉴 m_nav , 모바일메뉴 m_nav_open
// 속성 = style.display = 'block'
// 이벤트 = (햄버거)클릭  /이벤트는 사용자와상호작용하는것
// 메서드 = 실행함수
// ---------------------------
//3. 엑스 버튼 클릭 시 모바일 메뉴 숨기기
// 객체 = 엑스버튼close , 모바일메뉴 m_nav_open 
// ->변수 3개 만들어야 함 
// 변수생성
const mNav = document.querySelector('.m_nav');
const mNavOpen = document.querySelector('.m_nav_open');
const closeBtn = document.querySelector('#close');
// 출력확인 에러메시지 또는 null, undefined 주의하기!!
console.log(mNav, mNavOpen, closeBtn);
// 1. 모바일 메뉴 숨기기
mNavOpen.style.display = 'none';/* 자바스크립트의 명령하는css가 우선순위가 가장 높음 */
// 2. 햄버거 메뉴 클릭 시 모바일 메뉴 보이기
mNav.addEventListener('click', function(){ //햄버거 메뉴 클릭시,(객체.메서드(이벤트,함수))
    mNavOpen.style.display = 'block'; //모바일메뉴보이기(객체.속성.속성='값')
})
// 3. 닫기 버튼 누르면 사라짐
closeBtn.addEventListener('click', function(){ //닫기 버튼을 클릭했을 때
    mNavOpen.style.display = 'none'; //모바일 메뉴를 숨긴다
})
