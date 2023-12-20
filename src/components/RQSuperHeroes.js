import { useQuery } from "react-query";

const RQSuperHeroes = () => {
  async function fetchSuperHeroes() {
    const res = await fetch("http://localhost:4000/superheroes");
    return await res.json();
  }

  const { isLoading, data } = useQuery("rq-super-heroes", fetchSuperHeroes);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <p>RQSuperHeroes</p>
      {data && data.map((each) => <p key={each.id}>{each.name}</p>)}
    </div>
  );
};

export default RQSuperHeroes;
