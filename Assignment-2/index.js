import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

const employee = {
name: 'AYUSH',
location: 'JHANSI',
bloodGroup: 'B+',
age: 24,
profileImg:'https://www.w3schools.com/howto/img_avatar.png'
}
var c0=React.createElement("img",{src:'https://www.w3schools.com/howto/img_avatar.png', height:"100px",width:"100px"},null,null);

var name1=employee.name;
var nameBlue=React.createElement("div",{className:"n"},[name1],null);
var c=React.createElement;
var c1=c("div",{className:"city"},"Location",null);
var c2=c("div",{className:"eLocation"},employee.location,null);
var c3=c("div",{className:"bloodgroup"},"Blood Group",null);
var c4=c("div",{className:"ebloodgroup"},employee.bloodGroup,null);
var c5=c("div",{className:"age"},"Age",null);
var c6=c("div",{className:"eage"},employee.age,null);
var cMain=c("div",null,[nameBlue,c1,c2,c3,c4,c5,c6],null);


ReactDOM.render(cMain,document.getElementById('root'
));

