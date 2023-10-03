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

  // const randomize = () => {
  //   console.log("Randomize function clicky click");
  // };

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
      </header>
      <br />
      <button onClick={getGiphy}>Random GIF</button>
      <p>Results go here</p>
      {random.data !== undefined && (
        <img src={random.data.images.original.url} alt="Random Giphy" />
      )}
    </div>
  );
}

export default App;
