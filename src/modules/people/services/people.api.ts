import { useQuery, useQueryClient } from "react-query";
import { swapi } from "../../../services/api/swapi.client";

const QUERY_KEYS = {
  ALL: ["people"],
};

// TODO: move to common types
interface PaginatedResponse<Data> {
  count: number;
  next: null;
  previous: null;
  results: Data[];
}

interface Character {
  name: string;
}

const getPeople = async () => {
  const { data } = await swapi.get<PaginatedResponse<Character>>("/people");
  return data;
};

export const useGetPeople = () => {
  return useQuery(QUERY_KEYS.ALL, getPeople);
};

export const usePrefetchPeople = async () => {
  const queryClient = useQueryClient();
  await queryClient.prefetchQuery(QUERY_KEYS.ALL, getPeople)
}
