// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
function  Fun1(){
    console.log('1111');
    alert("11111");
}
require("./Src/Scripts/demo.js")
Fun1();