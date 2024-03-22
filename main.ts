// todays leture
// logical operators
// logical operator types 
// 1:&& and operator ma agr aik condition bhi false ho gi to uska answer false ma aye ga
// 2:|| or operator ma agr aik condition bhi true ho gi to uska answer true ma aye ga
// 3:! not operator ma agr bracket ma di gai condition k bahar not operator laga dyn to answer ult ho jy ga i mean agr true h to answer false aye ga or false ka true
let budget = 600000;
let havegirl = true;
budget >= 1000000 && havegirl == true;
console.log(budget >= 1000000 && havegirl == true);
// answer false
// agr ap js ki file bna lyty hn to ap srf tsc ki command bhi dyn gyn 
// to ts file js file ma convert ho jati h
// let mybudget = 1000000;
// let ihavegirl = true;
// mybudget >= 1000000 && ihavegirl == true;
// console.log(mybudget >= 1000000 && ihavegirl == true);
// answr is true

// agr hum variable declear krty hn lkn values assign nhi krty 
// uski output undefine aye gi
let girl;
console.log(girl);
// answer is undefine

// let mybudget = 1100000;
// let ihavegirl = true;
// mybudget >= 1000000 && ihavegirl == true;
// console.log(mybudget >= 1000000 && ihavegirl == true);
// answer is true & undefine
let mybudget = 1000000;
let ihavegirl = true;
let result = mybudget >= 1000000 && ihavegirl == true;
console.log(result);
// answer is true 
let havedegree = "yes";
let ishamzasSdt = "no";
// true || false = true
// is ma agr aik condition bhi true ho gi to iska answer true aye ga
havedegree == "yes" || ishamzasSdt == "yes";
console.log(havedegree == "yes" || ishamzasSdt == "yes");
// ANSWER is true

// double equals to == ki jaggah kbhi bhi single equals = to nhi lagana in dono ki values ma bhut farq h
// bracket k bahar jb ap exclmation ! lagaty hn to iska mtlab nhi hota h
let num1 = 10
!(num1 > 10)
console.log(!(num1 > 10))
// answer is true
// if now ! hata dyn to answer ult ho jy ga
let num2 = 10
!(num1 > 10)
console.log((num1 > 10))
// if condition is true then hmara code print ho ga otherwise nhi

if (true) {
    console.log("hello world");
}
// answer is hello world
let israining = true;
if (israining) {
     console.log("hello world");
}
    // answer is true

    // if / else conditions use

    let raining = true;
    if (raining) {
        console.log("wear a rain coat");
    }
    else{
        console.log("wear a sun glass");
    }
        // answer is wear a rain coat
        let rainingis = false;
    if (rainingis) {
        console.log("wear a rain coat");
    }
    else{
        console.log("wear a sun glass");
    }
    // answer wear a sun glass

    // if & if else & else ka use
    // if srf aik hi lagy ga 
    // else if ki conditions hum jitny mrzi laga skty hn
    let weather = "cloudy";
    if( weather == "raining"){
        console.log("wear a rain coat");
    }
     else if( weather == "cloudy"){
        console.log("wear a light jacket");
    }
    else{
        console.log("wear a sun glass");
    }
    // ANSWER IS wear a light jacket

    let weathers = "nothing";
    if( weathers == "raining"){
        console.log("wear a rain coat");
    }
     else if( weathers == "cloudy"){
        console.log("wear a light jacket");
    }
    else{
        console.log("wear a sun glass");
    }
    // ANSWER IS wear a sun glass
    
    // ternary operators
    // is ma question mark ? k bad wali if and double dot wali else condition ki trhan h
    let ishungry = false;
    let snack = ishungry ? "apple" : "water";
    console.log(snack);
    // answer is water because condition is false

    let myage = 18;
    let age = myage >=18 ? " you are allowed": "you are not allowed";
    console.log(age)
    // answer is you are allowed