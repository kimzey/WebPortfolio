const btn_menu = document.getElementById('btn-menu');
const btn_slide = document.querySelectorAll(".menu .list a");
const content = document.querySelector(".section_content");
const btn_mode = document.getElementById("btn-checkmode");
const text_mode = document.getElementById("textMode");


for(let i = 0 ; i < btn_slide.length ;i++){
    btn_slide[i].addEventListener("click",(e)=>{
        document.body.classList.remove("show");
     });
}

btn_menu.addEventListener("click",()=>{
    document.body.classList.toggle("show");
});

window.addEventListener("click",(e)=>{
    e.target == content ?document.body.classList.remove("show"):false;
});


btn_mode.addEventListener("change",()=>{
    if(btn_mode.checked == true){
        text_mode.innerText = "DarkMode";
        document.documentElement.setAttribute('data-theme','light');

   }else{
        text_mode.innerText = "LightMode";
        document.documentElement.setAttribute('data-theme','dark');
   }
});
