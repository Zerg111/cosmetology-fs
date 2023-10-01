const express = require("express")
const router = express.Router({ mergeParams: true })
const Product = require("../models/Product")

router.get("/", async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).send(products)
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    })
  }
})

module.exports = router
