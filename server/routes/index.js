const express = require("express")
const router = express.Router({ mergeParams: true })

router.use("/appointment", require("./appointment.routes"))
router.use("/order", require("./order.routes"))
router.use("/service", require("./service.routes"))
router.use("/product", require("./product.routes"))
router.use("/feedback", require("./feedback.routes"))

module.exports = router
