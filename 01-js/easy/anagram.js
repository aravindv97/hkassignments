/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const re = /([a-z])/;
  let result = false;
  
  if (!str1.match(re) || !str2.match(re)) {
    return result;
  }

  let str1Lttrs = str1.split('');
  let str2Lttrs = str2.split('');

  if(str1Lttrs.length < 0 || str2Lttrs.length < 0){
    return result;
  }

  

  str1Lttrs.forEach(element => {
    if(element !== ' ')
    result = str2Lttrs.includes(element);
  });

  return result;
}

console.log(isAnagram('LISTEN','silent'));

module.exports = isAnagram;
