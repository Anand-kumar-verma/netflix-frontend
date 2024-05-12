import { CircularProgress } from "@mui/material";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { getUsersLikedMovies } from "../store";
import { firebaseAuth } from "../utils/firebase-config";

export default function GetBookedMovie() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState(undefined);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);
    else navigate("/login");
  });




  async function getMovieList(reqbody) {
    try {
      const res = axios.post(
        "https://netflix-backend-3.onrender.com/api/user/getBookedMovies",
        reqbody
      );
      return res;
    } catch (e) {
      console.log(e);
    }
  }
  const { isLoading, data: dashboard_data } = useQuery(
    ["get_booked_movie",email],
    () => getMovieList({ email: email}),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );
  const dashboard_new_data = dashboard_data?.data?.movies?.movie;

//   useEffect(() => {
//     if (email) {
//       dispatch(getUsersLikedMovies(email));
//     }
//   }, [email]);
  
  if (isLoading)
    return (
      <Container className="w-full h-full justify-center items-center">
        <CircularProgress className="!text-white" />
      </Container>
    );
  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="content flex column">
        <h1>Booked Movies</h1>
        <div className=" flex">
          {dashboard_new_data?.map((movie, index) => {
            return (
              <Card
                movieData={movie}
                index={index}
                key={movie._id}
                isLiked={true}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .content {
    margin: 2.3rem;
    margin-top: 8rem;
    gap: 3rem;
    h1 {
      margin-left: 3rem;
    }
    .grid {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
`;
