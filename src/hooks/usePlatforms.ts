import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import Platform from "../entities/Platform";

const api_Client = new APIClient<Platform>('platforms/lists/parents')

// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });
const usePlatforms = () => {
  return useQuery({
    queryKey: ['platform'],
    queryFn: api_Client.getAll,
    staleTime: 24 * 60  * 60 * 1000,  //24hours
    initialData: platforms
  });
}

export default usePlatforms;
