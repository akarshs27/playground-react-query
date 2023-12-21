import { useQuery } from "react-query";

async function fetchSuperHeroes() {
  const res = await fetch("http://localhost:4000/superheroes");
  return res.json();
}

export const useSuperHeroesData = (onSuccessCallback, onErrorCallback) => {
  return useQuery("rq-super-heroes", fetchSuperHeroes, {
    onSuccess: onSuccessCallback,
    onError: onErrorCallback,
    //   select: (data) => {
    //      data transformation / filtering
    //     const superHeroesNames = data.map((hero) => hero.name);
    //     return superHeroesNames;
    //   },
  });
};
