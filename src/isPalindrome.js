export const isPalindrome = (inputString) => {
    if (inputString.length < 2) return false;
    const lowercase = inputString.toLowerCase();
    return lowercase.split('').reverse().join('') === lowercase;
};

export const isPalindromeWithCharAt = (inputString) => {
    if (inputString.length < 2) return false;
    let isPalindrome = true;
    let length = inputString.length;
    for (let i = 0; i < Math.floor(length / 2) && isPalindrome; i++) {
        isPalindrome =
            inputString.charAt(i).toLowerCase() ===
            inputString.charAt(length - (i + 1)).toLowerCase();
    }
    return isPalindrome;
};
