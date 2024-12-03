function setUserName(userName){
    this.userNmae=userName;
}
function createUser(userName,email,password){
    //setUserName(userName)
    setUserName.call(this,userName)

    this.email=email,
    this.password=password
}
const chai=new createUser("chai","chai@gmail.com","1234");
console.log(chai);
