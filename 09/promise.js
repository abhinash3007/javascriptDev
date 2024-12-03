const pro=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("taks done");
        resolve();
    },1000);
});
pro.then(function(){
    console.log("fully completed")
})

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("taks done 2");
        resolve();
    },1000);
}).then(function(){
    console.log("fully completed 2")
})


const promise3=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({user:"abhi",email:"user@.com"});
    },3000)
}).then(function(user){
    console.log(user);
})


const promise4=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=false;
        if(!error){
            resolve({userName:"bittu",numer:"160"});
        }else{
            reject("Somrthing went wrong");
        }
    },4000);
})
promise4.then((user)=>{
    return user.userName;
}).then((userName)=>{
    console.log(userName);
}).catch((e)=>{
    console.log(e);
}).finally(()=>{
    console.log("done");  // finally will executed everytimr
})

const promise5=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({userName:"bittu",numer:"160"});
        }else{
            reject("Somrthing went wrong");
        }
    },4000);
});
async function main (){
    try{
        const res=await promise5
        console.log(res);
    }catch(err){
        console.log(err);
    }
};
main();