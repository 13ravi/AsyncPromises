let p = new Promise((resolve,reject)=>{
let a = 1 + 1

if(a==2){
resolve("pass")
}
else
{
 resolve("failed")
}
})

p.then((message)=>{
 //well execute of promiss pass   
console.log('this is the then'+message)
}).catch((message)=>{
//well execute of promiss pass   
console.log('this is the catch'+message)
})




/// Call back sample

function myFucCallback(callback, errorCallback) {
    let userLeft = false
    let userWorking = false
  
    if (userLeft) {
      errorCallback({
        name: 'User Left', 
        message: ':('
      })
    } else if (userWorking) {
      errorCallback({
        name: 'user Working',
        message: 'userWorking now' 
      })
    } else {
      callback('Thumbs up and Subscribe')
    }
  }
  

  myFucCallback(message => {
    console.log(message)
  }, error => {
    console.log(error.name + ' ' + error.message)
  })



/// call back converted to promise

  function myFucPromise() {
    let userLeft = false
    let userWorking = false
    return new Promise((resolve, reject) => {
      if (userLeft) {
        reject({
          name: 'User Left', 
          message: ':('
        })
      } else if (userWorking) {
        reject({
          name: 'User Working',
          message: 'userWorking now' 
        })
      } else {
        resolve('Thumbs up and Subscribe')
      }
    })
  }
  
  
  
  myFucPromise().then(message => {
    console.log(message)
  }).catch(error => {
    console.log(error.name + ' ' + error.message)
  })


/// Example of promise - All and Race

  const actionOne = new Promise((resolve, reject) => {
    resolve('Action 1')
  })
  
  const actionTwo = new Promise((resolve, reject) => {
    resolve('Action 2')
  })
  
  const actionThree = new Promise((resolve, reject) => {
    resolve('Action 3')
  })
  

// All
// The JavaScript Promise.all() static method is used to execute multiple promises in parallel.
// This method is used to compute the result of multiple asynchronous operations. 
// It is typically used when there are multiple asynchronous tasks that are dependent on one another to complete successfully, 
// as it does not wait and will reject immediately upon any of the input promises rejecting.

  Promise.all([
    actionOne,
    actionTwo,
    actionThree
  ]).then(messages => {
    console.log(messages)
  })

//  Race
// The JavaScript Promise.race() static method accepts an iterable of Promises and returns a new Promise
// which resolves or rejects as soon as the first of the promises in the iterable has resolved or rejected. 
// When the iterable passed is empty, the promise returned will be forever pending.

  Promise.race([
    actionOne,
    actionTwo,
    actionThree
  ]).then(message => {
    console.log(message)
  })

