//addEventListner
//attachEvent
/**                 event                */
//type     timeStamp      preventDefault    target   srcElement
//clientx    clienty   offSet   screenx     screeny
//altKet    ctrlKey  shiftKey   keyCode


//event    Propagation   capturing and bubbleing     stopPropagation


e.target.parentNode// if we want to remove full line ex-image with li 
e.target.id // if we want to remove specifc term ex-it will remove image only and list will be threre

document.querySelector("#image").addEventListener("click",(e)=>{
    console.log(e);
    if(e.target.tagName=="IMG"){
        let removeIt=e.target.parentNode;
        removeIt.remove();
    }
})


/**         async and  await      */
//  javascript
//           synchronous=>one line at a time will be executed
//           single threaded language=>
//           (both the above are default behaviour of javascript)
// execution context=>one by one line executes
//          |
//          |   console.log(1);
//          |   console.log(2);    this line(|) is single thread means one line onle and code executez
//   
//
//   blocking code                 vs             non blocking code
//(it block the flow of program)        (it do not block the flow of th program)
//(read file synchronous)               (read file synchronous)
//

// _____________js engine____________________
// |   memory                 call   stack  |   
// |   heap                                 |
// |                                        |
// |                                        |
// |                                        |
// |                                        |
// |                                        |
// |                                        |
// |                                        |
// |                                        |
// __________________________________________