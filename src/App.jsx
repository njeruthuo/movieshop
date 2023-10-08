import React, { useEffect } from "react";
import { getMovieList } from "./features/movies/movieSlice";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieList());
    }, []);
    return (
        <>
            <Home />
        </>
    );
};

export default App;
