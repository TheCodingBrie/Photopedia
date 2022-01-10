import React from "react"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined"

export const SidebarData = [
  {
    title: "ABOUT US",
    path: "about",
    icon: <InfoOutlinedIcon />,
    cName: "nav-text",
  },
  {
    title: "SEARCH",
    path: "search",
    icon: <SearchOutlinedIcon />,
    cName: "nav-text",
  },
  {
    title: "PHOTO TYPE",
    path: "photo-type",
    icon: <PhotoCameraOutlinedIcon />,
    cName: "nav-text",
  },
  {
    title: "LOCATIONS",
    path: "locations",
    icon: <LocationOnOutlinedIcon />,
    cName: "nav-text",
  },
  {
    title: "CONTACT",
    path: "contact",
    icon: <ContactsOutlinedIcon />,
    cName: "nav-text",
  },
]

/*
import React from "react"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined"


export const SidebarData = [
  {
    title: "ABOUT US",
    icon: <InfoOutlinedIcon />,
    lik: "/about",
    //path: "about",
    cName: "nav-text",
  },
  {
    title: "SEARCH",
    icon: <SearchOutlinedIcon />,
    link: "/search",
    //path:"search",
    cName: "nav-text",
  },
  {
    title: "PHOTO TYPE",
    icon: <PhotoCameraOutlinedIcon />,
    link: "/photo-type",
    //path:"photo-type"
    cName: "nav-text",
  },
  {
    title: "LOCATIONS",
    icon: <LocationOnOutlinedIcon />,
    link: "/locations",
    cName: "nav-text",
  },
  {
    title: "CONTACT",
    icon: <ContactsOutlinedIcon />,
    link: "contact",
    cName: "nav-text",
  },
]
*/
