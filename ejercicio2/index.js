const express = require("express");
const dotenv = require("dotenv");

const routes = require("./routes");

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port: ${process.env.PORT}`);
});
