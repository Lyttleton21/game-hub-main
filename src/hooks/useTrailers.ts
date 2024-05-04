import { useQuery } from "@tanstack/react-query";
import Trailer from "../entities/Trailer";
import APIClient, { FetchResponse } from "../services/api-client";

const useTrailers = (gameId:number)=> {
    const api_client = new APIClient<Trailer>(`/games/${gameId}/movies`);

    return useQuery<FetchResponse<Trailer>, Error>({
        queryKey: ['trailers', gameId],
        queryFn: api_client.getAll
    });
}

export default useTrailers;