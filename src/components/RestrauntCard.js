import {IMG_CDN_URL} from "../constants";

import { restrauntList } from "../constants";

const RestrauntCard = ({name, cuisines, avgRating, cloudinaryImageId}) => {

    // const {name, cuisines, avgRating, cloudinaryImageId} = restraunt.info;
    return(
        <div className="card w-52 p-2 my-2 mx-5 shadow-lg bg-pink-50 ">
            <img className="card-image" src={IMG_CDN_URL + cloudinaryImageId} />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3 className="card-cusines">{cuisines.join(", ")}</h3>
            <h4 className="card-rating">{avgRating} stars</h4>
        </div>
    );
}

export default RestrauntCard;