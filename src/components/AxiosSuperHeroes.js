import axios from "axios";
import { useEffect, useState } from "react";

const AxiosSuperHeroes = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/superheroes")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <div>
      <p>Axios SuperHeroes</p>
    </div>
  );
};

export default AxiosSuperHeroes;
