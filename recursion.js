/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (i === nums.length) return 1;

  return nums[i] * product(nums, i+=1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, longestLength=0) {
  if (i === words.length) return longestLength;

  if (words[i].length > longestLength) {
    longestLength = words[i].length;
    return longest(words, i +=1, longestLength);
  } else {
    return longest(words, i += 1, longestLength);
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0) {
  if (i === str.length) return "";

  if (i%2 === 0){
    return str[i] + everyOther(str, i+=1)
  } else {
    return "" + everyOther(str, i+=1)
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) return true;

  if (str[0] === str[str.length - 1]){
    let subStr = str.substring(1, str.length - 1);
    return isPalindrome(subStr)
  } else{
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if(i === arr.length) return -1;

  if (arr[i] === val){
    return i;
  } else {
    return findIndex(arr, val, i+=1)
  }

}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=str.length-1) {
  if(i === -1) return "";

  return str[i] + revString(str, i-1);

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, values=Object.values(obj), i=0, gatheredArr=[]) {
  if(i === values.length) return gatheredArr;

  if(typeof values[i] === 'string'){
    gatheredArr.push(values[i])
  } else if(typeof values[i] === 'object'){
    gatherStrings(values[i], Object.values(values[i]), 0, gatheredArr)
  }

  console.log(gatheredArr)
  return gatherStrings(obj, values, i+=1, gatheredArr)

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
