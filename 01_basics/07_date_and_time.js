let myDate = new Date();
// console.log(myDate); //2025-10-21T12:27:54.107Z
// console.log(myDate.toString()); //Tue Oct 21 2025 17:57:54 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //Tue Oct 21 2025
// console.log(myDate.toISOString()); //2025-10-21T12:27:54.107Z
// console.log(myDate.toJSON()); //2025-10-21T12:27:54.107Z
// console.log(myDate.toLocaleDateString()); //21/10/2025
// console.log(myDate.toLocaleString()); //21/10/2025, 5:57:54 pm
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2025, 10, 9); //Sun Nov 09 2025 //1st params-year, 2nd-month(0 to 11), 3rd-date
let myCreatedDate = new Date(2025, 10, 9, 5, 7); //9/11/2025, 5:07:00 am, 4th-hours, 5th- mins
// console.log(myCreatedDate.toLocaleString());
// let myDate = new Date("2025-10-9");
// console.log(myDate.toLocaleString()); //9/10/2025, 12:00:00 am
// let myDate = new Date("9-10-2025");
// console.log(myDate.toLocaleString()); //10/9/2025, 12:00:00 am

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(myTimeStamp / 1000));
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getMonth() + 1); //9+1
// console.log(myDate.getFullYear());
console.log(
  myDate.toLocaleString("default", {
    weekday: "short",
  })
); //Tuesday-long //Tue-short
