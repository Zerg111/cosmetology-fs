const { Schema, model } = require("mongoose")

const schema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = model("Feedback", schema)
