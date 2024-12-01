// /**          call stack                */

// //javascript execute context
// //global execution context
// // function execution context
//          _____ 
// //       | {}   |=>memory creation phase => in this memory is created 
// //       |      |=>execution phase=>




// //        example of code




//     const val1=10;
//     const val2=5;
//     function addNum(num1,num2){
//        let total=num1+num2
//        return total
//     }
//     let result=addNum(val1,val2);
//     let result2=addNum(1,4);
// // 1. at first global execution context is created and allocated in this .This is the first step
// // 2. memory phase in this all the variables are collected and kept
// //      val->undefined;
//         // val2->undefined;
//         // addNum->defination
//         // result->undefined
//         // result2->undefined
// //   -------till this it was first cycle------     
// //  3.execution phase
//         val1->10;
//         val2->5;                                            __________
//         addNum-> again an execution phase is created in this|new variable      |
//                                                             | environment      |
//                                                             |     +            |
//                                                             | execution thread |
//                                                             |------------------|
//                   for this again start from line addNum                                                    
// //                3.1. memory phase in this all the variables are collected and kept
//                   //      // val->undefined;
//                           // val2->undefined;
//                            // total->undefined
//     //             3.2   execution phase 
//                            // val->10;
//                            // val2->5;
//                            // total->15
//                     //now this 15 will be sent to global execution text and 3 will be deleted as its work has been completed



//         addNum-> again an execution phase is created in this|new variable      |
//                     | environment      |
//                     |     +            |
//                     | execution thread |
//                     |------------------|
//                for this again start from line addNum                                                    
//      //same as above addNum wil work here
