//@desc Get all hospitals
//@route GET /api/v1/hospitals
//@access Public
exports.getHospitals = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Show all hospitals" });
}

//@desc Get single hospital
//@route GET /api/v1/hospitals/:id
//@access Public
exports.getHospital = (req, res, next) => {  
    res.status(200).json({ success: true, msg: `Showing hospital ${req.params.id}` });
}

//@desc Create new hospital
//@route POST /api/v1/hospitals
//@access Private
exports.createHospital = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Created new hospital" });
}

//@desc Update hospital
//@route PUT /api/v1/hospitals/:id
//@access Private
exports.updateHospital = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Updated hospital ${req.params.id}` });
}

//@desc Delete hospital
//@route DELETE /api/v1/hospitals/:id
//@access Private
exports.deleteHospital = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Deleted hospital ${req.params.id}` });
}