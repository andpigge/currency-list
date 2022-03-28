export const sortByDate = (array) => {
  return array.sort((a, b) => {
    return new Date(b.Date) - Date(a.Date);
  });
};

export const sortArray = (array, value) => {
  return array.sort((a, b) => {
    return a[value].localeCompare(b[value]);
  });
};
