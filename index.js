function calculateCuboidArea(cuboidHeight, cuboidLength, cuboidDepth) {
  // check if cuboidHeight, cuboidLength, cuboidDepth are numbers

  // calculate cuboid surface area
  const surfaceArea =
    2 *
    (cuboidLength * cuboidDepth +
      cuboidLength * cuboidHeight +
      cuboidDepth * cuboidHeight);

  // check if surfaceArea is an actual number

  return surfaceArea;
}

console.log("Cuboid Surface Area =", calculateCuboidArea());
console.log("Cuboid Surface Area =", calculateCuboidArea(8));
console.log("Cuboid Surface Area =", calculateCuboidArea(8, 2));
console.log("Cuboid Surface Area =", calculateCuboidArea(8, 5, 10));
