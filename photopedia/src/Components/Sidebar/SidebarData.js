import React from "react";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";

export const SidebarData = [
  {
    title: "HOME",
    path: "/photopedia/home",
    icon: <HomeOutlinedIcon />,
    cName: "nav-text",
  },
  // {
  //   title: "ABOUT US",
  //   path: "/photopedia/about",
  //   icon: <InfoOutlinedIcon />,
  //   cName: "nav-text",
  // },
  {
    title: "LOCATIONS",
    path: "/photopedia/locations",
    icon: <LocationOnOutlinedIcon />,
    cName: "nav-text",
  },
  {
    title: "ADD A PHOTO",
    path: "/photopedia/newphoto",
    icon: <PhotoCameraOutlinedIcon />,
    cName: "nav-text",
  },
  {
    title: "ADD A LOCATION",
    path: "/photopedia/newlocation",
    icon: <AddLocationOutlinedIcon />,
    cName: "nav-text",
  },
  {
    title: "CONTACT",
    path: "/photopedia/contact",
    icon: <ContactsOutlinedIcon />,
    cName: "nav-text",
  },
  {
    title: "EXPLORE",
    path: "/photopedia/explore",
    icon: <PhotoSizeSelectActualOutlinedIcon />,
    cName: "nav-text",
  },
];

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
