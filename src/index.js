// var username:string = "john";
// document.write("hello"+username);//this print ststement will show in the browser when we run the html file.
// console.log("hello " + username);//this print ststement will not show in the brwser because log() is a brwser mwthod
// function demofirst()
// {
//     // var x = 10;
//     // if(x==10)
//     // {
//     //     var y = 20;
//     // }
//     // console.log("x="+x+"\n"+"y=");
// }
// demofirst()
// var x = 1;
// x = 34;  
// const bit:number = 0b10101;
// const exp:number = 2e3;
// console.log("bit=" + bit + "\n" + "exponent=" + exp);
var username = "john";
var age = 23;
var msg = "hello !" + username + "you will be" + (age + 1) + "next year"; //this is actually the old version of js 
var ms2 = "hello ! ".concat(username, " you will be ").concat(age + 1, " next year"); //this is the moder js to print the inding statement in string
console.log(msg);
console.log(ms2);
