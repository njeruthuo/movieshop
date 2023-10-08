import { Box, IconButton } from "@mui/material";
import {toggleSearchFullWidth} from "../../features/general/generalSlice";

import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";

function FullSearch({ search, setSearch }) {
    const dispatch = useDispatch();

    return (
        <Box sx={{ width: "100%" }}>
            <form>
                <input
                    type="search"
                    className="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    name="search"
                    placeholder="What do you want to watch?"
                    id="search-panel"
                />
                <IconButton
                    onClick={() => dispatch(toggleSearchFullWidth())}
                    style={{
                        color: "white",
                        marginLeft: "auto",
                    }}
                >
                    <SearchIcon />
                </IconButton>
            </form>
        </Box>
    );
}

export default FullSearch;
