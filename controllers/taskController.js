const Task = require('../models/taskModel');
const { createTaskSchema } = require('../middlewares/validator');

exports.getTasks = async (req, res) => {
	const { page } = req.query;
	const postsPerPage = 10;

	try {
		let pageNum = 0;
		if (page <= 1) {
			pageNum = 0;
		} else {
			pageNum = page - 1;
		}
		const result = await Task.find()
			.sort({ createdAt: -1 })
			.skip(pageNum * postsPerPage)
			.limit(postsPerPage)
			.populate({
				path: 'userId',
				select: 'email',
			});
		res.status(200).json({ success: true, message: 'tasks', data: result });
	} catch (error) {
		console.log(error);
	}
};

exports.singleTask = async (req, res) => {
	const { _id } = req.query;

	try {
		const existingTask = await Task.findOne({ _id }).populate({
			path: 'userId',
			select: 'email',
		});
		if (!existingTask) {
			return res
				.status(404)
				.json({ success: false, message: 'Task unavailable' });
		}
		res
			.status(200)
			.json({ success: true, message: 'single task', data: existingTask });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false,message: 'Internal server error' });
	}
};

exports.createTask = async (req, res) => {
	const { title, description , userId } = req.body;
	try {
		const result = await Task.create({
			title,
			description,
			userId,
		});
		res.status(201).json({ success: true, message: 'created', data: result });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false,message: 'Internal server error' });
	}
};

exports.updateTask = async (req, res) => {
	const { _id } = req.query;
	const { title, description ,userId } = req.body;

	try {
	
		const existingTask = await Task.findOne({ _id });
		if (!existingTask) {
			return res
				.status(404)
				.json({ success: false, message: 'Task unavailable' });
		}
		if (existingTask.userId.toString() !== userId) {
			return res.status(403).json({ success: false, message: 'Unauthorized' });
		}
		existingTask.title = title;
		existingTask.description = description;

		const result = await existingTask.save();
		res.status(200).json({ success: true, message: 'Updated', data: result });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false,message: 'Internal server error' });
	}
};

exports.deleteTask = async (req, res) => {
	const { _id } = req.query;

	const { userId } = req.body;
	try {
		const existingTask = await Task.findOne({ _id });
		if (!existingTask) {
			return res
				.status(404)
				.json({ success: false, message: 'Task already unavailable' });
		}
		if (existingTask.userId.toString() !== userId) {
			return res.status(403).json({ success: false, message: 'Unauthorized' });
		}

		await Task.deleteOne({ _id });
		res.status(200).json({ success: true, message: 'deleted' });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false,message: 'Internal server error' });
	}
};