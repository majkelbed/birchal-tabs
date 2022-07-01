import { useGetPeople } from "../services/people.api";

export const PeoplePage = () => {
  const { data, isError, isLoading } = useGetPeople();

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
      {data?.results.map((character) => (
        <li>
          <h2>{character.name}</h2>
        </li>
      ))}
    </ul>
  );
};