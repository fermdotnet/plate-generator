import { licensePlate } from "./licencePlate";

test("license plate generation", () => {
  expect(licensePlate(0)).toBe("000000");
  expect(licensePlate(1)).toBe("000001");
  expect(licensePlate(999999)).toBe("999999");
  expect(licensePlate(1000000)).toBe("00000A");
  expect(licensePlate(1000001)).toBe("00001A");
});
