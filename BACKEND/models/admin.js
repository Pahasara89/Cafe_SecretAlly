const mongoose = require("mongoose");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const adminSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    address: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true }

});


const Admin = mongoose.model("admin", adminSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		mobileNumber: Joi.string().required().label("Mobile Number"),
		email: Joi.string().email().required().label("Email"),
		address: Joi.string().required().label("Address"),
		password: passwordComplexity().required().label("Password")
	});
	return schema.validate(data);
};

module.exports = { Admin, validate };