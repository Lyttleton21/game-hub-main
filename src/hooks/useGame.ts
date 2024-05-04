import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Game from "../entities/Game";

const api_client = new APIClient<Game>('/games');



const useGame = (slug:string ) => useQuery<Game, Error>({
    queryKey: ['games', slug],
    queryFn: () => api_client.getOne(slug)
});

export default useGame;