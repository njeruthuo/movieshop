import { useEffect, useState } from "react";
import { TOP_MOVIE_DETAIL_URL } from "../../consts/data";
import { IMAGE_BASE_URL } from "../../consts/data";

const useDataFetch = () => {
    const [headerData, setHeaderData] = useState([]);
    useEffect(() => {
        const fetchHeader = async () => {
            try {
                const response = await fetch(TOP_MOVIE_DETAIL_URL);
                const data = await response.json();
                setHeaderData(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchHeader();
    }, []);

    const bg = IMAGE_BASE_URL + headerData?.backdrop_path;

    return { headerData, bg };
};
export default useDataFetch;
