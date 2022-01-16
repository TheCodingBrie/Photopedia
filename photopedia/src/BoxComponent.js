import * as React from "react";
import Box from "@mui/material/Box";
import Astrophoto from "./images/astrophotography_300X400.png";
import Landscape from "./images/landscape_300X400.png";
import Architecture from "./images/architecture_300X400.png";
import Wildlife from "./images/wildlife_300X400.png";
import "./Home.css";
import BoxHeader from "./Components/BoxHeader/BoxHeader";

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
                <a href="/">Astrophotography</a>
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
                <a href="/">Landscape</a>
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
                <a href="/">Architecture</a>
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
                <a href="/">Wildlife</a>
              </button>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}
export default BoxComponent;
