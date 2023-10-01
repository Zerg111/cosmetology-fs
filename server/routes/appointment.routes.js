const express = require("express")
const router = express.Router({ mergeParams: true })
const Appointment = require("../models/Appointment")

router.post("/", async (req, res) => {
  try {
    const { date, time } = req.body

    const existingAppointment = await Appointment.findOne({ date, time })

    if (existingAppointment) {
      return res.status(400).json({
        error: {
          message: "APPOINTMENT_EXISTS",
          code: 400,
        },
      })
    }

    const newAppointment = await Appointment.create({
      ...req.body,
    })

    res.status(201).send({ newAppointment })
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    })
  }
})

router.get("/", async (req, res) => {
  try {
    const appointment = await Appointment.find()
    res.status(200).send(appointment)
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    })
  }
})

module.exports = router
