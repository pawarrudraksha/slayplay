import React from "react";
import woman3 from "../pictures/woman3.jpg";

const Navbar = (props) => {
  return (
    <>
      <nav id="navbar">
        <ul>
          <li className="item">
           
            <i className="fa-sharp fa-solid fa-chevron-left "></i>
          </li>
          <li className="item">
            
            <i className="fa-sharp fa-solid fa-chevron-right"></i>
          </li>
          <li className="item">
            <input
              type="text"
              name="search"
              id="searchBar"
              placeholder="Search"
            />
          </li>
          <li className="item">
            <i className="fa-solid fa-magnifying-glass"></i>
          </li>
        </ul>
        <div className="profile">
          <img src={woman3} alt="SEVEN SPICES" />
          <h4>Julia</h4>
        </div>
        <div>
          {/* <label htmlFor="profileDropdown"></label>
          <select name="profileDropdown" id="profileDropdown">
           
          </select> */}
          <i className="fa-sharp fa-solid fa-chevron-down" id="profileDropdown"></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
