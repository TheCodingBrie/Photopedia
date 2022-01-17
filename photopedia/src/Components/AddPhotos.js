import React, { useState } from "react";
import "./AddLocations.css";
import UploadButton from "../components/UploadButton";

const fetchUrl = "https://photopedia-server.herokuapp.com/api/photos";

export default function AddPhoto() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [type, setType] = useState("");
  const [locationId, setLocationId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // What are those doing? are they important?
    // headers : {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },

    // Add validation here or on the server
    fetch(fetchUrl, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        title: title,
        url: url,
        type: type,
        locationId: locationId,
      }),
    })
      .then((res) => res.json)
      .then((res) => {
        setTitle("");
        setUrl("");
        setType("");
        setLocationId("");
      });
  };

  return (
    <>
      <div className="header_text_location">
        <p>
          What about adding the new photos you have just taken? <br /> Here you
          have this possibility!
        </p>
      </div>

      <div className="form_container">
        <div className="form_background">
          <div className="form_inputs">
            <form onSubmit={handleSubmit}>
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="title"
                value={title}
              ></input>
              <input
                onChange={(e) => setUrl(e.target.value)}
                type="text"
                placeholder="url"
                value={url}
              ></input>
              <input
                onChange={(e) => setType(e.target.value)}
                type="text"
                placeholder="Type"
                value={type}
              ></input>
              <input
                onChange={(e) => setLocationId(e.target.value)}
                type="text"
                placeholder="locationId"
                value={locationId}
              ></input>
              <div className="location_button">
                <UploadButton />
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
