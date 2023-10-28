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

type attribute in script tag :   Defines type of script to be used/interpreted

# Episode 4

Props: argument/s to functional component
functional component :  normal js function returning some jsx code

dynamic data in the components should be passed with the help of props.

props can be destructured on the go and can be used for example

const RestaurantCard = ({resname,cuisine}) => {
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" 
            alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zlg9ivz8tsouustzf2r4" />
             <h3>{resname}</h3>
             <h4>{cuisine}</h4>
             <h4>{rating}</h4>
             <h4>{eta}</h4>
        </div>
    );
};


Config Driven UI : website/ui is driven by configs(data)(eg swiggy location wise offers)

-- each child in a list should have unique "key" prop in order to avoid re-rendering
-- as per React documentation, never use indexes as keys

--  Not using keys(not acceptable ) <<<<<<<<<  index as key  <<<<<<<<<<   unique id (best practice)

-- revise map, filter and reduce(HW)

Theory questions answers : 

1. are jsx and es6 mandatory - No
2. 




# Episode 5

Two types of Export/ Import

1. default export at the end of file => export default <name of variable>

import <name of variable> from  "<path of file>"

2. named export => export const  <name of variable> = ....

import {<name of variable>} from "<path of file>"

-- New file for new components

-- React Hook is normal javascript utility function provided by react
Most commonly used Hooks are  

1. useState() -  superpowerful react variables

Syntax to create state variable : 

const [variable_name , setlistof_variable_name] = useState(default_value_to_be_passed/initial value / beginning value);

-- Whenever state variable updates, react will re-render the components

Reconciliation Algorithm/ React Fiber - 

Virtual DOM(JS Object) is representation of Actual DOM

Diff Algorithm : finds difference between old and new virtual DOM and then actually update the DOM

React Fiber was introduced in React version 16 









