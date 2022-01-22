function diagonalDifference(arr: number[][]): number {
  let firstSum: number = 0;
  let secondSum: number = 0;
  let i: number = 0;
  let j: number = arr.length - 1;
  for (i = 0; i < arr.length; i++) {
    firstSum += arr[i][i];
    secondSum += arr[i][j];
    j--;
  }

  return Math.abs(firstSum - secondSum);
}

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);
