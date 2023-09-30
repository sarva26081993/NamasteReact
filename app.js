import React from "react";
import  ReactDOM  from "react-dom/client";


//React Element
const Title = () => ( <h1 className="heading" tabIndex="1"> 

This is Namaste react with JSX 
</h1>);

const number = 10000;

//React Functional Component
const HeadingComponent = () =>( 
<div id="container">
    <h2>{number}</h2>
    {Title()}
   <Title> </Title>
<h1>
    Namaste React functional components 
</h1>
</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);



