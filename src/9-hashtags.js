export const hashtags = (text) => {
  
  let splitText = text.split(' ')
  let filtered = splitText.filter(element => {
    return element[0] === '#'
    
  });
  return filtered
}
