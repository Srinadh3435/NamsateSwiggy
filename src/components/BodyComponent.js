import ResCard from "./ResCard";
import GridCard from "./GridCard";
import resObj from "../utils/resObj";
import gridObj from "../utils/gridObj";

const BodyComponent = () =>{
    return(
        <div className="body">
            <div className="filter-container">
                <button className="filter-btn" onClick={()=>{}}>Top-Rated restaurant</button>
            </div>
            <h3>What's on your mind?</h3>
            <div className="grid-container">
                {gridObj.map((gridVal)=> <GridCard key={gridVal.id} gridData={gridVal} />)}
            </div>
            <hr></hr>
            <h3>Top restaurant chains in Hyderabad</h3>
            <div className="res-container">
                {resObj.map((restaurant) => (<ResCard key={restaurant.info.id} resData={restaurant} />)) }
            </div>            
        </div>
    );
}

export default BodyComponent;