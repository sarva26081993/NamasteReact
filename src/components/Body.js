import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(resObj); //state variable named listOfRestaurants has been initialized

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Filter by Top Rating
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            setlistOfRestaurants(resObj);
          }}
        >
          Clear Filter/Search
        </button>
        <input
          type="text"
          className="search-bar"
          placeholder="Search Restaurant"
        ></input>
        <button
          className="filter-btn"
          onClick={() => {
            const searchedItem = document.querySelector(".search-bar").value;
            const rgxp = new RegExp(searchedItem, "gi");
            const filteredList = listOfRestaurants.filter((res) =>
              res.info.name.match(rgxp)
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Submit
        </button>

        <button className="filter-btn" onClick={() => {
        const sortedListOfRestaurants = [...listOfRestaurants].sort((a, b) => { return b.info.avgRating-a.info.avgRating});
        setlistOfRestaurants(sortedListOfRestaurants);
      }}
      >
        Sort by Rating (High to Low)
      </button>
    </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant}>
          </RestaurantCard>
        ))}
      </div>
    </div>
  );
};

export default Body;
