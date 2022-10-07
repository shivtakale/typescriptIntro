let cl = console.log;

let x = 10;

let y:number;
y = 29;
// y = "tree"         not allowed as y is only stored as a number

let fname:string;
fname = "Sadashiv";
fname = "Nagesh";
fname = "true";

// let person: {
//     fname: string;
//     lname: string;
//     age: number;
// }=  {
//     fname : 'Jhon',
//     lname : 'Doe',
//     age : 32
// }

// or
interface Iperson {        //it defines the sturucture of object
    fname: string;
    lname: string;
    age?: number;         //? indicate not mandatory
    skills: string;
    nickname: string;
}
let person2: Iperson = {
    fname: "Shiv",
    lname: "Takale",
    age: 37,
    skills: "Javascripts",
    nickname: "Anil"
}

// or 

let person11 : {fname:string, lname:string, age:number}= {
    fname : 'Jhon',     
    lname : 'Doe',
    age : 32
}

let student1 : {name:string, rollNumber:number, result:number, prmtdNextClass:boolean}= {
    name: "Arjun",
    rollNumber: 1,
    result: 74.56,
    prmtdNextClass: true
}

let student2 : {name:string, rollNumber:number, result:number, prmtdNextClass:boolean}= {
    name: "Arohi",
    rollNumber: 12,
    result: 70.78,
    prmtdNextClass: false
}
let student3 : {name:string, rollNumber:number, result:number, prmtdNextClass:boolean}= {
    name: "Mayuri",
    rollNumber: 21,
    result: 67.98,
    prmtdNextClass: true
}

let car : {company:string, model:string, price:number, milage:number, isElectric:boolean}= {
    company: "Tata Moters",
    model: "Safari",
    price: 1325000,
    milage: 21,
    isElectric: false
}


// ex 2 calculation... 

function add(n1:number, n2:number, showResult:boolean){
    if(showResult === true){
        cl(n1 + n2)
    }else{
        return(n1 + n2);
    }
}
add(100,230, true)   //330

// add(100, 200)//          error



function add2(n1:number, n2:number, showResult:boolean, phrase :string){
    if(showResult === true){
        cl(phrase + n1 + n2)
    }else{
        return (phrase + n1 + n2);
    }
}
add2(100, 20 , true, "the ultimate coader ");    //the ultimate coader 1020
add2(134, 2230 , false, "the ultimate coader");


function add3(n1:number, n2:number, showResult:boolean, phrase :string){
    if(showResult === true){
        cl(`${phrase} + ${n1 + n2}`)
    }else{
        return (`${phrase}$ {n1 + n2}`);
  }  
}
add3(100, 20 , true, "the ultimate coader ");    //120
add3(100, 20 , false, "the ultimate coader") 



//Array

let skills:string[]

skills = ['HTML','CSS','Bootstrap5', 'Angular']
skills.push('typescripts')

cl(skills);
skills.splice(2,0)

cl(skills);

let rollCall:number[]

rollCall = [23, 34, 45, 23, 34, 56, 23, 2, 34, 34, 45]
rollCall.unshift(23)

rollCall.pop()

rollCall.push(1234)

cl(rollCall);


