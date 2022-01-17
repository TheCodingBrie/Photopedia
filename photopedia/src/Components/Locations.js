import React, { useState } from "react";
import './Locations.css';

const fetchUrl = "http://localhost:3001/api/locations";

export default function AddLocation() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [lattitude, setLattitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [type, setType] = useState("");

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
        name: name,
        description: description,
        lattitude: lattitude,
        longitude: longitude,
        type: type,
      }),
    })
      .then((res) => res.json)
      .then((res) => {
        setName("");
        setDescription("");
        setLattitude("");
        setLongitude("");
        setType("");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="name"
        value={name}
      ></input>
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="description"
        value={description}
      ></input>
      <input
        onChange={(e) => setLattitude(e.target.value)}
        type="text"
        placeholder="lattitude"
        value={lattitude}
      ></input>
      <input
        onChange={(e) => setLongitude(e.target.value)}
        type="text"
        placeholder="longitude"
        value={longitude}
      ></input>
      <input
        onChange={(e) => setType(e.target.value)}
        type="text"
        placeholder="type"
        value={type}
      ></input>
      <button>Submit</button>
    </form>
  );
}

