import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_URL } from "../utils/constants";

const RestuarantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);
  const { resId } = useParams();
  // const { resId } = useParams(resId);
  console.log(RES_URL + resId);
  const [resMenu, setresMenu] = useState(null);
  //console.log(useState());
  const fetchMenu = async () => {
    const data = await fetch(RES_URL + resId);
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.600661&lng=73.732485&restaurantId=3417"
    // );

    const json = await data.json();
    console.log(json.data);
    setresMenu(json?.data);
  };
  if (resMenu === null) {
    return <Shimmer />;
  }
  const { name, cuisines, avgRating, costForTwoMessage, sla } =
    resMenu?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const { categories } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards, categories);
  //const {  } = resMenu?.cards[2]?.card?.card?.info;
  return (
    <div>
      <div className="resInfo">
        <p>
          <li>
            <span style={{ fontSize: 20 }}>Resturant : {name} </span>
          </li>
          <li> </li>
          <li>cuisines :{cuisines.join(", ")}</li>
          <li>Price :{costForTwoMessage}</li>
          <li>DeliveryTime : {sla.deliveryTime} Mins</li>
          <li>AvgRatings :{avgRating}</li>
        </p>
      </div>
      <h1>******************MENU*******************</h1>
      {itemCards !== undefined ? (
        <div>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Price: Rs
              {(item.card.info.defaultPrice || item.card.info.price) / 100}
            </li>
          ))}
        </div>
      ) : (
        <div>
          {categories[0].itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Price: Rs
              {(item.card.info.defaultPrice || item.card.info.price) / 100}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};
export default RestuarantMenu;
