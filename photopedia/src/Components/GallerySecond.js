import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Photo1 from "./../images/Westhavelland.png";
import Photo2 from "./../images/Rhön.png";
import Photo3 from "./../images/Eifel.png";
import Photo4 from "./../images/Winkl_Moosalm.png";
import Photo5 from "./../images/Sankt_Andreasberg.png";
import "./GallerySecond.css";
import Sidebar from "./Sidebar/Sidebar";
// import SearchBar from "./SearchBar";
import Line from "./../images/line.png";
import GalleryButton from "./../components/GalleryButton";
//import SocialMedia from "./SocialMedia/SocialMedia"
//import ReturnButton from "./ReturnButton"
import "./ReturnButton.css";
import SearchbarHeader from "./SearchbarHeader/SearchbarHeader";

// import LocationButton from './../components/LocationButton';
// import PhotoDescriptions from './../components/Descriptions';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const backgroundStyles = {
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
    //width: 516,
    //height: 542,
    borderRadius: 5,
  };

  const tabStyles = {
    fontFamily: "Perpetua Titling MT Light",
  };

  // const photoStyles = {
  //   backgroundRepeat: 'no-repeat',
  //   width: 1032,
  //   height: 542,
  // }

  return (
    <>
      <SearchbarHeader />
      <div className="GWD-mainContent">
        <Sidebar />

        <div className="right_box">
          <div className="rb-left">
            <div
              className="header_box"
              style={{
                textAlign: "center",
                fontFamily: "Perpetua Titling MT Light",
              }}
            >
              <h5>Astrophotography</h5>
              <img src={Line} alt="line" width="100px" />
            </div>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              <Tab label="Westhavelland" {...a11yProps(0)} style={tabStyles} />
              <Tab label="Rhön" {...a11yProps(1)} style={tabStyles} />
              <Tab
                label="Eifel Nature Park"
                {...a11yProps(2)}
                style={tabStyles}
              />
              <Tab label="Winkl-Moosalm" {...a11yProps(3)} style={tabStyles} />
              <Tab
                label="Sankt Andreasberg"
                {...a11yProps(4)}
                style={tabStyles}
              />
            </Tabs>
          </div>
          {/* <SearchBar /> 
          <div className="return_button_gallery">
            <ReturnButton />
          </div> */}
          {/* <Box
            className="photo_box"
            sx={{
              flexGrow: 1,
              bgcolor: "background.paper",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              height: 224,
              marginLeft: 40,
            }}
          >
           <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              <Tab label="Westhavelland" {...a11yProps(0)} style={tabStyles} />
              <Tab label="Rhön" {...a11yProps(1)} style={tabStyles} />
              <Tab
                label="Eifel Nature Park"
                {...a11yProps(2)}
                style={tabStyles}
              />
              <Tab label="Winkl-Moosalm" {...a11yProps(3)} style={tabStyles} />
              <Tab
                label="Sankt Andreasberg"
                {...a11yProps(4)}
                style={tabStyles}
              />
           </Tabs> */}

          <div className="photo_box">
            <TabPanel value={value} index={0}>
              <div
                className="background_photo"
                style={{
                  backgroundImage: `url(${Photo1})`,
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div
                  className="background_photo_description"
                  style={backgroundStyles}
                >
                  <h4>Westhavelland</h4>
                  <p>
                    In sparsely populated Westhavelland, around 70 kilometres to
                    the west of Berlin, you can even find one of the darkest
                    spots in the whole country. Amateur astronomers are ideally
                    catered for here, with guided tours and photography courses
                    as well as astro-friendly accommodation with binoculars and
                    telescopes. And the sights you can spot on clear nights are
                    amazing. As well being able to see the Milky Way with the
                    naked eye, there's also a chance to observe the airglow,
                    faint light from higher atmospheric layers. The US
                    non-governmental organisation International Dark Sky
                    Association (IDA) designated Westhavelland Nature Park as
                    Germany's first Dark Sky Reserve in 2014. The darkest point
                    is in the core area between the small towns of Gülpe and
                    Nennhausen. Visitors can seek out nine marked observation
                    points and from there view thousands of stars and planets,
                    and with a little luck, perhaps some shooting stars and
                    comets too.
                  </p>

                  <div className="gallery_button">
                    <GalleryButton />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div
                className="background_photo"
                style={{
                  backgroundImage: `url(${Photo2})`,
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div
                  className="background_photo_description"
                  style={backgroundStyles}
                >
                  <h4>The Rhön Dark Sky Reserve</h4>
                  <p>
                    Around the world, the IDA has recognised around 40 regions
                    in which artificial light has been eliminated to a great
                    extent and the dark night sky is protected. As well as
                    focusing on attractions for tourists, the organisation also
                    has an educational role. It works to disseminate
                    astronomical knowledge, raise awareness of the night sky as
                    a cultural asset and inform people of the consequences of
                    light smog. This phenomenon can irritate nocturnal animals
                    and birds or disrupt plants' growth cycles. A transition
                    between light and dark is an important time mechanism for
                    ecosystems and for us humans too. htyears away.
                  </p>

                  <div className="gallery_button">
                    <GalleryButton />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div
                className="background_photo"
                style={{
                  backgroundImage: `url(${Photo3})`,
                  backgroundRepeat: "no-repeat",
                  width: 1032,
                }}
              >
                <div
                  className="background_photo_description"
                  style={backgroundStyles}
                >
                  <div className="background_photo_description">
                    <h4>The Eifel Nature Park</h4>
                    <p>
                      Visitors can also find darkness in the Eifel region on the
                      border with Belgium and Luxembourg – a kind of island in
                      the otherwise densely populated state of North
                      Rhine-Westphalia. The Eifel Nature Park, some 65
                      kilometres south-west of Cologne, is mainly spared from
                      artificial light sources and was recognised by the IDA as
                      a Dark Sky Reserve in 2019. Here too, you can see the
                      shimmering white stripe of the Milky Way on clear nights
                      to a level of detail possible in just a few places in
                      Europe. Another attraction is the astronomy workshop
                      "Sterne ohne Grenzen" (Stars Without Borders) at the
                      Vogelsang observatory. Guided star tours are available
                      here in German and English – including equipment such as
                      telescopes and large binoculars. While balmy summer nights
                      are perhaps more pleasant, winter is a particularly good
                      time for stargazers for one reason alone: the nights are
                      longer and start early. This makes it possible for
                      families with children to come along and look at the stars
                      without staying up too late.
                    </p>
                  </div>
                  <div className="gallery_button">
                    <GalleryButton />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <div
                className="background_photo"
                style={{
                  backgroundImage: `url(${Photo4})`,
                  backgroundRepeat: "no-repeat",
                  width: 1032,
                }}
              >
                <div
                  className="background_photo_description"
                  style={backgroundStyles}
                >
                  <div className="background_photo_description">
                    <h4>Winkl-Moosalm</h4>
                    <p>
                      At a lofty height, although not quite all the way to the
                      stars, is the Winkl-Moosalm, the astronomical alternative
                      at 1,200 metres in the Chiemgau Alps. The first Dark Sky
                      Reserve in the Alps, the Winkelmoosalm is a great place
                      for hiking in summer and a varied ski area in winter – the
                      one constant being the 360-degree panoramic view. When
                      darkness falls, an unparalleled firmament appears on clear
                      alpine nights. It's possible to spot details of the Milky
                      Way, galactic nebulae or red giants, large and very bright
                      stars, in the constellation of Taurus, for instance.
                      During guided tours, astronomers provide live explanations
                      of space, using a special laser pointer for extra clarity.
                    </p>
                  </div>
                  <div className="gallery_button">
                    <GalleryButton />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <div
                className="background_photo"
                style={{
                  backgroundImage: `url(${Photo5})`,
                  backgroundRepeat: "no-repeat",
                  width: 1032,
                }}
              >
                <div
                  className="background_photo_description"
                  style={backgroundStyles}
                >
                  <div className="background_photo_description">
                    <h4>Sankt Andreasberg </h4>
                    <p>
                      Recognition by the Dark Sky Association is an honour, but
                      Germany has even more top spots for stargazers, although
                      without the IDA label. Many public observatories, for
                      example in Sankt Andreasberg in the Upper Harz, are
                      currently seeking recognition as an IDA Dark Sky Reserve.
                      Talks are given here and telescopes are available; there
                      is also a planetarium as a bad weather alternative. Like
                      the Swabian Alb Biosphere Reserve in the south of Germany,
                      the observatory in Harz is also seeking recognition as an
                      IDA Dark Sky Reserve. It can also get extremely dark on
                      some North Sea islands, such as Amrum, Pellworm or
                      Spiekeroog. The IDA measured the darkest sky over Germany
                      to date on the island of Spiekeroog. The island in the
                      Lower Saxon Wadden Sea is also seeking certification,
                      which would make it Germany's first Dark Sky Island.
                    </p>
                  </div>
                  <div className="gallery_button">
                    <GalleryButton />
                  </div>
                </div>
              </div>
            </TabPanel>
          </div>
          {/* </Box> */}
        </div>
      </div>
    </>
  );
}

/*
 const backgroundStyles = {
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
    width: 516,
    height: 542,
    borderRadius: 5,
  }


<TabPanel value={value} index={0}>
              <div
                className="background_photo"
                style={{
                  backgroundImage: `url(${Photo1})`,
                  backgroundRepeat: "no-repeat",
                  width: 1032,
                  height: 500,
                }}

                */
