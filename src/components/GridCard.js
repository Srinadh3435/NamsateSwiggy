const GridCard = (props) =>{
    const {gridData} = props
    return (
        <div className="grid-card">
            <img className="item-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + gridData.imageId } />
        </div>
    );
}

export default GridCard;