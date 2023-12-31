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

// var collection:any[]= [1,"jsfha",true,["delhi","hyd",["uiyruyut"]],function(){console.log("array can store munltiple datatype and its a function in array");
// }];
// console.log(collection[1]);
// console.log(collection[3][0]);
// console.log(collection[4]);
// console.log(collection[4]());
// collection[4]();
// console.log(collection[3][2]);
// console.log(collection[3][2][0]);

// var catalog:string[] = ["electronics","footware","cusmetics","winter clothes"];
// var pro;
// // for(var property of catalog)//of will display the elements of the array
// for( pro in catalog)//it will display the index number of each element in the array
// {
//     // console.log(property); //it will display the elements of an array
//     console.log(pro);
//     console.log(`[${pro}]-${catalog[pro]}`);
    
    
    
// }

// let tv:{Name:string,Price:number} = {
//     Name:"hfgsjfhgsjg",
//     Price:8364762856
// }
// console.log(`Name=${tv.Name}\nPrice=${tv.Price}`);

// let laptop:{Name:string,Price:number,qlt:4,Total:any} = {
//     Name:"dell",
//     Price:9843682376,
//     qlt:4,
//     Total:function(){
//         return this.Price*this.qlt;
//     }
// }
// let students:[{"Name":string,"Age":number}] = [{"Name":"john","Age":67}];//it is only applicable for the single line declaration
// let student:{Name:string,Age:number}[] = [
//     {"Name":"hdghaf","Age":311},
//     {"Name":"dhugfye","Age":9287}
// ];//here the datatype is object type array and the value type is array of obejcts  
// let data:Map<any,any> = new Map();//here the < is generic type
// data.set(1,"html is a markup language");
// data.set("css","is is a style sheet");
// data.keys();
// data.values();
// let mfd:Date = new Date("2020-01-23 10:20:32.45");
// console.log("mfd="+mfd.toLocaleDateString());
// let profuct:{Name:string,Price:number,Productid:number} = {
//     Name:"tv",
//     Price:827367236.82973,
//     Productid:12
// };
// for(var property in profuct){
//     console.log(property);
    
// }
// function hello(username:string):string
// {
//     return `hello ! ${username}`;
// }
// function welcome(){
//     console.log("welcome to type script");
    
// }
// console.log(hello("rajalaxmi"));
// welcome();
function details(Name:string,Price?:number):void{
    if(Price){
        console.log(`Name=${Name}\nPrice=${Price}`);
    
    }else{
        console.log(`Nmae=${Name}`);
        
    }
}
details("samsung tv",1243355);
