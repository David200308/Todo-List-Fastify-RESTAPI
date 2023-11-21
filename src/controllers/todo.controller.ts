import Task, { ITask } from '../models/Task';
import { Document } from 'mongoose';
import { FastifyRequest, FastifyReply } from 'fastify';
import { userIsExist, addTaskToUser } from './user.controller';

export const getTask = async (req: FastifyRequest, reply: FastifyReply) => {
	try {
		const params = req.params as { id: string };
		const id = params.id
		const task = await Task.findById(id);
		return task;
	} catch (err) {
		return reply.code(500).send({ error: err})
	}
};

export const addTask = async (req: FastifyRequest, reply: FastifyReply) => {
	try {
		const task = new Task(req.body);
		if (!await userIsExist(task.userId)) {
			return reply.code(404).send({ error: 'User not found' });
		}

		await task.save();

		if (await addTaskToUser(task.userId, task.id)) {
			return task;
		} else {
			return reply.code(500).send({ error: 'Error adding task to user' });
		}
	} catch (err) {
		return reply.code(500).send({ error: err})
	}
};

export const updateTaskTitle = async (req: FastifyRequest, reply: FastifyReply) => {
	try {
		const params = req.params as { id: string };
		const id = params.id;
		const title = req.body as String;
		const { ...updateData } = title;
		
		const update = await Task.findByIdAndUpdate(id, updateData, { new: true });

		if (!update) {
			return reply.status(404).send({ error: 'Task not found' });
		}

		return update;
	} catch (err) {
		return reply.code(500).send({ error: err})
	}
};

export const updateTaskContent = async (req: FastifyRequest, reply: FastifyReply) => {
	try {
		const params = req.params as { id: string };
		const id = params.id;
		const content = req.body as String;
		const { ...updateData } = content;
		
		const update = await Task.findByIdAndUpdate(id, updateData, { new: true });

		if (!update) {
			return reply.status(404).send({ error: 'Task not found' });
		}

		return update;
	} catch (err) {
		return reply.code(500).send({ error: err})
	}
};

export const updateTaskDeadline = async (req: FastifyRequest, reply: FastifyReply) => {
	try {
		const params = req.params as { id: string };
		const id = params.id;
		const deadline = req.body as Date;
		const { ...updateData } = deadline;
		
		const update = await Task.findByIdAndUpdate(id, updateData, { new: true });

		if (!update) {
			return reply.status(404).send({ error: 'Task not found' });
		}

		return update;
	} catch (err) {
		return reply.code(500).send({ error: err})
	}
};

export const updateTaskIsCompleted = async (req: FastifyRequest, reply: FastifyReply) => {
	try {
		const params = req.params as { id: string };
		const id = params.id;
		const isCompleted = req.body as Boolean;
		const { ...updateData } = isCompleted;
		
		const update = await Task.findByIdAndUpdate(id, updateData, { new: true });

		if (!update) {
			return reply.status(404).send({ error: 'Task not found' });
		}

		return update;
	} catch (err) {
		return reply.code(500).send({ error: err})
	}
};

export const deleteTask = async (req: FastifyRequest, reply: FastifyReply) => {
	try {
		const params = req.params as { id: string };
		const id = params.id;
		const task = await Task.findByIdAndRemove(id);
		return task;
	} catch (err) {
		return reply.code(500).send({ error: err})
	}
};
