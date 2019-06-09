
let cook = () => {
    console.log('开始做饭');
    let p = new Promise(function(resolev, reject) {
        setTimeout(function() {
            console.log('饭做好了');
            resolev('炒饭');
            // reject('饭焦了');
        });
    });
    return p;
}

let eat = (data) => {
    console.log(`吃${data}`);
}

cook().then(function(resolev, reject) {
    console.log(resolev);
    throw new Error('真难吃');
}).catch(error => {
    console.error(error);
});

cook().then(eat).catch(error => {
    console.error(error);
});
