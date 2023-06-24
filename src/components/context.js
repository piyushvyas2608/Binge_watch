import React, { useContext, useEffect, useState } from "react";
export const API_URL = `http://www.omdbapi.com/?apikey=20ea0e8b`;
const AppContext = React.createContext();
const AppProvider = ({children}) =>{
    const [isLoading, setIsLoading] = useState(true);
    const [movie , setMovie] = useState([]);
    const [isError,setIsError] = useState ({show: "false",msg:" "});
    const [query , setQuery] = useState('batman');
    const getMovies = async (url) => {
        try {
            const response = await  fetch (url);
            const data = await response.json();
            console.log(data);
            if (data.Response === "True") {
                setIsError({
                    show: false,
                    msg: " ",
                });
                setIsLoading(false);
                setMovie(data.Search);
            }
            else{
                setIsError({
                    show: true,
                    msg: data.Error,
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        let timerOut = setTimeout(()=>{
            getMovies(`${API_URL}&s=${query}`);
        }, 800)
        return () => clearTimeout(timerOut);        
    }, [query]);
    return(
        <AppContext.Provider value={{isError,isLoading,movie , query , setQuery}}>{children}</AppContext.Provider>
    );
};
const useGlobalContext = () => {
    return useContext(AppContext);
};
export {AppContext, AppProvider, useGlobalContext};