const express = require('express');
const router = express.Router();

const { getHospitals, getHospital, createHospital, updateHospital, deleteHospital } = require('../controllers/hospitals');
const { protect } = require('../middleware/auth');


router.route('/').get(getHospitals).post(protect,createHospital);
router.route('/:id').get(getHospital).put(protect, updateHospital).delete(protect, deleteHospital);


module.exports = router;