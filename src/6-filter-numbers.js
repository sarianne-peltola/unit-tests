export const filterNumbers = (array, largerThan) => {
  let newArray= array.filter(element => {
    return element <= largerThan
  });
  return newArray
}
