const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log(`Server started on port: ${3000}`);
});

app.get("/fibo", (req, res) => {
  const num = parseInt(req.query.num);

  if ((!Number.isInteger(num) || num < 1) && req.query.num) {
    res.status(400).send("Bad Request");
  } else {
    const message = fibo(num);
    res.status(200).send(message);
  }
});

const fibo = (num) => {
  let result = [1, 1];
  if (!num) {
    return fibo(20);
  }
  if (num === 1) {
    return [1];
  }
  for (i = 2; i < num; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result;
};
