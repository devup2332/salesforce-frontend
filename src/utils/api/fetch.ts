export const fetchApi = async (path: string, options: RequestInit) => {
  const response = await fetch(path, options);
  const data = await response.json();
  return data;
};
