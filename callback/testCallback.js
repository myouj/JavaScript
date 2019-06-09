

var fu = new Function('arg1', 'arg2', 'return arg1 * arg2');

console.log(fu(2,3));

function fn(arg1, arg2, callback) {
    var num = arg1 * arg2;
    callback(num);
}

fn(10, 20, function(num) {
    console.log('num is ' + num);
})

function getUser(fristName, lastName, callback) {
    if (callback && typeof callback === 'function') {
        callback(fristName, lastName);
    }
}

function sayUser(firstName, lastName) {
    console.log(`hello:  ${firstName} ${lastName}`);
}

getUser('ma', 'youj', 111);


const arr = ['apple', 'peer', 'origin'];

arr.forEach(function(value, index) {
    console.log(`第${index + 1}个是${value}`);
});

function canUse(use, callback){
    if(use){
        callback();
    }
}

canUse(true, () => {
    console.log('callback be used');
})

