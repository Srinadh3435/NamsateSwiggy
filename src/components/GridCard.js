import { GRID_IMAGE_CDN } from "../utils/constants";

const GridCard = (props) =>{
    const {gridData} = props
    return (
        <div className="grid-card">
            <img className="item-image" src={GRID_IMAGE_CDN + gridData.imageId } />
        </div>
    );
}

export default GridCard;