import React from "react";
import Home from "C:/Users/Suyash/Desktop/BookMovieApp/src/screens/home/Home";
import Details from "C:/Users/Suyash/Desktop/BookMovieApp/src/screens/details/Details";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookShow from "C:/Users/Suyash/Desktop/BookMovieApp/src/screens/bookshow/BookShow.js";
import Confirmation from "C:/Users/Suyash/Desktop/BookMovieApp/src/screens/confirmation/Confirmation";

const Controller = () => {
  const baseUrl = "/api/v1/";

  return (
    <Router>
      <div className="main-container">
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} baseUrl={baseUrl} />}
        />
        <Route
          path="/movie/:id"
          render={(props) => <Details {...props} baseUrl={baseUrl} />}
        />
        <Route
          path="/bookshow/:id"
          render={(props) => <BookShow {...props} baseUrl={baseUrl} />}
        />
        <Route
          path="/confirm/:id"
          render={(props) => <Confirmation {...props} baseUrl={baseUrl} />}
        />
      </div>
    </Router>
  );
};

export default Controller;
