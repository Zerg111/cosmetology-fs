const Service = require("../models/Service")
const Product = require("../models/Product")
const Feedback = require("../models/Feedback")
const serviceMock = require("../mock/services.json")
const productMock = require("../mock/products.json")
const feedbackMock = require("../mock/feedback.json")

module.exports = async () => {
  const services = await Service.find()
  const products = await Product.find()
  const feedback = await Feedback.find()
  if (services.length !== serviceMock.length) {
    await createInitialEntity(Service, serviceMock)
  }
  if (products.length !== productMock.length) {
    await createInitialEntity(Product, productMock)
  }
  if (feedback.length !== feedbackMock.length) {
    await createInitialEntity(Feedback, feedbackMock)
  }
}

async function createInitialEntity(Model, data) {
  await Model.collection.drop()
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id
        const newItem = new Model(item)
        await newItem.save()
        return newItem
      } catch (e) {
        return e
      }
    })
  )
}
