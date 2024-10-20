import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestraunt from "../utils/useRestraunt";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


const RestrauntMenu = () => {
    // how to read Dynamic params
    const param = useParams();
    const {id} = param;
    const restraunt = useRestraunt(id);
    const restrauntData = restraunt?.cards[2]?.card?.card?.info;
    // console.log(restrauntData);
    const restrauntMenu = restraunt?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    // console.log(restrauntMenu);

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    };

    return(!restraunt) ? (<Shimmer/>) : (
        <div className="menu flex">
            <div className="details m-2 p-2">
            {/* <h1>Restraunt Id :{id} </h1> */}

            <h1 className="font-bold text-2xl">{restrauntData.name}</h1>
            <img className="w-80 my-2" src={IMG_CDN_URL + restrauntData.cloudinaryImageId} />
            <h3>{restrauntData.area}</h3>
            <h3>{restrauntData.city}</h3>
            <h3>{restrauntData.avgRating}</h3>
            <h3>{restrauntData.costForTwo}</h3>
            </div>
            <div className="menu-info m-2 p-2">
                <h1 className="font-bold text-2xl">Menu -</h1>
                <ul>
                    {Object.values(restrauntMenu).map((item)=> (
                        <li key={item.card.info.id}>{item.card.info.name}-{" "}
                            <button
                            className="p-1 bg-green-100 rounded-md font-bold"
                            onClick={()=> addFoodItem(item.card.info)}
                            >Add</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>    
    )
};

export default RestrauntMenu;