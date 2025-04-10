import ResCard from "./ResCard";
import GridCard from "./GridCard";
import gridObj from "../utils/gridObj";
import { useEffect, useState } from "react";
import Bodyshimmer from "./Bodyshimmer";

const BodyComponent = () =>{
    const [listOfRestaurants, setListofRestaurants] = useState([]);
    const [searchedRestaurant, setSearchedRestaurant] = useState([]);

    const [gridOfItems, setGridOfItems] = useState(gridObj)
    const [searchText, setSearchText] = useState("")

    useEffect(()=>{
        fetchapiData()
    },[])

    console.log("Body rendered")

    const fetchapiData = async () => {
        const apirawData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.548091954617774&lng=78.36499437689781&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const apijsonData = await apirawData.json();

        const resmainList = apijsonData.data.cards[4].card?.card?.gridElements?.infoWithStyle.restaurants
        setListofRestaurants(resmainList);
        setSearchedRestaurant(resmainList);

        const gridListData = apijsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
        setGridOfItems(gridListData)        
    }

    if (listOfRestaurants.length === 0){
        return <Bodyshimmer />
    }
    return(
        <div className="body">
            <h3>What's on your mind?</h3>
            <div className="grid-container">
                {gridOfItems.map((gridVal)=> <GridCard key={gridVal.id} gridData={gridVal} />)}
            </div>
            <hr></hr>
            <h3>Restaurant filtering Section</h3>
            <div className="filter-container">
                <div className="search-container">
                    <input type="text" className="search-bar" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
                    <button onClick={()=>{
                        const searchedRestaurant = listOfRestaurants.filter(
                            (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setSearchedRestaurant(searchedRestaurant)
                    }}>Search</button>
                </div>              
                <button className="filter-btn" onClick={()=>{
                    const filterdRestaurants = listOfRestaurants.filter(
                        (restaurant) => restaurant.info.avgRating > 4.0);
                        setListofRestaurants(filterdRestaurants)
                }}>Top-Rated restaurant</button>
            </div>

            <h3>Top restaurant chains in Hyderabad</h3>
            <div className="res-container">
                {searchedRestaurant.map((restaurant) => (<ResCard key={restaurant.info.id} resData={restaurant} />)) }
            </div>            
        </div>
    );
}

export default BodyComponent;