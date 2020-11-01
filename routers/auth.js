const { Router } = require("express");
const { toJWT, toData } = require("../auth/auth");
const Customer = require("../models").customer;
const bcrypt = require("bcrypt");

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send("Please supply a valid email and password");
      return;
    }
    const customer = await Customer.findOne({
      where: {
        email: email,
      },
    });
    if (!customer) {
      res.status(400).send("Customer with that email does not exist");
      return;
    }
    if (!bcrypt.compareSync(password, customer.password)) {
      res.send("password was wrong");
      return;
    }
    res.send({
      jwt: toJWT(),
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
