import React, { useEffect } from "react";
import { getMovieList } from "./features/movies/movieSlice";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieList());
    }, []);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path=":id" element={<MovieDetail />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
