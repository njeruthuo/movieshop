const API_KEY = "7ade6bbe4bba60190f504a7e5436a500";
const BASE_URL = "https://api.themoviedb.org/3/movie/top_rated";
export const MOVIELIST_URL = `${BASE_URL}?api_key=${API_KEY}`;
export const TOP_MOVIE_DETAIL_URL =
    `https://api.themoviedb.org/3/movie/458156?api_key=` + API_KEY;
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const genres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
];

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";

export const drawerOptions = [
    { name: "Subscriptions", icon: <SubscriptionsOutlinedIcon /> },
    { name: "Favorites", icon: <FavoriteBorderOutlinedIcon /> },
    { name: "Starred", icon: <StarBorderPurple500OutlinedIcon /> },
];

export const metadata = ["Conditions of Use", "Privacy & Policy", "Press Room"];
