export function sum(values) {
  if (!Array.isArray(values)) {
    throw new TypeError("values must be an array");
  }
  return values.reduce((total, value) => {
    if (typeof value !== "number" || !Number.isFinite(value)) {
      throw new TypeError("every value must be a finite number");
    }
    return total + value;
  }, 0);
}
