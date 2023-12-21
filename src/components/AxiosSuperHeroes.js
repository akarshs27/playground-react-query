import axios from "axios";
import { useEffect, useState } from "react";

const AxiosSuperHeroes = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/superheroes")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <p>Axios SuperHeroes</p>
      {data.map((each) => (
        <p key={each.id}>{each.name}</p>
      ))}
    </div>
  );
};

export default AxiosSuperHeroes;
