import { ActionWithPaylad, createReducer } from "../redux/utils";

export interface Movie {
  id: number;
  title: string;
  popularity: number;
  overview: string;
  image?: string;
}

interface MovieState {
  top: Movie[];
  loading: boolean;
}

const initialState: MovieState = {
  top: [
    // {
    //   id: 1,
    //   title: "The Shawshank Redemption",
    //   popularity: 98,
    //   overview: "Dreams...",
    // },
  ],
  loading: false,
};

export const moviesLoaded = (movies: Movie[]) => ({
  type: "movies/loaded",
  payload: movies,
});

export const moviesLoading = () => ({
  type: "movies/loading",
});

const moviesReducer = createReducer<MovieState>(initialState, {
  "movies/loaded": (state, action: ActionWithPaylad<Movie[]>) => {
    return {
      ...state,
      top: action.payload,
      loading: false,
    };
  },
  "movies/loading": (state) => {
    return {
      ...state,
      loading: true,
    };
  },
});

export default moviesReducer;
