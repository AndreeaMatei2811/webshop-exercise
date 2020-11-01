const { Router } = require("express");
const router = new Router();
const Customer = require("../models").customer;
const Product = require("../models").product;
const Category = require("../models").category;

router.get("/", async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.json(categories);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      res.status(400).send("You didn't give a name");
    } else {
      const category = await Category.create({ name });
      res.json(category);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
