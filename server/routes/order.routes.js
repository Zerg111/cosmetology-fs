const express = require("express")
const router = express.Router({ mergeParams: true })
const Order = require("../models/Order")
const Product = require("../models/Product")

router.post("/", async (req, res) => {
  try {
    const { product } = req.body

    const existingProduct = await Product.findOne({ _id: product })

    if (!existingProduct.quantity) {
      return res.status(400).json({
        error: {
          message: "PRODUCT_NOT_EXISTS",
          code: 400,
        },
      })
    }

    const newOrder = await Order.create({
      ...req.body,
    })

    res.status(201).send({ newOrder })
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    })
  }
})

module.exports = router
