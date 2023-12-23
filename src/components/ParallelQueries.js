import axios from "axios";
import { useQuery } from "react-query";

function fetchSuperHeroes() {
  return axios.get("http://localhost:4000/superheroes");
}

function fetchFriends() {
  return axios.get("http://localhost:4000/friends");
}

const ParallelQueries = () => {
  const { data: superHeroes } = useQuery("super-heroes", fetchSuperHeroes);
  const { data: friends } = useQuery("friends", fetchFriends);

  return (
    <div>
      <p>ParallelQueries</p>
    </div>
  );
};

export default ParallelQueries;
