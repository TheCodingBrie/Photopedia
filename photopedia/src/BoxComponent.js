import * as React from "react";
import Box from "@mui/material/Box";
import Astrophoto from "./images/astrophotography_300X400.png";
import Landscape from "./images/landscape_300X400.png";
import Architecture from "./images/architecture_300X400.png";
import Wildlife from "./images/wildlife_300X400.png";
import "./Home.css";
import BoxHeader from "./components/BoxHeader/BoxHeader";
import { NavLink } from "react-router-dom";

function BoxComponent() {
  return (
    <>
      <BoxHeader />
      <div className="right_content">
        <div className="BC-mainContent">
          <div className="photo_types_box">
            <Box
              className="cards"
              sx={{
                boxSizing: "border-box",
                width: 280,
                height: 380,
                borderRadius: 4,
                backgroundImage: `url(${Astrophoto})`,
                "&:hover": {
                  opacity: [0.9, 0.8, 0.8],
                },
              }}
            >
              <button>
                <NavLink to="../Astrophotography">Astrophotography</NavLink>
              </button>
            </Box>

            <Box
              className="cards"
              sx={{
                boxSizing: "border-box",
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
              <button>
                <NavLink to="../Landscape">Landscape</NavLink>
              </button>
            </Box>

            <Box
              className="cards"
              sx={{
                boxSizing: "border-box",
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
              <button>
                <NavLink to="../Architecture">Architecture</NavLink>
              </button>
            </Box>

            <Box
              className="cards"
              sx={{
                boxSizing: "border-box",
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
              <button>
                <NavLink to="../Wildlife">Wildlife</NavLink>
              </button>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}
export default BoxComponent;
