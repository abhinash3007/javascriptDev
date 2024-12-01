const button=document.querySelectorAll(".button");
const body=document.querySelector("body");
console.log("hello");
button.forEach((butt)=>{
    butt.addEventListener("click",(e)=>{
        // console.log("Button clicked");
        // console.log(e.target);
        // console.log(e);
        // console.log(e.target.id)
        // if (e.target.id === "red") {
            body.style.backgroundColor = e.target.id;
         // }
    })
})