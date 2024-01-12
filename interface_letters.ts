/*
Create an interface named "Letters" in Typescript with three properties: "upperCaseLetters", 
"lowerCaseLetters", and "numberLetters". All three properties have a data type of Array<string>. 
Write a function that takes a string as input and returns an instance of the "Letters" interface. 
The "upperCaseLetters" property should contain an array of uppercase characters found in the input 
string, the "lowerCaseLetters" property should contain an array of lowercase characters found in the 
input string, and the "numberLetters" property should contain an array of numeric characters 
(e.g., '0', '1', ..., '9') found in the input string.
*/

interface Letters {
    upperCaseLetters: string[];
    lowerCaseLetters: string[];
    numberLetters: string[];
  }
  
  function getLetters(letters: string): Letters {
    let res: Letters = {
      upperCaseLetters: [],
      lowerCaseLetters: [],
      numberLetters: [],
    };
    for (let i = 0; i < letters.length; i++) {
      if (letters[i].charCodeAt(0) <= 57 && letters[i].charCodeAt(0) >= 48) {
        res.numberLetters.push(letters[i]);
      } else if (
        letters[i].charCodeAt(0) <= 90 &&
        letters[i].charCodeAt(0) >= 65
      ) {
        res.upperCaseLetters.push(letters[i]);
      } else if (
        letters[i].charCodeAt(0) <= 122 &&
        letters[i].charCodeAt(0) >= 97
      ) {
        res.lowerCaseLetters.push(letters[i]);
      }
    }
  
    return res;
  }
  
  const inputString = "Hello World! 123abc";
  const result = getLetters(inputString);
  console.log(result.upperCaseLetters);
  console.log(result.lowerCaseLetters);
  console.log(result.numberLetters);