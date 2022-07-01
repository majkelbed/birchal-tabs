import { useQuery } from "react-query";
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

export const useGetFilms = () => {
  return useQuery(QUERY_KEYS.ALL, async () => {
    const { data } = await swapi.get<PaginatedResponse<Film>>("/films");
    return data;
  });
};
