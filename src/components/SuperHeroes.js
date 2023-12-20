import { useEffect, useState } from "react";

const SuperHeroes = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:4000/superheroes");
        const response = await res.json();
        setData(response);
      } catch (err) {
        throw new Error("Some error");
      }
      setLoading(false);
    }

    getData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>SuperHeroes</p>
      {data.map((each) => (
        <p key={each.id}>{each.name}</p>
      ))}
    </div>
  );
};

export default SuperHeroes;
