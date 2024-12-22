const header = document.querySelector("#header");

let posY = 0; //스크롤 위치값 넣을 변수 생성
window.addEventListener("scroll",(e)=>{
    if(posY < window.scrollY){
        headerHide();
    } else {
        headerShow();
    }
    posY = window.scrollY;
});

function headerHide(){
    header.classList.add("hide");
}

function headerShow(){
    header.classList.remove("hide");
}
