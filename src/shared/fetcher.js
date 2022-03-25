export const handleResponse = async (response) => {
  if (response.status === 204) {
    return;
  }

  const data = await response.json();

  if (!response.ok) {
    // TODO реализовать при возможности центральную обработку ошибок
    throw console.error("Ошибка");
  }

  return data;
};

export const fetcher = async ({ path, initFetch }) => {
  try {
    const response = await fetch(path, initFetch);
    return await handleResponse(response);
  } catch {
    throw console.error("Ошибка");
  }
};
