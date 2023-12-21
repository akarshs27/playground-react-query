import axios from "axios";
import { useQuery } from "react-query";

const ARQSuperHeroes = () => {
  function fetchSuperHeroes() {
    return axios.get("http://localhost:4000/superheroes1");
  }

  const { isLoading, data, isError, error } = useQuery(
    "arq-super-heroes",
    fetchSuperHeroes
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <p>ARQSuperHeroes</p>
      {data?.data.map((each) => (
        <p key={each.id}>{each.name}</p>
      ))}
    </div>
  );
};

export default ARQSuperHeroes;
