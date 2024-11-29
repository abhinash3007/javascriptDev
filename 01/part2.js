/**     strings */
  const name="abhi";
  const title="mishra";
  const fullName=name+title;
  console.log(name+title);
  console.log(`name is ${name} with the title ${title}`);
  console.log(String);

  const game=new String("Temple run");
  console.log(game);
  console.log(fullName.slice(4,-4)); //mi
  //name.charAt(2)  name.indexOf(2)  split  trim   subSring toLowerCase replace  includes  etc etc


  /**        numbers and maths     */
  const number=400;
  console.log(number);

  const balance=new Number(100);
  console.log(balance);
  console.log(balance.toFixed(2)) //100.00
  console.log(balance.toString());

  const hunderds=100000;
  console.log(hunderds.toLocaleString()); //1,000,000

  //      maths     //

  const num=-100;
  console.log(Math.abs(num)); //100 it remove minus sign
  console.log(Math.round(4.5));
  console.log(Math.ceil(4.2)); 
  console.log(Math.min(4,1,5,8,9,2));

  console.log(Math.random());  // ranges from 0 to 1
  console.log(Math.random()*10);
  console.log(Math.random()*10+1); //+1 is added so that the minimum value we get is not 0
  // suppose value comes is 0.0456 so after multipling with 10 also it will give 0 we to avoid that we use +1
  const min=1;
  const max=6;
  console.log(Math.floor(Math.random()*(max-min+1))+min);


  /**     dates and times     */

  let date=new Date();
  console.log(date); //2024-11-29T14:43:02.748Z
  console.log(date.toDateString());   //Fri Nov 29 2024
  console.log(typeof date) ///object

  let myCreatedDate=new Date(2024,0,12);
  console.log(myCreatedDate.toDateString());
  console.log(date.getTime());
  console.log(date.getDay())