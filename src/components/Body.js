import {restrauntList} from "../constants";
import RestrauntCard from "./RestrauntCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";


const Body = () => {
    const [searchText, setSearchText] = useState("");
    // const [restraunts, setRestraunts] = useState(restrauntList);
    const [allRestraunts, setAllRestraunts] = useState([]);
    const [filteredRestraunts, setFilteredRestraunts] = useState([]);


    useEffect(() => {
        //API call
        getRestraunts();
    },[])

    async function getRestraunts(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.18260&lng=78.02560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // setIsLoader(false);
        // console.log(json);
        // Do Optional Chainung
        setAllRestraunts(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestraunts(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    // const isOnline = useOnline();
    // if(!isOnline){
    //     return <h1>Uppps, No Internet Connection</h1>;
    // }
    // not render componet (Condiotional Rendering)
    if(!allRestraunts) return null;

    // if(filteredRestraunts?.length === 0) return <h1>No Restraunt Found Your Match</h1>

    return allRestraunts.length === 0 ? (
    <Shimmer/>
    ) : (
        <div className="body">
            {/* {isLoader && <BounceLoader />} */}
            <div className="search-container bg-purple-300 my-3 p-4">
                <input 
                data-testid="search-input"
                className="focus:bg-green-100 rounded-md p-1 m-2" 
                type="text" 
                placeholder="Search"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value)
                }}
                />
            {/* <h1>{text}</h1> */}
            <button 
            data-testid="search-btn"
            className="search-btn bg-gray-600 text-white p-1 mx-1 rounded-md hover:bg-green-400" 
            onClick={() => {
                // if(text === "true"){
                //     setText("false");
                // }else{
                //     setText("true");
                // }

                //need to filter data
                const data = filterData(searchText, allRestraunts);
                //update the state - restraunts
                setFilteredRestraunts(data);
            }}
            >Search</button>
            </div>

            <div className="restraunt-list flex flex-wrap" data-testid="res-list">
            {/* <RestrauntCard 
            name = {restrauntList[0].name}
            cusines =  {restrauntList[0].cusines}
            />
            <RestrauntCard 
            name = {restrauntList[1].name}
            cusines =  {restrauntList[1].cusines}
            /> */}


            {/* spread operator */}

            {/* <RestrauntCard {...restrauntList[0]}/>
            <RestrauntCard {...restrauntList[1]}/>
            <RestrauntCard {...restrauntList[2]}/>
            <RestrauntCard {...restrauntList[3]}/>
            <RestrauntCard {...restrauntList[4]}/>
            <RestrauntCard {...restrauntList[5]}/>
            <RestrauntCard {...restrauntList[6]}/>
            <RestrauntCard {...restrauntList[7]}/> */}

            {/* Trough Map */}
            
            {filteredRestraunts.map((restraunt) => {
                return <Link 
                to={"/restraunts/" + restraunt.info.id} 
                key={restraunt.info.id}
                >
                <RestrauntCard {...restraunt.info} />
                </Link>
            })}

            </div>
        </div>
    );
    
};

export default Body;