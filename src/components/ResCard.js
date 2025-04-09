const ResCard = (props) =>{
    const { resData } = props;

    const {name,cloudinaryImageId,avgRating,sla,cuisines,areaName} = resData?.info;

    return(
        <div className="res-card">
            <img className="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId } />
            <h3>{name}</h3>
            <p><span>{avgRating}</span> stars</p>
            <p>{sla.deliveryTime} mins</p>
            <p>{cuisines.join(" | ")}</p>
            <p>{areaName}</p>
        </div>
    );
}

export default ResCard;