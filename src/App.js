import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import MoviePage from "./pages/Movies";
import Netflix from "./pages/Netflix";
import Player from "./pages/Player";
import Signup from "./pages/Signup";
import TVShows from "./pages/TVShows";
import UserListedMovies from "./pages/UserListedMovies";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addMovie } from "./store";
import SignIn from "./pages/AdminLogin";
import AddMovie from "./pages/AddMovie";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import AllMoves from "./pages/AllMoves";
import GetBookedMovie from "./pages/GetBookedMovie";

export default function App() {
  const dispatch = useDispatch();
  async function getAllMovie() {
    try {
      const res = await axios.get("https://netflix-backend-3.onrender.com/api/user/get-movie");
      dispatch(addMovie(res?.data?.movies));
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getAllMovie();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/admin/login" element={<SignIn />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/tv" element={<TVShows />} />
        <Route exact path="/movies" element={<MoviePage />} />
        <Route exact path="/new" element={<Player />} />
        <Route exact path="/mylist" element={<UserListedMovies />} />
        <Route exact path="/" element={<Netflix />} />
        <Route exact path="/all-booked-movie" element={<GetBookedMovie />} />
        <Route
          exact
          path="/add-movie"
          element={
            <Layout
              id={1}
              navLink={"/add-movie"}
              navItem={"Add Movie"}
              component={<AddMovie />}
            />
          }
        />
        <Route
          exact
          path="/dashboard"
          element={
            <Layout
              id={2}
              navLink={"/dashboard"}
              navItem={"Dashboard"}
              component={<Dashboard />}
            />
          }
        />
        <Route
          exact
          path="/all-movies-list"
          element={
            <Layout
              id={3}
              navLink={"/all-movies-list"}
              navItem={"Dashboard"}
              component={<AllMoves />}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
