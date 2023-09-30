# NamasteReact
Will be publishing Namaste React Notes

# Episode 1
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

# Episode 2

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

npx  - node package eXecute

create-react-app is a npm package

.parcel-cache is a folder which stores information about previous builds so as to create any rebuilds faster

package.json -approx version of dependencies
package-lock.json  exact version of dependencies

dist folder contains the minimized version of your source code, i.e. distributable builds

browserlist - list of supported browserversions - added in package.json as array of browser versions

  "browserslist":[
    "last 10 versions"
  ]

major.minor.patch
  ^  - accpets minor and patch, locks major

  ~  - accepts only patch, locks major and minor


Use of gitignore - we must add files/folders in this file which we do not intend to push on git/ which can be recreated

Bundlers like parcel or webpack help in shiping created software to production

# Episode 3

//Babel is responsible for transpiling jsx to js engine understandable format
//Babel gets installed as dependency of Parcel, Babel is nothing but npm package

/*const jsxHeading = <h1 id="heading"> This is Namaste react with JSX </h1> gets 
transpiled into React.createElement in the end*/

//React Functional Component

// const HeadingComponent = () => {
// return <h1>Namaste React functional components</h1>
// };