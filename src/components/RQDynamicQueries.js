import axios from "axios";
import { useQueries } from "react-query";

function fetchSuperHeroes(heroId) {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
}

const RQDynamicQueries = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHeroes(id),
      };
    })
  );

  console.log({ queryResults });

  return (
    <div>
      <p>Dynamic Queries</p>
    </div>
  );
};

export default RQDynamicQueries;
