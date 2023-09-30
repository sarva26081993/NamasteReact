import React from "react";
import  ReactDOM  from "react-dom/client";


//React Element
const Header = () => {
    return (<div className="container">
        <div className="logo-container">
            <img className="logo" alt="logo" src="https://previews.123rf.com/images/miracel123/miracel1231801/miracel123180100797/94312688-food-delivery-logo.jpg" />
        </div>
        <div className="search-align">
            Search: <input type="text" placeholder="Search for Restaurant"/>
        </div>
        <div>
            <img className="profile" alt="logo" src="https://www.citypng.com/public/uploads/preview/white-user-member-guest-icon-png-image-31634946729lnhivlto5f.png" />
        </div>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);