import { useMutation, useQuery, useQueryClient } from "react-query";
import { request } from "../utils/axios";
// function fetchSuperHeroes() {
//   return axios.get("http://localhost:4000/superheroes");
// }

// const addSuperHero = (hero) => {
//   return axios.post("http://localhost:4000/superheroes", hero);
// };
function fetchSuperHeroes() {
  return request({ url: "/superheroes" });
}

const addSuperHero = (hero) => {
  return request({ url: "/superheroes", method: "post", data: hero });
};

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

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    // onSuccess: (data) => {
    //   // queryClient.invalidateQueries("rq-super-heroes");
    //   queryClient.setQueryData("rq-super-heroes", (oldQueryData) => {
    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData.data, data.data],
    //     };
    //   });
    // },
    // Optimistic approach
    onMutate: async (newHero) => {
      await queryClient.cancelQueries("rq-super-heroes");
      const previousHeroData = queryClient.getQueryData("rq-super-heroes");
      queryClient.setQueryData("rq-super-heroes", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data,
            { id: oldQueryData?.data?.length + 1, ...newHero },
          ],
        };
      });
      return { previousHeroData };
    },
    onError: (_err, _newTodo, context) => {
      queryClient.setQueryData("rq-super-heroes", context.previousHeroData);
    },
    onSettled: () => {
      queryClient.invalidateQueries("rq-super-heroes");
    },
  });
};
