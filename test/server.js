// const express = require("express");
// port = "3000";
// const app = express();
//
// app.set("view engine", "ejs");
//
// app.get("/", (req, res) => {
//   res.render("index");
// });
//
// app.get("/hello", (req, res) => {
//   res.json({ message: " this is hellow world message" });
// });
//
// app.listen(port, () => {
//   console.log(`server is running at the port ${port}`);
// });
//

// const students = {
//   name: "sunita",
//   printname: function (){
//     console.log(this);
//   }
// }
//
// students.printname()
//
// const student2 = {
//   name: "randheer"
// }
//
// students.printname.call(student2)
// //
// // console.log('start')
//
// setTimeout(function cb() {
//   console.log("callback")
// }, 5000);
// //
// // console.log("end")
const toBinary = function () {
    const arr = [1,2,3,4,5,6]
    const output = arr.map((item) => item.toString(2))
    console.log(output)
}
// toBinary()

const p1 = new Promise((res, rej)=>{
    setTimeout(()=>{
        res("P1 success")
    }, 3000)})

    
const p2 = new Promise((res, rej)=>{
    setTimeout(()=>{
        rej("P2 fail")
    }, 1000)
})


const p3 = new Promise((res, rej)=>{
    setTimeout(()=>{
        res("P3 success")
    }, 2000)})


// Promise.all([p1, p2, p3]).then(res=>{
//     console.log(res)
// }).catch((err)=>{
//     console.error(err)
// })
//


Promise.allSettled([p1, p2, p3]).then(res=>{
    console.log(res)
}).catch((err)=>{
    console.error(err)
})
