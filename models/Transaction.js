const mongoose = require("mongoose");
const { schema } = require("./Bill");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({

	date: {
		type: Date,
		Default: Date.now,
		required: true
	},
	transactionType: {
		type: String,
		Default: "withdrawal",
		required: true,
		enum: ["withdrawal", "deposit"]
	},
	amount: {
		type: Number,
		required: true
	},
	billId: Schema.ObjectId,
	accountId: {
		type: Schema.ObjectId,
		required: true
	},
	userId: {
		type: Schema.ObjectId,
		required: true
	}

});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
