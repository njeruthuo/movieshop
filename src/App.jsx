import React, { useEffect } from "react";
import { getMovieList } from "./features/movies/movieSlice";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieList());
    }, []);
    
    return (
        <>
            {/* <Home /> */}
            <MovieDetail />
        </>
    );
};

export default App;
