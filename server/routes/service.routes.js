const express = require("express")
const router = express.Router({ mergeParams: true })
const Service = require("../models/Service")

router.get("/", async (req, res) => {
  try {
    const services = await Service.find()
    res.status(200).send(services)
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    })
  }
})

module.exports = router
