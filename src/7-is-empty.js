export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  return (type === 'string' && stringArrayOrObject === '') ? true : (type === 'object' && Object.keys(stringArrayOrObject).length === 0) ? true : false

}
