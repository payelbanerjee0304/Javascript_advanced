// fetch('https://something.com').then().catch().finally()
const promiseOne = new Promise((resolve, reject) => {
  //Do an async task
  //DB calls, cryptography,network
  setTimeout(() => {
    // console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  // console.log("promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  // console.log("Async 2 resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "payel", email: "payel@example.com" });
  }, 1000);
});

promiseThree.then((user) => {
  // console.log(user);
  // console.log(user.username);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "payel", email: "payel@example.com" });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});

// const username = promiseFour.then((user) => {
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    // console.log(username);
  })
  .catch((error) => {
    // console.log(error);
  })
  .finally(() => {
    // console.log("Promise is resolved or rejected");
  });
// console.log(username);

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "JS", password: "123" });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});
