import ResCard from "./ResCard";
import GridCard from "./GridCard";
import resObj from "../utils/resObj";
import gridObj from "../utils/gridObj";
import { useEffect, useState } from "react";

// let listOfRestaurants = [
//     {
//         "info": {
//           "id": "577939",
//           "name": "Burger King",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/4ecd8206-d694-42c3-8cd7-0463824af02d_577939.jpg",
//           "areaName": "Miyapur",
//           "cuisines": [
//             "Burgers",
//             "American"
//           ],
//           "avgRating": 4.1,
//           "sla": {
//             "deliveryTime": 47,
//           },
//         },
//     },
//     {
//         "info": {
//           "id": "294078",
//           "name": "Domino's Pizza",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/31e5f69e-7732-4d46-b2cf-889e8acbae02_294077.JPG",
//           "areaName": "Kukatpally",
//           "cuisines": [
//             "Pizzas",
//             "Italian",
//             "Pastas",
//             "Desserts"
//           ],
//           "avgRating": 3.9,
//           "sla": {
//             "deliveryTime": 25,
//           },
//         }
//     }
// ]

const BodyComponent = () =>{
    const [listOfRestaurants, setListofRestaurants] = useState(resObj)
    const [gridOfItems, setGridOfItems] = useState(gridObj)

    useEffect(()=>{
        const apiData = fetchapiData()
    },[])

    const fetchapiData = async () => {
        const apirawData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.548091954617774&lng=78.36499437689781&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const apijsonData = await apirawData.json();
        const resmainList = apijsonData.data.cards[4].card?.card?.gridElements?.infoWithStyle.restaurants

        // const resmainList = apijsonData.data.cards[4]

        setListofRestaurants(resmainList);
        console.log(resmainList);

        const gridListData = apijsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
        setGridOfItems(gridListData)
        
    }

    return(
        <div className="body">
            <h3>What's on your mind?</h3>
            <div className="grid-container">
                {gridOfItems.map((gridVal)=> <GridCard key={gridVal.id} gridData={gridVal} />)}
            </div>
            <hr></hr>
            <div className="filter-container">
                <button className="filter-btn" onClick={()=>{
                    const filterdRestaurants = listOfRestaurants.filter(
                        (restaurant) => restaurant.info.avgRating > 4.0);
                        console.log(listOfRestaurants);
                        setListofRestaurants(filterdRestaurants)
                }}>Top-Rated restaurant</button>
            </div>
            <h3>Top restaurant chains in Hyderabad</h3>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (<ResCard key={restaurant.info.id} resData={restaurant} />)) }
            </div>            
        </div>
    );
}

export default BodyComponent;