import { useGetFilms } from "../services/films.api";

export const FilmsPage = () => {
  const { data, isError, isLoading } = useGetFilms();

  if (isError) {
    // TODO add redirect to error page
    return <div>Something went wrong</div>;
  }

  if (isLoading) {
    // TODO add something better
    return <div>Loading ...</div>;
  }

  return (
    <ul>
      {data?.results.map((film) => (
        <li>
          <h2>{film.title}</h2>
          <p>{film.opening_crawl}</p>
        </li>
      ))}
    </ul>
  );
};
