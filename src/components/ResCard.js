import { RESTCARD_IMAGE_CDN } from "../utils/constants";

const ResCard = (props) =>{
    const { resData } = props;

    const {name,cloudinaryImageId,avgRating,sla,cuisines,areaName} = resData?.info;

    return(
        <div className="res-card">
            <img className="res-logo"
            src={RESTCARD_IMAGE_CDN + cloudinaryImageId } />
            <h3>{name}</h3>
            <p><span>{avgRating}</span> stars</p>
            <p>{sla.deliveryTime} mins</p>
            <p>{cuisines.join(" | ")}</p>
            <p>{areaName}</p>
        </div>
    );
}

export default ResCard;