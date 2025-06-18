function isLetter(code) {
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

function getCipheredChar(code, shift) {
  let base = code >= 97 ? 97 : 65; // lowercase or uppercase
  let shifted = code + shift;

  if (shifted > base + 25) {
    shifted = base + ((shifted - base) % 26);
  }

  if (shifted < base) {
    shifted = base + 26 - ((base - shifted) % 26);
  }

  return String.fromCharCode(shifted);
}

export default function caesarCipher(str, shift) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);

    if (isLetter(code)) {
      result += getCipheredChar(code, shift);
    } else {
      result += str[i];
    }
  }

  return result;
}
