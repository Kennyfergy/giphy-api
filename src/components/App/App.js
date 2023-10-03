import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function App() {
  // Renders the entire app on the DOM
  const dispatch = useDispatch();
  const random = useSelector((store) => store.random);
  //console.log(random);

  useEffect(() => {
    getGiphy();
  }, []);

  const getGiphy = () => {
    //console.log("getGiphy ran");
    axios({
      method: "GET",
      url: "/random",
    })
      .then((response) => {
        dispatch({
          type: "SET_RANDOM",
          payload: response.data,
        });
      })
      .catch((err) => console.log(err));
  };
  //console.log(random.data);
  return (
    <div>
      <header className="App-header">
        <h1>Random Giphy API</h1>
        <button onClick={getGiphy}>Random GIF</button>
      </header>
      <br />
      <div className="returnStuff">
        <p>Results go here</p>
        {random.data !== undefined && (
          <div>
            <img
              className="image"
              src={random.data.images.original.url}
              alt="Random Giphy"
            />
            <p>Title: {random.data.title}</p>
            <p>Rating: {random.data.rating}</p>
            <p>{random.data.embed_url}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
