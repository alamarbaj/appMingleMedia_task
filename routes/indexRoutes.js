const express = require('express')
const router = express.Router()
const {getEmployeeLeads} = require('../controllers/indexController')

router.post('/getEmployeeLeads',getEmployeeLeads)

module.exports = router