import { useState, useEffect } from "react";
import { ApiResponse, HttpMethod } from "../generalTypes";

function useApiData<T>(
  url: string,
  method: HttpMethod = "GET"
): ApiResponse<T> {
  const [data, setData] = useState<T>([] as T);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [totalCount, setTotalCount] = useState<number>(0);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url, { method });
      setTotalCount(response.headers.get("X-Total-Count") as unknown as number);
      const responseData = await response.json();
      setData((Array.isArray(responseData) ? responseData : []) as T);
      setIsLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred"));
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, method]);

  return { data, isLoading, error, totalCount };
}

export default useApiData;
