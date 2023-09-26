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

#Module 2

Parcel helps in 

1. Creating dev build
2. HMR - Hot Module Replacement (automatically updating the content of page)
3. creates local server instance
4. Uses file watching algo which is written in C++
5. Also caches - thus faster builds 
6. Image optimisation
7. Minification of files during production builds
8. Bundling
9. Compressing
10. Consistent Hashing
11. Code Splitting
12. Differential bundling
13. Diagnostics
14. Error Handling
15. HTTPs
16. Tree Shaking - removes unused code

-- npx create-react-app myapp    ----  automatically creates myapp react app

create-react-app is a npm package