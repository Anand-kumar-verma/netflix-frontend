import {
  configureStore,
  createAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, TMDB_BASE_URL } from "../utils/constants";

const initialState = {
  movies: [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715385600&semt=sph",
      name: "Movie 1",
      genres: ["THis is superb movies 1", "Awesome Movie"],
    },
    {
      id: 1,
      image:
        "https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715385600&semt=sph",
      name: "Movie 1",
      genres: ["THis is superb movies 1", "Awesome Movie"],
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715385600&semt=sph",
      name: "Movie 2",
      genres: ["THis is superb movies 1", "Awesome Movie"],
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715385600&semt=sph",
      name: "Movie 3",
      genres: ["THis is superb movies 1", "Awesome Movie"],
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715385600&semt=sph",
      name: "Movie 4",
      genres: ["THis is superb movies 1", "Awesome Movie"],
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715385600&semt=sph",
      name: "Movie 5",
      genres: ["THis is superb movies 1", "Awesome Movie"],
    },
    {
      id: 6,
      image:
        "https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715385600&semt=sph",
      name: "Movie 5",
      genres: ["THis is superb movies 1", "Awesome Movie"],
    },
    {
      id: 7,
      image:
        "https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715385600&semt=sph",
      name: "Movie 5",
      genres: ["THis is superb movies 1", "Awesome Movie"],
    },
    {
      id: 8,
      image:
        "https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715385600&semt=sph",
      name: "Movie 5",
      genres: ["THis is superb movies 1", "Awesome Movie"],
    },
    {
      id: 9,
      image:
        "https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715385600&semt=sph",
      name: "Movie 5",
      genres: ["THis is superb movies 1", "Awesome Movie"],
    },
    {
      id: 10,
      image:
        "https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715385600&semt=sph",
      name: "Movie 5",
      genres: ["THis is superb movies 1", "Awesome Movie"],
    },
  ],
  genresLoaded: false,
  genres: [
    {
      id: 1,
      name: "THis is move 1",
    },
    {
      id: 2,
      name: "THis is move 2",
    },
    {
      id: 3,
      name: "THis is move 3",
    },
    {
      id: 4,
      name: "THis is move 4",
    },
    {
      id: 5,
      name: "THis is move 5",
    },
  ],
};

export const getGenres = createAsyncThunk("netflix/genres", async () => {
  const {
    data: { genres },
  } = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=3d39d6bfe362592e6aa293f01fbcf9b9"
  );
  return genres;
});

const createArrayFromRawData = (array, moviesArray, genres) => {
  array.forEach((movie) => {
    const movieGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);
      if (name) movieGenres.push(name.name);
    });
    if (movie.backdrop_path)
      moviesArray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        genres: movieGenres.slice(0, 3),
      });
  });
};

const getRawData = async (api, genres, paging = false) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
    const {
      data: { results },
    } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
    createArrayFromRawData(results, moviesArray, genres);
  }
  return moviesArray;
};

export const fetchDataByGenre = createAsyncThunk(
  "netflix/genre",
  async ({ genre, type }, thunkAPI) => {
    const {
      netflix: { genres },
    } = thunkAPI.getState();
    return getRawData(
      `https://api.themoviedb.org/3/discover/${type}?api_key=3d39d6bfe362592e6aa293f01fbcf9b9&with_genres=${genre}`,
      genres
    );
  }
);

export const fetchMovies = createAsyncThunk(
  "netflix/trending",
  async ({ type }, thunkAPI) => {
    const {
      netflix: { genres },
    } = thunkAPI.getState();
    return getRawData(
      `${TMDB_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,
      genres,
      true
    );
  }
);

export const getUsersLikedMovies = createAsyncThunk(
  "netflix/getLiked",
  async (email) => {
    const {
      data: { movies },
    } = await axios.get(`https://netflix-backend-3.onrender.com/api/user/liked/${email}`);
    return movies;
  }
);

export const removeMovieFromLiked = createAsyncThunk(
  "netflix/deleteLiked",
  async ({ movieId, email }) => {
    const {
      data: { movies },
    } = await axios.put("https://netflix-backend-3.onrender.com/api/user/remove", {
      email,
      movieId,
    });
    return movies;
  }
);

export const addMovie = createAction('Netflix/addMovie');


const NetflixSlice = createSlice({
  name: "Netflix",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(fetchDataByGenre.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(getUsersLikedMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(removeMovieFromLiked.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(addMovie, (state, action) => {
      state.movies = action.payload;
    });
  },
});


export const store = configureStore({
  reducer: {
    netflix: NetflixSlice.reducer,
  },
});

export const { setGenres, setMovies ,addMovieFunction} = NetflixSlice.actions;
