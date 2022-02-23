let arr = ["a", "b", "c", "d", "e", "f", "g"];

// num = 2;

// function deletEl(i) {
//   let newArr = arr.filter((el, ind) => {
//     if (ind !== num) return el;
//   });
//   console.log(newArr);
// }

// deletEl(num);

function updateTaskColArr(arr, ind, col) {
  let newArr = [...arr];
  newArr[ind] = col;
  return newArr;
}

let tester = updateTaskColArr(arr, 2, "green");

console.log(tester);
