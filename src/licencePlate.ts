const licensePlate = (n: number): string => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let level = 0;
  let maxNumber = Math.pow(10, 6); // 10^6 for the numeric part
  let tempN = n;

  // Determine the level based on the index
  while (tempN >= maxNumber) {
    level++;
    maxNumber *= letters.length; // Adjust the divider for the next level
  }

  let numericPart = n % Math.pow(10, 6);
  let alphaPart = Math.floor(n / Math.pow(10, 6));

  let alphaString = '';
  while (alphaPart > 0) {
    alphaString = letters.charAt((alphaPart - 1) % letters.length) + alphaString;
    alphaPart = Math.floor((alphaPart - 1) / letters.length);
  }

  // Add zeros at the beginning based on the level and length of the alpha part
  return numericPart.toString().padStart(6 - Math.min(level, alphaString.length), '0') + alphaString;
};

export { licensePlate };
