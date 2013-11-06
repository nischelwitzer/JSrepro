

function add1(x, y) {
    console.log("in add1");
    return x + y;
}

console.log("Add1: " + add1(1, 2));

// #######################################

var add2 = function (x, y) {
    console.log("in add2: " + x + " " + y);
    return x + y;
};

console.log("Add2: " + add2(1, 2));

// #######################################

function calcFct(a, b, fct) {
    console.log("------------------------------");
    console.log("in calcFct: " + a + " " + b);
    var res = fct(a, b);
    console.log("calcFct: " + res);
}

calcFct(2, 3, add2);

// #######################################

calcFct(7, 2, function (o, p) {
    return o - p;
});

// #######################################

var nums = {
    z1: 6,
    z2: 3
};

var add3 = function () {
    console.log("------------------------------");
    console.log("in add3: " + this.z1 + " " + this.z2);
    return this.z1 + this.z2;
};

nums.calc =  add3;
nums.calc();

// #######################################

var Nums = function (x1, x2) {
    this.x1 = x1;
    this.x2 = x2;
};

Nums.prototype.add4 = function () {
    console.log("in add4: " + this.x1 + " " + this.x2);
    this.result = this.x1 + this.x2;
    return this.result;
};

var myNum = new Nums(9, 8);
console.log("add4 res: " + myNum.add4());

// #######################################

var myNum1 = new Nums(10, 1);
var myNum2 = new Nums(10, 2);

console.log("add4 res1: " + myNum1.add4());
console.log("add4 res2: " + myNum2.add4());
console.log("add4 res1: " + myNum1.result + " " + myNum2.result);

// #######################################
