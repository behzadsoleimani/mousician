export interface ApiResponse<T> {
  data: T;
  isLoading: boolean;
  error: Error | null;
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  images: string;
  level: number;
  search: string;
}

export type HttpMethod = "GET" | "POST" | "DELETE";
