export default function analyzeArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Input must be a non-empty array.");
  }

  if (!arr.every((item) => typeof item === "number")) {
    throw new TypeError("All elements must be numbers.");
  }

  const length = arr.length;
  const sum = arr.reduce((total, num) => total + num, 0);
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const average = sum / length;

  return { average, min, max, length };
}
