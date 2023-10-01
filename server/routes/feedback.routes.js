const express = require("express")
const router = express.Router({ mergeParams: true })
const Feedback = require("../models/Feedback")

router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find()
    res.status(200).send(feedbacks)
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    })
  }
})

module.exports = router
