const express = require("express");
const app = express();
const jsonParser = express.json();
const customerRouter = require("./routers/customer");
const productRouter = require("./routers/product");
const categoryRouter = require("./routers/category");

const PORT = 4500;
app.use(jsonParser);

app.use("/customers", customerRouter);
app.use("/products", productRouter);
app.use("/categories", categoryRouter);

function onListen() {
  console.log(`Listening on :${PORT}`);
}
app.listen(PORT, onListen);
