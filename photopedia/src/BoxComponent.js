import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Astrophoto from "./images/astrophotography_300X400.png";
import Landscape from "./images/landscape_300X400.png";
import Architecture from "./images/architecture_300X400.png";
import Wildlife from "./images/wildlife_300X400.png";
import Search from './Search';
import "./Home.css";
import { makeStyles } from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LogoPhotopedia from './LogoPhotopedia';

const useStyles = makeStyles((theme) => ({
  
    [theme.breakpoints.down("sm")]: {
      width: 180,
      height: 280,
      display: "flex",
      flexDirection: "column",
    
  },
}));

function BoxComponent() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
      <>

      <div className="left_content">
        <LogoPhotopedia />
      </div>

      <div className="right_content">
        <div className="search">
          <Search />
        </div>
        <div className="photo_types_box">
          <Box
            className={classes.root}
            container
            justify="right"
            alignItems={matches ? "center" : "flex-end"}
            component="span"
            sx={{
              
              width: 280,
              height: 380,
              borderRadius: 4,
              backgroundImage: `url(${Astrophoto})`,
              "&:hover": {
                opacity: [0.9, 0.8, 0.8],
              },
            }}
          >
            <Button
              sx={{
                width: 200,
                height: 30,
                backgroundColor: "#FFFFFF",
                opacity: 0.6,
                marginTop: 21,
                marginLeft: 6,
                color: "#000000",
                fontFamily: "Perpetua Titling MT Light",
              }}
            >
              Astrophotography
            </Button>
          </Box>

          <Box
            xs={12}
            md={4}
            component="span"
            sx={{
              
              width: 280,
              height: 380,
              borderRadius: 4,
              marginLeft: 1,
              backgroundImage: `url(${Landscape})`,
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Button
              sx={{
                width: 200,
                height: 30,
                backgroundColor: "#FFFFFF",
                opacity: 0.6,
                marginTop: 21,
                marginLeft: 6,
                color: "#000000",
                fontFamily: "Perpetua Titling MT Light",
              }}
            >
              Landscape
            </Button>
          </Box>

          <Box
            xs={12}
            md={4}
            component="span"
            sx={{
              width: 280,
              height: 380,
              borderRadius: 4,
              marginLeft: 1,
              backgroundImage: `url(${Architecture})`,
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Button
              sx={{
                width: 200,
                height: 30,
                backgroundColor: "#FFFFFF",
                opacity: 0.6,
                marginTop: 21,
                marginLeft: 6,
                color: "#000000",
                fontFamily: "Perpetua Titling MT Light",
              }}
            >
              Architecture
            </Button>
          </Box>

          <Box
            xs={12}
            md={4}
            component="span"
            sx={{
              width: 280,
              height: 380,
              borderRadius: 4,
              marginLeft: 1,
              backgroundImage: `url(${Wildlife})`,
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Button
              sx={{
                width: 200,
                height: 30,
                backgroundColor: "#FFFFFF",
                opacity: 0.6,
                marginTop: 21,
                marginLeft: 6,
                color: "#000000",
                fontFamily: "Perpetua Titling MT Light",
              }}
            >
              Wildlife
            </Button>
          </Box>
        </div>
      </div>
    </>
   
  );
}

export default BoxComponent;
