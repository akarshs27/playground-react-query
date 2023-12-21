import { useQuery } from "react-query";

const RQSuperHeroes = () => {
  async function fetchSuperHeroes() {
    const res = await fetch("http://localhost:4000/superheroes");
    return res.json();
  }

  const { isLoading, data, isError, error } = useQuery(
    "rq-super-heroes",
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
      <p>RQSuperHeroes</p>
      {data?.map((each) => (
        <p key={each.id}>{each.name}</p>
      ))}
    </div>
  );
};

export default RQSuperHeroes;
