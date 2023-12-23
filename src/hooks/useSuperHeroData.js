import { useQuery } from "react-query";
import axios from "axios";

async function fetchSuperHeroes(heroId) {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
}

export const useSuperHeroData = (heroId) => {
  return useQuery(["rq-super-hero", heroId], () => fetchSuperHeroes(heroId));
};
