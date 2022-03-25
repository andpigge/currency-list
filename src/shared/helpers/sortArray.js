export const sortByDate = (array) => {
  return array.sort((a, b) => {
    return new Date(b.Date) - Date(a.Date);
  });
};

export const sortByCharCode = (array) => {
  return array.sort((a, b) => {
    return a.CharCode.localeCompare(b.CharCode);
  });
};
