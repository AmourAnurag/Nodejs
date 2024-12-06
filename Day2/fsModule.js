const fs = require("fs");
fs.writeFileSync(
  "./text.txt",
  "hi there my name is anurag singh and i am creating a new file using fs module of the node js"
);

fs.readFile("./text.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});
// console.log(result);

fs.appendFileSync("./text.txt", " hi my name is " + Date.now());
