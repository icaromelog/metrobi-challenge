export async function printDelay(arr) {
  for (let i = 0; i < arr.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 2 ** i * 1000));
    console.log(arr[i]);
  }
}