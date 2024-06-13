// 1282. Calculate Area
// Descirption
// Implement the calculateArea function. The calculateArea takes an array of shape object (contains type and edge attribute), based on the type, the function will calculate the areas accordingly and return the result after 2s (simulate the API response waiting time). Assume the input is always valid.

function calculateArea(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let ret = [];
      for (let i = 0; i < arr.length; i++) {
        switch (arr[i].type) {
          case "SQUARE":
            ret.push(arr[i].edge[0] ** 2);
            break;
          case "TRIANGLE":
            ret.push((arr[i].edge[0] * arr[i].edge[1]) / 2);
            break;
          default:
            ret.push(Math.PI * arr[i].edge[0] ** 2);
            break;
        }
      }
      resolve(ret);
    }, 2000);
  });
}

// Input
const shapes = [
  { type: "SQUARE", edge: [4] }, // 4 * 4
  { type: "TRIANGLE", edge: [3, 4] }, // 3*4 / 2
  { type: "CIRCLE", edge: [1] }, // Pi r^2
];

calculateArea(shapes)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Output:
// calculateArea(shapes)
// .then(res => console.log(res))
// .catch(err=>console.log(err))
// after 2s, the result would be [16,6,3.14]
