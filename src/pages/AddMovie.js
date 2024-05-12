import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    TextField
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

function AddMovie() {
    const navigate = useNavigate()
    const client = useQueryClient()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const reqbody = {
      image: data.get("image"),
      name: data.get("name"),
      genres: [data.get("genres")],
    };
    postMovie(reqbody);
  };

  async function postMovie(reqbody) {
    try {
      const res = await axios.post(
        "https://netflix-backend-3.onrender.com/api/user/add-movie",
        reqbody
      );
      client.refetchQueries("get-all-movie_list")
      toast.success("Add movie Successfully");
      navigate('/all-movies-list')
    } catch (e) {
      console.log(e);
    }
  }

  return (
    // <Container>
    //   <BackgroundImage />
    //   <div className="content">
    //     <Header />
    //     <div className="form-container flex column a-center j-center">
    //       <div className="form flex column a-center j-center">
    //         <div className="title">
    //           <h3 className="heading">ADD MOVIES</h3>
    //         </div>

    //       </div>
    //     </div>
    //   </div>
    // </Container>
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="image"
        label="Image Url"
        name="image"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="name"
        label="Title"
        id="name"
        autoComplete="current-password"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="genres"
        label="Genres"
        id="genres"
        autoComplete="current-password"
      />
      <FormControlLabel
        className="heading"
        control={<Checkbox value="remember" color="primary" />}
        label="I want to save this movie."
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Submit
      </Button>
    </Box>
  );
}

const Container = styled.div`
  .heading {
    color: green;
  }
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;

    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: white;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }
`;

export default AddMovie;
