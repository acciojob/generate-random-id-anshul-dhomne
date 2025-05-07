function makeid(l) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < l; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

// Example usage:
console.log(makeid(5));  // Example output: "K3f2G"
console.log(makeid(10)); // Example output: "aB9EfgT2X1"

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
