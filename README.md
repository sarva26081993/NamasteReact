# NamasteReact
Will be publishing Namaste React Notes

//Episode 1
What is Emmet?
Emmet is a set of plugins for fast coding and editing in HTML via content assist


Library vs Framework ?
Library : Reuse , code controlled calls, 
Framework : new s/w dev , framework controls function calls

CDN : Content delivery networks , helps in caching of content near to end users

React - Creating elements
ReactDOM - DOM related operations

react.development.js are not optimized and used for development purpose only, for applications working in prod , we need to used react.production.js

async - No sequential execution
defer - execute js file after html file has been loaded

crossorigin allows error logging for websites using different servers for static media

<html> 
    <body> 
            <div id="myroot"> 
                    <h1> Hello World </h1>
            </div>
    </body>
</html>

<script> 
const element = document.createElement("h1");
element.innerText = "Hello World";
const root = document.getElementById("myroot");
root.appendChild(element);
</script>

<script>

const element = React.createElement("h1",{},"Hello world");
const root = ReactDOM.createRoot(document.getElementById("myroot"));
root.render(element);

</script>
