const { Router } = require("express");
const Product = require("../models").product;

const router = new Router();

router.post("/", async (req, res, next) => {
  try {
    const { name, priceInCents, description, picture } = req.body;
    if (!name || !priceInCents || !description || !picture) {
      res.status(400).send("Missing info of product!");
      return;
    }
    const newProduct = await Product.create({
      name,
      priceInCents,
      description,
      picture,
    });
    res.json(newProduct);
  } catch (e) {
    next(e);
  }
});

router.get("/", (req, res) => {
  res.send("hello");
});

module.exports = router;
