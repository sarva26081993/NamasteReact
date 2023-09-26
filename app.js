import React from "react";
import  ReactDOM  from "react-dom/client";

const parent = React.createElement("div", {id: "parent"} , 
[React.createElement("div", {id: "child"},
[React.createElement("h1", {}, "I am sarvajeet"),
React.createElement("h2", {}, "I am an H2 tag"),
React.createElement("h3", {}, "I am an H3 tag")]
),React.createElement("div", {id: "child"},
[React.createElement("h1", {}, "I am an H1 tag"),
React.createElement("h2", {}, "I am an H2 tag"),
React.createElement("h3", {}, "I am an H3 tag")]
)]
 );


//const heading = React.createElement("h2",{ id : "heading", xyz : "abc"},"Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


