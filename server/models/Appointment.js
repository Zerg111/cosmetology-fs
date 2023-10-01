const { Schema, model } = require("mongoose")

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
    },
  },
  {
    timestamps: true,
  }
)

module.exports = model("Appointment", schema)
