import { useState, useEffect } from "react";
import { FETCH_REST_MENU_URL } from "../constants";

const useRestraunt = (id) => {
    const [restraunt, setRestraunt] = useState(null);
    // const [menu, setMenu] = useState([]);
    
    useEffect(() => {
        getRestrauntInfo();
    }, [])

    async function getRestrauntInfo() {
        const data = await fetch(FETCH_REST_MENU_URL + id);
        const json = await data.json();
        console.log(json.data);
        const menu = json.data;
        // console.log(menu);
        setRestraunt(menu);
    }
    return restraunt;
};

export default useRestraunt;