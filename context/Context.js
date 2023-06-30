import { createContext, useEffect, useState } from "react";
// import axios from "axios";

export const LocationContext = createContext()

const Context = ({children}) =>{

    
    const [destination, setDestination] = useState({
        longitude: null,
        latitude: null
    })
    const [origin, setOrigin] = useState(null)
    const [index, setIndex] = useState(1)
    const [source, setSource] = useState()


    return(
        <LocationContext.Provider value={{destination,setDestination,origin,setOrigin}}>
        {children}
        </LocationContext.Provider>
    )
};
export default Context;