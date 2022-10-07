var cl = console.log;
var x = 10;
var y;
y = 29;
// y = "tree"         not allowed as y is only stored as a number
var fname;
fname = "Sadashiv";
fname = "Nagesh";
fname = "true";
var person2 = {
    fname: "Shiv",
    lname: "Takale",
    age: 37,
    skills: "Javascripts",
    nickname: "Anil"
};
// or 
var person11 = {
    fname: 'Jhon',
    lname: 'Doe',
    age: 32
};
var student1 = {
    name: "Arjun",
    rollNumber: 1,
    result: 74.56,
    prmtdNextClass: true
};
var student2 = {
    name: "Arohi",
    rollNumber: 12,
    result: 70.78,
    prmtdNextClass: false
};
var student3 = {
    name: "Mayuri",
    rollNumber: 21,
    result: 67.98,
    prmtdNextClass: true
};
var car = {
    company: "Tata Moters",
    model: "Safari",
    price: 1325000,
    milage: 21,
    isElectric: false
};
// ex 2 calculation... 
function add(n1, n2, showResult) {
    if (showResult === true) {
        cl(n1 + n2);
    }
    else {
        return (n1 + n2);
    }
}
add(100, 230, true); //330
// add(100, 200)//          error
function add2(n1, n2, showResult, phrase) {
    if (showResult === true) {
        cl(phrase + n1 + n2);
    }
    else {
        return (phrase + n1 + n2);
    }
}
add2(100, 20, true, "the ultimate coader "); //the ultimate coader 1020
add2(134, 2230, false, "the ultimate coader");
function add3(n1, n2, showResult, phrase) {
    if (showResult === true) {
        cl("".concat(phrase, " + ").concat(n1 + n2));
    }
    else {
        return ("".concat(phrase, "$ {n1 + n2}"));
    }
}
add3(100, 20, true, "the ultimate coader "); //120
add3(100, 20, false, "the ultimate coader");
//Array
var skills;
skills = ['HTML', 'CSS', 'Bootstrap5', 'Angular'];
skills.push('typescripts');
cl(skills);
skills.splice(2, 0);
cl(skills);
var rollCall;
rollCall = [23, 34, 45, 23, 34, 56, 23, 2, 34, 34, 45];
rollCall.unshift(23);
rollCall.pop();
rollCall.push(1234);
cl(rollCall);
