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
var mobile:string = "+29868175367576";
if(mobile.match(/\+29\d{10}/)){
    console.log("otp send");
    
} else{
    console.log("invalid number");
    
}
 var stock:boolean = true;
// if(stock==1){   //here one error is shows that in js we can overlap the value of true =1 and false =0 but in typescript we can not overlap. 

//}
// var age:number|string;
// age = 10;
// age = "3242";
var username:string|null = prompt("enter name");//union of types we can manage the user input