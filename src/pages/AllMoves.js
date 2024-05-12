import React from "react";
import { useSelector } from "react-redux";
import MovieListAdmin from "./MovieListAdmin";
import axios from "axios";
import { useQuery } from "react-query";

const AllMoves = () => {
    async function getAllMovie() {
        try {
          const res = await axios.get("https://netflix-backend-3.onrender.com/api/user/get-movie");
          return res;
        } catch (e) {
          console.log(e);
        }
      }
    
      const { isLoading, data: dashboard_data } = useQuery(
        ["get-all-movie_list"],
        () => getAllMovie(),
        {
          refetchOnMount: false,
          refetchOnReconnect: true,
        }
      );
      const dashboard_new_data = dashboard_data?.data?.movies;
    
  return (
    <div className="grid grid-cols-4 gap-5">
      {dashboard_new_data?.map((i, index) => {
        return <MovieListAdmin i={i} key={index} />;
      })}
    </div>
  );
};

export default AllMoves;
