const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, 'title is required!'],
			trim: true,
		},
		description: {
			type: String,
			required: [true, 'description is required!'],
			trim: true,
		},
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: false,
		},
	},
	{ timestamps: true }
);

const Task = mongoose.model('Task', taskSchema);
module.exports = Task