const mongoose = require('mongoose')

const stringReq = {type: String, required: true}
const numberReq = {type: Number, required: true}
const booleanReq = {type: Boolean, required: true}

const patientSchema = mongoose.Schema({
	fullName: stringReq,
	id: stringReq,
	birthYear: numberReq,
	gender: stringReq,
	country: stringReq,
	city: stringReq,
	district: stringReq,
	ward: stringReq,
	address: stringReq,
	phoneNumber: stringReq,
	email: stringReq,
	cough: booleanReq,
	fever: numberReq,
	headache: booleanReq,
	soreThroat: booleanReq,
	stuffNose: booleanReq,
	difficultyBreathing: booleanReq,
	chestache: booleanReq,
	muscleache: booleanReq,
	ageusia: booleanReq,
	anosmia: booleanReq,
	nausea: booleanReq,
	stomachache: booleanReq,
	time : { type : Date, default: Date.now }
})

module.exports = mongoose.model('patient', patientSchema)
