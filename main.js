// const fs = require('fs');
// console.log(typeof fs);
// let daysOfWeek = require('./days-of-week');
// console.log(daysOfWeek);
const request = require('request');
request(
    'http://jsonplaceholder.typicode.com/users',
    function (err, res, body) {
        console.log(body);
    }
);

// let day = daysOfWeek.getWeekday(5);
// console.log(day);



// fs.writeFile('./hello.txt', 'Hello!', function () {
//     console.log('done creating file');
// });

