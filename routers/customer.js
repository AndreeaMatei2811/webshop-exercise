const { Router } = require("express");
const router = new Router();
const Customer = require("../models").customer;
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.send("Hello from csutomer");
});

router.post("/", async (req, res, next) => {
  try {
    const { fullName, email, password, address } = req.body;
    if (!fullName || !email || !password || !address) {
      res.status(400).send("Fill in all the information");
    } else {
      const customer = await Customer.create({
        fullName,
        email,
        password: bcrypt.hashSync(password, 10),
        address,
      });
      res.json(customer);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
