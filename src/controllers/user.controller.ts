import User, { IUser } from '../models/User';
import { Document } from 'mongoose';
import { FastifyRequest, FastifyReply } from 'fastify';

export const getUserById = async (req: FastifyRequest, reply: FastifyReply) => {
	try {
		const query = req.query as { id: string };
		const id = query.id
		const user = await User.findById(id);
		return user;
	} catch (err) {
		return reply.code(500).send({ error: err})
	}
};

// export const getUserByEmail = async (req: FastifyRequest, reply: FastifyReply) => {
// 	try {
// 		const params = req.params as { email: string };
// 		const email = params.email;
// 		const user = await User.findOne({ email });
// 		return user;
// 	} catch (err) {
// 		return reply.code(500).send({ error: err})
// 	}
// };

export const addUser = async (req: FastifyRequest, reply: FastifyReply) => {
	try {
		const user = new User(req.body);
		return await user.save();
	} catch (err) {
		return reply.code(500).send({ error: err})
	}
};

export const deleteUser = async (req: FastifyRequest, reply: FastifyReply) => {
	try {
		const params = req.params as { id: string };
		const id = params.id;
		const user = await User.findByIdAndRemove(id);
		return user;
	} catch (err) {
		return reply.code(500).send({ error: err})
	}
};

export const userIsExist = async (userId: String) => {
	try {
		if (await User.findById(userId)) {
			return true;
		} else {
			return false;
		}
	} catch (err) {
		return false;
	}
}

export const addTaskToUser = async (userId: String, taskId: String) => {
	try {
		await User.findByIdAndUpdate(userId, { $push: { tasks: taskId } });
		return true;
	} catch (err) {
		return false;
	}
}
