const express = require('express')
const router = express.Router()
const ReportDetails = require('../models/ReportDetails')

router.get('/', async (req, res) => {
    try {
        const reportID = req.query.reportID
        const reports = await ReportDetails.find({ reportID })

        if (reports.length === 0) {
            return res.json({ status: "error", message: "No reports found." })
        }

        const aggregatedReport = {
            _id: reportID,
            cmdtyName: reports[0].cmdtyName,
            cmdtyID: reports[0].cmdtyID,
            marketID: reports[0].marketID,
            marketName: reports[0].marketName,
            users: [],
            timestamp: Date.now(),
            priceUnit: "Kg",
            price: 0
        }

        for (let i = 0; i < reports.length; i++) {
            aggregatedReport.users.push(reports[i].userID)
            aggregatedReport.price = aggregatedReport.price + (reports[i].price / reports[i].convFctr)
        }

        aggregatedReport.price = aggregatedReport.price / reports.length

        res.json(aggregatedReport)
    } catch (error) {
        console.log(error.message)
        res.json({ status: "error", message: "Some internal server error occured." })
    }
})

module.exports = router