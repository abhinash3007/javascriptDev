const randomColor=function(){
    const hex="0123456789ABCDEF";
    let coloe="#";
    for(let i=0;i<6;i++){
        coloe+=hex[Math.floor(Math.random()*16)];
    }
    return coloe;
}
const change=function(){
    document.body.style.backgroundColor=randomColor();
}
let interval;
const startB=document.querySelector("#start").addEventListener("click",(e)=>{
    interval=setInterval(change,1000);
})
const stopB=document.querySelector("#stop").addEventListener("click",(e)=>{
    clearInterval(interval);
})
