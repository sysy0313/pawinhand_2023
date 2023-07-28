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
//main-swiper-slide
//const 변수명 = new Swiper('적용대상');
//const 변수명 = new Swiper('적용대상,{속성:값, 속성:값}');
const pawin_slide = new Swiper('#pawin_slide',{
    autoplay:{
        delay:1000,
        disableOnInteraction:false,//버튼 클릭 후 자동재생유지
    }, //자동재생
    loop:true, //마지막슬라이드->첫슬라이드 자연스럽게
    // direction:'vertical'
    effect:'fade', //제자리 자연스러운 변경 슬라이드 효과
    navigation: { //이전, 다음 네이게이션 연결
        // next, prev 객체 연결 시 부모를 안 적으면
        // body 안에 있는 모든 swiper-next,prev를 인식하기 때문에
        // 개별인식 가능한 부모이름을 반드시 앞에 먼저 작성한다.
        nextEl: '#pawin_slide .swiper-button-next',
        prevEl: '#pawin_slide .swiper-button-prev',
    },
});
const my_slide = new Swiper('#my_slide',{
    autoplay:{delay:1000},
    loop:true,
    direction:'vertical',//반드시 따옴표 붙이기~!
    navigation: { 
        nextEl: '#my_slide .swiper-button-next',
        prevEl: '#my_slide .swiper-button-prev',
    },
    
})