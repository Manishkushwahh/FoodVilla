import {createContext} from "react";
const UserContext = createContext({
    user: {
        name: "Dummy Name",
        email: "Dummymail@gmail.com"
    },
})

export default UserContext;