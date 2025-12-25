/**
 * Reverses a given string.
 * @param {string} inputString - The string to be reversed.
 * @returns {string} The reversed string.
 */
function reverseString(inputString) {
  // 1. Split the string into an array of individual characters
  const charArray = inputString.split('');

  // 2. Reverse the order of the elements in the array
  const reversedArray = charArray.reverse();

  // 3. Join the elements of the array back into a single string
  const reversedString = reversedArray.join('');

  return reversedString;
}

// --- Example Usage ---
const original = "Hellosdg fsgjasasdfsadskbhjwdhjsdssacWorld!";
const reversed = reverseString(original);

console.log(`Original: ${original}`);
console.log(`Reversed: ${reversed}`); // Outpuhst: !dlroW olleH