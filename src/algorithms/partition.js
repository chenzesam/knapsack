const partition = (arr, left, right) => {
  const pivot = arr[right];
  let small = left;
  
  for (let i = left; i < right; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[small]] = [arr[small], arr[i]];
      small++;
    }
  }
  [arr[right], arr[small]] = [arr[small], arr[right]];
  return small;
}

export default partition;
