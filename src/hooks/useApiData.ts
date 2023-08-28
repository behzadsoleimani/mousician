import { useState, useEffect } from "react";
import { ApiResponse, HttpMethod } from "../generalTypes";

function useApiData<T>(
  url: string,
  method: HttpMethod = "GET"
): ApiResponse<T> {
  const [data, setData] = useState<T>([] as T); // Type assertion here
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url, { method });
      const responseData = await response.json();

      setData(responseData);
      setIsLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred"));
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, method]);

  return { data, isLoading, error };
}

export default useApiData;
