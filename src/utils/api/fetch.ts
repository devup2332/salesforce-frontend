import { env } from "@/config/env";

export const fetchNextApi = async (path: string, options: RequestInit) => {
  const response = await fetch(path, options);
  const data = await response.json();
  return data;
};

export const fetchApi = async (path: string, options: RequestInit) => {
  const host = env.API_URL;
  const url = `${host}${path}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};
