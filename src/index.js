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
// var username:string = "john";
// var age:number = 23;
// var msg:string = "hello !"+ username + "you will be" + (age+1) + "next year";//this is actually the old version of js 
// var ms2:string = `hello ! ${username} you will be ${age+1} next year`;//this is the moder js to print the inding statement in string
// console.log(msg);
// console.log(ms2);
//  var x = 10;
//  console.log(x);
// var mobile:string = "+29868175367576";
// if(mobile.match(/\+29\d{10}/)){
//     console.log("otp send");
// } else{
//     console.log("invalid number");
// }
//  var stock:boolean = true;
// if(stock==1){   //here one error is shows that in js we can overlap the value of true =1 and false =0 but in typescript we can not overlap. 
//}
// var age:number|string;
// age = 10;
// age = "3242";
// var username:string|null = prompt("enter name");//union of types we can manage the user input
// var password:string|null = prompt("enter password");
// var Name:string = "sameer swain";
// var Price:number|undefined;
// if(Price)
// {
//     console.log(`Name=${Name}\nPrice=${Price}`);
// }else{
//     console.log(`Name=${Name}`);
// }
// var collection:any[] =[10,"kjfdh",true];
// var collection:any[] = new Array(10,78,89);
// console.log(collection);
// var collection:any[]= [1,"jsfha",true];
// var id = collection[0];
// var Name = collection[1];      //this is the oldest version 
// var Stock = collection[2];
// var[Id,Name,Stock] =collection;  //latest version
// console.log(`id=${Id}\nname=${Name}\nstock=${Stock}`); //tuple example
var collection = [1, "jsfha", true, ["delhi", "hyd"], function () {
        console.log("array can store munltiple datatype and its a function in array");
    }];
console.log(collection[1]);
console.log(collection[3][0]);
console.log(collection[4]);
console.log(collection[4]());
collection[4]();
