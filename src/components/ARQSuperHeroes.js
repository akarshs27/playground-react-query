import axios from "axios";
import { useQuery } from "react-query";

const ARQSuperHeroes = () => {
  function fetchSuperHeroes() {
    return axios.get("http://localhost:4000/superheroes");
  }

  const { isLoading, data, isError, error, isFetching } = useQuery(
    "arq-super-heroes",
    fetchSuperHeroes,
    {
      //   cacheTime: 5000, // default is 5 min
      //   staleTime: 30000, // 30 sec // default is 0sec
      // refetchOnMount: true,
      // refetchOnWindowFocus: true
      // refetchInterval: 2000,
      // refetchIntervalInBackground: true
    }
  );

  //   console.log(isLoading, isFetching);

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
