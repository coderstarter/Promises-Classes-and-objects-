// const response = fetch('https://api.github.com/users/coderstarter');

// // console.log(reponse);
// function success(data){
//     console.log('This is success', data);
// }
// function err(error){
//     console.log('This is error', error);
// }

// function executeEveryTime(){
//     console.log('End of Promise', arguments); // to see the rest of arguments or pass ...args and log it
// }

// response.then(success).catch(err).finally(executeEveryTime);

// Custom Promises

// function launchPromise(id, pass) {
//     const promise = new Promise((resolve, reject) => {
//         if(pass != 'ADMIN123'){
//             return reject(`Incorrect Password! ${reject}`)
//         }
//         // pass is correct
//         setTimeout(() => resolve({rocketId : id, status : 'Success'}), 10 * 1000); 
//     })
//     return promise;
// }
// console.log('START');
// const result = launchPromise('123', "ADMIN123");
// // console.log(result);
// result.then((data) => console.log('Rocket launched'))
// .catch((error) => console.log('Rocket is failed to launched'));



// function launchPromise(id, pass, t) {
//     const promise = new Promise((resolve, reject) => {
//         if(pass != 'ADMIN123'){
//             return reject(`Incorrect Password! ${pass}`)
//         }
//         // pass is correct
//         setTimeout(() => resolve({rocketId : id, status : 'Success'}), t * 1000); 
//     })
//     return promise;
// }
// console.log('START');
// const result = launchPromise('123', "ADMIN123", 5);
// // console.log(result);
// result.then((data) => console.log('Rocket launched'))
// .catch((error) => console.log('Rocket is failed to launched'));

// // or other way
// const waiter = seconds => new Promise((res, rej) => setTimeout(res, seconds* 1000));
// waiter(5).then(() => console.log('5 seconds up'));


// Promisification
// const fs = require('fs');
// console.log('Start');
// fs.readFile('file.txt', 'utf-8', function cb(err, data) {
//     console.log('Done');
// });

// function readFileAsync(filename, encoding) {
//     return new Promise((res, rej) => {
//         fs.readFile(filename,encoding, function(err, data){
//             if(err){
//                 return rej(err);
//             }
//             res(data);
//         })
//     })
// }
// console.log('end');

// Promise ALL
const resolveAfter = s => new Promise((res, rej) => setTimeout(() => res(s), s * 1000));
const rejectAfter = s => new Promise((res, rej) => setTimeout(() => rej(s), s * 1000));

const promises = [
    resolveAfter(1),
    resolveAfter(4),
    resolveAfter(6),
    rejectAfter(1)
]

Promise.all(promises)
.then(data => console.log(data))
.catch(e => {
    console.log('rejected at ',e);
})

Promise.allSettled(promises)
.then(data => console.log(data))
.catch(e => {
    console.log('rejected at ',e);
})

// Help me to learn the concept of Promise.all and Promise.allSettled 
// and how to use them in real world projects
Promise.all(promises) 
