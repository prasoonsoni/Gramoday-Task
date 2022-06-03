const express = require('express')
const router = express.Router()
const ReportDetails = require('../models/ReportDetails')
const uuid = require('uuid')

router.post('/', async (req, res) => {
    try {
        const { userID, marketID, marketName, cmdtyID, marketType, cmdtyName, priceUnit, convFctr, price } = req.body.reportDetails
        const alreadyPresent = await ReportDetails.findOne({ marketID, cmdtyID })

        if (!alreadyPresent) {
            const details = await ReportDetails.create({
                userID: userID,
                marketID: marketID,
                marketName: marketName,
                marketType: marketType,
                cmdtyID: cmdtyID,
                cmdtyName: cmdtyName,
                priceUnit: priceUnit,
                convFctr: convFctr,
                price: price,
                reportID: uuid.v1()
            })
            return res.json({ status: "success", reportID: details.reportID })
        }

        const details = await ReportDetails.create({
            userID: userID,
            marketID: marketID,
            marketName: marketName,
            marketType: marketType,
            cmdtyID: cmdtyID,
            cmdtyName: cmdtyName,
            priceUnit: priceUnit,
            convFctr: convFctr,
            price: price,
            reportID: alreadyPresent.reportID
        })
        res.json({ status: "success", reportID: details.reportID })
    } catch (error) {
        console.log(error.message)
        res.json({ status: "error", message: "Some internal server error occured." })
    }
})

module.exports = router