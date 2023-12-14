import { RES_LOGO } from "../utils/constants";
const ResturantCard = (props) => {
  const { resdata } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resdata?.info;
  // console.log(resdata.info.cloudinaryImageId);
  return (
    <div className="res-card" style={{ background: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={RES_LOGO + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default ResturantCard;
