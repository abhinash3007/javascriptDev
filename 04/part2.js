/**              control  flow       */
 // if
 //else
 //sitch
 // &&   ||   !
 // < > <= >= == ===
 // falsy value=>Nan,undefied,false,0,-0,"",null,bigint,on
 //truthy values are all which are not falsy 
 // any thing in string is truthy values "0",'false,[],{},function(){}


 // null coallescing opreator(??)
 let val1;
val=5 ?? 10;     // it will always takes thw first value it is there
console.log(val); // 5

//terinary operator(:)
//  condition ? true:false


//for loop
//break and continue
//while
// do-while


/**         high order array loop                   */
const arr=[1,2,3,4,5];
for(let num of arr){
    console.log(num);
}

// maps
const map=new Map();
map.set("In","India");
map.set("Eng","England");
map.set("Aus","Australia");

for (const [key,val] of map){
    console.log(key , val);
}

//   for - in
const obj={
    js:"javascript",
    py:"python",
    db:"database",
}

for(const key in obj){
    console.log(`${key} fullform will be ${obj[key]}`);
}

const lang=["java","javascript","ruby","python"];
lang.forEach(function(val){
    console.log(val);
});

const game=[
    {
        languageName:"java",
        shortForm:"j"
    },
    {
        languageName:"javascript",
        shortForm:"js"
    },
    {
        languageName:"python",
        shortForm:"py"
    }
]

game.forEach( (item)=>{
    console.log(item.languageName);
});