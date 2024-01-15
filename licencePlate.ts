const licensePlate = (n: number): string => {
  const plateLength = 6;
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const maxNumber = Math.pow(10, plateLength); // 10^6 for the numeric part

  let numericPart = n % maxNumber;
  let alphaPart = Math.floor(n / maxNumber);

  let alphaString = "";

  while (alphaPart > 0) {
    alphaString =
      letters.charAt((alphaPart - 1) % letters.length) + alphaString;
    alphaPart = Math.floor((alphaPart - 1) / letters.length);
  }

  return (
    numericPart.toString().padStart(plateLength - alphaString.length, "0") +
    alphaString
  );
};

export { licensePlate };
