import { useQuery, useQueryClient } from "react-query";
import { swapi } from "../../../services/api/swapi.client";

const QUERY_KEYS = {
  ALL: ["films"],
};

interface PaginatedResponse<Data> {
  count: number;
  next: null;
  previous: null;
  results: Data[];
}

interface Film {
  title: string;
  opening_crawl: string;
}

const getFilms = async () => {
  const { data } = await swapi.get<PaginatedResponse<Film>>("/films");
  return data;
};

export const useGetFilms = () => {
  return useQuery(QUERY_KEYS.ALL, getFilms);
};

export const usePrefetchFilms = async () => {
  const queryClient = useQueryClient();
  await queryClient.prefetchQuery(QUERY_KEYS.ALL, getFilms)
}
