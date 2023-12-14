import ResturantCard from "./ResturantCard";
//import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

export const Body = () => {
  const [listResturants, setlistResturants] = useState([]);
  const [filteredList, setfilteredList] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.600661&lng=73.732485&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // console.log(
    //   json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setlistResturants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Below concept is also know as conditional rendering
  // if (listResturants.length === 0) {
  //   //console.log("abhi");
  //   return <Shimmer />;
  // }

  return listResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <div className="searchbox">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />

          <button
            className="search-btn"
            onClick={() => {
              {
                console.log(searchText.toString());
              }
              const filtered = listResturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredList(filtered);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="rate-btn"
            onClick={() => {
              const filteredList = listResturants.filter(
                (res) => res.info.avgRating >= 4
              );
              // console.log(listResturants);
              setfilteredList(filteredList);
            }}
          >
            Top Rated Resturants
          </button>
        </div>
      </div>
      {/* {console.log(filteredList)} */}
      <div className="res-container">
        {filteredList.map((resturants) => (
          <Link
            key={resturants.info.id}
            to={"/resturants/" + resturants.info.id}
          >
            <ResturantCard resdata={resturants} />
          </Link>
        ))}
      </div>
    </div>
  );
};

//export default Body;
