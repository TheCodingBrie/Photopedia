import React from 'react';
import {  TextField, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import "./../Home.css";




const SearchBar = ({keyword,setKeyword}) => {
    const style = {
          width:"35rem", 
          height: "2rem", 
          border:"none", 
          padding:"0.5rem", 
          fontFamily: "Perpetua Titling MT Light",
          

        // Adding media querry..
        '@media (max-width: 800px)': {
          display: "none"
        },
      };
   
  return (
    <TextField className="search"
    //  fullWidth
     style={style}
    //  id="standard-bare"
     variant="outlined"
    //  key="random1"
     value={keyword}
     placeholder={"What kind of photos you want to take?"}
     sx={{ fontFamily:"Perpetua Titling MT Light" }}
     onChange={(e) => setKeyword(e.target.value)}
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchOutlined />
                </IconButton>
          ),
        }}
     
    />
  );
}


              
export default SearchBar;