import { IMG_CDN_URL } from "../constants";

const FoodItem = ({name,imageId,description,price}) => {
    return(
        <div className="w-40 shadow-md m-2 p-2 bg-pink-50">
            <img className="" src={IMG_CDN_URL + imageId}></img>
            <h1 className="font-bold">{name}</h1>
            <p>{description}</p>
            <p>Price - {price / 100}</p>
        </div>
    );
};

export default FoodItem;