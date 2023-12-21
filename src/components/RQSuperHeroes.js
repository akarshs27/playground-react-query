import { useQuery } from "react-query";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

const RQSuperHeroes = () => {
  async function fetchSuperHeroes() {
    const res = await fetch("http://localhost:4000/superheroes");
    return res.json();
  }

  function onSuccessCallback(data) {
    console.log("Perform side effect on success", data);
  }

  function onErrorCallback(error) {
    console.log("Perform side effect on error", error);
  }

  //   const { isLoading, data, isError, error, refetch } = useSuperHeroesData(onSuccessCallback, onErrorCallback);

  const { isLoading, data, isError, error, refetch } = useQuery(
    "rq-super-heroes",
    fetchSuperHeroes,
    {
      //   enabled: false,
      onSuccess: onSuccessCallback,
      onError: onErrorCallback,
      //   select: (data) => {
      //      data transformation / filtering
      //     const superHeroesNames = data.map((hero) => hero.name);
      //     return superHeroesNames;
      //   },
    }
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <p>RQSuperHeroes</p>
      <button onClick={refetch}>Fetch SuperHeroes</button>
      {data?.map((each) => (
        <p key={each.id}>{each.name}</p>
      ))}
    </div>
  );
};

export default RQSuperHeroes;
