import React from "react";
import styled from "styled-components";
import CardSlider from "./CardSlider";
export default function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    return movies?.slice(from, to);
  };
  return (
    <Container>
      <CardSlider data={getMoviesFromRange(0, 5)} title="Trending Now" />
      <CardSlider data={getMoviesFromRange(5, 10)} title="New Releases" />
      <CardSlider
        data={getMoviesFromRange(10, 15)}
        title="Blockbuster Movies"
      />
      <CardSlider
        data={getMoviesFromRange(15, 20)}
        title="Popular on Netflix"
      />
      <CardSlider data={getMoviesFromRange(20, 25)} title="Action Movies" />
      <CardSlider data={getMoviesFromRange(25,movies?.length)} title="Epics" />
    </Container>
  );
}

const Container = styled.div``;
