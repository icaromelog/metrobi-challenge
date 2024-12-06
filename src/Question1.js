export function findDuplicatedItens(arr) {
  const index = {};
  const duplicated = [];

  for (const item of arr) {
    if (index[item]) {
      if (!duplicated.includes(item)) {
        duplicated.push(item);
      }
    } else {
      index[item] = true;
    }
  }

  return duplicated;
}