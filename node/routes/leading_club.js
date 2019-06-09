const leadingclub = require("../model/loan_details")
module.exports = (router) => {

    router.get("/get_loan_details", (req, res) => {
        leadingclub.find({}, (err, data) => {
            if (err) {
                res.json({ success: false, message: err })
            }
            if (data.length > 0) {
                res.json(data)
            } else {
                res.json("No data found")
            }
        }).sort({verification_status:-1})
    })
    router.get("/get_top_cust", (req, res) => {
        leadingclub.find({}, (err, data) => {
            if (err) {
                res.json({ success: false, message: err })
            }
            if (data.length > 0) {
                res.json(data)
            } else {
                res.json("No data found")
            }
        }).sort({int_rate:-1}).limit(10)
    })
    return router
}