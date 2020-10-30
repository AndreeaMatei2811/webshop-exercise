const express = require("express");
const app = express();
const jsonParser = express.json();

const PORT = 4000;

const productRouter = require("./routers/product");

app.use(jsonParser);

app.use("/products", productRouter);

function onListen() {
  console.log(`Listening on :${PORT}`);
}
app.listen(PORT, onListen);
