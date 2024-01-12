/*
Implement a function called isPalindrome that takes an array as input and returns true if the array
is a palindrome, and false otherwise. The function should only accept an array of numbers or an array
of strings. For example, the array [1,2,3,2,1] should return true, and the array ['a', 'b', 'b', 'a'] 
should also return true. Use generic type for this exercise.
*/

function isPalindrome(arr: string[]): boolean {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[arr.length - i - 1]) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPalindrome(['a', 'b', 'B', 'a']));