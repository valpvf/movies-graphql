import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import configuration from "../configuration";

interface Configuration {
  images: {
    base_url: string;
  };
}

interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  popularity: number;
  backdrop_path?: string;
}

interface MoviesState {
  results: MovieDetails[];
  lastPage: number;
  hasMorePages: boolean;
}

export interface MoviesFilters {
  keywords?: number[];
  genres?: number[];
}

export interface MoviesQuery {
  page: number;
  filters: MoviesFilters;
}

export interface KeywordItem {
  id: number;
  name: string;
}

interface PageResponse<TResult> {
  page: number;
  results: TResult[];
  total_pages: number;
  total_results: number;
}

interface Genre {
  id: number;
  name: string;
}

export const tmdbApi = createApi({
  reducerPath: "tmdb",
  baseQuery: fetchBaseQuery({
    baseUrl: `${configuration.apiUrl}/3`,
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      headers.set(
        "Authorization",
        `Bearer ${configuration.apiToken}`
      );
    },
  }),
  endpoints: (builder) => ({
    getConfiguration: builder.query<Configuration, void>({
      query: () => "/configuration",
    }),
    getMovies: builder.query<MoviesState, MoviesQuery>({
      query(MoviesQuery) {
        const params = new URLSearchParams({
          page: MoviesQuery.page.toString(),
        });

        if (MoviesQuery.filters.keywords?.length) {
          params.append(
            "with_keywords",
            MoviesQuery.filters.keywords.join("|")
          );
        }

        if (MoviesQuery.filters.genres?.length) {
          params.append(
            "with_genres",
            MoviesQuery.filters.genres.join(",")
          );
        }

        const query = params.toString();
        const path = `/discover/movie?${query}`;

        return path;
      },
      transformResponse: (
        response: PageResponse<MovieDetails>,
        _,
        arg
      ) => {
        return {
          results: response.results,
          lastPage: response.page,
          hasMorePages: arg.page < response.total_pages,
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge(currentCacheData, responseData) {
        if (responseData.lastPage === 1) {
          currentCacheData.results = responseData.results;
        } else {
          currentCacheData.results.push(...responseData.results);
        }

        currentCacheData.lastPage = responseData.lastPage;
        currentCacheData.hasMorePages = responseData.hasMorePages;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getKeywords: builder.query<KeywordItem[], string>({
      query: (queryText) => `/search/keyword?query=${queryText}`,

      transformResponse: (response: PageResponse<KeywordItem>) =>
        response.results,
    }),
    getGenres: builder.query<Genre[], void>({
      query: () => "/genre/movie/list",
      transformResponse: (response: { genres: Genre[] }) =>
        response.genres,
    }),
  }),
});

export const {
  useGetConfigurationQuery,
  useGetMoviesQuery,
  useGetGenresQuery,
  useGetKeywordsQuery,
} = tmdbApi;
