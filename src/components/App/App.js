import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  Button,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const random = useSelector((store) => store.random);

  useEffect(() => {
    getGiphy();
  }, []);

  const getGiphy = () => {
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

  return (
    <Container maxWidth="sm">
      <header className="App-header">
        <Typography variant="h3" gutterBottom>
          Random Giphy API
        </Typography>
        <Button variant="contained" color="primary" onClick={getGiphy}>
          Random GIF
        </Button>
      </header>
      <br />
      <div className="returnStuff">
        <Typography variant="h6" gutterBottom>
          Results:
        </Typography>
        {random.data !== undefined && (
          <Card>
            <CardMedia
              component="img"
              height="600"
              image={random.data.images.original.url}
              alt="Random Giphy"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {random.data.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating: {random.data.rating}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Embed URL: {random.data.embed_url}
              </Typography>
            </CardContent>
          </Card>
        )}
      </div>
    </Container>
  );
}

export default App;
