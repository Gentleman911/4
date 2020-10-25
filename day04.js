//声明函数

function hello(){
    console.log('hello,function!');
}
console.log(hello);
hello();

//定义一个函数表达式
//匿名函数
const hello = function(){
    console.log('hello, javascript!');
}

hello()
console.log(typeof hello);

//Function()构造函数
const hello = new Function(console.log('hello,javascript!'))

//箭头函数， ES6 才有的
const hello = () =>{
    console.log('hello,js')
}

hello()

//返回值

let sayHello = function(){
    return
};
console.log(sayHello());

let sayHello2 = function(){
    let a = 1;
    return a;
};


sum1(1,2);

function sum1(a,b){
    sayHello();
    return a + b;
}

function sayHello(){
    let a = 1;
    let b = 3;
    return 'a=$(a), b=$(b)';
}

let add = function(a,b){
    return a+b;
}

console.log(add());
let a = Infinity;
let b = -Infinity;

console.log(10/3);

const add = function(a,b){
    return a+b;
};
console.log(add(1,2,3,4,5));

const add1 = function(a,b){
    if (arguments.length == 0){
        return 0;
    }else if (arguments.length == 1){
        return arguments[0];
    }else if (arguments.length == 2){
        return arguments[0] +arguments[1];
    }
};
console.log(add1(1,8));

const add2 = function(...numbers){
    let sum = 0;
    for (const num of numbers){
        sum = num + sum;
    }
    return sum;
}
a = add2(1,2,3,4,5);
console.log(a);


const add3 = function(){
    let sum = 0;
    for (const num of arguments){
        sum = num + sum;
    }
    return sum;
}
b = add3(3,2);
console.log(b);

//回调
function dance(){
    console.log('我在跳舞!');
}
const sing = function (song,callback){
    console.log('我在唱歌'+song);
    if ((typeof callback) == 'function'){
        callback();
    };
};

const sing = (song,callback) => {
    console.log('我在跳舞'+song);
    if((typeof callback) == 'function'){
        callback();
    }
};
sing('跳舞',dance);

const sing = (song,callback) => {
    console.log('我在跳舞'+song);
        callback();
};
sing('我在跳舞',() => {console.log('我在唱:')});


//
const a1 = [1,2,5,6,3,4];
const a2 = a1.sort()
console.log(a2)

const num = (a,b) => a-b;
const a2 = a1.sort(num);
console.log(a3)

//array, fortach()
const oArray1 = [1,2,3,4]

const oArray2 = [];
console.log
for (let i = 0; i < oArray1.length;i++){
    oArray2[i] = oArray1[i] =1;
}
console.log(oArray2);
const oArray1 = [1,2,3,4]
const sum = (a) => a+1;

const oA = oArray1.forEach((arr+1) = arr1+1);