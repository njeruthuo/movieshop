import { Box, IconButton } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ search, setSearch }) {
    return (
        <Box>
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
